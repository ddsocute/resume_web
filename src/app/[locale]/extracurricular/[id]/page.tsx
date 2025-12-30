
import { notFound } from "next/navigation";
import { detailedExperiences as detailedExperiencesZh } from "@/data/detailedExperiencesZh";
import { detailedExperiencesEn } from "@/data/detailedExperiencesEn";
import DetailedExperiencePage from "@/components/sections/DetailedExperience";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{
        locale: string;
        id: string;
    }>;
}

// Generate static params 
export async function generateStaticParams() {
    // Only generate for known keys in detailedExperiences
    const ids = Object.keys(detailedExperiencesZh);
    const locales = ['en', 'zh'];

    return locales.flatMap(locale =>
        ids.map(id => ({
            locale,
            id
        }))
    );
}

const getDetailedExperience = (id: string, locale: string) => {
    const data = locale === 'en' ? detailedExperiencesEn : detailedExperiencesZh;
    return data[id];
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id, locale } = await params;
    const experience = getDetailedExperience(id, locale);

    if (!experience) {
        return {
            title: "Activity Not Found"
        };
    }

    return {
        title: `${experience.role} @ ${experience.company} | Lin Jing-Di Portfolio`,
        description: experience.overview.substring(0, 160),
    };
}

export default async function ExtracurricularPage({ params }: PageProps) {
    const { id, locale } = await params;
    const experience = getDetailedExperience(id, locale);

    if (!experience) {
        // Fallback or 404. Since we established tmba is in detailedExperiences, this should work.
        notFound();
    }

    return <DetailedExperiencePage experience={experience} />;
}
