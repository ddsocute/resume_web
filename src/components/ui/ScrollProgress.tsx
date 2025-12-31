"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const SECTIONS = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "extracurricular", label: "Activities" },
    { id: "awards", label: "Awards" },
];

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = SECTIONS.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                if (section) {
                    const top = section.offsetTop;
                    const height = section.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed right-0 top-0 bottom-0 w-12 z-50 hidden lg:flex flex-col justify-center items-center pointer-events-none">
            {/* Background Line */}
            <div className="absolute right-6 top-0 bottom-0 w-[2px] bg-gray-100 h-full" />

            {/* Progress Line */}
            <motion.div
                className="absolute right-6 top-0 w-[2px] bg-[#0A192F] origin-top"
                style={{ scaleY, height: "100%" }}
            />

            {/* Section Indicators */}
            <div className="relative h-full flex flex-col justify-center gap-12 pr-6">
                {SECTIONS.map((section) => (
                    <motion.div
                        key={section.id}
                        initial={false}
                        animate={{
                            opacity: activeSection === section.id ? 1 : 0,
                            x: activeSection === section.id ? -10 : 20
                        }}
                        transition={{ duration: 0.3 }}
                        className="fixed right-10 flex items-center justify-end"
                    // Position roughly where the section is? 
                    // No, the prompt says "annotate the CURRENT section name nearby". 
                    // A fixed display of the current section next to the bar is better.
                    >
                        <span className="font-mono text-xs font-bold text-[#0A192F] tracking-widest uppercase bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
                            {section.label}
                        </span>
                        <div className="w-2 h-[2px] bg-[#0A192F] ml-2"></div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
