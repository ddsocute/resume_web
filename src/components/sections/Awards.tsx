"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AwardsSection() {
    const { awards } = resumeData;

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
                        Awards & Achievements
                    </h2>
                    <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
                        Recognition for excellence in competition and research
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.map((award, index) => (
                        <motion.div
                            key={award.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-t-amber-500">
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <CardTitle className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                                                {award.title}
                                            </CardTitle>
                                            {award.rank && (
                                                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold mb-3">
                                                    {award.rank}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 font-medium mb-1">
                                        {award.organization}
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        {award.date}
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        {award.achievement}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
