"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, Sparkles, Award, HeartHandshake, ArrowRight, ShieldCheck } from "lucide-react";
import { doodleTile, toDataUri } from "./NurturingCarousel";

export default function DirectorMessage() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div
        className="relative bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-white shadow-soft overflow-hidden"
        style={{
          backgroundImage: toDataUri(doodleTile("rgba(15,32,64,0.03)")),
          backgroundSize: "280px 280px",
        }}
      >
        {/* Soft background glow accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFEFE6]/70 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F0F8FF]/80 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Director Portrait Card (Col 5) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-3xl sm:rounded-[2.25rem] bg-gradient-to-b from-white via-[#FFF7F2] to-[#FAF8F5] p-4 sm:p-5 border-2 border-white shadow-[0_12px_40px_-15px_rgba(15,32,64,0.12)]">
              {/* Floating Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F2040] text-white text-[11px] sm:text-xs font-bold shadow-md whitespace-nowrap">
                <Award className="w-3.5 h-3.5 text-[#F65A36]" />
                <span>Founder & Director</span>
              </div>

              {/* Photo Frame */}
              <div className="relative w-full aspect-[4/4.6] rounded-2xl sm:rounded-[1.75rem] overflow-hidden bg-slate-100 shadow-inner group">
                <Image
                  src="/pankaj malik.jpeg"
                  alt="Mr. Pankaj Malik - Founder & Director, Little Cambridge Global"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2040]/70 via-transparent to-transparent opacity-80" />

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
                    Montessori Visionary
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200/80 text-slate-700">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Global Standards
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Director Message Body (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-[#F65A36]" />
              <span>Director&apos;s Message</span>
            </div>

            {/* Main Section Heading */}
            <div>
              <h2 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                Where Little Steps Turn Into{" "}
                <span className="text-[#F65A36]">Global Success</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base font-semibold text-slate-500 italic">
                &ldquo;Welcome to Little Cambridge Global Preschool & Day Care, where we turn Little Steps to Global Success.&rdquo;
              </p>
            </div>

            {/* Letter Body */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-[15px] lg:text-base leading-relaxed font-medium">
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
      </div>
    </section>
  );
}
