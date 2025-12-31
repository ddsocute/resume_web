"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ExperienceCardProps {
    logo?: string;
    title: string;
    company: string;
    date: string;
    location?: string;
    summary: string;
    link?: string;
    linkText?: string;
    highlightDate?: boolean;
}

export default function ExperienceCard({
    logo,
    title,
    company,
    date,
    summary,
    link,
    linkText = "View Detailed Case Study",
    highlightDate = false
}: ExperienceCardProps) {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="group relative bg-white border border-gray-100 p-8 hover:border-[#0A192F] hover:shadow-xl transition-all duration-300 rounded-sm"
        >
            {/* Logo Section - Standardized 48x48 (w-12 h-12) */}
            <div className="shrink-0 mb-6 md:mb-0 md:mr-8">
                <div className="w-16 h-16 relative bg-white border border-gray-100 p-1 flex items-center justify-center rounded-sm group-hover:border-gray-200 transition-colors">
                    {logo ? (
                        <Image
                            src={logo}
                            alt={company}
                            fill
                            className="object-contain p-2"
                        />
                    ) : (
                        <span className="text-2xl font-serif text-gray-300">{company.charAt(0)}</span>
                    )}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                            <h3 className={`font-serif font-bold text-[#0A192F] group-hover:text-blue-900 transition-colors ${highlightDate ? 'text-2xl' : 'text-xl'}`}>
                                {title}
                            </h3>
                            <p className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider">
                                {company}
                            </p>
                        </div>
                        <span className={`font-mono whitespace-nowrap md:ml-4 shrink-0 mt-1 md:mt-0 ${highlightDate ? 'text-lg font-bold text-[#0A192F] bg-gray-100 px-4 py-2 rounded-sm' : 'text-xs text-gray-400 tracking-widest'}`}>
                            {date}
                        </span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 md:line-clamp-3 mb-4">
                        {summary}
                    </p>
                </div>

                {/* Footer / Link */}
                {link && (
                    <div className="pt-4 border-t border-gray-50 mt-auto">
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-[#0A192F] uppercase tracking-wider group-hover:underline decoration-1 underline-offset-4">
                            {linkText}
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </div>
                )}
            </div>

            {/* Full Card Link overlay */}
            {link && <Link href={link} className="absolute inset-0 z-10" aria-label={title} />}
        </motion.div>
    );
}
