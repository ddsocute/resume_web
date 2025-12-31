"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { resumeData } from "@/data/resume";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
import { Mail, Linkedin, Phone } from "lucide-react";

export default function Hero() {
    const { profile } = resumeData;
    const t = useTranslations("hero");

    return (
        <section id="hero" className="relative bg-[#0A192F] text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Language Switcher - Top Right */}
            <div className="absolute top-8 right-8 z-20">
                <LanguageSwitcher />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">

                    {/* Left Column: Text Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Name - Large Serif Font */}
                            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-white mb-6 md:mb-8 tracking-tight leading-none">
                                {profile.name}
                            </h1>

                            {/* Value Proposition / Subtitle - Mono & Tagged */}
                            <div className="flex justify-center lg:justify-start mb-8 md:mb-10">
                                <span className="font-mono text-sm md:text-base text-blue-200 bg-blue-900/30 border border-blue-800/50 px-4 py-2 rounded-full tracking-widest uppercase backdrop-blur-sm">
                                    {t("subtitle")}
                                </span>
                            </div>

                            {/* English Name - Subtle */}
                            <p className="font-sans text-xl text-gray-400 mb-10 tracking-widest uppercase opacity-60 hidden lg:block">
                                {profile.nameEN}
                            </p>

                            {/* Contact Icons - Horizontal Row */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-[#0A192F] transition-all duration-300 relative"
                                    aria-label="Email"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-mono text-gray-300 transition-opacity whitespace-nowrap bg-[#0A192F]/80 px-2 py-1 rounded pointer-events-none">
                                        Email
                                    </span>
                                </a>

                                <a
                                    href={`https://${profile.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 relative"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-mono text-gray-300 transition-opacity whitespace-nowrap bg-[#0A192F]/80 px-2 py-1 rounded pointer-events-none">
                                        LinkedIn
                                    </span>
                                </a>

                                <a
                                    href={`tel:${profile.phone}`}
                                    className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-green-600 hover:border-green-600 hover:text-white transition-all duration-300 relative"
                                    aria-label="Phone"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs font-mono text-gray-300 transition-opacity whitespace-nowrap bg-[#0A192F]/80 px-2 py-1 rounded pointer-events-none">
                                        Phone
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Profile Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[28rem] lg:h-[28rem]"
                        >
                            <div className="w-full h-full relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl shadow-black/30">
                                <Image
                                    src={profile.avatarUrl ?? "/images/profile.png"}
                                    alt={profile.name}
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                                {/* Overlay gradient for better blending */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/20 to-transparent"></div>
                            </div>

                            {/* Decorative Layer - Abstract Tech/Finance Feel */}
                            <div className="hidden lg:block absolute -z-10 top-6 -right-6 w-full h-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
