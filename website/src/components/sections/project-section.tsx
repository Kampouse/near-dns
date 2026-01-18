import { component$, $, useSignal, useStore, type Signal } from "@builder.io/qwik";
import type { FormEvent } from "@builder.io/qwik";

interface FormData {
  domain: string;
  wallet: string;
  email: string;
  name: string;
}

export default component$(({ isFormOpen }: { isFormOpen: Signal<boolean> }) => {
  const isModalOpen = useSignal(false);
  const formData = useStore<FormData>({
    domain: "",
    wallet: "",
    email: "",
    name: ""
  });
  const isSubmitting = useSignal(false);
  const submitStatus = useSignal<"idle" | "success" | "error">("idle");
  const errorMessage = useSignal("");

  const openForm = $(() => {
    isModalOpen.value = true;
  });

  const closeForm = $(() => {
    isModalOpen.value = false;
    isFormOpen.value = false;
    submitStatus.value = "idle";
    errorMessage.value = "";
  });

  const handleSubmit = $(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isSubmitting.value = true;

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Validate domain format
      if (!formData.domain.match(/^[a-z0-9-]+$/i)) {
        errorMessage.value = "Domain can only contain letters, numbers, and hyphens";
        submitStatus.value = "error";
        isSubmitting.value = false;
        return;
      }

      // Validate NEAR wallet format
      if (!formData.wallet.endsWith(".near") || formData.wallet.length < 3) {
        errorMessage.value = "Please enter a valid NEAR wallet address";
        submitStatus.value = "error";
        isSubmitting.value = false;
        return;
      }

      // Validate email format
      if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errorMessage.value = "Please enter a valid email address";
        submitStatus.value = "error";
        isSubmitting.value = false;
        return;
      }

      // Simulate successful registration
      submitStatus.value = "success";
      isSubmitting.value = false;

      // Reset form after delay
      setTimeout(() => {
        closeForm();
        Object.assign(formData, { domain: "", wallet: "", email: "", name: "" });
      }, 2000);

    } catch (error) {
      errorMessage.value = "An error occurred. Please try again.";
      submitStatus.value = "error";
      isSubmitting.value = false;
    }
  });

  return (
    <>
      <section id="register" class="w-full py-16 lg:py-24 relative">
        <div class="absolute inset-0 bg-gradient-to-b from-black/95 via-black/97 to-black/95"></div>
        <div class="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div class="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12">
            <div class="relative group overflow-hidden bg-transparent border-2 border-orange-400 px-8 py-12 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,193,7,0.3)]">
              <div class="relative z-10 flex flex-col items-center text-center space-y-6">
                <div class="w-16 h-16 flex items-center justify-center">
                  <div class="w-12 h-12 border-2 border-orange-400 rounded-full flex items-center justify-center">
                    <span class="text-orange-400 font-mono font-bold">DNS</span>
                  </div>
                </div>
                <h3 class="text-orange-400 text-xl md:text-2xl lg:text-3xl font-bold uppercase font-mono tracking-wider">
                  Ready to Register Your Domain?
                </h3>
                <p class="text-white text-sm md:text-base lg:text-lg font-mono leading-relaxed max-w-sm">
                  Get your decentralized identity on NEAR Protocol with just a few clicks.
                </p>
                <button
                  onClick$={openForm}
                  class="relative group overflow-hidden bg-transparent border-2 border-orange-400 px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-400/20 before:to-orange-400/20 before:translate-x-[-100%] before:transition-transform before:duration-300 hover:before:translate-x-0 after:absolute after:inset-0 after:border-2 after:border-orange-400/50 after:translate-x-1 after:translate-y-1 after:transition-transform after:duration-300 hover:after:translate-x-0 hover:after:translate-y-0 text-orange-400 hover:text-orange-400 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]"
                >
                  <span class="relative z-10 font-mono">Register Domain</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      <div
        class={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
          isModalOpen.value ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick$={closeForm}
      >
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

        <div
          class="relative max-w-md w-full bg-black border-2 border-green-400/50 rounded-lg overflow-hidden transform transition-transform duration-300 ${
            isModalOpen.value ? "scale-100" : "scale-95"
          }"
          onClick$={(e) => e.stopPropagation()}
        >
          <div class="p-6">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-green-400 text-2xl font-bold font-mono">Register Domain</h2>
              <button
                onClick$={closeForm}
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>

            {submitStatus.value === "idle" && (
              <form onSubmit$={handleSubmit} class="space-y-4">
                <div>
                  <label class="block text-green-400 font-mono text-sm mb-2">Desired Domain</label>
                  <div class="relative">
                    <input
                      type="text"
                      value={formData.domain}
                      onInput$={(e) => formData.domain = (e.target as HTMLInputElement).value}
                      placeholder="mydomain"
                      class="w-full bg-black border border-green-400/30 text-white font-mono px-3 py-2 rounded focus:outline-none focus:border-green-400"
                      required
                    />
                    <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 font-mono">.near</span>
                  </div>
                </div>

                <div>
                  <label class="block text-green-400 font-mono text-sm mb-2">NEAR Wallet</label>
                  <input
                    type="text"
                    value={formData.wallet}
                    onInput$={(e) => formData.wallet = (e.target as HTMLInputElement).value}
                    placeholder="yourwallet.near"
                    class="w-full bg-black border border-green-400/30 text-white font-mono px-3 py-2 rounded focus:outline-none focus:border-green-400"
                    required
                  />
                </div>

                <div>
                  <label class="block text-green-400 font-mono text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onInput$={(e) => formData.email = (e.target as HTMLInputElement).value}
                    placeholder="your@email.com"
                    class="w-full bg-black border border-green-400/30 text-white font-mono px-3 py-2 rounded focus:outline-none focus:border-green-400"
                    required
                  />
                </div>

                <div>
                  <label class="block text-green-400 font-mono text-sm mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onInput$={(e) => formData.name = (e.target as HTMLInputElement).value}
                    placeholder="John Doe"
                    class="w-full bg-black border border-green-400/30 text-white font-mono px-3 py-2 rounded focus:outline-none focus:border-green-400"
                    required
                  />
                </div>

                {errorMessage.value && (
                  <div class="text-red-400 text-sm font-mono">{errorMessage.value}</div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting.value}
                  class="w-full bg-green-400 text-black font-bold font-mono py-2 rounded transition-all duration-300 hover:bg-green-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting.value ? (
                    <>
                      <div class="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span>Registering...</span>
                    </>
                  ) : (
                    <>
                      <span>Register Domain</span>
                    </>
                  )}
                </button>
              </form>
            )}

            {submitStatus.value === "success" && (
              <div class="text-center py-8">
                <div class="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 class="text-green-400 text-xl font-bold font-mono mb-2">Registration Successful!</h3>
                <p class="text-white font-mono">Your domain has been registered successfully.</p>
              </div>
            )}

            {submitStatus.value === "error" && (
              <div class="text-center py-8">
                <div class="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <h3 class="text-red-400 text-xl font-bold font-mono mb-2">Registration Failed</h3>
                <p class="text-white font-mono">{errorMessage.value}</p>
                <button
                  onClick$={() => submitStatus.value = "idle"}
                  class="mt-4 text-green-400 font-mono hover:text-green-300"
                >
                  Try Again
                </button>
              </div>
            )}

            <div class="mt-6 pt-4 border-t border-green-400/20">
              <p class="text-gray-400 font-mono text-xs text-center">
                By registering, you agree to the NEAR DNS Terms of Service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
