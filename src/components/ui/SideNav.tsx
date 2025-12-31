"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const SECTIONS = [
    { id: "hero", label: "Home" }, // Though often Hero isn't in TOC, user might want it. Let's include or exclude based on preference. User said "Education, Experience..." let's keep Home for completeness or start from Education. Prompt said "Education, Experience, Projects, Awards, Skills". I will Stick to user list + Home implicitly or just the content sections? Let's add Home but maybe hide it if user only listed content. The prompt explicitly listed "Education, Experience, Projects, Awards, Skills". I'll stick to that list but mapped to actual IDs.
    // Actual IDs in page: education, experience, extracurricular (Projects?), awards, skills.
    // Prompt: Education, Experience, Projects, Awards, Skills. 
    // My mapping: 
    // Education -> education
    // Experience -> experience
    // Projects -> extracurricular (Assuming extracurricular acts as projects based on previous context, or I should rename? previous context showed 'Projects' were often 'Extracurricular' or 'Academic Paper'. I'll map 'Projects' to 'extracurricular' for now or 'experience' if mixed. The file is 'Extracurricular.tsx'.
    // Awards -> awards
    // Skills -> skills
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "extracurricular", label: "Projects" }, // Mapping Extracurricular to Projects as per "Projects" label in prompt
    { id: "awards", label: "Awards" },
    { id: "skills", label: "Skills" },
];

export default function SideNav() {
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            // Logic to determine active section based on scroll position
            // Center of viewport triggering the active state
            const scrollMiddle = window.scrollY + window.innerHeight / 2;

            // Find which section is currently active
            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollMiddle >= top && scrollMiddle < top + height) {
                        setActiveSection(section.id);
                        return;
                    }
                }
            }
            // Fallback for top of page
            if (window.scrollY < window.innerHeight / 2) {
                setActiveSection(""); // Or 'hero' if we tracked it
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 items-end pointer-events-auto">
            {SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                return (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="group flex items-center gap-4 focus:outline-none"
                    >
                        <span
                            className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${isActive ? "text-[#0A192F] font-bold" : "text-gray-400 group-hover:text-gray-600"
                                }`}
                        >
                            {section.label}
                        </span>

                        {/* Indicator Line/Dot */}
                        <div className="relative flex items-center justify-center w-6">
                            {isActive && (
                                <motion.div
                                    layoutId="activeIndicator"
                                    className="absolute w-full h-[2px] bg-[#0A192F]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <div className={`w-1 h-1 rounded-full bg-gray-300 transition-colors ${isActive ? 'bg-[#0A192F]' : ''}`} />
                        </div>
                    </button>
                );
            })}
        </div>
    );
}
