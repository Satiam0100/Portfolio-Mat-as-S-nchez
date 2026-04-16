import {
  ContactFab,
  CvSection,
  HeroSection,
  ProjectsSection,
  SideNav,
  SiteFooter,
  SiteNav,
  TechSection,
  TimelineSection,
} from "@/components/portfolio";

export default function Home() {
  return (
    <>
      <SiteNav />
      <SideNav />
      <main className="lg:pl-20">
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
