"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ExperienceSection() {
    const { experience } = resumeData;

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
                        Professional Experience
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
                        A journey through finance, research, and investment banking
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10" />

                                {/* Content Card */}
                                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} pl-8 md:pl-0`}>
                                    <Card className="group hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-blue-500">
                                        <CardHeader>
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                                                        {exp.company}
                                                    </h3>
                                                    <p className="text-base font-semibold text-blue-600">
                                                        {exp.role}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-sm text-slate-500 font-medium">
                                                {exp.startDate} - {exp.endDate}
                                            </p>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-3">
                                                {exp.description.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-slate-700">
                                                        <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                                                        <span className="text-sm leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
