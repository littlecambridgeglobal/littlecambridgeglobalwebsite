"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    Compass,
    Heart,
    Sparkles,
    Award,
    Sun,
    Users,
} from "lucide-react";

/* Scalloped cloud edge for section transitions */
const CloudEdge = ({ flip = false }: { flip?: boolean }) => (
    <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        className={`block h-12 w-full sm:h-16 lg:h-20 ${flip ? "rotate-180" : ""}`}
    >
        <path
            d="M0 90 V62 Q30 22 80 42 Q110 2 175 30 Q215 -6 280 26 Q330 0 385 32 Q430 4 495 28 Q545 -4 610 30 Q660 6 715 34 Q765 0 830 28 Q880 4 935 32 Q985 -2 1050 30 Q1100 8 1145 38 Q1180 20 1200 46 V90 Z"
            fill="#F7F9FE"
        />
    </svg>
);

const pillars = [
    {
        title: "Child-Led Exploration",
        description:
            "Prepared Montessori environments that nurture innate focus, agency, and natural discipline.",
        icon: Compass,
        bgHex: "#EEF2FD", // Lavender/Purple
        borderHex: "#D0DCFC",
        badgeHex: "#5066D6",
    },
    {
        title: "Whole Child Harmony",
        description:
            "Social and emotional harmony valued equally alongside early mathematical logic and reading.",
        icon: Heart,
        bgHex: "#FFF6E5", // Sunshine Yellow
        borderHex: "#FDE6BA",
        badgeHex: "#E08518",
    },
    {
        title: "Gentle Mentors",
        description:
            "Global educators who observe, encourage, and guide with love without standardized pressure.",
        icon: Sparkles,
        bgHex: "#E2F6ED", // Mint Green
        borderHex: "#C4EED8",
        badgeHex: "#269A64",
    },
];

export default function OurstorySection() {
    return (
        <section
            id="our-story-section"
            aria-label="Our Story and Montessori Vision"
            className="relative w-full py-12 sm:py-16 overflow-hidden"
        >
            {/* SVG Defs for irregular clipping */}
            <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
                <defs>
                    <clipPath id="story-irregular-clip" clipPathUnits="objectBoundingBox">
                        <path d="M 0.08 0.20 C 0.12 0.06, 0.30 0.02, 0.50 0.01 C 0.70 0.01, 0.88 0.06, 0.94 0.20 C 1.00 0.35, 0.99 0.65, 0.94 0.84 C 0.86 0.98, 0.68 0.98, 0.50 0.96 C 0.32 0.98, 0.14 0.98, 0.06 0.84 C 0.00 0.65, 0.01 0.35, 0.08 0.20 Z" />
                    </clipPath>
                </defs>
            </svg>

            <CloudEdge />

            {/* Cloud body */}
            <div className="relative bg-[#F7F9FE] py-8 sm:py-12">
                {/* Pre-header tag & Headline */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs mb-3">
                        <BookOpen className="w-3.5 h-3.5 text-[#F65A36]" />
                        <span>Our Story • The Vision</span>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <Sun className="hidden sm:block h-7 w-7 text-[#F6A04D]" strokeWidth={2.5} />
                        <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1F3A5A] tracking-tight">
                            Where Learning Feels Like an Adventure
                        </h2>
                    </div>
                </div>

                {/* Main Content Container with playful offset dashed outline */}
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Cute Sticker Doodles */}
                    <div
                        aria-hidden="true"
                        className="absolute -left-3 top-1/4 hidden lg:flex h-14 w-14 -translate-x-full items-center justify-center rounded-full bg-[#FFE3B8] text-3xl shadow-md"
                    >
                        🦉
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute -right-3 bottom-1/4 hidden lg:flex h-12 w-12 translate-x-full items-center justify-center rounded-full bg-[#E2F6ED] text-2xl shadow-md"
                    >
                        🌱
                    </div>

                    <div className="relative">
                        {/* Offset dashed outline */}
                        <div
                            aria-hidden="true"
                            className="absolute inset-0 translate-x-2 translate-y-3 rotate-[0.8deg] rounded-[3rem] border-2 border-dashed border-[#F6A04D]/60"
                        />

                        {/* White card container */}
                        <div className="relative rounded-[3rem] bg-[#FBFAFF]/95 p-6 sm:p-10 lg:p-12 shadow-[0_20px_45px_-20px_rgba(15,32,64,0.18)]">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                                {/* Left Column (Col 7) */}
                                <div className="lg:col-span-7 space-y-6">
                                    <div>
                                        <span className="font-outfit text-xs sm:text-sm font-bold italic text-[#F65A36]">
                                            The Little Cambridge Foundation
                                        </span>
                                        <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2040] tracking-tight leading-tight mt-1">
                                            Turning Little Steps into Global Success.
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                                        At Little Cambridge Global, we step away from outdated institutional repetition. We believe every child is born with an absorbent, naturally curious mind. When you give children beautiful, tactile materials, passionate mentors who listen, and the freedom to explore at their own rhythm, extraordinary growth unfolds.
                                    </p>

                                    {/* 3 Core Pillars in Cloud/Pastel Cards (Purple, Yellow, Green) */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                                        {pillars.map((pillar, i) => {
                                            const IconComp = pillar.icon;
                                            return (
                                                <div
                                                    key={i}
                                                    className="group relative flex flex-col items-start p-4 rounded-3xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                                    style={{
                                                        backgroundColor: pillar.bgHex,
                                                        borderColor: pillar.borderHex,
                                                    }}
                                                >
                                                    <div
                                                        className="w-9 h-9 rounded-2xl flex items-center justify-center text-white shadow-xs mb-3 transition-transform duration-300 group-hover:scale-110"
                                                        style={{ backgroundColor: pillar.badgeHex }}
                                                    >
                                                        <IconComp className="w-4 h-4" />
                                                    </div>

                                                    <h4 className="font-outfit font-extrabold text-[#0F2040] text-sm sm:text-base mb-1 leading-tight">
                                                        {pillar.title}
                                                    </h4>

                                                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                                                        {pillar.description}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Dual Action Buttons */}
                                    <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                                        <Link href="/ourstory">
                                            <button className="inline-flex items-center gap-2 bg-[#0F2040] hover:bg-[#F65A36] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                                                <span>Discover Our Full Story</span>
                                                <ArrowRight className="w-4 h-4 text-[#F6A04D]" />
                                            </button>
                                        </Link>

                                        <Link href="/ourstory#messages">
                                            <button className="inline-flex items-center gap-2 bg-white hover:bg-[#FFEFE6] text-[#0F2040] hover:text-[#F65A36] border-2 border-slate-200 hover:border-[#F65A36]/40 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-full shadow-xs transition-all">
                                                <Users className="w-4 h-4 text-[#F65A36]" />
                                                <span>Meet Our Leadership</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Column (Col 5) - Irregular-Clipped Showcase Frame */}
                                <div className="lg:col-span-5 flex justify-center">
                                    <div className="relative w-full max-w-[400px]">
                                        {/* Cloud-shaped background for the showcase */}
                                        <div
                                            className="relative rounded-[2.5rem] p-6 sm:p-7 border-2 border-[#D0DCFC] shadow-soft flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#EEF2FD] via-[#F5F8FF] to-white"
                                        >
                                            {/* Top Pill Badge */}
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F2040] shadow-xs mb-4 border border-slate-200/80">
                                                <Award className="w-3.5 h-3.5 text-[#F65A36]" />
                                                <span>Curious Minds • Global Futures</span>
                                            </span>

                                            {/* Irregular Shaped Mascot Image Container */}
                                            <div
                                                className="relative w-full max-w-[280px] aspect-square overflow-hidden bg-white/90 p-2 shadow-xs border-2 border-white"
                                                style={{
                                                    clipPath: "url(#story-irregular-clip)",
                                                    borderRadius: "48% 52% 46% 54% / 54% 46% 54% 46%",
                                                }}
                                            >
                                                <Image
                                                    src="/mariamontesori.webp"
                                                    alt="Little Cambridge Story Owl with Book"
                                                    width={280}
                                                    height={280}
                                                    priority
                                                    className="object-contain w-full h-full drop-shadow-md transition-transform duration-500 hover:scale-105"
                                                />
                                            </div>

                                            {/* Montessori Quote Card */}
                                            <div className="mt-5 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-3.5 border border-slate-100 shadow-xs w-full text-center">
                                                <p className="font-outfit text-xs sm:text-sm font-extrabold text-[#0F2040] leading-snug">
                                                    &quot;Every child is born with an absorbent, curious mind.&quot;
                                                </p>
                                                <p className="text-[10px] sm:text-[11px] text-[#F65A36] font-extrabold uppercase tracking-wider mt-1">
                                                    Dr. Maria Montessori Philosophy
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CloudEdge flip />
        </section>
    );
}
