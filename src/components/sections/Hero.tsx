"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { resumeData } from "@/data/resume";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";

export default function Hero() {
    const { profile } = resumeData;
    const t = useTranslations("hero");

    return (
        <section className="relative bg-[#0A192F] text-white min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Language Switcher - Top Right */}
            <div className="absolute top-8 right-8 z-20">
                <LanguageSwitcher />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">

                    {/* Left Column: Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Name - Large Serif Font */}
                            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-4 tracking-wide leading-tight">
                                {profile.name}
                            </h1>

                            {/* English Name - Monospaced for Precision */}
                            <p className="font-mono text-xl md:text-2xl text-gray-400 mb-8 tracking-widest uppercase">
                                {profile.nameEN}
                            </p>

                            <div className="w-24 h-px bg-gray-600 mx-auto lg:mx-0 mb-8"></div>

                            {/* Subtitle */}
                            <p className="font-sans text-lg text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                                {t("subtitle")}
                            </p>

                            {/* Contact Info */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-gray-400 text-sm tracking-wider font-mono">
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
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                        >
                            <div className="w-full h-full relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/20">
                                <Image
                                    src={profile.avatarUrl ?? "/images/profile.png"} // Fallback or use updated path if avatarUrl in resume.ts isn't updated
                                    alt={profile.name}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                {/* Overlay gradient for better blending */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
