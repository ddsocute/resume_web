"use client";

import { motion } from "framer-motion";
import { ExperienceProject } from "@/types";
import { useTranslations } from "next-intl";

interface ProjectShowcaseProps {
    projects: ExperienceProject[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
    const t = useTranslations("detailedExperience");

    return (
        <div className="space-y-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="group"
                >
                    <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        {/* Project Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold font-serif text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-3 items-center text-sm text-gray-500">
                                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium border border-blue-100">
                                        {project.role}
                                    </span>
                                    {project.timeline && (
                                        <span className="flex items-center gap-1 font-medium">
                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {project.timeline}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 leading-relaxed mb-6">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        {project.technologies && project.technologies.length > 0 && (
                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Technologies</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-gray-50 text-gray-600 font-medium border border-gray-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6 bg-gray-50 rounded-xl p-6 border border-gray-100">
                            {/* Deliverables */}
                            {project.deliverables && project.deliverables.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        Deliverables
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Outcomes */}
                            {project.outcomes && project.outcomes.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Outcomes
                                    </h4>
                                    <ul className="space-y-2">
                                        {project.outcomes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-2"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
