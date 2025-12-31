"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { useTranslations, useLocale } from "next-intl";
import ExperienceCard from "@/components/ui/ExperienceCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Awards() {
    const { awards } = resumeData;
    const t = useTranslations("awards");
    const locale = useLocale();

    const LOGO_MAP: Record<string, string> = {
        "ai-cup-2024": "/images/awards/ai_cup.png",
        "gtsm-2023": "/images/awards/gtsm.jpg",
        "mbs-2024": "/images/awards/mbs.webp",
    };

    return (
        <section id="awards" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8">
                <SectionHeading title={t("title")} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((id, index) => {
                        const itemKey = `items.${id}`;
                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex h-full"
                            >
                                <ExperienceCard
                                    logo={LOGO_MAP[id]}
                                    title={t(`${itemKey}.title`)}
                                    company={t(`${itemKey}.organization`)}
                                    date={t(`${itemKey}.rank`)}
                                    summary={t(`${itemKey}.achievement`)}
                                    link={`/${locale}/awards/${id}`}
                                    linkText="Explore Details"
                                    highlightDate={true}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
