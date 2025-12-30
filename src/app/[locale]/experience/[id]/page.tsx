import { notFound } from "next/navigation";
import { detailedExperiences as detailedExperiencesZh } from "@/data/detailedExperiencesZh";
import { detailedExperiencesEn } from "@/data/detailedExperiencesEn";
import DetailedExperiencePage from "@/components/sections/DetailedExperience";
import type { Metadata } from "next";

interface ExperiencePageProps {
    params: Promise<{
        locale: string;
        id: string;
    }>;
}

// Generate static params for all experiences
export async function generateStaticParams() {
    const experienceIds = Object.keys(detailedExperiencesZh);
    const locales = ['en', 'zh'];

    return locales.flatMap(locale =>
        experienceIds.map(id => ({
            locale,
            id
        }))
    );
}

// Helper to get data based on locale
const getDetailedExperience = (id: string, locale: string) => {
    const data = locale === 'en' ? detailedExperiencesEn : detailedExperiencesZh;
    return data[id];
};

// Generate metadata for SEO
export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
    const { id, locale } = await params;
    const experience = getDetailedExperience(id, locale);

    if (!experience) {
        return {
            title: "Experience Not Found"
        };
    }

    return {
        title: `${experience.role} @ ${experience.company} | Lin Jing-Di Portfolio`,
        description: experience.overview.substring(0, 160),
        keywords: [experience.company, experience.role, ...experience.skills],
    };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
    const { id, locale } = await params;
    const experience = getDetailedExperience(id, locale);

    if (!experience) {
        notFound();
    }

    return <DetailedExperiencePage experience={experience} locale={locale} />;
}
// Force rebuild
