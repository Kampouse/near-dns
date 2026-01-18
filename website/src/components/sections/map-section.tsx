import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="domains" class="w-full py-16 lg:py-24 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-black/95 via-black/97 to-black/95"></div>
      <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div class="border border-green-400 p-8 lg:p-12">
          <div class="lg:hidden flex flex-col items-center text-center space-y-8">
            <h2 class="text-green-400 text-3xl font-bold uppercase font-mono tracking-wider">Popular Domains</h2>
            <p class="text-white text-base font-mono leading-relaxed max-w-md">
              Discover trending domains and find the perfect name for your decentralized identity.
            </p>
            <div class="relative w-full max-w-sm">
              <div class="border-2 border-green-400 overflow-hidden">
                <img src="/images/near-dns-domains.webp" alt="NEAR DNS Popular Domains" class="w-full h-auto object-cover" />
              </div>
            </div>
            <div class="flex justify-center">
              <a href="#register" class="relative group overflow-hidden bg-transparent border-2 border-blue-400 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/10 before:to-blue-400/10 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-blue-400/30 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 text-blue-400 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <span class="relative z-10 font-mono">Browse All</span>
              </a>
            </div>
          </div>
          <div class="hidden lg:grid grid-cols-2 gap-16">
            <div class="flex flex-col justify-center space-y-6">
              <div class="space-y-4">
                <h2 class="text-green-400 text-xl md:text-2xl lg:text-3xl font-bold uppercase font-mono tracking-wider">Popular Domains</h2>
                <p class="text-white text-xl font-mono leading-relaxed">
                  Discover trending domains and find the perfect name for your decentralized identity.
                </p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="border border-green-400/30 p-4 text-center">
                  <div class="text-green-400 font-mono text-xl font-bold">near</div>
                  <div class="text-gray-400 font-mono text-sm">.near</div>
                </div>
                <div class="border border-green-400/30 p-4 text-center">
                  <div class="text-green-400 font-mono text-xl font-bold">crypto</div>
                  <div class="text-gray-400 font-mono text-sm">.near</div>
                </div>
                <div class="border border-green-400/30 p-4 text-center">
                  <div class="text-green-400 font-mono text-xl font-bold">defi</div>
                  <div class="text-gray-400 font-mono text-sm">.near</div>
                </div>
                <div class="border border-green-400/30 p-4 text-center">
                  <div class="text-green-400 font-mono text-xl font-bold">wallet</div>
                  <div class="text-gray-400 font-mono text-sm">.near</div>
                </div>
                <div class="border border-green-400/30 p-4 text-center">
                  <div class="text-green-400 font-mono text-xl font-bold">dao</div>
                  <div class="text-gray-400 font-mono text-sm">.near</div>
                </div>
                <div class="border border-green-400/30 p-4 text-center">
                  <div class="text-green-400 font-mono text-xl font-bold">nft</div>
                  <div class="text-gray-400 font-mono text-sm">.near</div>
                </div>
              </div>
              <div class="flex justify-start">
                <a href="#register" class="relative group overflow-hidden bg-transparent border-2 border-blue-400 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/10 before:to-blue-400/10 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-blue-400/30 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 text-blue-400 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <span class="relative z-10 font-mono">Browse All</span>
                </a>
              </div>
            </div>
            <div class="relative">
              <div class="border-2 border-green-400 overflow-hidden">
                <img src="/images/near-dns-domains.webp" alt="NEAR DNS Popular Domains" class="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
