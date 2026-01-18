import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import HeroSection from "~/components/sections/hero-section";
import StatsSection from "~/components/sections/stats-section";
import ActivateSection from "~/components/sections/activate-section";
import MapSection from "~/components/sections/map-section";
import MerchSection from "~/components/sections/merch-section";
import ProjectSection from "~/components/sections/project-section";
import JoinSection from "~/components/sections/join-section";

export default component$(() => {
  const isFormOpen = useSignal(false);

  return (
    <div class="min-h-screen bg-black font-mono text-white">
      <Navbar />
      <main>
        <HeroSection isFormOpen={isFormOpen} />
        <StatsSection />
        <ActivateSection />
        <MapSection />
        <MerchSection />
        <ProjectSection isFormOpen={isFormOpen} />
        <JoinSection isFormOpen={isFormOpen} />
      </main>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "NEAR LEGION",
  meta: [
    {
      name: "description",
      content: "Join the NEAR Legion - Do Not Fear ASI. Prepare for NEARvana.",
    },
    {
      property: "og:title",
      content: "NEAR LEGION",
    },
    {
      property: "og:description",
      content: "Join the NEAR Legion - Do Not Fear ASI. Prepare for NEARvana.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:site",
      content: "@nearlegion",
    },
  ],
};
