"use client";

import { motion } from "framer-motion";
import { ExperienceAchievement } from "@/types";

interface AchievementsListProps {
    achievements: ExperienceAchievement[];
}

const categoryStyles = {
    quantitative: {
        label: "量化成就",
        icon: "📊",
        cardBg: "bg-blue-500/5",
        cardBorder: "border-blue-500/20",
        cardHoverBorder: "hover:border-blue-500/40",
        impactBg: "bg-blue-500/10",
        impactBorder: "border-blue-500",
        iconColor: "text-blue-400",
        labelColor: "text-blue-400",
        metricGradient: "from-blue-500/20 to-purple-500/20",
        metricBorder: "border-blue-500/30",
        metricText: "text-blue-300"
    },
    qualitative: {
        label: "質化成就",
        icon: "💡",
        cardBg: "bg-purple-500/5",
        cardBorder: "border-purple-500/20",
        cardHoverBorder: "hover:border-purple-500/40",
        impactBg: "bg-purple-500/10",
        impactBorder: "border-purple-500",
        iconColor: "text-purple-400",
        labelColor: "text-purple-400",
        metricGradient: "from-purple-500/20 to-pink-500/20",
        metricBorder: "border-purple-500/30",
        metricText: "text-purple-300"
    },
    recognition: {
        label: "獲獎與認可",
        icon: "🏆",
        cardBg: "bg-yellow-500/5",
        cardBorder: "border-yellow-500/20",
        cardHoverBorder: "hover:border-yellow-500/40",
        impactBg: "bg-yellow-500/10",
        impactBorder: "border-yellow-500",
        iconColor: "text-yellow-400",
        labelColor: "text-yellow-400",
        metricGradient: "from-yellow-500/20 to-orange-500/20",
        metricBorder: "border-yellow-500/30",
        metricText: "text-yellow-300"
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
        <div className="space-y-8">
            {Object.entries(groupedAchievements).map(([category, items], categoryIndex) => {
                const styles = categoryStyles[category as keyof typeof categoryStyles];

                return (
                    <div key={category}>
                        {/* Category Header */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="text-3xl">{styles.icon}</span>
                            <h3 className={`text-xl font-bold ${styles.labelColor}`}>
                                {styles.label}
                            </h3>
                        </motion.div>

                        {/* Achievements in this category */}
                        <div className="space-y-6">
                            {items.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className={`p-6 rounded-xl ${styles.cardBg} backdrop-blur-sm border ${styles.cardBorder} ${styles.cardHoverBorder} transition-all`}>
                                        {/* Title */}
                                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                            {achievement.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-slate-300 leading-relaxed mb-4">
                                            {achievement.description}
                                        </p>

                                        {/* Impact */}
                                        {achievement.impact && (
                                            <div className={`p-4 rounded-lg ${styles.impactBg} border-l-4 ${styles.impactBorder} mb-4`}>
                                                <div className="flex items-start gap-2">
                                                    <svg className={`w-5 h-5 ${styles.iconColor} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                    <div>
                                                        <div className={`text-sm font-semibold ${styles.iconColor} mb-1`}>影響力</div>
                                                        <div className="text-sm text-slate-300">{achievement.impact}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Metrics */}
                                        {achievement.metrics && achievement.metrics.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {achievement.metrics.map((metric, i) => (
                                                    <span
                                                        key={i}
                                                        className={`px-3 py-1 text-sm rounded-full bg-gradient-to-r ${styles.metricGradient} border ${styles.metricBorder} ${styles.metricText} font-medium`}
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
