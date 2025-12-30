"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LOGO_MAP: Record<string, string> = {
    "nccu-2022": "/images/schools/nccu.png",
};

export default function EducationSection() {
    const { education } = resumeData;
    const t = useTranslations("education");

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container mx-auto max-w-5xl">
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

                <div className="space-y-8">
                    {education.map((id, index) => {
                        const itemKey = `items.${id}`;
                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card className="border border-gray-200 bg-white shadow-sm">
                                    <CardHeader>
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                            <div className="flex items-start gap-6">
                                                {/* School Logo - Larger */}
                                                <div className="flex-shrink-0 w-24 h-24 bg-white border border-gray-200 flex items-center justify-center overflow-hidden relative rounded-md shadow-sm">
                                                    {LOGO_MAP[id] ? (
                                                        <Image
                                                            src={LOGO_MAP[id]}
                                                            alt={t(`${itemKey}.school`)}
                                                            fill
                                                            className="object-contain" // object-contain ensures full logo is visible without cropping
                                                        />
                                                    ) : (
                                                        <span className="text-2xl font-bold text-gray-400 font-serif">
                                                            {t(`${itemKey}.school`).charAt(0)}
                                                        </span>
                                                    )}
                                                </div>

                                                <div>
                                                    <h3 className="font-sans text-xl font-bold text-gray-900 mb-1">
                                                        {t(`${itemKey}.school`)}
                                                    </h3>
                                                    <p className="font-sans text-base font-semibold text-gray-700">
                                                        {t(`${itemKey}.degree`)}
                                                    </p>
                                                    <p className="font-sans text-sm text-gray-600 mt-1">
                                                        {t(`${itemKey}.program`)}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="font-sans text-sm text-gray-500 whitespace-nowrap mt-1 md:mt-0">
                                                {t(`${itemKey}.date`)}
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-6">
                                            {/* Achievements */}
                                            <div>
                                                <h4 className="font-sans text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide border-b border-gray-100 pb-1 inline-block">
                                                    {t("achievements")}
                                                </h4>
                                                <ul className="space-y-2">
                                                    {(t.raw(`${itemKey}.achievements`) as string[]).map((achievement: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
                                                            <span className="font-sans text-sm text-gray-600 leading-relaxed">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Courses - Plain text list instead of tags */}
                                            <div>
                                                <h4 className="font-sans text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide border-b border-gray-100 pb-1 inline-block">
                                                    {t("courses")}
                                                </h4>
                                                <div className="font-sans text-sm text-gray-600 leading-relaxed">
                                                    {(t.raw(`${itemKey}.courses`) as string[]).join(" • ")}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
