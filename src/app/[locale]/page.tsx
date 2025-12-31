import Hero from "@/components/sections/Hero";
import ExperienceSection from "@/components/sections/Experience";
import ExtracurricularSection from "@/components/sections/Extracurricular";
import EducationSection from "@/components/sections/Education";
import AwardsSection from "@/components/sections/Awards";
import SkillsSection from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import SideNav from "@/components/ui/SideNav";

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Main Content Area (10 columns) */}
      <div className="lg:col-span-10">
        <main className="min-h-screen">
          <Hero />
          <EducationSection />
          <ExperienceSection />
          <ExtracurricularSection />
          <AwardsSection />
          <SkillsSection />
          <Footer />
        </main>
      </div>

      {/* Sticky Sidebar Navigation (2 columns) */}
      <aside className="hidden lg:block lg:col-span-2">
        <SideNav />
      </aside>
    </div>
  );
}
