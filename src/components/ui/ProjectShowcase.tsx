"use client";

import { motion } from "framer-motion";
import { ExperienceProject } from "@/types";

interface ProjectShowcaseProps {
    projects: ExperienceProject[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
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
                    <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all">
                        {/* Project Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex flex-wrap gap-3 items-center text-sm text-slate-400">
                                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                                        {project.role}
                                    </span>
                                    {project.timeline && (
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {project.timeline}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 leading-relaxed mb-6">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        {project.technologies && project.technologies.length > 0 && (
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-blue-400 mb-3">技術與工具</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Deliverables */}
                            {project.deliverables && project.deliverables.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-blue-400 mb-3">交付成果</h4>
                                    <ul className="space-y-2">
                                        {project.deliverables.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Outcomes */}
                            {project.outcomes && project.outcomes.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-blue-400 mb-3">專案成果</h4>
                                    <ul className="space-y-2">
                                        {project.outcomes.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
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
