import dynamic from "next/dynamic";
import {
  HeroSection,
  SideNav,
  SiteNav,
} from "@/components/portfolio";

const TechSection = dynamic(() =>
  import("@/components/portfolio/TechSection").then((m) => m.TechSection),
);
const TimelineSection = dynamic(() =>
  import("@/components/portfolio/TimelineSection").then((m) => m.TimelineSection),
);
const ProjectsSection = dynamic(() =>
  import("@/components/portfolio/ProjectsSection").then((m) => m.ProjectsSection),
);
const CvSection = dynamic(() =>
  import("@/components/portfolio/CvSection").then((m) => m.CvSection),
);
const SiteFooter = dynamic(() =>
  import("@/components/portfolio/SiteFooter").then((m) => m.SiteFooter),
);
const ContactFab = dynamic(() =>
  import("@/components/portfolio/ContactFab").then((m) => m.ContactFab),
);

export default function Home() {
  return (
    <>
      <SiteNav />
      <SideNav />
      <main className="min-w-0 max-w-[100vw] overflow-x-hidden lg:pl-20">
        <HeroSection />
        <TechSection />
        <TimelineSection />
        <ProjectsSection />
        <CvSection />
        <SiteFooter />
      </main>
      <ContactFab />
    </>
  );
}
