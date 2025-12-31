import { ResumeData } from "@/types";

export const resumeData = {
    profile: {
        name: "林靖迪",
        nameEN: "JING-DI, LIN",
        email: "111301029@g.nccu.edu.tw",
        phone: "(+886)912-992213",
        linkedin: "www.linkedin.com/in/jing-di-lin",
        avatarUrl: "/logo/profile_photo.png",
    },

    education: ["nccu-2022"],

    internships: ["o-bank-2025", "huatai-2025", "tier-2025"],

    extracurriculars: ["tmba-2025", "mf-club-2024-leader", "mf-club-2024-member", "nccu-ambassador-2024", "nccu-rugby-2023", "tmba-2023-algo"],

    projects: [
        {
            id: "stablecoin-report",
            title: "Stablecoin Market Report",
            associatedWithId: "o-bank-2025",
            category: "Finance",
            links: []
        }
    ],

    awards: ["ai-cup-2024", "mbs-2024", "gtsm-2023"],

    skillCategories: ["valuation", "certifications", "programming", "databases", "languages"]
};
