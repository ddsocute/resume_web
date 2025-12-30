
import { notFound } from "next/navigation";
import { detailedExperiences as detailedExperiencesZh } from "@/data/detailedExperiencesZh";
import { detailedExperiencesEn } from "@/data/detailedExperiencesEn";
import DetailedExperiencePage from "@/components/sections/DetailedExperience";
import type { Metadata } from "next";

interface EducationPageProps {
    params: Promise<{
        locale: string;
        id: string;
    }>;
}

// Generate static params for all experiences (including education ones)
export async function generateStaticParams() {
    // We only care about education IDs here, but since they are in the same map, 
    // we can filter or just allow all IDs. For strictness, let's allow any ID from the map.
    // Ideally we'd separate them, but currently they live in one object.
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
export async function generateMetadata({ params }: EducationPageProps): Promise<Metadata> {
    const { id, locale } = await params;
    const experience = getDetailedExperience(id, locale);

    if (!experience) {
        return {
            title: "Education Not Found"
        };
    }

    return {
        title: `${experience.role} @ ${experience.company} | Lin Jing-Di Portfolio`,
        description: experience.overview.substring(0, 160),
    };
}

export default async function EducationPage({ params }: EducationPageProps) {
    const { id, locale } = await params;
    const experience = getDetailedExperience(id, locale);

    if (!experience) {
        notFound();
    }

    return <DetailedExperiencePage experience={experience} locale={locale} />;
}
