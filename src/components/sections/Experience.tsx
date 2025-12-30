"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const LOGO_MAP: Record<string, string> = {
    "huatai-2025": "/images/companies/huatai.jpeg",
    "o-bank-2025": "/images/companies/o-bank-cropped.png",
    "tier-2025": "/images/companies/tier.png",
};

export default function ExperienceSection() {
    const { internships } = resumeData;
    const t = useTranslations("experience");
    const locale = useLocale();

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-2 uppercase tracking-wide">
                        {t("title")}
                    </h2>
                    <div className="w-16 h-0.5 bg-gray-300"></div>
                </motion.div>

                {/* Experience List */}
                <div className="space-y-0">
                    {internships.map((id, index) => {
                        const itemKey = `items.${id}`;
                        const companyName = t(`${itemKey}.company`);
                        const role = t(`${itemKey}.role`);
                        const date = t(`${itemKey}.date`);
                        const descriptionList = t.raw(`${itemKey}.description`) as string[];
                        const logoSrc = LOGO_MAP[id];

                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/${locale}/experience/${id}`}
                                    className="block py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 group"
                                >
                                    <div className="flex items-start gap-6">
                                        {/* Company Logo - Larger & Cleaner */}
                                        <div className="flex-shrink-0 w-24 h-24 bg-white border border-gray-200 flex items-center justify-center overflow-hidden relative rounded-md shadow-sm">
                                            {logoSrc ? (
                                                <Image
                                                    src={logoSrc}
                                                    alt={companyName}
                                                    fill
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <span className="text-2xl font-bold text-gray-400 font-serif">
                                                    {companyName.charAt(0)}
                                                </span>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            {/* Company & Role - Date on Same Line */}
                                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
                                                <div>
                                                    <h3 className="font-sans text-lg font-bold text-gray-900 group-hover:text-[#2563eb] transition-colors">
                                                        {companyName}
                                                    </h3>
                                                    <p className="font-sans text-base font-semibold text-gray-700">
                                                        {role}
                                                    </p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <p className="font-sans text-sm text-gray-500 whitespace-nowrap">
                                                        {date}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Responsibilities - Bullet Points */}
                                            <ul className="space-y-2 mb-4">
                                                {descriptionList.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                                                        <span className="font-sans text-sm text-gray-600 leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* View Report Link */}
                                            <div className="flex items-center gap-2 text-[#2563eb] font-sans text-sm font-medium group-hover:gap-3 transition-all">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span>{t("viewReport")}</span>
                                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
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
