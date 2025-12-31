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
            whileHover={{ y: -6 }}
            className="group relative bg-gradient-to-br from-white to-gray-50 border border-t-white border-r-gray-100 border-b-gray-100 border-l-transparent p-6 md:p-8 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-400 ease-out rounded-sm overflow-hidden"
        >
            {/* Left Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#0A192F] to-[#32b8c6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Top Right Decorative Corner */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-6 relative z-10">
                {/* Logo Section */}
                {logo && (
                    <div className="shrink-0 mb-4 md:mb-0">
                        <div className="w-14 h-14 md:w-16 md:h-16 relative bg-white border border-gray-100 p-1 flex items-center justify-center rounded-sm shadow-sm group-hover:border-gray-200 transition-colors">
                            <Image
                                src={logo}
                                alt={company}
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                    </div>
                )}

                {/* Content Section */}
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                            <div>
                                <h3 className={`font-serif font-bold text-[#0A192F] group-hover:text-blue-900 transition-colors ${highlightDate ? 'text-2xl' : 'text-xl'}`}>
                                    {title}
                                </h3>
                                <div className="text-sm font-medium text-gray-500 mb-1 uppercase tracking-wider flex items-center gap-2">
                                    {company}
                                    {!logo && <span className="w-1.5 h-1.5 rounded-full bg-gray-300 inline-block" />}
                                </div>
                            </div>
                            <span className={`font-mono whitespace-nowrap md:ml-4 shrink-0 mt-1 md:mt-0 ${highlightDate ? 'text-base font-bold text-[#0A192F]' : 'text-xs text-gray-400 tracking-widest'}`}>
                                {date}
                            </span>
                        </div>

                        <div className="text-sm text-gray-600 leading-relaxed line-clamp-2 md:line-clamp-3 mb-4 group-hover:text-gray-900 transition-colors">
                            {summary}
                        </div>
                    </div>

                    {/* Footer / Link */}
                    {link && (
                        <div className="pt-4 border-t border-gray-100/50 mt-auto">
                            <span className="inline-flex items-center gap-2 text-xs font-medium text-[#32b8c6] uppercase tracking-wider group-hover:text-[#0A192F] transition-colors">
                                {linkText}
                                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Full Card Link overlay */}
            {link && <Link href={link} className="absolute inset-0 z-10" aria-label={title} />}
        </motion.div>
    );
}
