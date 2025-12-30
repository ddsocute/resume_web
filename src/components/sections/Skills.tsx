"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { useTranslations } from "next-intl";

export default function SkillsSection() {
    const { skillCategories } = resumeData;
    const t = useTranslations("skills");

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((id, index) => {
                        const itemKey = `items.${id}`;
                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 border border-gray-200"
                            >
                                <h3 className="font-sans text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                    {t(`${itemKey}.category`)}
                                </h3>
                                <div className="font-sans text-sm text-gray-700 leading-relaxed">
                                    {(t.raw(`${itemKey}.items`) as string[]).join(" • ")}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
