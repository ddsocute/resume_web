// Core Data Types for Portfolio

export interface Profile {
    name: string;
    nameEN: string;
    title: string;
    email: string;
    phone: string;
    location?: string;
    linkedin: string;
    avatarUrl: string;
    summary: string;
}

export interface Education {
    id: string;
    school: string;
    degree: string;
    program?: string;
    startDate: string;
    endDate: string;
    achievements: string[];
    courses: string[];
}

export interface JobExperience {
    id: string;
    company: string;
    role: string;
    location?: string;
    startDate: string;
    endDate: string;
    description: string[];
    logoUrl?: string;
}

// Detailed Experience Types for Individual Pages
export interface ExperienceMetric {
    label: string;
    value: string;
    icon?: string;
    description?: string;
}

export interface ExperienceAchievement {
    title: string;
    description: string;
    impact?: string;
    metrics?: string[];
    category: "quantitative" | "qualitative" | "recognition" | "leadership";
}

export interface ExperienceProject {
    id: string;
    title: string;
    description: string;
    role: string;
    technologies: string[];
    deliverables: string[];
    outcomes: string[];
    timeline?: string;
}

export interface DetailedExperience extends JobExperience {
    overview: string;
    responsibilities: string[];
    insights?: string; // New field for "心得見解"
    keyAchievements: ExperienceAchievement[];
    projects: ExperienceProject[];
    skills: string[];
    metrics: ExperienceMetric[];
    companyDescription?: string;
    department?: string;
    teamSize?: string;
    files?: {
        title: string;
        url: string;
        description: string;
        type?: string;
    }[];
    images?: {
        url: string;
        caption: string;
    }[];
}

export interface Project {
    id: string;
    title: string;
    associatedWithId: string; // Links to JobExperience.id or Education.id
    category: "Finance" | "Tech" | "Research" | "Other";
    description: string;
    technologies?: string[];
    links?: {
        label: string;
        url: string;
        type: "pdf" | "link" | "image";
    }[];
    thumbnailUrl?: string;
}

export interface SkillGroup {
    category: string;
    items: string[];
}

export interface Award {
    id: string;
    title: string;
    organization: string;
    date: string;
    achievement: string;
    rank?: string;
}

// Full Resume Data Structure
export interface ResumeData {
    profile: Profile;
    education: Education[];
    experience: JobExperience[];
    projects: Project[];
    skills: SkillGroup[];
    awards: Award[];
}
