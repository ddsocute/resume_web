"use client";

import { useState } from "react";

interface FileItem {
    title: string;
    url: string;
    description: string;
    type?: string;
}

interface PDFViewerProps {
    files: FileItem[];
}

export default function PDFViewer({ files }: PDFViewerProps) {
    const [activeFileIndex, setActiveFileIndex] = useState(0);
    const activeFile = files[activeFileIndex];

    if (!files || files.length === 0) return null;

    return (
        <div className="w-full bg-white border border-gray-100 shadow-sm overflow-hidden flex flex-col">
            {/* Header with Tabs */}
            <div className="bg-gray-50 border-b border-gray-100 overflow-x-auto">
                <div className="flex">
                    {files.map((file, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveFileIndex(index)}
                            className={`
                                relative px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors
                                ${activeFileIndex === index
                                    ? "text-[#0A192F] bg-white border-t-2 border-t-[#0A192F]"
                                    : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"}
                            `}
                        >
                            {file.title}
                        </button>
                    ))}
                </div>
            </div>

            {/* Toolbar / Info */}
            <div className="px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100">
                <div>
                    <h4 className="font-serif text-lg font-medium text-[#0A192F]">
                        {activeFile.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                        {activeFile.description}
                    </p>
                </div>
                <div className="shrink-0">
                    <a
                        href={activeFile.url}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#0A192F] bg-white border border-[#0A192F] hover:bg-gray-50 transition-colors shadow-sm"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF
                    </a>
                </div>
            </div>

            {/* Viewer Stage */}
            <div className="relative w-full h-[600px] md:h-[800px] bg-gray-100">
                <iframe
                    src={`${activeFile.url}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="absolute inset-0 w-full h-full border-0"
                    title={activeFile.title}
                />

                {/* Fallback Overlay for Mobile or blocked iframes */}
                <div className="absolute inset-x-0 bottom-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent h-12" />
            </div>

            <div className="bg-gray-50 px-6 py-2 text-xs text-center text-gray-400 font-mono border-t border-gray-100">
                Swipe to scroll • Click 'Download' for full version
            </div>
        </div>
    );
}
