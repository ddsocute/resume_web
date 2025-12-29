"use client";

import { motion } from "framer-motion";
import { detailedExperiences } from "@/data/detailedExperiences";
import { DetailedExperience } from "@/types";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MetricsCard from "@/components/ui/MetricsCard";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import AchievementsList from "@/components/ui/AchievementsList";

interface DetailedExperiencePageProps {
    experience: DetailedExperience;
}

export default function DetailedExperiencePage({ experience }: DetailedExperiencePageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
            {/* Breadcrumbs */}
            <div className="container  mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <Breadcrumbs
                    items={[
                        { label: "首頁", href: "/" },
                        { label: "經歷", href: "/#experience" },
                        { label: experience.company, href: "#" }
                    ]}
                />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    {/* Company & Role */}
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {experience.company}
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 mb-4">
                            {experience.role}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-slate-300">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>{experience.startDate} - {experience.endDate}</span>
                            </div>
                            {experience.location && (
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{experience.location}</span>
                                </div>
                            )}
                            {experience.department && (
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    <span>{experience.department}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Company Description */}
                    {experience.companyDescription && (
                        <div className="mb-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h3 className="text-lg font-semibold text-blue-400 mb-2">關於公司</h3>
                            <p className="text-slate-300 leading-relaxed">{experience.companyDescription}</p>
                        </div>
                    )}

                    {/* Overview */}
                    <div className="mb-8 p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20">
                        <h3 className="text-2xl font-bold text-white mb-4">工作概述</h3>
                        <p className="text-slate-200 leading-relaxed text-lg">{experience.overview}</p>
                    </div>
                </motion.div>
            </section>

            {/* Metrics Section */}
            {experience.metrics && experience.metrics.length > 0 && (
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                            關鍵指標
                        </h2>
                        <MetricsCard metrics={experience.metrics} />
                    </motion.div>
                </section>
            )}

            {/* Responsibilities Section */}
            {experience.responsibilities && experience.responsibilities.length > 0 && (
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            主要職責
                        </h2>
                        <div className="grid gap-4">
                            {experience.responsibilities.map((resp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold">
                                        {index + 1}
                                    </div>
                                    <p className="text-slate-200 leading-relaxed flex-1">{resp}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            )}

            {/* Key Achievements Section */}
            {experience.keyAchievements && experience.keyAchievements.length > 0 && (
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            核心成就
                        </h2>
                        <AchievementsList achievements={experience.keyAchievements} />
                    </motion.div>
                </section>
            )}

            {/* Projects Section */}
            {experience.projects && experience.projects.length > 0 && (
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            重點專案
                        </h2>
                        <ProjectShowcase projects={experience.projects} />
                    </motion.div>
                </section>
            )}

            {/* Skills Section */}
            {experience.skills && experience.skills.length > 0 && (
                <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            技能與工具
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {experience.skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 font-medium hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </section>
            )}

            {/* Back to Home */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-5xl mx-auto text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        返回首頁
                    </Link>
                </div>
            </section>
        </div>
    );
}
