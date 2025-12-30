
import { notFound } from "next/navigation";
import { detailedAwards as detailedAwardsZh } from "@/data/detailedAwardsZh";
import { detailedAwardsEn } from "@/data/detailedAwardsEn";
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
    const ids = Object.keys(detailedAwardsZh);
    const locales = ['en', 'zh'];

    return locales.flatMap(locale =>
        ids.map(id => ({
            locale,
            id
        }))
    );
}

const getDetailedAward = (id: string, locale: string) => {
    const data = locale === 'en' ? detailedAwardsEn : detailedAwardsZh;
    return data[id];
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id, locale } = await params;
    const award = getDetailedAward(id, locale);

    if (!award) {
        return {
            title: "Award Not Found"
        };
    }

    return {
        title: `${award.role} | Lin Jing-Di Portfolio`,
        description: award.overview.substring(0, 160),
    };
}

export default async function AwardsPage({ params }: PageProps) {
    const { id, locale } = await params;
    const award = getDetailedAward(id, locale);

    if (!award) {
        notFound();
    }

    return <DetailedExperiencePage experience={award} locale={locale} />;
}
