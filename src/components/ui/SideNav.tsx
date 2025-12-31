"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const SECTIONS = [
    { id: "education", key: "education" },
    { id: "experience", key: "experience" },
    { id: "extracurricular", key: "projects" },
    { id: "awards", key: "awards" },
    { id: "skills", key: "skills" },
];

export default function SideNav() {
    const [activeSection, setActiveSection] = useState<string>("");
    const t = useTranslations('Nav');

    useEffect(() => {
        const handleScroll = () => {
            const scrollMiddle = window.scrollY + window.innerHeight / 3;

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
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: "smooth"
            });
        }
    };

    return (
        <nav className="sticky top-24 self-start">
            <div className="flex flex-col gap-5 relative pl-4 border-l border-gray-200">
                {SECTIONS.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className="group relative text-left focus:outline-none"
                        >
                            {/* Vertical Highlight Line - 1px wide, 20px long */}
                            {isActive && (
                                <motion.div
                                    layoutId="sideNavIndicator"
                                    className="absolute -left-[17px] top-0 w-[1px] h-5 bg-[#0A192F]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}

                            <span
                                className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-300 ${isActive ? "text-[#0A192F] font-medium" : "text-gray-400 group-hover:text-gray-600"
                                    }`}
                            >
                                {t(section.key)}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
