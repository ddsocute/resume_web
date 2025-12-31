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
        <section id="hero" className="relative bg-[#0A192F] text-white min-h-[95vh] flex items-center justify-center overflow-hidden">
            {/* Language Switcher */}
            <div className="absolute top-8 right-8 z-20">
                <LanguageSwitcher />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column (Text): lg:col-span-7 */}
                    <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-center lg:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Subtitle - Mono & Tracking Widest - The "Tag" */}
                            <p className="font-mono text-sm pl-1 lg:pl-0 text-blue-200 uppercase tracking-widest mb-6 block w-full">
                                {t("subtitle")}
                            </p>

                            {/* Name - Huge Typography */}
                            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium text-white mb-2 leading-none tracking-tight">
                                {profile.name}
                            </h1>

                            {/* Horizontal Line Indicator for details */}
                            <div className="w-32 h-[2px] bg-white/20 my-10 mx-auto lg:mx-0"></div>

                            {/* Introduction / Impact Line */}
                            <p className="font-sans text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light mb-12">
                                Integrating <span className="text-white font-medium">Financial Rigor</span> with <span className="text-white font-medium">AI Intelligence</span> to quantify value and drive strategic innovation.
                            </p>

                            {/* Contact Links */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                                <a
                                    href={`mailto:${profile.email}`}
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="p-3 rounded-sm bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="font-mono text-sm tracking-wider uppercase">Email</span>
                                </a>

                                <a
                                    href={`https://${profile.linkedin}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="p-3 rounded-sm bg-white/5 border border-white/10 group-hover:bg-[#0077b5] group-hover:border-[#0077b5] group-hover:text-white transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                    <span className="font-mono text-sm tracking-wider uppercase">LinkedIn</span>
                                </a>

                                <a
                                    href={`tel:${profile.phone}`}
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                >
                                    <div className="p-3 rounded-sm bg-white/5 border border-white/10 group-hover:bg-green-700 group-hover:border-green-700 group-hover:text-white transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="font-mono text-sm tracking-wider uppercase">Phone</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column (Visual): lg:col-span-5 */}
                    <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end relative items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            className="relative w-full max-w-md aspect-[4/5]"
                        >
                            {/* Glassmorphism Container */}
                            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl z-0 transform translate-x-4 translate-y-4"></div>

                            {/* Image Container with Micro-border */}
                            <div className="relative w-full h-full bg-[#050f1e] overflow-hidden border border-gray-700 z-10 shadow-2xl">
                                <Image
                                    src={profile.avatarUrl ?? "/images/profile.png"}
                                    alt={profile.name}
                                    fill
                                    className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-700"
                                    priority
                                />
                                {/* Cinematic Grain/Overlay */}
                                <div className="absolute inset-0 bg-[#0A192F]/20 mix-blend-overlay"></div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Background Texture/Noise could be added here for more texture */}
        </section>
    );
}
