"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
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
        <section id="awards" className="py-24 lg:py-40 px-4 sm:px-6 lg:px-8 bg-white text-[#333333]">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title */}
                <SectionHeading title={t("title")} subtitle="Honors & Achievements" />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {awards.map((id, index) => {
                        const itemKey = `items.${id}`;
                        const title = t(`${itemKey}.title`);
                        const organization = t(`${itemKey}.organization`);
                        const rank = t(`${itemKey}.rank`);
                        const achievement = t(`${itemKey}.achievement`);
                        const logoSrc = LOGO_MAP[id];

                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ExperienceCard
                                    logo={logoSrc}
                                    title={title}
                                    company={organization}
                                    date={rank}
                                    summary={achievement}
                                    link={`/${locale}/awards/${id}`}
                                    linkText="View Achievement"
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
