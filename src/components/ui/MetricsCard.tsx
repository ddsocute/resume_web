"use client";

import { motion } from "framer-motion";
import { ExperienceMetric } from "@/types";

interface MetricsCardProps {
    metrics: ExperienceMetric[];
}

export default function MetricsCard({ metrics }: MetricsCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative group"
                >
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all">
                        {/* Icon */}
                        {metric.icon && (
                            <div className="text-4xl mb-3">{metric.icon}</div>
                        )}

                        {/* Value */}
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {metric.value}
                        </div>

                        {/* Label */}
                        <div className="text-blue-300 font-semibold mb-2">
                            {metric.label}
                        </div>

                        {/* Description */}
                        {metric.description && (
                            <div className="text-sm text-slate-400">
                                {metric.description}
                            </div>
                        )}

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
