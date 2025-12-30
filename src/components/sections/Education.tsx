"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ExperienceCard from "@/components/ui/ExperienceCard";

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
                                </div>

                                {/* Featured Projects / Achievements using ExperienceCard */}
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <ExperienceCard
                                        title={t("paperTitle")}
                                        company="KAP: MLLM-assisted OCR Text Enhancement"
                                        date="2025"
                                        summary={achievements[0]?.split(' - ')[0] || "Presented at 18th NTCIR Conference"}
                                        link={`/${locale}/education/nccu-academic-2025`}
                                        linkText={t("viewPaper")}
                                        logo="/images/awards/ntcir.png"
                                    />
                                    <ExperienceCard
                                        title={t("projectTitle")}
                                        company="E.SUN Bank M&A Strategy"
                                        date="2024 Fall - 2025 Spring"
                                        summary={achievements[1]?.split('：')[1] || "Strategy Lead for simulated M&A transaction"}
                                        link={`/${locale}/education/nccu-ma-project-2025`}
                                        linkText={t("viewCaseStudy")}
                                        logo="/images/companies/esun_logo.png"
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
