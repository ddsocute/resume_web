"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { resumeData } from "@/data/resume";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Hero() {
    const { profile } = resumeData;
    const t = useTranslations("hero");

    return (
        <section className="relative bg-[#1e3a5f] text-white">
            {/* Language Switcher - Top Right */}
            <div className="absolute top-6 right-6 z-20">
                <LanguageSwitcher />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Name - Large Serif Font */}
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
                            {profile.name}
                        </h1>

                        {/* English Name - Smaller Sans-serif */}
                        <p className="font-sans text-lg md:text-xl text-white/90 mb-4 tracking-wider">
                            {profile.nameEN}
                        </p>

                        {/* Subtitle */}
                        <p className="font-sans text-base md:text-lg text-white/80 mb-8">
                            {t("subtitle")}
                        </p>
                    </motion.div>

                    {/* Contact Info - Minimal Style */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-6 text-white/70 text-sm"
                    >
                        <a
                            href={`mailto:${profile.email}`}
                            className="hover:text-white transition-colors duration-200"
                        >
                            {profile.email}
                        </a>

                        <span className="text-white/30">|</span>

                        <a
                            href={`https://${profile.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors duration-200"
                        >
                            LinkedIn
                        </a>

                        <span className="text-white/30">|</span>

                        <a
                            href={`tel:${profile.phone}`}
                            className="hover:text-white transition-colors duration-200"
                        >
                            {profile.phone}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
