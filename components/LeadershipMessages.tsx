"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Sparkles,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
  Compass,
  GraduationCap,
  Globe2,
} from "lucide-react";
import { doodleTile, toDataUri } from "./NurturingCarousel";

export default function LeadershipMessages() {
  const [activeLeader, setActiveLeader] = useState<"both" | "director" | "ceo">("both");

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* SECTION HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
          <Award className="w-3.5 h-3.5 text-[#F65A36]" />
          <span>Voices of Leadership</span>
        </div>

        <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2040] tracking-tight leading-tight">
          Guiding Our Vision for Every Child&apos;s{" "}
          <span className="text-[#F65A36]">Global Success</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
          Meet the visionary leadership team at Little Cambridge Global, shaping a joyful Montessori sanctuary for young minds and building an international benchmark in early education.
        </p>

        {/* INTERACTIVE TOGGLE TABS */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveLeader("both")}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeLeader === "both"
                ? "bg-[#0F2040] text-white shadow-md"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/80 shadow-xs"
            }`}
          >
            All Messages
          </button>
          <button
            onClick={() => setActiveLeader("director")}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeLeader === "director"
                ? "bg-[#0F2040] text-white shadow-md"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/80 shadow-xs"
            }`}
          >
            Director&apos;s Message
          </button>
          <button
            onClick={() => setActiveLeader("ceo")}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
              activeLeader === "ceo"
                ? "bg-[#0F2040] text-white shadow-md"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/80 shadow-xs"
            }`}
          >
            CEO&apos;s Message
          </button>
        </div>
      </div>

      <div className="space-y-12 sm:space-y-16">
        {/* =========================================================================
            CARD 1: FOUNDER & DIRECTOR'S MESSAGE (Mr. Pankaj Malik)
        ========================================================================= */}
        <AnimatePresence mode="wait">
          {(activeLeader === "both" || activeLeader === "director") && (
            <motion.div
              key="director-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="relative bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-white shadow-soft overflow-hidden"
              style={{
                backgroundImage: toDataUri(doodleTile("rgba(15,32,64,0.03)")),
                backgroundSize: "280px 280px",
              }}
            >
              {/* Soft background glow accents */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFEFE6]/70 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F0F8FF]/80 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* LEFT: Director Portrait Card (Col 5) */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-3xl sm:rounded-[2.25rem] bg-gradient-to-b from-white via-[#FFF7F2] to-[#FAF8F5] p-4 sm:p-5 border-2 border-white shadow-[0_12px_40px_-15px_rgba(15,32,64,0.12)]">
                    {/* Floating Badge */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F2040] text-white text-[11px] sm:text-xs font-bold shadow-md whitespace-nowrap">
                      <GraduationCap className="w-3.5 h-3.5 text-[#F65A36]" />
                      <span>Founder & Director</span>
                    </div>

                    {/* Photo Frame */}
                    <div className="relative w-full aspect-[4/4.7] rounded-2xl sm:rounded-[1.75rem] overflow-hidden bg-slate-100 shadow-inner group">
                      <Image
                        src="/pankaj malik.jpeg"
                        alt="Mr. Pankaj Malik - Founder & Director, Little Cambridge Global"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2040]/80 via-transparent to-transparent opacity-85" />

                      {/* Overlaid Info on bottom of photo */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                        <p className="font-outfit text-xl sm:text-2xl font-black tracking-tight leading-tight">
                          Mr. Pankaj Malik
                        </p>
                        <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                          Founder & Director
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Details */}
                    <div className="mt-4 pt-3 border-t border-slate-100/80 px-2 space-y-2">
                      <p className="text-[12px] sm:text-[13px] font-bold text-[#0F2040] leading-snug">
                        Little Cambridge Global Preschool & Day Care
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-slate-500">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700">
                          <Sparkles className="w-3 h-3 text-[#F65A36]" />
                          Montessori Sanctuary
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          Child-Centric Focus
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT: Director Message Body (Col 7) */}
                <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                  {/* Header Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
                    <HeartHandshake className="w-3.5 h-3.5 text-[#F65A36]" />
                    <span>Founder & Director&apos;s Message</span>
                  </div>

                  {/* Main Section Heading */}
                  <div>
                    <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                      Where Little Steps Turn Into{" "}
                      <span className="text-[#F65A36]">Global Success</span>
                    </h3>
                    <p className="mt-2 text-sm sm:text-base font-semibold text-slate-600 italic border-l-2 border-[#F65A36] pl-3">
                      &ldquo;Welcome to Little Cambridge Global Preschool & Day Care, where we turns Little Steps to Global Success.&rdquo;
                    </p>
                  </div>

                  {/* Letter Body */}
                  <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                    <p>
                      As the Founder and Director, it is my absolute privilege to welcome you to our nurturing community. Early childhood is the most crucial phase of a human being&apos;s development. It is the time when the foundation for lifelong learning, curiosity, and emotional resilience is laid. With this profound understanding, we built <strong className="text-[#0F2040] font-bold">Little Cambridge Global Preschool & Day Care</strong>. We wanted to create a sanctuary where education transcends traditional boundaries and transforms into a joyful, organic journey of self-discovery with Montessori Teaching Methods.
                    </p>

                    <p>
                      Our vision is rooted in a simple yet powerful philosophy: to blend global educational standards with deeply personal care. We have meticulously designed an environment that sparks imagination, encourages critical thinking, and fosters deep empathy. From our cutting-edge, inquiry-based curriculum to our warm, secure day care facilities, every corner of Little Cambridge is crafted to ensure your child feels safe, loved, and inspired.
                    </p>

                    <p>
                      Education is not just about preparing children for the next academic grade; it is about equipping them for life. We focus equally on cognitive growth and emotional intelligence. Our dedicated team of educators does not merely teach—they guide, listen, and celebrate the small triumphs that happen every single day.
                    </p>

                    <p>
                      We view parents as our vital partners in this beautiful journey. Together, we can provide the scaffolding our children need to grow into confident, compassionate, and globally-minded individuals who are ready to make a positive impact on the world.
                    </p>

                    <p className="font-semibold text-slate-700">
                      Thank you for trusting us with your most precious treasure. We look forward to walking alongside you and your child as they take their first, unforgettable steps toward a bright and boundless future.
                    </p>
                  </div>

                  {/* Signature Block */}
                  <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                        Warm regards,
                      </p>
                      <p className="font-outfit text-lg sm:text-xl font-black text-[#0F2040] mt-0.5">
                        Mr. Pankaj Malik
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-[#F65A36]">
                        Founder & Director
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                        Little Cambridge Global Preschool & Day Care
                      </p>
                    </div>

                    <Link href="/admission">
                      <button className="inline-flex items-center gap-2 bg-[#0F2040] hover:bg-[#1a3464] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full shadow-soft hover:shadow-md hover:-translate-y-0.5 transition-all self-start sm:self-auto">
                        <span>Visit Our Campus</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F65A36]" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =========================================================================
            CARD 2: CHIEF EXECUTIVE OFFICER'S MESSAGE (Ms. Sayanii Ghosh)
        ========================================================================= */}
        <AnimatePresence mode="wait">
          {(activeLeader === "both" || activeLeader === "ceo") && (
            <motion.div
              key="ceo-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="relative bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-white shadow-soft overflow-hidden"
              style={{
                backgroundImage: toDataUri(doodleTile("rgba(15,32,64,0.03)")),
                backgroundSize: "280px 280px",
              }}
            >
              {/* Soft background glow accents */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0F8FF]/80 rounded-full blur-3xl pointer-events-none -z-10" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFEFE6]/70 rounded-full blur-3xl pointer-events-none -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Content on Left for alternating flow (Col 7) */}
                <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-2 lg:order-1">
                  {/* Header Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5FF] border border-[#2F8FD0]/20 text-[#1B6CA8] text-xs sm:text-sm font-bold shadow-xs">
                    <Globe2 className="w-3.5 h-3.5 text-[#2F8FD0]" />
                    <span>Chief Executive Officer&apos;s Message</span>
                  </div>

                  {/* Main Section Heading */}
                  <div>
                    <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                      Building an International Ecosystem for{" "}
                      <span className="text-[#F65A36]">Lifelong Discovery</span>
                    </h3>
                    <p className="mt-2 text-sm sm:text-base font-semibold text-slate-600 italic border-l-2 border-[#2F8FD0] pl-3">
                      &ldquo;Welcome to Little Cambridge Global Preschool & Day Care, where we turn little steps into global success through child-centric early education.&rdquo;
                    </p>
                  </div>

                  <p className="text-xs uppercase tracking-wider text-[#F65A36] font-extrabold">
                    Dear Partners, Educators, and Parents,
                  </p>

                  {/* Letter Body */}
                  <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                    <p>
                      Early childhood is a brief, critical window during which a child’s lifelong foundation is built. At Little Cambridge Global Preschool & Day Care, we do not believe in rushing or forcing education. Instead, we champion the time-tested philosophy of <strong className="text-[#0F2040] font-bold">Dr. Maria Montessori</strong>, blending it with premium, modern day care services to provide a holistic ecosystem where young minds thrive naturally through sensory exploration and self-discovery.
                    </p>

                    <p>
                      Our mission extends beyond running traditional classrooms. We are building a global network of premium early childhood hubs that respect each child’s unique learning pace, fostering true independence, creativity, and cognitive growth. To achieve this, our franchise framework is built on uncompromising operational excellence and rigorous quality benchmarks.
                    </p>

                    <p>
                      To our franchise partners, we offer more than a profitable business model in a highly resilient education sector. We offer a legacy. When you join the Little Cambridge Global family, you gain access to an international standard of early life education, a robust operational blueprint, and the continuous corporate support required to turn your local centre into a community benchmark.
                    </p>

                    <p className="font-semibold text-slate-700">
                      Thank you for your shared passion for nurturing the next generation of confident, independent, and socially conscious global citizens. Let us build bright beginnings, one child and one neighbourhood at a time.
                    </p>
                  </div>

                  {/* Signature Block */}
                  <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                        Warm regards,
                      </p>
                      <p className="font-outfit text-lg sm:text-xl font-black text-[#0F2040] mt-0.5">
                        Ms. Sayanii Ghosh
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-[#2F8FD0]">
                        Chief Executive Officer
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                        Little Cambridge Global Preschool & Day Care
                      </p>
                    </div>

                    <Link href="/partner">
                      <button className="inline-flex items-center gap-2 bg-[#0F2040] hover:bg-[#1a3464] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full shadow-soft hover:shadow-md hover:-translate-y-0.5 transition-all self-start sm:self-auto">
                        <span>Partner With Us</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#F65A36]" />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* RIGHT: CEO Portrait Card (Col 5) */}
                <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
                  <div className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-3xl sm:rounded-[2.25rem] bg-gradient-to-b from-white via-[#F0F8FF] to-[#FAF8F5] p-4 sm:p-5 border-2 border-white shadow-[0_12px_40px_-15px_rgba(15,32,64,0.12)]">
                    {/* Floating Badge */}
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F2040] text-white text-[11px] sm:text-xs font-bold shadow-md whitespace-nowrap">
                      <Globe2 className="w-3.5 h-3.5 text-[#2F8FD0]" />
                      <span>Chief Executive Officer</span>
                    </div>

                    {/* Photo Frame */}
                    <div className="relative w-full aspect-[4/4.7] rounded-2xl sm:rounded-[1.75rem] overflow-hidden bg-slate-100 shadow-inner group">
                      <Image
                        src="/sayanighosh.jpeg"
                        alt="Ms. Sayanii Ghosh - Chief Executive Officer, Little Cambridge Global"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2040]/80 via-transparent to-transparent opacity-85" />

                      {/* Overlaid Info on bottom of photo */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                        <p className="font-outfit text-xl sm:text-2xl font-black tracking-tight leading-tight">
                          Ms. Sayanii Ghosh
                        </p>
                        <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                          Chief Executive Officer
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Details */}
                    <div className="mt-4 pt-3 border-t border-slate-100/80 px-2 space-y-2">
                      <p className="text-[12px] sm:text-[13px] font-bold text-[#0F2040] leading-snug">
                        Little Cambridge Global Preschool & Day Care
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-slate-500">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700">
                          <Building2 className="w-3 h-3 text-[#2F8FD0]" />
                          Global Expansion
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          Operational Excellence
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// Backwards compatibility export
export { LeadershipMessages as DirectorMessage };
