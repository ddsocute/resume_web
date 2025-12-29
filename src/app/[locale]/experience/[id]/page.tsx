import { notFound } from "next/navigation";
import { detailedExperiences } from "@/data/detailedExperiences";
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
    const experienceIds = Object.keys(detailedExperiences);
    const locales = ['en', 'zh'];

    return locales.flatMap(locale =>
        experienceIds.map(id => ({
            locale,
            id
        }))
    );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
    const { id } = await params;
    const experience = detailedExperiences[id];

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
    const { id } = await params;
    const experience = detailedExperiences[id];

    if (!experience) {
        notFound();
    }

    return <DetailedExperiencePage experience={experience} />;
}
