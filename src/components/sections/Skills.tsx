"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { useTranslations } from "next-intl";
import {
    Calculator,
    BookOpen,
    Code2,
    Database,
    Languages,
    Lightbulb
} from "lucide-react";

const ICON_MAP: Record<string, any> = {
    "valuation": Calculator,
    "certifications": BookOpen,
    "programming": Code2,
    "databases": Database,
    "languages": Languages,
};

// Fallback icon
const DefaultIcon = Lightbulb;

export default function SkillsSection() {
    const { skillCategories } = resumeData;
    const t = useTranslations("skills");

    return (
        <section id="skills" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0A192F] mb-4 uppercase tracking-wide">
                        {t("title")}
                    </h2>
                    <div className="w-20 h-0.5 bg-[#333333]"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((id, index) => {
                        const itemKey = `items.${id}`;
                        const Icon = ICON_MAP[id] || DefaultIcon;

                        return (
                            <motion.div
                                key={id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5, backgroundColor: "rgba(10, 25, 47, 0.02)" }}
                                className="group bg-white p-8 border border-gray-200 hover:border-[#0A192F]/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-[#0A192F]/5 transition-colors">
                                        <Icon className="w-6 h-6 text-[#0A192F] stroke-1.5" />
                                    </div>
                                    <h3 className="font-serif text-lg font-bold text-[#0A192F]">
                                        {t(`${itemKey}.category`)}
                                    </h3>
                                </div>

                                <div className="space-y-3">
                                    {(t.raw(`${itemKey}.items`) as string[]).map((skill, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#0A192F] transition-colors"></div>
                                            <span className="font-sans text-sm text-gray-600 font-medium tracking-wide group-hover:text-gray-900 transition-colors">
                                                {skill}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
