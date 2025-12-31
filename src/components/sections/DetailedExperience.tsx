"use client";

import { motion, AnimatePresence } from "framer-motion";
import { DetailedExperience } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import PDFViewer from "@/components/ui/PDFViewer";

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

    // Image Slider State
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        if (!experience.images) return;
        setCurrentImageIndex((prev) => (prev + 1) % experience.images!.length);
    };

    const prevImage = () => {
        if (!experience.images) return;
        setCurrentImageIndex((prev) => (prev - 1 + experience.images!.length) % experience.images!.length);
    };

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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Column: Meta Info (Sticky Sidebar - 4 Columns) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-8 h-fit border-r border-gray-100 pr-0 lg:pr-8">
                        {/* Logo */}
                        <div className="relative w-24 h-24 border border-gray-100 bg-white p-2 mb-6">
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
                            <h1 className="text-3xl font-serif font-medium text-[#0A192F] leading-tight mb-3">
                                {experience.role}
                            </h1>
                            <div className="text-base text-gray-500 font-medium font-sans">
                                {experience.company}
                            </div>
                        </div>

                        {/* Meta Data */}
                        <div className="space-y-6 pt-6 border-t border-gray-100">
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-sans">
                                    {t("timeline")}
                                </h3>
                                <p className="font-mono text-sm text-gray-700">
                                    {experience.startDate} {experience.endDate ? `— ${experience.endDate}` : ''}
                                </p>
                            </div>

                            {experience.location && (
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-sans">
                                        {t("location")}
                                    </h3>
                                    <p className="text-sm text-gray-700 font-sans">
                                        {experience.location}
                                    </p>
                                </div>
                            )}

                            {experience.department && (
                                <div>
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-sans">
                                        {t("department")}
                                    </h3>
                                    <p className="text-sm text-gray-700 font-sans">
                                        {experience.department}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Skills / Tools */}
                        {experience.skills && experience.skills.length > 0 && (
                            <div className="pt-6 border-t border-gray-100">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 font-sans">
                                    {t("skillsAndTools")}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {experience.skills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-50 text-gray-600 text-xs border border-gray-100 font-medium font-mono"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Main Content (Scrollable - 8 Columns) */}
                    <div className="lg:col-span-8 pl-0 lg:pl-4">

                        {/* Section 1: Overview */}
                        <section className="mb-16 pb-12 border-b border-gray-100">
                            <h2 className="font-serif text-2xl font-medium text-[#0A192F] mb-6 leading-tight">
                                {t("overview")}
                            </h2>
                            <p className="text-gray-700 leading-loose text-lg font-sans">
                                {experience.overview}
                            </p>
                        </section>

                        {/* Section 2: Detailed Responsibilities */}
                        {experience.responsibilities && experience.responsibilities.length > 0 && (
                            <section className="mb-16 pb-12 border-b border-gray-100">
                                <h2 className="font-serif text-2xl font-medium text-[#0A192F] mb-6 leading-tight">
                                    {t("responsibilities")}
                                </h2>
                                <ul className="space-y-6">
                                    {experience.responsibilities.map((resp, index) => (
                                        <li key={index} className="flex gap-5 items-start group">
                                            <span className="font-mono text-sm text-gray-300 mt-1 shrink-0 group-hover:text-[#0A192F] transition-colors">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <span className="text-gray-700 leading-relaxed text-base group-hover:text-black transition-colors font-sans">
                                                {resp}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Section 3: Insights - Full Width Highlight */}
                        {experience.insights && (
                            <section className="mb-16 pb-12 border-b border-gray-100">
                                <h2 className="font-serif text-2xl font-medium text-[#0A192F] mb-6 leading-tight">
                                    {t("insights")}
                                </h2>
                                <div className="bg-[#F8FAFC] p-8 md:p-10 border-l-4 border-[#0A192F]">
                                    <p className="text-[#334155] leading-relaxed text-lg italic font-serif">
                                        &ldquo;{experience.insights}&rdquo;
                                    </p>
                                </div>
                            </section>
                        )}

                        {/* Section A: Project Files (using PDFViewer) */}
                        {experience.files && experience.files.length > 0 && (
                            <section className="mb-16 pb-12 border-b border-gray-100">
                                <h2 className="font-serif text-2xl font-medium text-[#0A192F] mb-6">
                                    Project Files
                                </h2>
                                <PDFViewer files={experience.files} />
                            </section>
                        )}

                        {/* Section B: Activity Gallery (Images Slider) */}
                        {experience.images && experience.images.length > 0 ? (
                            <section className="mb-12">
                                <h2 className="font-serif text-2xl font-medium text-[#0A192F] mb-6">
                                    Activity Gallery
                                </h2>

                                <div className="relative group bg-gray-50 p-2 border border-gray-100">
                                    {/* Main Image Stage */}
                                    <div className="relative w-full aspect-[16/9] overflow-hidden bg-white">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={currentImageIndex}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={experience.images[currentImageIndex].url}
                                                    alt={experience.images[currentImageIndex].caption}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Navigation Arrows */}
                                        {experience.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={prevImage}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-black border border-gray-200 shadow-sm transition-all z-10 rounded-full"
                                                    aria-label="Previous Image"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={nextImage}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white text-black border border-gray-200 shadow-sm transition-all z-10 rounded-full"
                                                    aria-label="Next Image"
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </button>
                                            </>
                                        )}

                                        {/* Mobile Swipe support area */}
                                        <div
                                            className="absolute inset-0 md:hidden z-0"
                                            onTouchEnd={(e) => {
                                                const touch = e.changedTouches[0];
                                                if (touch.clientX < window.innerWidth / 3) prevImage();
                                                if (touch.clientX > (window.innerWidth / 3) * 2) nextImage();
                                            }}
                                        ></div>
                                    </div>

                                    {/* Caption & Indicators */}
                                    <div className="mt-4 px-4 pb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <p className="text-sm font-medium text-gray-600 border-l-2 border-[#0A192F] pl-3 py-1 font-serif">
                                            {experience.images[currentImageIndex].caption}
                                        </p>

                                        {experience.images.length > 1 && (
                                            <div className="flex items-center gap-2">
                                                {experience.images.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={() => setCurrentImageIndex(idx)}
                                                        className={`h-1.5 transition-all duration-300 ${idx === currentImageIndex ? 'w-8 bg-[#0A192F]' : 'w-4 bg-gray-200 hover:bg-gray-400'}`}
                                                        aria-label={`Go to image ${idx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </section>
                        ) : experience.images && (
                            <section className="mb-12">
                                <h2 className="font-serif text-2xl font-medium text-[#0A192F] mb-6">
                                    Activity Gallery
                                </h2>
                                <div className="w-full aspect-[16/9] bg-gray-50 border border-gray-100 border-dashed flex flex-col items-center justify-center text-gray-400">
                                    <svg className="w-12 h-12 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="font-serif italic text-lg">影像紀錄整理中</p>
                                    <p className="text-xs font-mono mt-1 opacity-60">Visual documentation coming soon</p>
                                </div>
                            </section>
                        )}

                    </div>
                </div>
            </main>
        </div>
    );
}
