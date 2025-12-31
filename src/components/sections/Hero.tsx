"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { resumeData } from "@/data/resume";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";

export default function Hero() {
    const { profile } = resumeData;
    const t = useTranslations("hero");

    return (
        <section id="hero" className="relative bg-[#FAFAFA] min-h-[70vh] flex items-center justify-center py-20 lg:py-32">
            {/* Language Switcher */}
            <div className="absolute top-8 right-8 z-20">
                <LanguageSwitcher />
            </div>

            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        {/* Name - Flagship Scale */}
                        <h1 className="font-serif text-6xl md:text-7xl font-medium text-[#0A192F] mb-6 leading-[0.95] tracking-tight">
                            {profile.name}
                        </h1>

                        {/* Subtitle - Rigorous Mono */}
                        <p className="font-mono text-xs md:text-sm text-[#0A192F] uppercase tracking-[0.2em] mb-10 opacity-80">
                            Finance x AI Strategy | NCCU International Business
                        </p>

                        {/* Contact Actions */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <a
                                href={`mailto:${profile.email}`}
                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0A192F] rounded-sm text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all duration-300 group"
                            >
                                <Mail className="w-4 h-4" />
                                <span className="font-mono text-xs tracking-wider uppercase">Email</span>
                            </a>

                            <a
                                href={`https://${profile.linkedin}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#0A192F] rounded-sm text-[#0A192F] hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300"
                            >
                                <Linkedin className="w-4 h-4" />
                                <span className="font-mono text-xs tracking-wider uppercase">LinkedIn</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Magazine-style Portrait */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-sm aspect-[3/4] border border-gray-100 bg-white shadow-lg overflow-hidden">
                            <Image
                                src={profile.avatarUrl ?? "/images/profile.png"}
                                alt={profile.name}
                                fill
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
