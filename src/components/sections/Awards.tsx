"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function AwardsSection() {
    const { awards } = resumeData;
    const t = useTranslations("awards");
    const locale = useLocale();

    const LOGO_MAP: Record<string, string> = {
        "ai-cup-2024": "/images/awards/ntcir.png",
        "gtsm-2023": "/images/awards/gtsm.jpg",
        "mbs-2024": "/images/awards/mbs.webp",
    };

    return (
        <section id="awards" className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-[#333333]">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 border-b border-gray-200 pb-4"
                >
                    <h2 className="font-serif text-3xl font-medium text-[#0A192F] uppercase tracking-widest">
                        {t("title")}
                    </h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {awards.map((award, index) => {
                        const itemKey = `items.${award.id}`;
                        const title = t(`${itemKey}.title`);
                        const organization = t(`${itemKey}.organization`);
                        const rank = t(`${itemKey}.rank`);
                        const achievement = t(`${itemKey}.achievement`);
                        const logoSrc = LOGO_MAP[award.id];

                        return (
                            <motion.div
                                key={award.id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/${locale}/awards/${award.id}`}
                                    className="block group h-full"
                                >
                                    <div className="h-full border border-gray-200 bg-white p-6 hover:border-[#0A192F] transition-colors duration-300 flex flex-col">
                                        {/* Logo */}
                                        <div className="h-16 flex items-center mb-6">
                                            <div className="w-16 h-16 relative">
                                                {logoSrc ? (
                                                    <Image
                                                        src={logoSrc}
                                                        alt={title}
                                                        fill
                                                        className="object-contain object-left"
                                                    />
                                                ) : (
                                                    <div className="w-16 h-16 bg-gray-50 flex items-center justify-center text-gray-300 text-xl font-serif">
                                                        {title.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="mb-2">
                                                <span className="font-sans text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                    {organization}
                                                </span>
                                            </div>
                                            <h3 className="font-serif text-lg font-medium text-[#0A192F] mb-2 group-hover:text-blue-900 transition-colors line-clamp-2">
                                                {title}
                                            </h3>
                                            <p className="font-sans text-sm font-semibold text-[#0A192F] mb-4">
                                                {rank}
                                            </p>
                                            <p className="font-sans text-sm text-[#4B5563] leading-relaxed line-clamp-4">
                                                {achievement}
                                            </p>
                                        </div>

                                        {/* Footer Arrow */}
                                        <div className="mt-6 flex justify-end">
                                            <svg className="w-5 h-5 text-gray-300 group-hover:text-[#0A192F] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
