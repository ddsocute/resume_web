"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { resumeData } from "@/data/resume";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Hero() {
    const { profile } = resumeData;
    const t = useTranslations("hero");

    return (
        <section className="relative bg-[#0A192F] text-white min-h-[60vh] flex items-center justify-center">
            {/* Language Switcher - Top Right */}
            <div className="absolute top-8 right-8 z-20">
                <LanguageSwitcher />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Name - Large Serif Font, Medium Weight */}
                        <h1 className="font-serif text-6xl md:text-7xl font-medium text-white mb-6 tracking-wide">
                            {profile.name}
                        </h1>

                        {/* English Name - Smaller Sans-serif */}
                        <p className="font-sans text-xl md:text-2xl text-gray-300 mb-8 tracking-widest uppercase">
                            {profile.nameEN}
                        </p>

                        <div className="w-16 h-px bg-gray-500 mx-auto mb-8"></div>

                        {/* Subtitle */}
                        <p className="font-sans text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            {t("subtitle")}
                        </p>
                    </motion.div>

                    {/* Contact Info - Minimal Style - Increased Spacing */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-gray-400 text-sm tracking-wider font-light"
                    >
                        <a
                            href={`mailto:${profile.email}`}
                            className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-gray-500 pb-0.5"
                        >
                            {profile.email}
                        </a>

                        <a
                            href={`https://${profile.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-gray-500 pb-0.5"
                        >
                            LinkedIn
                        </a>

                        <a
                            href={`tel:${profile.phone}`}
                            className="hover:text-white transition-colors duration-300 border-b border-transparent hover:border-gray-500 pb-0.5"
                        >
                            {profile.phone}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
