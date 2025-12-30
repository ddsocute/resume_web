"use client";

import { motion } from "framer-motion";
import { ExperienceAchievement } from "@/types";

interface AchievementsListProps {
    achievements: ExperienceAchievement[];
}

const categoryStyles = {
    quantitative: {
        label: "Quantitative Impact",
        icon: "📊",
        cardBg: "bg-blue-50",
        cardBorder: "border-blue-100",
        iconColor: "text-blue-600",
        labelColor: "text-blue-800",
        metricBg: "bg-white",
        metricText: "text-blue-700"
    },
    qualitative: {
        label: "Qualitative Impact",
        icon: "💡",
        cardBg: "bg-purple-50",
        cardBorder: "border-purple-100",
        iconColor: "text-purple-600",
        labelColor: "text-purple-800",
        metricBg: "bg-white",
        metricText: "text-purple-700"
    },
    recognition: {
        label: "Awards & Recognition",
        icon: "🏆",
        cardBg: "bg-amber-50",
        cardBorder: "border-amber-100",
        iconColor: "text-amber-600",
        labelColor: "text-amber-800",
        metricBg: "bg-white",
        metricText: "text-amber-700"
    }
};

export default function AchievementsList({ achievements }: AchievementsListProps) {
    // Group achievements by category
    const groupedAchievements = achievements.reduce((acc, achievement) => {
        if (!acc[achievement.category]) {
            acc[achievement.category] = [];
        }
        acc[achievement.category].push(achievement);
        return acc;
    }, {} as Record<string, ExperienceAchievement[]>);

    return (
        <div className="space-y-12">
            {Object.entries(groupedAchievements).map(([category, items]) => {
                const styles = categoryStyles[category as keyof typeof categoryStyles] || categoryStyles.quantitative;

                return (
                    <div key={category}>
                        {/* Category Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="text-2xl">{styles.icon}</span>
                            <h3 className={`text-xl font-bold ${styles.labelColor}`}>
                                {styles.label}
                            </h3>
                        </motion.div>

                        {/* Achievements in this category */}
                        <div className="grid gap-6 md:grid-cols-2">
                            {items.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group h-full"
                                >
                                    <div className={`h-full p-6 rounded-xl ${styles.cardBg} border ${styles.cardBorder} hover:shadow-md transition-all flex flex-col`}>
                                        {/* Title */}
                                        <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                                            {achievement.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-gray-700 leading-relaxed mb-4 flex-grow text-sm">
                                            {achievement.description}
                                        </p>

                                        {/* Impact Section */}
                                        {achievement.impact && (
                                            <div className="mb-4 pt-4 border-t border-gray-200/50">
                                                <div className="flex items-start gap-2">
                                                    <svg className={`w-4 h-4 ${styles.iconColor} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                    <span className={`text-sm font-semibold ${styles.iconColor}`}>Impact:</span>
                                                    <span className="text-sm text-gray-600 font-medium">{achievement.impact}</span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Metrics */}
                                        {achievement.metrics && achievement.metrics.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {achievement.metrics.map((metric, i) => (
                                                    <span
                                                        key={i}
                                                        className={`px-3 py-1 text-xs font-bold rounded-full ${styles.metricBg} ${styles.metricText} shadow-sm border border-gray-100`}
                                                    >
                                                        {metric}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
