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
        "nccu-academic-2025": "/images/awards/academic_paper.png",
        "nccu-ma-project-2025": "/images/awards/academic_paper.png"
    };

    const NO_DATE_IDS = ['nccu-academic-2025', 'nccu-ma-project-2025', 'mbs-2024'];

    return (
        <section id="awards" className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
                <SectionHeading title={t("title")} />

                <div className="space-y-6">
                    {awards.map((id, index) => {
                        const itemKey = `items.${id}`;
                        const isNoDate = NO_DATE_IDS.includes(id);

                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ExperienceCard
                                    logo={LOGO_MAP[id]}
                                    title={t(`${itemKey}.title`)}
                                    company={t(`${itemKey}.organization`)}
                                    date={isNoDate ? "" : t(`${itemKey}.rank`)}
                                    summary={t(`${itemKey}.achievement`)}
                                    link={`/${locale}/awards/${id}`}
                                    linkText={locale === "zh" ? "詳情內容" : "Case Study"}
                                    highlightDate={!isNoDate}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
