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
                    <div className="h-full p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                        {/* Icon */}
                        {metric.icon && (
                            <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                                {metric.icon}
                            </div>
                        )}

                        {/* Value */}
                        <div className="text-3xl md:text-5xl font-bold font-serif text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {metric.value}
                        </div>

                        {/* Label */}
                        <div className="text-base font-semibold text-gray-700 mb-2">
                            {metric.label}
                        </div>

                        {/* Description */}
                        {metric.description && (
                            <div className="text-sm text-gray-500 leading-relaxed">
                                {metric.description}
                            </div>
                        )}

                        {/* Decorative Gradient on Hover */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
