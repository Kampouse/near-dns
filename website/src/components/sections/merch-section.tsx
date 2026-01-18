import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="pricing" class="w-full py-16 lg:py-24 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-black/95 via-black/97 to-black/95"></div>
      <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div class="border border-green-400 p-8 lg:p-12">
          <div class="text-center mb-12">
            <h2 class="text-green-400 text-3xl lg:text-4xl font-bold uppercase font-mono tracking-wider mb-4">Pricing</h2>
            <p class="text-white text-lg font-mono leading-relaxed max-w-3xl mx-auto">
              Simple and transparent pricing. One-time payment for lifetime ownership of your domain.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="border border-green-400/30 p-6 text-center">
              <div class="mb-6">
                <div class="text-green-400 font-mono text-3xl font-bold">$5</div>
                <div class="text-gray-400 font-mono text-sm">ONE-TIME FEE</div>
              </div>
              <div class="mb-6">
                <h3 class="text-white text-xl font-bold font-mono mb-2">Standard</h3>
                <p class="text-gray-400 font-mono text-sm">Perfect for personal use</p>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">5+ character domain</span>
                </li>
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">Lifetime ownership</span>
                </li>
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">Basic profile page</span>
                </li>
              </ul>
              <a href="#register" class="w-full block relative group overflow-hidden bg-transparent border-2 border-green-400/50 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400/10 before:to-green-400/10 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-green-400/30 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 text-green-400 hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                <span class="relative z-10 font-mono">Register</span>
              </a>
            </div>

            <div class="border-2 border-green-400 p-6 text-center relative">
              <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-400 text-black text-xs font-bold px-3 py-1 font-mono uppercase tracking-wider">
                Popular
              </div>
              <div class="mb-6">
                <div class="text-green-400 font-mono text-3xl font-bold">$10</div>
                <div class="text-gray-400 font-mono text-sm">ONE-TIME FEE</div>
              </div>
              <div class="mb-6">
                <h3 class="text-white text-xl font-bold font-mono mb-2">Premium</h3>
                <p class="text-gray-400 font-mono text-sm">For businesses and projects</p>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">3-4 character domain</span>
                </li>
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">Lifetime ownership</span>
                </li>
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">Advanced profile page</span>
                </li>
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">Subdomain support</span>
                </li>
              </ul>
              <a href="#register" class="w-full block relative group overflow-hidden bg-green-400 text-black px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 hover:bg-green-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                <span class="relative z-10 font-mono">Register</span>
              </a>
            </div>

            <div class="border border-green-400/30 p-6 text-center">
              <div class="mb-6">
                <div class="text-green-400 font-mono text-3xl font-bold">$50+</div>
                <div class="text-gray-400 font-mono text-sm">ONE-TIME FEE</div>
              </div>
              <div class="mb-6">
                <h3 class="text-white text-xl font-bold font-mono mb-2">Ultra Premium</h3>
                <p class="text-gray-400 font-mono text-sm">Short and memorable names</p>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">1-2 character domain</span>
                </li>
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">Lifetime ownership</span>
                </li>
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">Custom profile page</span>
                </li>
                <li class="flex items-center justify-start gap-2">
                  <span class="text-green-400">✓</span>
                  <span class="text-white font-mono text-sm">Priority support</span>
                </li>
              </ul>
              <a href="#register" class="w-full block relative group overflow-hidden bg-transparent border-2 border-green-400/50 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400/10 before:to-green-400/10 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-green-400/30 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 text-green-400 hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                <span class="relative z-10 font-mono">Contact Us</span>
              </a>
            </div>
          </div>

          <div class="mt-12 text-center">
            <p class="text-gray-400 font-mono text-sm">
              All domains include lifetime ownership with no renewal fees. Prices in NEAR tokens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
