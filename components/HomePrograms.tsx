"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sun } from "lucide-react";

/* Scalloped cloud edge (top). Bottom edge reuses it flipped. */
const CloudEdge = ({ flip = false }: { flip?: boolean }) => (
  <svg
    viewBox="0 0 1200 90"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={`block h-14 w-full sm:h-20 lg:h-24 ${flip ? "rotate-180" : ""}`}
  >
    <path
      d="M0 90 V62 Q30 22 80 42 Q110 2 175 30 Q215 -6 280 26 Q330 0 385 32 Q430 4 495 28 Q545 -4 610 30 Q660 6 715 34 Q765 0 830 28 Q880 4 935 32 Q985 -2 1050 30 Q1100 8 1145 38 Q1180 20 1200 46 V90 Z"
      fill="#EEF0FB"
    />
  </svg>
);

export type ProgramItem = {
  id: string;
  title: string;
  ageBadge: string;
  description: string;
  duration: string;
  image: string;
  alt: string;
  bgHex: string;
  borderHex: string;
  clipId: string;
  borderRadius: string;
};

const homeProgramsList: ProgramItem[] = [
  {
    id: "playgroup",
    title: "Play Group Program",
    ageBadge: "3-5 Years",
    description:
      "Fun-based learning through games, music, and activities to develop social skills and confidence.",
    duration: "Duration : 2.5 Hr",
    image: "/programs/creative_play_lab.jpg",
    alt: "Play Group Program with kids learning together",
    bgHex: "#EEF2FD", // Soft Lavender Purple/Blue
    borderHex: "#D0DCFC",
    clipId: "irregular-clip-1",
    borderRadius: "44% 56% 50% 50% / 55% 45% 55% 45%",
  },
  {
    id: "nursery",
    title: "Nursery Program",
    ageBadge: "7-10 Years",
    description:
      "Fun-based learning through games, music, and activities to develop social skills and confidence.",
    duration: "Duration : 2.5 Hr",
    image: "/programs/artists_workshop.jpg",
    alt: "Nursery Program with hands-on activities",
    bgHex: "#FFF6E5", // Warm Sunshine Yellow
    borderHex: "#FDE6BA",
    clipId: "irregular-clip-2",
    borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%",
  },
  {
    id: "kindergarten",
    title: "Kindergarten (KG) Program",
    ageBadge: "10-12 Years",
    description:
      "Fun-based learning through games, music, and activities to develop social skills and confidence.",
    duration: "Duration : 2.5 Hr",
    image: "/programs/stem_explorers.jpg",
    alt: "Kindergarten Program with teacher and kids",
    bgHex: "#E2F6ED", // Soft Mint Green
    borderHex: "#C4EED8",
    clipId: "irregular-clip-3",
    borderRadius: "48% 52% 46% 54% / 54% 46% 54% 46%",
  },
  {
    id: "daycare",
    title: "Day Care & Toddler Club",
    ageBadge: "2-6 Years",
    description:
      "Safe, stimulating ecosystem with sensory play, nutritious routine, and active recreational care.",
    duration: "Duration : 2.5 Hr",
    image: "/programs/storytellers_phonics.jpg",
    alt: "Day Care and Toddler Club",
    bgHex: "#E5F3FD", // Soft Sky Blue
    borderHex: "#C6E4FA",
    clipId: "irregular-clip-1",
    borderRadius: "52% 48% 55% 45% / 48% 52% 48% 52%",
  },
  {
    id: "creative-story",
    title: "Creative Story & Arts",
    ageBadge: "3-7 Years",
    description:
      "A vibrant journey into imaginative painting, clay crafts, rhythm, and expressive story theatrics.",
    duration: "Duration : 2.5 Hr",
    image: "/why_choose_our_school.jpg",
    alt: "Creative Story and Arts",
    bgHex: "#F4EEFD", // Soft Lilac Purple
    borderHex: "#E0D4FA",
    clipId: "irregular-clip-2",
    borderRadius: "46% 54% 48% 52% / 52% 48% 54% 46%",
  },
];

const ProgramCard = ({ program }: { program: ProgramItem }) => (
  <article className="group relative flex flex-col items-center pb-5 select-none">
    {/* Cloud-shaped card container */}
    <div className="relative flex w-full min-h-[50px] flex-col items-center px-5 pt-6 pb-9 text-center transition-all duration-300 group-hover:-translate-y-1.5">
      {/* Cloud-shaped background SVG */}
      <svg
        viewBox="0 0 320 460"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full drop-shadow-sm transition-all duration-300 group-hover:drop-shadow-md"
      >
        <path
          d="M 105 32 C 120 14, 200 14, 215 32 C 245 18, 280 26, 300 62 C 316 100, 316 170, 306 210 C 316 255, 316 335, 300 376 C 282 418, 235 438, 185 426 C 172 420, 148 420, 135 426 C 85 438, 38 418, 20 376 C 4 335, 4 255, 14 210 C 4 170, 4 100, 20 62 C 40 26, 75 18, 105 32 Z"
          fill={program.bgHex}
          stroke={program.borderHex}
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Irregular shaped inner image container */}
      <div
        className="relative z-10 w-full aspect-[4/3] overflow-hidden shadow-xs border border-white/80 bg-white"
        style={{
          clipPath: `url(#${program.clipId})`,
          borderRadius: program.borderRadius,
        }}
      >
        <Image
          src={program.image}
          alt={program.alt}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 220px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Age badge */}
      <span className="relative z-10 -mt-3.5 inline-flex items-center rounded-md bg-[#F6A04D] px-3.5 py-1 text-[11px] font-bold text-white shadow-sm">
        {program.ageBadge}
      </span>

      {/* Title */}
      <h3 className="relative z-10 mt-3 font-outfit text-lg font-extrabold leading-tight text-[#0F2040]">
        {program.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mt-2 px-1 text-xs font-medium leading-relaxed text-slate-600 line-clamp-3">
        {program.description}
      </p>

      {/* Duration badge matching screenshot (NO seats tab) */}
      <span className="relative z-10 mt-3 inline-flex items-center rounded-md bg-white/85 px-3 py-1 text-[11px] font-bold text-slate-600 shadow-xs">
        {program.duration}
      </span>
    </div>

    {/* Arrow circular button sitting at bottom center */}
    <Link
      href="/Programs"
      aria-label={`Explore ${program.title}`}
      className="absolute bottom-0 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[#0F2040] shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#F65A36] hover:text-white"
      style={{ backgroundColor: program.bgHex }}
    >
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  </article>
);

export default function HomePrograms() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Maximum slide pages: 3 (shows items 0-2, 1-3, 2-4)
  const maxPages = 3;

  // Auto-move rotation through program pages
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setPageIndex((prev) => (prev + 1) % maxPages);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused, maxPages]);

  return (
    <section
      id="pathways"
      aria-label="Our Programs and Classes"
      className="relative w-full py-10 sm:py-14"
    >
      {/* SVG Defs for irregular image clipping */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="irregular-clip-1" clipPathUnits="objectBoundingBox">
            <path d="M 0.05 0.22 C 0.08 0.08, 0.25 0.03, 0.42 0.03 C 0.58 0.01, 0.75 0.05, 0.95 0.18 C 0.99 0.35, 1.00 0.65, 0.95 0.85 C 0.88 0.98, 0.70 0.98, 0.50 0.96 C 0.30 0.98, 0.12 0.98, 0.05 0.85 C 0.00 0.65, 0.01 0.35, 0.05 0.22 Z" />
          </clipPath>
          <clipPath id="irregular-clip-2" clipPathUnits="objectBoundingBox">
            <path d="M 0.06 0.20 C 0.15 0.06, 0.32 0.08, 0.45 0.04 C 0.60 0.00, 0.80 0.02, 0.94 0.16 C 1.00 0.32, 0.98 0.68, 0.95 0.86 C 0.90 0.98, 0.72 0.96, 0.52 0.98 C 0.28 0.96, 0.10 0.98, 0.05 0.86 C 0.00 0.68, 0.00 0.32, 0.06 0.20 Z" />
          </clipPath>
          <clipPath id="irregular-clip-3" clipPathUnits="objectBoundingBox">
            <path d="M 0.06 0.24 C 0.15 0.08, 0.28 0.05, 0.38 0.10 C 0.48 0.02, 0.62 0.02, 0.72 0.10 C 0.82 0.05, 0.92 0.08, 0.95 0.24 C 1.00 0.40, 0.99 0.65, 0.94 0.86 C 0.88 0.98, 0.70 0.97, 0.50 0.98 C 0.30 0.97, 0.12 0.98, 0.06 0.86 C 0.01 0.65, 0.00 0.40, 0.06 0.24 Z" />
          </clipPath>
        </defs>
      </svg>

      <CloudEdge />

      {/* Cloud body */}
      <div className="relative bg-[#EEF0FB] py-6 sm:py-8">
        {/* Static heading */}
        <div className="mt-2 flex w-full justify-center overflow-hidden">
          <div className="flex shrink-0 items-center gap-5 sm:gap-8 whitespace-nowrap">
            <Sun className="hidden md:block h-8 w-8 lg:h-10 lg:w-10 text-[#F6A04D]" strokeWidth={2.5} />
            <h2 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1F3A5A]">
              Our Programs
            </h2>
          </div>
        </div>

        {/* Cards panel with pause on hover */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative mx-auto mt-10 md:mx-[150px] sm:mt-12 max-w-12xl px-4 sm:px-8"
        >
          {/* Tiger sticker on left */}
          <div
            aria-hidden="true"
            className="absolute -left-2 top-1/3 hidden lg:flex h-14 w-14 -translate-x-full items-center justify-center rounded-full bg-[#FFE3B8] text-3xl shadow-md"
          >
            🐯
          </div>

          {/* Star sticker on right */}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="absolute -right-4 bottom-10 hidden lg:block h-12 w-12 translate-x-full rotate-12 drop-shadow-md"
          >
            <path
              d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z"
              fill="#FFB347"
              stroke="#F65A36"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative">
            {/* Offset dashed outline */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2 translate-y-3 rotate-[1.2deg] rounded-[3rem] border-2 border-dashed border-[#F6A04D]/70"
            />

            {/* White panel */}
            <div className="relative rounded-[3rem] bg-[#FBFAFF]/95 px-5 py-8 sm:px-8 sm:py-10 shadow-[0_20px_40px_-25px_rgba(15,32,64,0.25)]">
              <div className="flex items-center gap-4 lg:gap-6">
                {/* Desktop: 3-up auto-moving slider container */}
                <div className="hidden lg:block flex-1 overflow-hidden">
                  <motion.div
                    className="flex gap-6"
                    animate={{
                      x: `calc(-${pageIndex} * ((100% - 48px) / 3 + 24px))`,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  >
                    {homeProgramsList.map((program) => (
                      <div
                        key={program.id}
                        className="w-[calc((100%-48px)/3)] shrink-0"
                      >
                        <ProgramCard program={program} />
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Mobile / tablet: auto-moving slider */}
                <div className="block lg:hidden flex-1 overflow-hidden">
                  <motion.div
                    className="flex gap-4 sm:gap-6"
                    animate={{
                      x: `calc(-${pageIndex % homeProgramsList.length} * 100%)`,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  >
                    {homeProgramsList.map((program) => (
                      <div key={program.id} className="w-full shrink-0">
                        <ProgramCard program={program} />
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Vertical pagination dots matching screenshot */}
                <div className="flex flex-col items-center gap-2.5 shrink-0 pl-1">
                  {[0, 1, 2].map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setPageIndex(i)}
                      aria-label={`Show program slide ${i + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${pageIndex === i
                        ? "bg-[#F6A04D] scale-125 shadow-xs"
                        : "bg-[#FCE6D2] hover:bg-[#F6A04D]/60"
                        }`}
                    />
                  ))}
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

