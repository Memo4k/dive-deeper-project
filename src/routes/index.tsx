import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { WhyRebreather, DiveJourney, HowItWorks } from "@/components/site/SectionsOne";
import { MeetTheSystem, ThreeLenses } from "@/components/site/SectionsTwo";
import {
  Training,
  DeviceShowcase,
  NoTechnology,
  ProjectSection,
  FinalCall,
  SiteFooter,
} from "@/components/site/SectionsThree";

const title = "SCUBA DIVER REBREATHER — Go Beyond the Surface";
const description =
  "An immersive student innovation project exploring closed-circuit rebreather diving through web development, embedded systems and no-technology preparation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-abyss">
      <Nav />
      <main>
        <Hero />
        <WhyRebreather />
        <DiveJourney />
        <HowItWorks />
        <MeetTheSystem />
        <ThreeLenses />
        <Training />
        <DeviceShowcase />
        <NoTechnology />
        <ProjectSection />
        <FinalCall />
      </main>
      <SiteFooter />
    </div>
  );
}
