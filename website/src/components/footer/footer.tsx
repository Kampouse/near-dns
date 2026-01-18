import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="relative w-full overflow-hidden mt-8">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/50"></div>
      <div class="absolute inset-0 opacity-[0.01]">
        <div class="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(34, 197, 94, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.05) 1px, transparent 1px)", backgroundSize: "100px 100px" }}></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 lg:py-16">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div class="flex items-center gap-3 sm:gap-4">
            <div class="relative group">
              <div class="absolute inset-0 border-2 border-green-400/20 transform translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div class="relative bg-black/50 backdrop-blur-sm border-2 border-green-400/30 px-4 sm:px-6 py-2 sm:py-3">
                <span class="text-green-400 font-mono text-xl font-bold tracking-wider">NEAR DNS</span>
              </div>
            </div>
          </div>
          <div class="hidden sm:flex items-center gap-3 sm:gap-4">
            <a href="https://x.com/nearprotocol" target="_blank" rel="noopener noreferrer" class="relative group cursor-pointer">
              <div class="absolute inset-0 bg-green-400/10 transform scale-0 transition-transform duration-300 group-hover:scale-100"></div>
              <div class="relative p-2 sm:p-3 border border-green-400/30 transition-colors duration-300 group-hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="sm:w-5 sm:h-5">
                  <path d="M11.9047 8.46961L19.3513 0H17.5873L11.1187 7.35254L5.956 0H0L7.80867 11.1194L0 20H1.764L8.59067 12.2338L14.044 20H20M2.40067 1.30158H5.11067L17.586 18.7624H14.8753" fill="currentColor" class="text-green-400 group-hover:text-green-300 transition-colors duration-300"></path>
                </svg>
              </div>
            </a>
            <a href="https://docs.near.org" target="_blank" rel="noopener noreferrer" class="relative group cursor-pointer">
              <div class="absolute inset-0 bg-green-400/10 transform scale-0 transition-transform duration-300 group-hover:scale-100"></div>
              <div class="relative p-2 sm:p-3 border border-green-400/30 transition-colors duration-300 group-hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sm:w-5 sm:h-5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400 group-hover:text-green-300 transition-colors duration-300"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400 group-hover:text-green-300 transition-colors duration-300"></path>
                </svg>
              </div>
            </a>
            <a href="https://github.com/near" target="_blank" rel="noopener noreferrer" class="relative group cursor-pointer">
              <div class="absolute inset-0 bg-green-400/10 transform scale-0 transition-transform duration-300 group-hover:scale-100"></div>
              <div class="relative p-2 sm:p-3 border border-green-400/30 transition-colors duration-300 group-hover:border-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sm:w-5 sm:h-5">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" fill="currentColor" class="text-green-400 group-hover:text-green-300 transition-colors duration-300"></path>
                </svg>
              </div>
            </a>
          </div>
          <div class="hidden sm:flex items-center gap-3 sm:gap-4">
            <div class="relative group">
              <div class="absolute inset-0 border border-green-300/20 transform translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div class="relative bg-black/50 backdrop-blur-sm border border-green-300/30 px-4 sm:px-6 py-2 sm:py-3">
                <p class="text-green-300 font-mono text-xs sm:text-sm uppercase tracking-wider">© NEAR DNS, 2025</p>
              </div>
            </div>
            <button class="group relative overflow-hidden bg-black/90 backdrop-blur-sm border-2 border-green-400/50 p-2 sm:p-3 transition-all duration-300 hover:scale-110 hover:border-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]" aria-label="Scroll to top" onClick$={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div class="absolute inset-0 bg-gradient-to-r from-green-400/10 to-green-400/10 translate-x-[-100%] transition-transform duration-300 group-hover:translate-x-0"></div>
              <div class="absolute inset-0 border-2 border-green-400/20 translate-x-0.5 translate-y-0.5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0"></div>
              <div class="absolute top-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-l-2 border-t-2 border-green-300/60"></div>
              <div class="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-r-2 border-t-2 border-green-300/60"></div>
              <div class="absolute bottom-0 left-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-l-2 border-b-2 border-green-300/60"></div>
              <div class="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 border-r-2 border-b-2 border-green-300/60"></div>
              <div class="relative z-10 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="sm:w-6 sm:h-6">
                  <path d="M7 14L12 9L17 14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-green-400 group-hover:text-green-300 transition-colors duration-300"></path>
                  <path d="M12 9V21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" class="text-green-400/60 group-hover:text-green-300/60 transition-colors duration-300"></path>
                </svg>
              </div>
              <div class="absolute inset-0 border border-green-400/20 animate-pulse opacity-30"></div>
            </button>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent"></div>
    </footer>
  );
});
