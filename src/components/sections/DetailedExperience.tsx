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

// Map IDs to Logos (Centralized mapping)
const LOGO_MAP: Record<string, string> = {
    // Experience
    "huatai-2025": "/images/companies/huatai.jpeg",
    "o-bank-2025": "/images/companies/o-bank-cropped.png",
    "tier-2025": "/images/companies/tier.png",
    // Education
    "nccu-2022": "/images/schools/nccu.png",
    "nccu-academic-2025": "/images/schools/nccu.png",
    "nccu-ma-project-2025": "/images/schools/nccu.png",
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
    const logoSrc = LOGO_MAP[experience.id] || experience.logoUrl;

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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left Column: Meta Info (Sticky Sidebar) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-8 h-fit">
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
                            <h1 className="text-3xl font-serif font-medium text-black leading-tight mb-3">
                                {experience.role}
                            </h1>
                            <div className="text-lg text-gray-600 font-medium">
                                {experience.company}
                            </div>
                        </div>

                        {/* Meta Data */}
                        <div className="space-y-6 pt-6 border-t border-gray-100">
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
                            <div className="pt-6 border-t border-gray-100">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                                    {t("skillsAndTools")}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {experience.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-50 text-gray-600 text-xs border border-gray-100 font-medium"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Main Content (Scrollable) */}
                    <div className="lg:col-span-8">

                        {/* Section 1: Overview */}
                        <section className="mb-12 pb-12 border-b border-gray-100">
                            <h2 className="font-serif text-2xl font-medium text-black mb-6">
                                {t("overview")}
                            </h2>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                {experience.overview}
                            </p>
                        </section>

                        {/* Section 2: Detailed Responsibilities */}
                        {experience.responsibilities && experience.responsibilities.length > 0 && (
                            <section className="mb-12 pb-12 border-b border-gray-100">
                                <h2 className="font-serif text-2xl font-medium text-black mb-6">
                                    {t("responsibilities")}
                                </h2>
                                <ul className="space-y-4">
                                    {experience.responsibilities.map((resp, index) => (
                                        <li key={index} className="flex gap-4 items-start group">
                                            <span className="font-mono text-xs text-gray-400 mt-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span className="text-gray-700 leading-relaxed text-base group-hover:text-black transition-colors">
                                                {resp}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Section 3: Insights */}
                        {experience.insights && (
                            <section className="mb-12 pb-12 border-b border-gray-100">
                                <h2 className="font-serif text-2xl font-medium text-black mb-6">
                                    {t("insights")}
                                </h2>
                                <div className="bg-gray-50 p-8 border-l-2 border-[#0A192F]">
                                    <p className="text-gray-700 leading-relaxed text-base italic">
                                        &ldquo;{experience.insights}&rdquo;
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Section 4: Project Files (New Block A) */}
                        {experience.files && experience.files.length > 0 && (
                            <section className="mb-12 pb-12 border-b border-gray-100">
                                <h2 className="font-serif text-2xl font-medium text-black mb-6">
                                    Project Files
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {experience.files.map((file, idx) => (
                                        <div key={idx} className="border border-gray-200 p-4 flex items-center justify-between hover:border-gray-400 transition-colors bg-white">
                                            <div className="flex items-center gap-3 overflow-hidden">
                                                <div className="w-10 h-10 bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                <div className="min-w-0">
                                                    <h4 className="font-medium text-sm text-black truncate">{file.name}</h4>
                                                    <p className="text-xs text-gray-500 uppercase tracking-wider">{file.type || "DOC"}</p>
                                                </div>
                                            </div>
                                            <a
                                                href={file.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 text-gray-400 hover:text-black transition-colors"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Section 5: Activity Gallery (New Block B) */}
                        {experience.images && experience.images.length > 0 && (
                            <section className="mb-12 pb-12 border-b border-gray-100">
                                <h2 className="font-serif text-2xl font-medium text-black mb-6">
                                    Activity Gallery
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {experience.images.map((img, idx) => (
                                        <div key={idx} className="group">
                                            <div className="relative aspect-[4/3] border border-gray-100 bg-gray-50 mb-3 overflow-hidden">
                                                <Image
                                                    src={img.src}
                                                    alt={img.caption}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                            <p className="text-sm text-gray-500 font-medium border-l-2 border-gray-200 pl-3">
                                                {img.caption}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Section 6: Key Projects */}
                        {experience.projects && experience.projects.length > 0 && (
                            <section>
                                <h2 className="font-serif text-2xl font-medium text-black mb-8">
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
                                                    <span className="font-mono text-xs text-gray-500 bg-gray-50 px-2 py-1">
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
