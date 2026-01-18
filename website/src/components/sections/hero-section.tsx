import { component$, $, useSignal } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

export default component$(({ isFormOpen }: { isFormOpen: Signal<boolean> }) => {
  const showForm = $(() => {
    isFormOpen.value = true;
  });

  return (
    <section id="hero" class="w-full">
      <div class="relative flex justify-center items-center self-stretch px-4 md:px-8 lg:px-16 py-16 lg:py-24 min-h-screen overflow-hidden">
        <div class="absolute inset-0 z-20">
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden" style={{ backgroundImage: "url('/images/near-dns-bg-mobile.webp')", backgroundSize: "cover", backgroundPosition: "center top 85px", backgroundRepeat: "no-repeat", opacity: "0.8" }}></div>
          <div class="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block" style={{ backgroundImage: "url('/images/near-dns-bg.webp')", backgroundSize: "cover", backgroundPosition: "center top 85px", backgroundRepeat: "no-repeat", opacity: "0.8" }}></div>
          <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/60"></div>
          <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div class="absolute inset-0 bg-black/40 z-30"></div>
        <div class="relative z-40 max-w-7xl mx-auto w-full">
          <div class="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div class="flex flex-col justify-center items-start gap-8">
              <div class="flex flex-col items-start gap-6">
                <h1 class="text-white text-5xl xl:text-8xl italic font-bold leading-tight tracking-tight min-h-[1.2em] relative drop-shadow-2xl">
                  <span class="relative">
                    <span class="animate-pulse text-green-400">|</span>
                  </span>
                  <span class="text-green-400">NEAR DNS</span>
                </h1>
                <h2 class="text-white text-lg xl:text-2xl font-bold leading-relaxed opacity-90 drop-shadow-lg">
                  Decentralized Domain Names on NEAR Protocol
                </h2>
              </div>
              <div class="flex items-center">
                <button onClick$={showForm} class="relative group overflow-hidden bg-transparent border-2 font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400/20 before:to-green-400/20 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-green-400/50 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 border-green-400 text-green-400 hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] px-8 py-4 text-lg">
                  <span class="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">Register Domain</span>
                </button>
              </div>
            </div>
            <div class="flex justify-center lg:justify-end">
              <div class="relative group overflow-hidden bg-black/10 border-2 border-green-400/60 p-6 backdrop-blur-sm hover:border-green-400 transition-all duration-300 max-w-md">
                <h3 class="text-green-400 text-xl lg:text-2xl font-bold leading-tight tracking-wide uppercase font-mono text-center mb-4">FROM WEB2 TO WEB3</h3>
                <div class="relative mb-4 flex justify-center">
                  <img src="/images/near-dns-logo.webp" alt="NEAR DNS" class="w-32 lg:w-36 h-auto" />
                </div>
                <div class="text-center mb-4">
                  <h4 class="text-green-300 text-lg lg:text-xl font-bold leading-tight tracking-wide uppercase font-mono">Own Your Digital Identity</h4>
                </div>
                <div class="flex justify-center">
                  <button class="relative group overflow-hidden bg-transparent border-2 border-green-400/50 px-4 py-2 font-bold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400/20 before:to-green-400/20 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-green-400/30 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 text-green-400 hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <span class="relative z-10 whitespace-nowrap">How does it work?</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="lg:hidden flex flex-col justify-center items-center gap-8 text-center">
            <div class="flex flex-col items-center gap-6">
              <h1 class="text-white text-5xl italic font-bold leading-tight tracking-tight min-h-[1.2em] relative drop-shadow-2xl">
                <span class="relative">
                  <span class="animate-pulse text-green-400">|</span>
                </span>
                <span class="text-green-400">NEAR DNS</span>
              </h1>
              <h2 class="max-w-2xl text-white text-lg font-bold leading-relaxed opacity-90 drop-shadow-lg">
                Decentralized Domain Names on NEAR Protocol
              </h2>
            </div>
            <div class="flex justify-center items-center">
              <button onClick$={showForm} class="relative group overflow-hidden bg-transparent border-2 font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400/20 before:to-green-400/20 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-green-400/50 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 border-green-400 text-green-400 hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] px-8 py-4 text-lg">
                <span class="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">Register Domain</span>
              </button>
            </div>
            <div class="flex justify-center">
              <div class="relative group overflow-hidden bg-black/10 border-2 border-green-400/60 p-6 backdrop-blur-sm hover:border-green-400 transition-all duration-300 max-w-sm mx-auto">
                <h3 class="text-green-400 text-xl lg:text-2xl font-bold leading-tight tracking-wide uppercase font-mono text-center mb-4">FROM WEB2 TO WEB3</h3>
                <div class="relative mb-4 flex justify-center">
                  <img src="/images/near-dns-logo.webp" alt="NEAR DNS" class="w-32 lg:w-36 h-auto" />
                </div>
                <div class="text-center mb-4">
                  <h4 class="text-green-300 text-lg lg:text-xl font-bold leading-tight tracking-wide uppercase font-mono">Own Your Digital Identity</h4>
                </div>
                <div class="flex justify-center">
                  <button class="relative group overflow-hidden bg-transparent border-2 border-green-400/50 px-4 py-2 font-bold text-xs uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400/20 before:to-green-400/20 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-green-400/30 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 text-green-400 hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <span class="relative z-10 whitespace-nowrap">How does it work?</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
