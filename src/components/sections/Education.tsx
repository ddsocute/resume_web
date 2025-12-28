"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function EducationSection() {
    const { education } = resumeData;

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
                        Education
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
                        Academic foundation in business and technology
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="border-l-4 border-l-purple-500 hover:shadow-xl transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 mb-1">
                                                {edu.school}
                                            </h3>
                                            <p className="text-lg font-semibold text-purple-600">
                                                {edu.degree}
                                            </p>
                                            {edu.program && (
                                                <p className="text-base text-slate-600 mt-1">
                                                    {edu.program}
                                                </p>
                                            )}
                                        </div>
                                        <p className="text-sm text-slate-500 font-medium whitespace-nowrap">
                                            {edu.startDate} - {edu.endDate}
                                        </p>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6">
                                        {/* Achievements */}
                                        <div>
                                            <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                                                Achievements
                                            </h4>
                                            <ul className="space-y-2">
                                                {edu.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-slate-700">
                                                        <span className="text-purple-500 mt-1.5 flex-shrink-0">•</span>
                                                        <span className="text-sm leading-relaxed">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Courses */}
                                        {edu.courses.length > 0 && (
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                                                    Core Courses
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.courses.map((course, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200"
                                                        >
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
