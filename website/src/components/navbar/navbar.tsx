import { component$, $, useSignal } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const isMenuOpen = useSignal(false);
  const location = useLocation();

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  const scrollToSection = $(() => {
    isMenuOpen.value = false;
  });

  return (
    <header class="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] w-full max-w-5xl px-4 transition-transform duration-300 -translate-y-full group hover:translate-y-0">
      <div class="relative group bg-black/90 backdrop-blur-xl border-2 border-green-400/50 px-6 py-3 transition-all duration-300 hover:border-green-400/80 hover:bg-black/95">
        <div class="relative z-10 flex items-center justify-between">
          <div class="flex items-center">
            <a href="/" class="cursor-pointer flex items-center gap-2">
              <span class="text-green-400 text-xl font-bold tracking-wider">NEAR DNS</span>
            </a>
          </div>

          <nav class="hidden lg:flex items-center gap-1 cursor-pointer">
            <a href="#features" class="text-green-400 text-xs font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono whitespace-nowrap" onClick$={scrollToSection}>Features</a>
            <a href="#how-it-works" class="text-green-400 text-xs font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono whitespace-nowrap" onClick$={scrollToSection}>How It Works</a>
            <a href="#domains" class="text-green-400 text-xs font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono whitespace-nowrap" onClick$={scrollToSection}>Domains</a>
            <a href="#pricing" class="text-green-400 text-xs font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono whitespace-nowrap" onClick$={scrollToSection}>Pricing</a>
            <a href="#faq" class="text-green-400 text-xs font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono whitespace-nowrap" onClick$={scrollToSection}>FAQ</a>
          </nav>

          <div class="hidden md:flex items-center">
            <a href="#register" class="relative group overflow-hidden bg-transparent border-2 border-green-400/50 px-3 py-2 font-bold text-sm uppercase tracking-wider transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400/20 before:to-green-400/20 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-green-400/50 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 text-green-400 font-mono min-w-[180px] text-center">
              <span class="relative z-10 flex items-center gap-2 justify-center">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Register Domain</span>
              </span>
            </a>
          </div>

          <button
            class="md:hidden text-sm font-bold uppercase tracking-wider text-green-400 hover:text-green-300 transition-colors duration-200 px-3 py-2 flex items-center gap-2 z-50 relative font-mono"
            aria-label="Toggle menu"
            onClick$={toggleMenu}
          >
            <span>Menu</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class={`transition-transform duration-300 ${isMenuOpen.value ? 'rotate-180' : ''}`}>
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div class={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen.value ? 'max-h-60 py-4' : 'max-h-0'}`}>
          <nav class="flex flex-col gap-2 cursor-pointer">
            <a href="#features" class="text-green-400 text-sm font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono" onClick$={scrollToSection}>Features</a>
            <a href="#how-it-works" class="text-green-400 text-sm font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono" onClick$={scrollToSection}>How It Works</a>
            <a href="#domains" class="text-green-400 text-sm font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono" onClick$={scrollToSection}>Domains</a>
            <a href="#pricing" class="text-green-400 text-sm font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono" onClick$={scrollToSection}>Pricing</a>
            <a href="#faq" class="text-green-400 text-sm font-bold uppercase tracking-wider hover:text-green-300 transition-colors duration-300 px-3 py-2 font-mono" onClick$={scrollToSection}>FAQ</a>
          </nav>
        </div>
      </div>
    </header>
  );
});
