import { component$, useSignal } from "@builder.io/qwik";

export default component$(({ isFormOpen }: { isFormOpen: { value: boolean } }) => {
  const openForm = () => {
    isFormOpen.value = true;
  };

  return (
    <section id="faq" class="w-full py-16 lg:py-24 relative">
      <div class="absolute inset-0 bg-gradient-to-b from-black/95 via-black/97 to-black/95"></div>
      <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div class="flex flex-col items-center gap-8 lg:gap-12">
          <div class="flex flex-col items-center gap-4">
            <h2 class="text-2xl md:text-4xl lg:text-6xl italic font-bold leading-tight tracking-tight text-white text-center animate-fade-in">Frequently Asked Questions</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div class="border border-green-400/30 p-6">
              <h3 class="text-green-400 text-lg font-bold font-mono mb-3">What is NEAR DNS?</h3>
              <p class="text-white font-mono text-sm leading-relaxed">
                NEAR DNS is a decentralized domain name service built on the NEAR Protocol. It allows you to register human-readable names for your NEAR accounts, dApps, and smart contracts.
              </p>
            </div>

            <div class="border border-green-400/30 p-6">
              <h3 class="text-green-400 text-lg font-bold font-mono mb-3">How is it different from traditional DNS?</h3>
              <p class="text-white font-mono text-sm leading-relaxed">
                Unlike traditional DNS, NEAR DNS is decentralized, censorship-resistant, and you have complete ownership of your domain. There are no renewal fees or centralized authorities that can take down your domain.
              </p>
            </div>

            <div class="border border-green-400/30 p-6">
              <h3 class="text-green-400 text-lg font-bold font-mono mb-3">What can I do with a NEAR domain?</h3>
              <p class="text-white font-mono text-sm leading-relaxed">
                You can use your NEAR domain for wallet addresses, dApp URLs, profile pages, NFT collections, and more. It serves as your decentralized identity across the NEAR ecosystem.
              </p>
            </div>

            <div class="border border-green-400/30 p-6">
              <h3 class="text-green-400 text-lg font-bold font-mono mb-3">Is there a renewal fee?</h3>
              <p class="text-white font-mono text-sm leading-relaxed">
                No! NEAR domains require a one-time registration fee and are yours forever. There are no renewal fees, making it more cost-effective than traditional domains.
              </p>
            </div>

            <div class="border border-green-400/30 p-6">
              <h3 class="text-green-400 text-lg font-bold font-mono mb-3">Can I sell my NEAR domain?</h3>
              <p class="text-white font-mono text-sm leading-relaxed">
                Yes! NEAR domains are NFTs that can be transferred or sold on secondary markets. The value of your domain may increase based on its length, memorability, and relevance.
              </p>
            </div>

            <div class="border border-green-400/30 p-6">
              <h3 class="text-green-400 text-lg font-bold font-mono mb-3">What wallets are supported?</h3>
              <p class="text-white font-mono text-sm leading-relaxed">
                NEAR DNS works with all NEAR-compatible wallets including NEAR Wallet, Meteor Wallet, and hardware wallet integrations. You just need a standard NEAR account to register a domain.
              </p>
            </div>
          </div>

          <div class="max-w-4xl mx-auto">
            <p class="text-lg md:text-xl lg:text-3xl font-normal leading-relaxed text-white text-center animate-fade-in">
              Ready to own your decentralized identity?
            </p>
          </div>

          <div class="flex justify-center items-center gap-4">
            <button
              onClick$={openForm}
              class="relative group overflow-hidden bg-transparent border-2 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-400/20 before:to-green-400/20 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-green-400/50 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 border-green-400 text-green-400 hover:text-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
            >
              <span class="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">Register Domain</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});
