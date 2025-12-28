"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function SkillsSection() {
    const { skills } = resumeData;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
                        Skills & Certifications
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
                        Technical expertise and professional qualifications
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            <h3 className="text-lg font-bold text-slate-900 mb-4 border-b border-blue-200 pb-2">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-all duration-200 shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
