import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="w-full py-16 lg:py-20 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-black/95 via-black/97 to-black/95"></div>
      <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div class="hidden md:grid md:grid-cols-3 gap-0 relative">
          <div class="p-6 lg:p-8 text-center">
            <div class="space-y-2">
              <h3 class="text-green-400 text-2xl font-bold font-mono">25,000+</h3>
              <h3 class="text-white text-lg font-mono font-bold uppercase tracking-wider">Domains Registered</h3>
            </div>
          </div>
          <div class="absolute left-1/3 top-0 bottom-0 w-px bg-green-400/60 transform -translate-x-1/2"></div>
          <div class="p-6 lg:p-8 text-center">
            <div class="space-y-2">
              <h3 class="text-green-400 text-2xl font-bold font-mono">$0.00</h3>
              <h3 class="text-white text-lg font-mono font-bold uppercase tracking-wider">Gas Fees</h3>
            </div>
          </div>
          <div class="absolute left-2/3 top-0 bottom-0 w-px bg-green-400/60 transform -translate-x-1/2"></div>
          <div class="p-6 lg:p-8 text-center">
            <div class="space-y-2">
              <h3 class="text-green-400 text-2xl font-bold font-mono">100%</h3>
              <h3 class="text-white text-lg font-mono font-bold uppercase tracking-wider">Decentralized</h3>
            </div>
          </div>
        </div>
        <div class="md:hidden space-y-4">
          <div class="border border-green-400/30 p-4 text-center">
            <h3 class="text-green-400 text-xl font-bold font-mono">25,000+</h3>
            <h3 class="text-white text-sm font-mono font-bold uppercase tracking-wider">Domains Registered</h3>
          </div>
          <div class="border border-green-400/30 p-4 text-center">
            <h3 class="text-green-400 text-xl font-bold font-mono">$0.00</h3>
            <h3 class="text-white text-sm font-mono font-bold uppercase tracking-wider">Gas Fees</h3>
          </div>
          <div class="border border-green-400/30 p-4 text-center">
            <h3 class="text-green-400 text-xl font-bold font-mono">100%</h3>
            <h3 class="text-white text-sm font-mono font-bold uppercase tracking-wider">Decentralized</h3>
          </div>
        </div>
      </div>
    </section>
  );
});
