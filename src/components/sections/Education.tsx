"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LOGO_MAP: Record<string, string> = {
    "nccu-2022": "/images/schools/nccu.png",
};

interface EducationSectionProps {
    locale: string;
}

export default function EducationSection({ locale }: EducationSectionProps) {
    const { education } = resumeData;
    const t = useTranslations("education");

    return (
        <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 text-[#333333]">
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

                <div className="space-y-12">
                    {education.map((id, index) => {
                        const itemKey = `items.${id}`;
                        const school = t(`${itemKey}.school`);
                        const degree = t(`${itemKey}.degree`);
                        const program = t(`${itemKey}.program`);
                        const date = t(`${itemKey}.date`);
                        const logoSrc = LOGO_MAP[id];

                        const achievements = t.raw(`${itemKey}.achievements`) as string[];
                        const courses = t.raw(`${itemKey}.courses`) as string[];

                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8">
                                    {/* School Logo */}
                                    <div className="flex-shrink-0 w-20 h-20 relative bg-white border border-gray-100 p-1">
                                        {logoSrc && (
                                            <Image
                                                src={logoSrc}
                                                alt={school}
                                                fill
                                                className="object-contain"
                                            />
                                        )}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        {/* School & Date */}
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                                            <h3 className="font-serif text-xl font-medium text-[#0A192F]">
                                                {school}
                                            </h3>
                                            <span className="font-sans text-sm text-gray-500 font-medium mt-1 md:mt-0">
                                                {date}
                                            </span>
                                        </div>

                                        {/* Degree & Program */}
                                        <div className="mb-6">
                                            <p className="font-sans text-base font-semibold text-[#0A192F] uppercase tracking-wide">
                                                {degree} {program && ` - ${program}`}
                                            </p>
                                        </div>

                                        {/* Achievements */}
                                        {achievements.length > 0 && (
                                            <div className="mb-6">
                                                <h4 className="font-sans text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                                                    {t("achievements")}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {achievements.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3">
                                                            <span className="text-[#0A192F] mt-1.5 text-[0.6rem]">•</span>
                                                            <span className="font-sans text-sm text-[#4B5563] leading-relaxed">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Related Coursework */}
                                        {courses.length > 0 && (
                                            <div>
                                                <h4 className="font-sans text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                                                    {t("courses")}
                                                </h4>
                                                <div className="flex flex-wrap gap-x-2 gap-y-1">
                                                    {courses.map((course, i) => (
                                                        <span key={i} className="font-sans text-sm text-[#4B5563]">
                                                            {course}{i < courses.length - 1 ? ',' : ''}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Sub-page Links for NCCU */}
                                    {id === 'nccu-2022' && (
                                        <div className="w-full md:w-auto mt-6 md:mt-0 md:ml-4 flex flex-row md:flex-col gap-3 shrink-0">
                                            <a
                                                href={`/${locale}/education/nccu-academic-2025`}
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#0A192F] text-white text-xs font-medium hover:bg-[#112240] transition-colors min-w-[140px]"
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                                {t("viewPaper")}
                                            </a>
                                            <a
                                                href={`/${locale}/education/nccu-ma-project-2025`}
                                                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#0A192F] text-[#0A192F] text-xs font-medium hover:bg-gray-50 transition-colors min-w-[140px]"
                                            >
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                {t("viewCaseStudy")}
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
