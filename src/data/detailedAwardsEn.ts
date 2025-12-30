
import { DetailedExperience } from "@/types";

export const detailedAwardsEn: Record<string, DetailedExperience> = {
    "ai-cup-2024": {
        id: "ai-cup-2024",
        company: "Ministry of Education",
        role: "2024 AI CUP Medical QA Contest",
        startDate: "2024",
        endDate: "2024",
        location: "Taiwan",
        department: "AI Competition",
        companyDescription: "A national AI competition organized by the Ministry of Education to cultivate AI talent.",
        overview: "Participated in the Medical Traditional Chinese Question Answering task using NLP models like BERT. Improved accuracy through data augmentation and fine-tuning, achieving a National Honorable Mention (Top 6%).",
        description: [
            "Topic: Medical Traditional Chinese QA",
            "Tech: BERT-based NLP model fine-tuning",
            "Result: National Honorable Mention (Top 6%)"
        ],
        responsibilities: [
            "Designed NLP model architecture and selection",
            "Performed medical data preprocessing and cleaning",
            "Trained and fine-tuned BERT models",
            "Analyzed error cases to optimize performance"
        ],
        keyAchievements: [
            {
                title: "National Honorable Mention",
                description: "Achieved Top 6% accuracy in a highly competitive national contest.",
                impact: "Demonstrated strong NLP capabilities",
                metrics: ["Top 6%", "Honorable Mention"],
                category: "recognition"
            }
        ],
        projects: [],
        skills: ["NLP", "Python", "PyTorch", "BERT", "Data Analysis"],
        metrics: []
    },
    "gtsm-2023": {
        id: "gtsm-2023",
        company: "Taipei Exchange (TPEx)",
        role: "2023 TPEx Securities Elite Seed Camp",
        startDate: "2023",
        endDate: "2023",
        location: "Taipei",
        department: "Finance Competition",
        companyDescription: "Taipei Exchange is a key securities market in Taiwan, focusing on SMEs and emerging industries.",
        overview: "Participated in the seed camp to study securities market operations. In the final portfolio competition, combined macroeconomic analysis with stock valuation to propose a winning investment strategy, securing the Championship.",
        description: [
            "Topic: Securities Portfolio Simulation",
            "Strategy: Top-Down Macro Analysis + GARP",
            "Result: Champion (1st Place)"
        ],
        responsibilities: [
            "Analyzed macroeconomic trends for asset allocation",
            "Screened high-potential stocks in the TPEx market",
            "Constructed portfolio and backtested risk",
            "Led the final presentation structure"
        ],
        keyAchievements: [
            {
                title: "Champion",
                description: "Won 1st place among many teams with a solid analysis logic and portfolio performance.",
                impact: "Highly praised by judges for investment logic",
                metrics: ["Champion", "1st Place"],
                category: "recognition"
            }
        ],
        projects: [],
        skills: ["Investment Analysis", "Portfolio Management", "Team Leadership", "Presentation"],
        metrics: []
    },
    "mbs-2024": {
        id: "mbs-2024",
        company: "MBS Business Simulation Contest",
        role: "2024 MBS Business Simulation Contest",
        startDate: "2024",
        endDate: "2024",
        location: "Taipei",
        department: "Business Competition",
        companyDescription: "MBS (Management Business Simulation) is a comprehensive business simulation competition.",
        overview: "Served as CEO in the competition, leading the team to formulate corporate strategies. Maintained a lead in multi-round simulations through market analysis, supply chain optimization, and precise marketing strategies.",
        description: [
            "Topic: Business Management Simulation",
            "Role: CEO & Strategy Formulation",
            "Result: Demonstrated Excellence"
        ],
        responsibilities: [
            "Formulated long-term corporate vision and competitive strategy",
            "Analyzed financial statements to optimize capital structure",
            "Coordinated decisions across production, marketing, and R&D departments",
            "Adjusted operational policies in response to market changes"
        ],
        keyAchievements: [
            {
                title: "Team Leadership",
                description: "Led a cross-functional team to collaborate efficiently under pressure.",
                impact: "Enhanced team cohesion and decision efficiency",
                metrics: ["CEO Role", "Cross-functional"],
                category: "leadership"
            }
        ],
        projects: [],
        skills: ["Business Strategy", "Financial Analysis", "Team Leadership", "Decision Making"],
        metrics: []
    }
};
