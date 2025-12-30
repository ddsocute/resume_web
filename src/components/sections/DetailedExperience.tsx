"use client";

import { motion } from "framer-motion";
import { DetailedExperience } from "@/types";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MetricsCard from "@/components/ui/MetricsCard";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import AchievementsList from "@/components/ui/AchievementsList";
import { useTranslations } from "next-intl";

interface DetailedExperiencePageProps {
    experience: DetailedExperience;
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

export default function DetailedExperiencePage({ experience }: DetailedExperiencePageProps) {
    const t = useTranslations("detailedExperience");
    const logoSrc = LOGO_MAP[experience.id];

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
            {/* Navigation / Breadcrumbs */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm backdrop-blur-md bg-white/90">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Breadcrumbs
                        items={[
                            { label: t("breadcrumbs.home"), href: "/" },
                            { label: t("breadcrumbs.experience"), href: "/#experience" },
                            { label: experience.company, href: "#" }
                        ]}
                    />
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-[#0A192F] text-white py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }} // Reduced y offset
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 md:items-center"
                    >
                        {/* Logo - Square, No Rounding */}
                        <div className="flex-shrink-0">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-white p-2">
                                {logoSrc ? (
                                    <Image
                                        src={logoSrc}
                                        alt={experience.company}
                                        fill
                                        className="object-contain"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-50 text-4xl font-serif font-bold text-gray-300">
                                        {experience.company.charAt(0)}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="flex-1 text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4 tracking-wide">
                                {experience.company}
                            </h1>
                            <h2 className="text-xl md:text-2xl font-sans font-light text-gray-300 mb-6 uppercase tracking-widest">
                                {experience.role}
                            </h2>

                            <div className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-8 text-sm md:text-base text-gray-400 font-sans tracking-wide">
                                <div className="flex items-center gap-2">
                                    <span>{experience.startDate} - {experience.endDate}</span>
                                </div>
                                {experience.location && (
                                    <div className="flex items-center gap-2">
                                        <span>{experience.location}</span>
                                    </div>
                                )}
                                {experience.department && (
                                    <div className="flex items-center gap-2">
                                        <span>{experience.department}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-5xl mx-auto space-y-16">

                    {/* Overview & Company Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                    >
                        {/* Description Card */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Overview */}
                            <div className="mb-10">
                                <h3 className="text-lg font-serif font-medium text-[#0A192F] mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">
                                    {t("overview")}
                                </h3>
                                <p className="text-[#333333] leading-7 text-base font-sans">
                                    {experience.overview}
                                </p>
                            </div>

                            {/* Responsibilities */}
                            {experience.responsibilities && experience.responsibilities.length > 0 && (
                                <div className="mb-10">
                                    <h3 className="text-lg font-serif font-medium text-[#0A192F] mb-4 uppercase tracking-widest border-b border-gray-200 pb-2">
                                        {t("responsibilities")}
                                    </h3>
                                    <ul className="space-y-3">
                                        {experience.responsibilities.map((resp, index) => (
                                            <li key={index} className="flex gap-4 items-start">
                                                <span className="flex-shrink-0 w-6 h-6 border border-[#0A192F] text-[#0A192F] text-xs font-bold flex items-center justify-center mt-0.5">
                                                    {index + 1}
                                                </span>
                                                <span className="text-[#4B5563] leading-relaxed text-sm font-sans">{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Sidebar: Metrics & Skills */}
                        <div className="lg:col-span-1 space-y-8">
                            {/* Skills */}
                            {experience.skills && experience.skills.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                                        {t("skillsAndTools")}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 rounded-md bg-gray-50 text-gray-700 text-sm font-medium border border-gray-100"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* About Company */}
                            {experience.companyDescription && (
                                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
                                        {t("aboutCompany")}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {experience.companyDescription}
                                    </p>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Metrics Section */}
                    {experience.metrics && experience.metrics.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
                                {t("keyMetrics")}
                            </h2>
                            <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100">
                                <MetricsCard metrics={experience.metrics} />
                            </div>
                        </motion.section>
                    )}

                    {/* Key Achievements */}
                    {experience.keyAchievements && experience.keyAchievements.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                                    {t("coreAchievements")}
                                </h2>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>
                            <AchievementsList achievements={experience.keyAchievements} />
                        </motion.section>
                    )}

                    {/* Projects */}
                    {experience.projects && experience.projects.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">
                                    {t("keyProjects")}
                                </h2>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>
                            <ProjectShowcase projects={experience.projects} />
                        </motion.section>
                    )}

                    {/* Footer Nav */}
                    <div className="pt-12 text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-medium transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            {t("backToHome")}
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
}
