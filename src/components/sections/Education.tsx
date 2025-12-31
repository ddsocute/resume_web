"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ExperienceCard from "@/components/ui/ExperienceCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useLocale } from "next-intl";

const LOGO_MAP: Record<string, string> = {
    "nccu-2022": "/images/schools/nccu.png",
};

export default function Education() {
    const { education } = resumeData;
    const t = useTranslations("education");
    const locale = useLocale();

    return (
        <section id="education" className="py-20 bg-[#FAFAFA] text-[#333333]">
            <div className="container mx-auto max-w-5xl">
                {/* Section Title */}
                <SectionHeading title={t("title")} subtitle="Academic Foundation" />

                <div className="grid grid-cols-1 gap-8">
                    {education.map((id, index) => {
                        const itemKey = `items.${id}`;
                        const school = t(`${itemKey}.school`);
                        const degree = t(`${itemKey}.degree`);
                        const program = t(`${itemKey}.program`);
                        const date = t(`${itemKey}.date`);
                        const logoSrc = LOGO_MAP[id];

                        const courses = t.raw(`${itemKey}.courses`) as string[];
                        const paperSummary = t(`${itemKey}.paperSummary`);
                        const projectSummary = t(`${itemKey}.projectSummary`);

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
                                        summary={paperSummary}
                                        link={`/${locale}/education/nccu-academic-2025`}
                                        linkText={t("viewPaper")}
                                        logo="/images/awards/academic_paper.png"
                                    />
                                    <ExperienceCard
                                        title={t("projectTitle")}
                                        company="E.SUN Bank M&A Strategy"
                                        date="2024 Fall - 2025 Spring"
                                        summary={projectSummary}
                                        link={`/${locale}/education/nccu-ma-project-2025`}
                                        linkText={t("viewCaseStudy")}
                                        logo="/images/awards/ai_cup.png"
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
