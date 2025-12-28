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
