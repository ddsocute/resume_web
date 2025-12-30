"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

const LOGO_MAP: Record<string, string> = {
    "tmba-2025": "/images/orgs/tmba.jpg",
    "mf-club-2024-member": "/images/orgs/mf-club.png",
    "mf-club-2024-leader": "/images/orgs/mf-club.png",
};

export default function ExtracurricularSection() {
    const { extracurriculars } = resumeData;
    const t = useTranslations("extracurricular");
    const locale = useLocale();

    return (
        <section id="extracurricular" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-[#333333]">
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

                {/* List Items (similar to Experience) */}
                <div className="space-y-12">
                    {extracurriculars.map((id, index) => {
                        const itemKey = `items.${id}`;
                        const companyName = t(`${itemKey}.company`);
                        const role = t(`${itemKey}.role`);
                        const date = t(`${itemKey}.date`);
                        const descriptionList = t.raw(`${itemKey}.description`) as string[];
                        const logoSrc = LOGO_MAP[id];

                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/${locale}/extracurricular/${id}`}
                                    className="block group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8">
                                        {/* Logo */}
                                        <div className="flex-shrink-0 w-20 h-20 relative bg-white border border-gray-100 p-1">
                                            {logoSrc ? (
                                                <Image
                                                    src={logoSrc}
                                                    alt={companyName}
                                                    fill
                                                    className="object-contain"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xl font-serif text-gray-300">
                                                    {companyName.charAt(0)}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            {/* Header */}
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                                <h3 className="font-serif text-xl font-medium text-[#0A192F] group-hover:text-blue-900 transition-colors">
                                                    {companyName}
                                                </h3>
                                                <span className="font-sans text-sm text-gray-500 font-medium mt-1 md:mt-0">
                                                    {date}
                                                </span>
                                            </div>

                                            {/* Role */}
                                            <div className="mb-4">
                                                <p className="font-sans text-base font-semibold text-[#0A192F] uppercase tracking-wide">
                                                    {role}
                                                </p>
                                            </div>

                                            {/* Description */}
                                            <ul className="space-y-2 mb-4">
                                                {descriptionList.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <span className="text-[#0A192F] mt-1.5 text-[0.6rem]">•</span>
                                                        <span className="font-sans text-sm text-[#4B5563] leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* View Details */}
                                            <div className="flex items-center gap-2 text-[#0A192F] font-sans text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <span>{t("viewReport")}</span>
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                {/* Separator */}
                                {index < extracurriculars.length - 1 && (
                                    <div className="h-px bg-gray-200 mt-12 w-full"></div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
