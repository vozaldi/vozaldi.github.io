import Hero from "../../components/Hero";
import StatsSection from "../../components/StatsSection";
import ProfileSection from "../../components/ProfileSection";
import ShowcaseSection from "../../components/ShowcaseSection";
import SkillsSection from "../../components/SkillsSection";
import ExperienceTimeline from "../../components/ExperienceTimeline";
import FeaturedProjects from "../../components/FeaturedProjects";
import CtaSection from "../../components/CtaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ProfileSection />
      {false && <ShowcaseSection />}
      <SkillsSection />
      <ExperienceTimeline />
      <FeaturedProjects />
      <CtaSection />
    </>
  );
}
