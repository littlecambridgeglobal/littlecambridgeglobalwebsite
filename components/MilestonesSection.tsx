"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  Heart,
  X,
  Phone,
  Calendar,
} from "lucide-react";

type Course = {
  id: string;
  category: "play" | "arts" | "stem" | "phonics" | "all";
  title: string;
  description: string;
  image: string;
  alt: string;
  bgClass: string;
  borderClass: string;
  ageBadge: string;
  seatsBadge: string;
  price: string;
  curriculumPoints: string[];
};

const courses: Course[] = [
  {
    id: "creative-play",
    category: "play",
    title: "Creative Play Lab",
    description:
      "Kids learn teamwork & imagination through hands-on play, building creativity, problem-solving, & friendships.",
    image: "/programs/creative_play_lab.jpg",
    alt: "Children building with colorful magnetic geometric tiles in Montessori play lab",
    bgClass: "bg-[#DDF0FD]",
    borderClass: "border-[#C8E5FB]",
    ageBadge: "Age: 3-6",
    seatsBadge: "Seats: 12",
    price: "$300",
    curriculumPoints: [
      "Magnetic 3D Geometry",
      "Social Empathy & Sharing",
      "Tactile Fine Motor Control",
      "Collaborative Problem Solving",
    ],
  },
  {
    id: "artists-workshop",
    category: "arts",
    title: "Little Artists Workshop",
    description:
      "A colorful journey into painting, crafts, & self-expression, sparking confidence, original, & discovery.",
    image: "/programs/artists_workshop.jpg",
    alt: "Young boy painting on a canvas easel in preschool art studio",
    bgClass: "bg-[#D8F6DE]",
    borderClass: "border-[#C1EED0]",
    ageBadge: "Age: 4-6",
    seatsBadge: "Seats: 10",
    price: "$320",
    curriculumPoints: [
      "Color Theory & Mixing",
      "Easel Canvas Techniques",
      "Clay Modeling & Textures",
      "Creative Self-Expression",
    ],
  },
  {
    id: "stem-explorers",
    category: "stem",
    title: "Mini STEM Explorers",
    description:
      "Fun experiments introducing science, numbers, & discovery, inspiring curiosity, innovation, and learning.",
    image: "/programs/stem_explorers.jpg",
    alt: "Two young kids observing slides through a microscope in early science discovery lab",
    bgClass: "bg-[#FEE5CF]",
    borderClass: "border-[#FCD6B6]",
    ageBadge: "Age: 5-8",
    seatsBadge: "Seats: 12",
    price: "$350",
    curriculumPoints: [
      "Kid Microscope Discovery",
      "Plant & Botany Cycles",
      "Sensory Balance & Scales",
      "Curiosity-Led Hypothesis",
    ],
  },
  {
    id: "storytellers-phonics",
    category: "phonics",
    title: "Little Storytellers & Phonics",
    description:
      "Interactive story adventures, phonetic rhythm, and speech expression that spark an enduring love for books & reading.",
    image: "/programs/storytellers_phonics.jpg",
    alt: "Group of children gathered reading a picture book in a cozy corner",
    bgClass: "bg-[#F0E7FE]",
    borderClass: "border-[#DFD1FB]",
    ageBadge: "Age: 3-6",
    seatsBadge: "Seats: 12",
    price: "$310",
    curriculumPoints: [
      "Montessori Sandpaper Letters",
      "Phonetic Rhyme & Cadence",
      "Expressive Puppet Theatrics",
      "Vocabulary & Listening Stamina",
    ],
  },
];

const categoryTabs = [
  { id: "all", label: "All Courses" },
  { id: "play", label: "Creative Play" },
  { id: "arts", label: "Artists Workshop" },
  { id: "stem", label: "Mini STEM" },
  { id: "phonics", label: "Story & Phonics" },
];

export default function MilestonesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section
      id="pathways"
      aria-label="Programs and Courses for Kids"
      className="relative w-full overflow-hidden bg-[#FAF8F5] py-20 sm:py-28 select-none font-jakarta"
    >
      {/* Subtle ambient blur accents */}
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-[#E3F1FB]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#FFEFE6]/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================================================
            HEADER: Centered, clean, exactly matching reference image
        ========================================================================= */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F2040] leading-[1.12]">
            Highly Recommended <br className="hidden sm:inline" />
            Courses for Kids
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-slate-600 max-w-xl mx-auto leading-relaxed">
            Hands-on learning journeys designed to ignite curiosity, imaginative play, and lifelong confidence.
          </p>

          {/* Sleek Category Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {categoryTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    isActive
                      ? "bg-[#0F2040] text-white shadow-md scale-105"
                      : "bg-white/80 hover:bg-white text-slate-600 border border-slate-200/80 shadow-xs"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            COURSES GRID: Exact card layout, soft pastel backgrounds, rounded photos
        ========================================================================= */}
        <motion.div
          layout
          className={`grid grid-cols-1 gap-6 sm:gap-8 lg:gap-8 ${
            filteredCourses.length === 1
              ? "max-w-md mx-auto"
              : filteredCourses.length === 2
              ? "max-w-3xl mx-auto md:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className={`group relative rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 flex flex-col justify-between border-2 ${course.bgClass} ${course.borderClass} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_-15px_rgba(15,32,64,0.12)]`}
              >
                <div>
                  {/* Photo with rounded corners and gentle hover zoom */}
                  <div className="relative w-full aspect-[4/3] rounded-[20px] sm:rounded-[22px] overflow-hidden mb-5 bg-white/40 shadow-xs">
                    <Image
                      src={course.image}
                      alt={course.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-outfit font-extrabold text-xl sm:text-2xl text-[#0F2040] mb-2 leading-tight">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                {/* Footer Row: Meta Pills (Left) + Price / CTA (Right) */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-black/[0.04] mt-auto">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white/80 border border-slate-900/5 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                      {course.ageBadge}
                    </span>
                    <span className="inline-flex items-center px-3 py-1.5 rounded-xl bg-white/80 border border-slate-900/5 text-[11px] sm:text-xs font-bold text-slate-700 shadow-xs">
                      {course.seatsBadge}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="px-4 sm:px-5 py-2 rounded-xl bg-[#0F2040] hover:bg-[#F65A36] text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    {course.price}
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA & Campus Walk Link */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 pl-4 pr-3 rounded-full bg-white border border-slate-200/80 shadow-xs">
            <span className="text-xs sm:text-sm font-bold text-[#0F2040]">
              Looking for our complete academic syllabus & daycare options?
            </span>
            <Link
              href="/Programs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F65A36] hover:bg-[#E84A26] text-white text-xs sm:text-sm font-bold shadow-sm transition-all hover:translate-x-0.5"
            >
              <span>Explore All Pathways</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================================
          COURSE DETAILS MODAL (When clicking on course or price)
      ========================================================================= */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-[#0F2040]/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl z-10 border border-slate-100"
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-[#FFEFE6] text-[#F65A36] text-xs font-bold">
                  {selectedCourse.ageBadge}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#E3F1FB] text-[#2F8FD0] text-xs font-bold">
                  {selectedCourse.seatsBadge}
                </span>
              </div>

              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0F2040] mb-2">
                {selectedCourse.title}
              </h3>

              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                {selectedCourse.description}
              </p>

              <div className="mb-6 rounded-2xl bg-[#FAF8F5] p-4 border border-slate-200/80">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                  Core Developmental Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedCourse.curriculumPoints.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F2040]">
                      <CheckCircle2 className="w-4 h-4 text-[#F65A36] shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <div>
                  <span className="block text-[11px] font-bold text-slate-400">Monthly Tuition</span>
                  <span className="font-outfit text-2xl font-extrabold text-[#0F2040]">
                    {selectedCourse.price}
                  </span>
                </div>

                <Link
                  href="/admission"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F65A36] hover:bg-[#E84A26] text-white text-sm font-bold shadow-sm transition-all"
                >
                  <span>Book a Campus Walk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
