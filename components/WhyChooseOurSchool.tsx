"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Award, Calendar, Sparkles } from "lucide-react";

type TabKey = "facilities" | "curriculum" | "mission";

const tabContent: Record<
  TabKey,
  {
    subtitle: string;
    points: [string, string, string, string];
  }
> = {
  facilities: {
    subtitle:
      "Qualified teachers who understand children's needs and focus on personal attention through play-based and academic learning.",
    points: [
      "Experienced & caring teachers",
      "Safe & friendly environment",
      "Modern learning methods",
      "Focus on moral & social values",
    ],
  },
  curriculum: {
    subtitle:
      "Authentic Montessori-inspired curriculum fostering sensorial exploration, early phonics mastery, hands-on logic, and self-directed milestones.",
    points: [
      "Sensory & practical life labs",
      "Child-guided inquiry cycles",
      "Early literacy & math readiness",
      "Active outdoor creative play",
    ],
  },
  mission: {
    subtitle:
      "Nurturing confident, compassionate, and independent global citizens through a loving environment where every child's voice truly matters.",
    points: [
      "Holistic emotional intelligence",
      "Lifelong curiosity & empathy",
      "Zero standardized pressure",
      "Global benchmark standards",
    ],
  },
};

export default function WhyChooseOurSchool() {
  const [activeTab, setActiveTab] = useState<TabKey>("facilities");
  const current = tabContent[activeTab];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Top Floating Golden Trophy Accent */}
      <div className="flex justify-center mb-6">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative inline-flex items-center justify-center"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 p-0.5 shadow-lg shadow-amber-500/20 flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-2xl sm:text-3xl filter drop-shadow-xs">🏆</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* =========================================================================
            LEFT COLUMN: Copy, Interactive Tabs, Checklist, CTAs
        ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6 relative"
        >
          {/* Handwritten Tag / Badge */}
          <div>
            <span className="font-outfit text-sm sm:text-base font-extrabold text-[#F65A36] tracking-wide inline-block">
              Why Choose Us?
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight leading-tight mt-1">
              Why Choose Our School
            </h2>
          </div>

          {/* Interactive Filter Tabs (Our Facilities / Curriculum & Learning / Mission & Vision) */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setActiveTab("facilities")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${activeTab === "facilities"
                ? "bg-[#F65A36] text-white shadow-[#F65A36]/25"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/90"
                }`}
            >
              Our Facilities
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("curriculum")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${activeTab === "curriculum"
                ? "bg-[#F65A36] text-white shadow-[#F65A36]/25"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/90"
                }`}
            >
              Curriculum & Learning
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("mission")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${activeTab === "mission"
                ? "bg-[#F65A36] text-white shadow-[#F65A36]/25"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/90"
                }`}
            >
              Mission & Vision
            </button>
          </div>

          {/* Animated Tab Body Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {/* Subtitle Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                {current.subtitle}
              </p>

              {/* 2-Column Checklist with Orange Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4 pt-1">
                {current.points.map((point, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFF2E8] text-[#F65A36]">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons from Screenshot */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Link href="/admission">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#F65A36] hover:bg-[#e04a27] text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full shadow-md shadow-[#F65A36]/20 hover:-translate-y-0.5 transition-all"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact">
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-[#0F2040] hover:bg-[#1a3464] text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full shadow-md shadow-slate-900/15 hover:-translate-y-0.5 transition-all"
              >
                <span>Book A Visit</span>
                <Calendar className="w-4 h-4 text-[#F65A36]" />
              </button>
            </Link>
          </div>
        </motion.div>

        {/* =========================================================================
            RIGHT COLUMN: Cloud-Shaped Scalloped Painting Photo with Dashed Accents
        ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 flex justify-center relative"
        >
          {/* Subtle Outer Dashed Cloud Outline Accent */}
          <div className="absolute inset-0 -m-4 pointer-events-none flex items-center justify-center">
            <svg
              viewBox="0 0 520 400"
              className="w-full h-full text-amber-400/40 fill-none"
              style={{ filter: "drop-shadow(0 4px 12px rgba(246,90,54,0.08))" }}
            >
              <path
                d="M 120 180 
                   C 80 140, 90 80, 150 70 
                   C 190 20, 270 15, 320 60 
                   C 360 20, 430 40, 450 90 
                   C 500 130, 490 200, 450 230 
                   C 480 290, 420 360, 350 340 
                   C 300 380, 210 380, 170 330 
                   C 100 340, 60 280, 90 220 
                   C 60 170, 90 120, 120 180 Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* Cloud Mask Container */}
          <div className="relative w-full max-w-[480px] aspect-[4/3.2] p-2 flex items-center justify-center">
            <div
              className="relative w-full h-full overflow-hidden shadow-xl shadow-slate-900/10 bg-white"
              style={{
                borderRadius: "48% 52% 45% 55% / 55% 45% 55% 45%",
              }}
            >
              <Image
                src="/why_choose_our_school.jpg"
                alt="Teacher and Children Watercolor Painting at Polka-Dot Table"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
