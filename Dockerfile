# Multi-stage Dockerfile for NEAR DNS project
# Runs both DNS server and website (Qwik frontend)

# Build stage for Rust DNS server
FROM rust:1.86-slim-bookworm AS dns-builder

# Install build dependencies
RUN apt-get update && apt-get install -y \
    pkg-config \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy workspace files
COPY Cargo.toml Cargo.lock ./
COPY dns-server ./dns-server

# Build DNS server release binary
ENV OPENSSL_NO_VENDOR=1
RUN cargo build --release --package near-dns-server

# Build stage for Node.js/Qwik website
FROM node:20-slim AS web-builder

WORKDIR /app/website

# Copy package files
COPY website/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY website/ ./

# Build the website
RUN npm run build

# Runtime stage
FROM debian:bookworm-slim

# Install runtime dependencies for both services
RUN apt-get update && apt-get install -y \
    ca-certificates \
    libssl3 \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js for website
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Create non-root user
RUN useradd --system --create-home --shell /bin/bash neardns

WORKDIR /app

# Copy built binaries and files
COPY --from=dns-builder /app/target/release/near-dns-server /app/near-dns-server
COPY --from=web-builder /app/website/dist /app/website

# Set ownership
RUN chown -R neardns:neardns /app

USER neardns

# Create startup script
RUN cat > /app/start.sh << 'EOF'
#!/bin/bash
set -e

echo "Starting NEAR DNS services..."

# Start the DNS server in background
echo "Starting DNS server on port 53..."
/app/near-dns-server --bind "0.0.0.0:53" --rpc-url "https://rpc.mainnet.near.org" &

# Start the website in foreground
echo "Starting website on port 80..."
cd /app/website
npx serve -s . -l 80 &

# Wait for all background processes
wait

EOF

RUN chmod +x /app/start.sh

# Expose DNS ports (UDP and TCP) and HTTP port
EXPOSE 53/udp
EXPOSE 53/tcp
EXPOSE 80/tcp

ENV RUST_LOG=info

ENTRYPOINT ["/app/start.sh"]
