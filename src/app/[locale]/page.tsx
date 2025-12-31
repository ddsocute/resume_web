import Hero from "@/components/sections/Hero";
import ExperienceSection from "@/components/sections/Experience";
import ExtracurricularSection from "@/components/sections/Extracurricular";
import EducationSection from "@/components/sections/Education";
import AwardsSection from "@/components/sections/Awards";
import SkillsSection from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  return (
    <main className="min-h-screen">
      <Hero />
      <EducationSection />
      <ExperienceSection />
      <ExtracurricularSection />
      <AwardsSection />
      <SkillsSection />
      <Footer />
    </main>
  );
}
