"use client";

import { motion } from "framer-motion";
import { DetailedExperience } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface DetailedExperiencePageProps {
    experience: DetailedExperience;
    locale: string;
}

// Map IDs to Logos
const LOGO_MAP: Record<string, string> = {
    // Experience
    "huatai-2025": "/images/companies/huatai.jpeg",
    "o-bank-2025": "/images/companies/o-bank-cropped.png",
    "tier-2025": "/images/companies/tier.png",
    // Education
    "nccu-2022": "/images/schools/nccu.png",
    // Extracurricular
    "tmba-2025": "/images/orgs/tmba.jpg",
    "mf-club-2024-member": "/images/orgs/mf-club.png",
    "mf-club-2024-leader": "/images/orgs/mf-club.png",
    // Awards
    "ai-cup-2024": "/images/awards/ntcir.png",
    "gtsm-2023": "/images/awards/gtsm.jpg",
    "mbs-2024": "/images/awards/mbs.webp"
};

export default function DetailedExperiencePage({ experience, locale }: DetailedExperiencePageProps) {
    const t = useTranslations("detailedExperience");
    const logoSrc = LOGO_MAP[experience.id];

    return (
        <div className="min-h-screen bg-white font-sans text-[#333333] selection:bg-gray-200 selection:text-black">
            {/* Top Navigation - Minimal */}
            <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 py-4">
                <div className="container mx-auto px-6 lg:px-12">
                    <Link
                        href={`/${locale}/#experience`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        {t("backToHome")}
                    </Link>
                </div>
            </div>

            <main className="container mx-auto px-6 lg:px-12 pt-32 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Meta Info (Narrower) */}
                    <div className="lg:col-span-4 space-y-8">
                        {/* Logo */}
                        <div className="relative w-24 h-24 border border-gray-100 bg-white p-2">
                            {logoSrc ? (
                                <Image
                                    src={logoSrc}
                                    alt={experience.company}
                                    fill
                                    className="object-contain p-1"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-50 text-3xl font-serif font-medium text-gray-400">
                                    {experience.company.charAt(0)}
                                </div>
                            )}
                        </div>

                        {/* Title & Company */}
                        <div>
                            <h1 className="text-2xl font-serif font-medium text-black leading-tight mb-2">
                                {experience.role}
                            </h1>
                            <div className="text-lg text-gray-600 font-medium">
                                {experience.company}
                            </div>
                        </div>

                        {/* Meta Data */}
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                    {t("timeline")}
                                </h3>
                                <p className="font-mono text-sm text-gray-700">
                                    {experience.startDate} — {experience.endDate}
                                </p>
                            </div>

                            {experience.location && (
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                        {t("location")}
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        {experience.location}
                                    </p>
                                </div>
                            )}

                            {experience.department && (
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                                        {t("department")}
                                    </h3>
                                    <p className="text-sm text-gray-700">
                                        {experience.department}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Skills / Tools */}
                        {experience.skills && experience.skills.length > 0 && (
                            <div className="pt-4 border-t border-gray-100">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                                    {t("skillsAndTools")}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {experience.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-50 text-gray-600 text-xs border border-gray-100"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Main Content (Wider) */}
                    <div className="lg:col-span-8 space-y-16">

                        {/* Section 1: Overview */}
                        <section>
                            <h2 className="font-serif text-2xl font-medium text-black mb-6 pb-2 border-b border-gray-200">
                                {t("overview")}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                                {experience.overview}
                            </p>
                        </section>

                        {/* Section 2: Detailed Responsibilities */}
                        {experience.responsibilities && experience.responsibilities.length > 0 && (
                            <section>
                                <h2 className="font-serif text-2xl font-medium text-black mb-6 pb-2 border-b border-gray-200">
                                    {t("responsibilities")}
                                </h2>
                                <ul className="space-y-4">
                                    {experience.responsibilities.map((resp, index) => (
                                        <li key={index} className="flex gap-4 items-start group">
                                            <span className="font-mono text-xs text-gray-400 mt-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span className="text-gray-700 leading-relaxed text-base">
                                                {resp}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Section 3: Insights (New) */}
                        {experience.insights && (
                            <section className="bg-gray-50 p-8 border-l-2 border-[#0A192F]">
                                <h2 className="font-serif text-2xl font-medium text-black mb-6">
                                    {t("insights")}
                                </h2>
                                <p className="text-gray-700 leading-relaxed text-base italic">
                                    &ldquo;{experience.insights}&rdquo;
                                </p>
                            </section>
                        )}

                        {/* Section 4: Projects (Minimalist) */}
                        {experience.projects && experience.projects.length > 0 && (
                            <section>
                                <h2 className="font-serif text-2xl font-medium text-black mb-8 pb-2 border-b border-gray-200">
                                    {t("keyProjects")}
                                </h2>
                                <div className="grid gap-8">
                                    {experience.projects.map((project) => (
                                        <div key={project.id} className="border border-gray-200 p-6 hover:border-[#0A192F] transition-colors duration-300">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-serif text-xl font-medium text-black">
                                                    {project.title}
                                                </h3>
                                                {project.timeline && (
                                                    <span className="font-mono text-xs text-gray-400 bg-gray-50 px-2 py-1">
                                                        {project.timeline}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-gray-600 mb-6 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Deliverables */}
                                            {project.deliverables && project.deliverables.length > 0 && (
                                                <div className="space-y-2">
                                                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                                        {t("deliverables")}
                                                    </h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        {project.deliverables.map((item, i) => (
                                                            <li key={i} className="flex items-center gap-2">
                                                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>
                </div>
            </main>
        </div>
    );
}
