"use client";

import { DetailedExperience } from "@/types";
import Link from "next/link";

interface DetailedExperiencePageProps {
    experience: DetailedExperience;
}

export default function DetailedExperiencePage({ experience }: DetailedExperiencePageProps) {
    return (
        <div className="min-h-screen bg-white p-10">
            <h1 className="text-4xl text-black">{experience.company}</h1>
            <p className="text-gray-500">{experience.role}</p>
            <Link href="/" className="text-blue-500 mt-4 block">Back</Link>
        </div>
    );
}
