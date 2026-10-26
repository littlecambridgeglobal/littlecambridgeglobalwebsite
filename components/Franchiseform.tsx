"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Building2,
  ChevronDown,
  Send,
  Loader2,
  TrendingUp,
  Award,
  Users,
  CheckCircle2,
  DollarSign,
  Download,
  MapPin,
  Sparkles,
  ShieldCheck,
  Check,
  BookOpen,
  ArrowRight,
  Sun,
  Compass,
} from "lucide-react";
import { doodleTile, toDataUri } from "./NurturingCarousel";

const heroPattern = toDataUri(doodleTile("rgba(15,32,64,0.06)"));

/* Scalloped cloud edge for section transitions */
const CloudEdge = ({ flip = false, fill = "#EEF0FB" }: { flip?: boolean; fill?: string }) => (
  <svg
    viewBox="0 0 1200 90"
    preserveAspectRatio="none"
    aria-hidden="true"
    className={`block h-12 w-full sm:h-16 lg:h-20 ${flip ? "rotate-180" : ""}`}
  >
    <path
      d="M0 90 V62 Q30 22 80 42 Q110 2 175 30 Q215 -6 280 26 Q330 0 385 32 Q430 4 495 28 Q545 -4 610 30 Q660 6 715 34 Q765 0 830 28 Q880 4 935 32 Q985 -2 1050 30 Q1100 8 1145 38 Q1180 20 1200 46 V90 Z"
      fill={fill}
    />
  </svg>
);

export default function FranchisePage({
  onHandleSubmit,
  defaultFranchise,
  isLoading,
}: {
  defaultFranchise?: IFranchiseDetail;
  onHandleSubmit: (data: FranchiseFormSchemaType) => void;
  isLoading: boolean;
}) {
  const form = useForm<FranchiseFormSchemaType>({
    mode: "all",
    defaultValues: {
      name: defaultFranchise?.name || "",
      email: defaultFranchise?.email || "",
      phone: defaultFranchise?.phone || "",
      city: defaultFranchise?.city || "",
      budget: defaultFranchise?.budget || "Playway (5 to 6 lakh)",
      property: defaultFranchise?.property || "Yes, I own commercial property",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: FranchiseFormSchemaType) => {
    onHandleSubmit(data);
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0F2040] font-jakarta selection:bg-[#FFEFE6] selection:text-[#F65A36]">
      {/* SVG Defs for irregular image clipping */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="partner-clip-1" clipPathUnits="objectBoundingBox">
            <path d="M 0.05 0.22 C 0.08 0.08, 0.25 0.03, 0.42 0.03 C 0.58 0.01, 0.75 0.05, 0.95 0.18 C 0.99 0.35, 1.00 0.65, 0.95 0.85 C 0.88 0.98, 0.70 0.98, 0.50 0.96 C 0.30 0.98, 0.12 0.98, 0.05 0.85 C 0.00 0.65, 0.01 0.35, 0.05 0.22 Z" />
          </clipPath>
          <clipPath id="partner-clip-2" clipPathUnits="objectBoundingBox">
            <path d="M 0.06 0.20 C 0.15 0.06, 0.32 0.08, 0.45 0.04 C 0.60 0.00, 0.80 0.02, 0.94 0.16 C 1.00 0.32, 0.98 0.68, 0.95 0.86 C 0.90 0.98, 0.72 0.96, 0.52 0.98 C 0.28 0.96, 0.10 0.98, 0.05 0.86 C 0.00 0.68, 0.00 0.32, 0.06 0.20 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* =========================================================================
          SECTION 1: HERO WITH APPLICATION FORM FIRST
      ========================================================================= */}
      <section
        id="franchise-hero-form"
        className="relative w-full overflow-hidden bg-[#FFF8F4] pt-28 sm:pt-36 pb-16 sm:pb-20 select-none"
        style={{ backgroundImage: heroPattern, backgroundSize: "320px 320px" }}
      >
        {/* Soft Ambient Radial Glows */}
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#F65A36]/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-[#2F8FD0]/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Headline & Trust Highlights */}
            <div className="flex flex-col items-start lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F65A36] px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Pan-India Preschool Expansion • 2026/27
              </span>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-[#0F2040]">
                Own a Thriving Preschool Franchise with{" "}
                <span className="text-[#F65A36]">Zero Royalty.</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                Join Little Cambridge Global. We combine authentic Froebel & Montessori early education with complete turnkey architectural setup, certified teacher recruitment, and dedicated admissions marketing.
              </p>

              {/* 3 Quick Value Badges */}
              <div className="space-y-2.5 w-full pt-1">
                {[
                  { text: "No Royalty Burden — Retain 100% of Student Fees", color: "text-[#F65A36]", bg: "bg-[#FFEFE6]" },
                  { text: "Turnkey Launch in 30–45 Days with 3D Architecture", color: "text-[#2F8FD0]", bg: "bg-[#E3F1FB]" },
                  { text: "NEP 2020 Aligned with Froebel & Montessori Pedagogy", color: "text-emerald-700", bg: "bg-[#E8F5E9]" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/95 border border-slate-200/80 shadow-xs"
                  >
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                      <Check className="h-4 w-4 stroke-[2.5]" />
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#0F2040]">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Character mascot & Phone helpline */}
              <div className="pt-3 flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                  <Image
                    src="/assests/boy_pointingtowardform.png"
                    alt="Little Cambridge Student Mascot"
                    width={100}
                    height={100}
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div className="bg-white/90 rounded-2xl p-3.5 border border-slate-200/80 shadow-xs text-left">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Expansion Director Hotline
                  </p>
                  <a
                    href="tel:+917340655077"
                    className="text-xs sm:text-sm font-extrabold text-[#F65A36] hover:underline flex items-center gap-1.5 mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 734 065 5077</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: High-Conversion Form Prominently First */}
            <div className="lg:col-span-7">
              <div className="relative rounded-[2.5rem] bg-white p-6 sm:p-9 border-2 border-slate-100 shadow-[0_20px_45px_-20px_rgba(15,32,64,0.18)]">
                {/* Offset dashed border */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2 translate-y-3 rotate-[0.6deg] rounded-[2.5rem] border-2 border-dashed border-[#F6A04D]/50 pointer-events-none -z-10"
                />

                <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0F2040]">
                      Request Franchise Prospectus
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Get city feasibility, spatial blueprints & financial model
                    </p>
                  </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                      Full Name <span className="text-[#F65A36]">*</span>
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors" />
                      <input
                        {...register("name", { required: "Full name is required" })}
                        type="text"
                        placeholder="e.g. Rohil Sharma"
                        disabled={isLoading}
                        className={`w-full bg-[#FAF8F5] border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${errors.name ? "border-red-400" : "border-slate-200/80"
                          }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] font-bold text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                        Phone Number <span className="text-[#F65A36]">*</span>
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors" />
                        <input
                          {...register("phone", {
                            required: "Phone number is required",
                            minLength: { value: 10, message: "Enter at least 10 digits" },
                          })}
                          type="tel"
                          placeholder="e.g. 9876543210"
                          disabled={isLoading}
                          className={`w-full bg-[#FAF8F5] border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${errors.phone ? "border-red-400" : "border-slate-200/80"
                            }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-[11px] font-bold text-red-500">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                        Email Address <span className="text-[#F65A36]">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors" />
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" },
                          })}
                          type="email"
                          placeholder="name@email.com"
                          disabled={isLoading}
                          className={`w-full bg-[#FAF8F5] border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${errors.email ? "border-red-400" : "border-slate-200/80"
                            }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] font-bold text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                      Proposed City / Location <span className="text-[#F65A36]">*</span>
                    </label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors" />
                      <input
                        {...register("city", { required: "City is required" })}
                        type="text"
                        placeholder="e.g. Bangalore, Whitefield / Hyderabad"
                        disabled={isLoading}
                        className={`w-full bg-[#FAF8F5] border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${errors.city ? "border-red-400" : "border-slate-200/80"
                          }`}
                      />
                    </div>
                    {errors.city && (
                      <p className="text-[11px] font-bold text-red-500">{errors.city.message}</p>
                    )}
                  </div>

                  {/* Planned Budget & Property */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                        Planned Budget
                      </label>
                      <div className="relative group">
                        <DollarSign className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors z-10" />
                        <select
                          {...register("budget")}
                          disabled={isLoading}
                          className="w-full bg-[#FAF8F5] border-2 border-slate-200/80 rounded-2xl py-3 pl-11 pr-10 text-xs sm:text-sm text-[#0F2040] font-medium focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Playway (5 to 6 lakh)">Playway (₹5–6 Lakh)</option>
                          <option value="Montessori (6-7 lakh)">Montessori (₹6–12 Lakh)</option>
                          <option value="Flagship Campus (15+ lakh)">Flagship Campus (₹15+ Lakh)</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-[#F65A36]" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                        Property Status
                      </label>
                      <div className="relative group">
                        <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors z-10" />
                        <select
                          {...register("property")}
                          disabled={isLoading}
                          className="w-full bg-[#FAF8F5] border-2 border-slate-200/80 rounded-2xl py-3 pl-11 pr-10 text-xs sm:text-sm text-[#0F2040] font-medium focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all appearance-none cursor-pointer"
                        >
                          <option value="Yes, I own commercial property">Yes, I own property</option>
                          <option value="No, I will rent/lease">No, I will rent/lease</option>
                          <option value="Currently scouting locations">Scouting locations</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-[#F65A36]" />
                      </div>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-[#F65A36] hover:bg-[#E84A26] text-white font-bold py-3.5 sm:py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-3 text-sm sm:text-base ${isLoading ? "opacity-75 cursor-not-allowed hover:translate-y-0" : ""
                        }`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Franchise Application</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>


                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ALTERNATING LEFT-RIGHT DETAILS WITH IMAGES
      ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden">
        <CloudEdge fill="#EEF0FB" />

        <div className="relative bg-[#EEF0FB] py-12 sm:py-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
            {/* -------------------------------------------------------------------
                DETAIL 1 (LEFT TEXT, RIGHT IMAGE): 3. NEP 2020-Aligned Curriculum
            ------------------------------------------------------------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Text */}
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
                  <BookOpen className="w-3.5 h-3.5 text-[#F65A36]" />
                  <span>Early Years Pedagogy</span>
                </div>

                <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                  3. NEP 2020-Aligned <span className="text-[#F65A36]">Curriculum</span>
                </h2>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-semibold">
                  We have designed our curriculum so that it can meet the goal of the new education policy in India. We are following the structure of the Froebel and Montessori philosophies.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Influence of NEP directives with 5E Inquiry Learning Model",
                    "Montessori sensorial tools combined with Froebel play gifts",
                    "Structured yet flexible curriculum delivering measurable learning outcomes",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFEFE6] text-[#F65A36] mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image (Irregular Clipped Shape) */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[460px]">
                  {/* Organic irregular frame */}
                  <div
                    className="relative w-full aspect-[4/3] overflow-hidden bg-white p-2 shadow-xl border-4 border-white transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      clipPath: "url(#partner-clip-1)",
                      borderRadius: "44% 56% 50% 50% / 55% 45% 55% 45%",
                    }}
                  >
                    <Image
                      src="/why_choose_our_school.jpg"
                      alt="Children engaged in NEP aligned curriculum"
                      fill
                      sizes="(max-width: 640px) 90vw, 460px"
                      className="object-cover"
                    />
                  </div>

                  {/* Floating Pill Badge */}
                  <div className="absolute -bottom-4 right-4 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-lg border border-slate-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8F5E9] text-emerald-700">
                      <Sparkles className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-extrabold text-[#0F2040]">
                      NEP 2020 & 5E Learning
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------------------------
                DETAIL 2 (LEFT IMAGE, RIGHT TEXT): 4. Proven Business Model
            ------------------------------------------------------------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Image (Irregular Clipped Shape) */}
              <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-[460px]">
                  {/* Organic irregular frame */}
                  <div
                    className="relative w-full aspect-[4/3] overflow-hidden bg-white p-2 shadow-xl border-4 border-white transition-all duration-500 hover:scale-[1.02]"
                    style={{
                      clipPath: "url(#partner-clip-2)",
                      borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%",
                    }}
                  >
                    <Image
                      src="/programs/creative_play_lab.jpg"
                      alt="Children learning in Little Cambridge play lab"
                      fill
                      sizes="(max-width: 640px) 90vw, 460px"
                      className="object-cover"
                    />
                  </div>

                  {/* Floating Pill Badge */}
                  <div className="absolute -bottom-4 left-4 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-lg border border-slate-100">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFEFE6] text-[#F65A36]">
                      <TrendingUp className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-extrabold text-[#0F2040]">
                      40%–50% Projected Annual ROI
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#2F8FD0]/20 text-[#2F8FD0] text-xs sm:text-sm font-bold shadow-xs">
                  <TrendingUp className="w-3.5 h-3.5 text-[#2F8FD0]" />
                  <span>High-Yield Preschool Opportunity</span>
                </div>

                <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                  4. Proven Business <span className="text-[#F65A36]">Model</span>
                </h2>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-semibold">
                  We are getting recognized as delivering a successful franchise opportunity for preschool. We are building a combination of educational depth with entrepreneurial ease.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Zero Royalty Burden: Retain 100% of all student tuition collections",
                    "Rapid operational breakeven driven by early toddler & daycare retention",
                    "Comprehensive standard operating procedures with continuous mentor guidance",
                  ].map((pt, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E3F1FB] text-[#2F8FD0] mt-0.5">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">
                        {pt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <CloudEdge flip fill="#EEF0FB" />
      </section>

      {/* =========================================================================
          SECTION 3: WHAT DO YOU GET FROM US? (Cloud Pastel Cards)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs mb-3">
            <Award className="w-3.5 h-3.5 text-[#F65A36]" />
            <span>Complete Support Ecosystem</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight mb-4">
            What Do You Get From Us?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Choosing us as a franchise opportunity for preschool means that you are choosing quality, standard, innovation, and support.
          </p>
        </div>

        {/* 3 Pastel Cloud Cards (Green, Yellow, Purple) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: No Royalty Burden */}
          <div className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[2.5rem] bg-[#E2F6ED] border-2 border-[#C4EED8] shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#269A64] text-white flex items-center justify-center mb-5 shadow-xs">
                <DollarSign className="w-6 h-6" />
              </div>

              <span className="inline-block px-3 py-1 rounded-md bg-white/90 text-emerald-800 text-[11px] font-bold mb-3 shadow-2xs">
                100% Retained Fees
              </span>

              <h3 className="font-outfit font-extrabold text-2xl text-[#0F2040] mb-3">
                No Royalty Burden
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Most schools charge high fees, but Little Cambridge Global Preschool offers a play school franchise without royalty, helping you keep more profits while growing your preschool business successfully.
              </p>
            </div>

            <div className="pt-6 border-t border-[#C4EED8]/80 mt-6 flex items-center gap-2 text-xs font-bold text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-[#269A64]" />
              <span>Zero percentage royalty cuts</span>
            </div>
          </div>

          {/* Card 2: Academic Excellence */}
          <div className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[2.5rem] bg-[#FFF6E5] border-2 border-[#FDE6BA] shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E08518] text-white flex items-center justify-center mb-5 shadow-xs">
                <BookOpen className="w-6 h-6" />
              </div>

              <span className="inline-block px-3 py-1 rounded-md bg-white/90 text-amber-800 text-[11px] font-bold mb-3 shadow-2xs">
                Montessori & Froebel
              </span>

              <h3 className="font-outfit font-extrabold text-2xl text-[#0F2040] mb-3">
                Academic Excellence
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                We are offering a curriculum that is influenced by NEP directives, 5E learning model, and Montessori tools. The curriculum is structured and flexible at the same time, making it easier to deliver learning outcomes.
              </p>
            </div>

            <div className="pt-6 border-t border-[#FDE6BA]/80 mt-6 flex items-center gap-2 text-xs font-bold text-amber-800">
              <CheckCircle2 className="w-4 h-4 text-[#E08518]" />
              <span>Certified educator lesson plans</span>
            </div>
          </div>

          {/* Card 3: Setup Guidance */}
          <div className="relative flex flex-col justify-between p-7 sm:p-8 rounded-[2.5rem] bg-[#EEF2FD] border-2 border-[#D0DCFC] shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#5066D6] text-white flex items-center justify-center mb-5 shadow-xs">
                <Building2 className="w-6 h-6" />
              </div>

              <span className="inline-block px-3 py-1 rounded-md bg-white/90 text-[#364CB7] text-[11px] font-bold mb-3 shadow-2xs">
                360° Turnkey Support
              </span>

              <h3 className="font-outfit font-extrabold text-2xl text-[#0F2040] mb-3">
                Setup Guidance
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed font-medium">
                Our expert team will be helping you in every step, from selecting the location to the design of the school, from branding to procurement. We will be creating a safe, engaging space for our children.
              </p>
            </div>

            <div className="pt-6 border-t border-[#D0DCFC]/80 mt-6 flex items-center gap-2 text-xs font-bold text-[#364CB7]">
              <CheckCircle2 className="w-4 h-4 text-[#5066D6]" />
              <span>Turnkey 30–45 days launch</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: CAMPUS SPACE, CRITERIA & OFFICIAL DOWNLOADS
      ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 border border-white shadow-soft relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3F1FB] border border-[#2F8FD0]/20 text-[#2F8FD0] text-xs sm:text-sm font-bold shadow-xs mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FD0]" />
              <span>Eligibility & Spatial Requirements</span>
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#0F2040]">
              Campus Space & Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Space Requirement", desc: "Min 3,500 sq. ft. covered area up to 10,000 sq. ft. with play zone access." },
              { title: "Initial Setup", desc: "₹10–12 Lakhs kit-based model, scalable to ₹1 Cr for flagship campuses." },
              { title: "Property Status", desc: "Owned or leased commercial/residential property in prominent hubs." },
              { title: "Agreement Tenure", desc: "5 or 10-year renewable franchise partnership with zero royalties." },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200/80">
                <div className="flex items-center gap-2 text-[#F65A36] mb-1.5 font-bold text-sm">
                  <Check className="w-4 h-4" />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Official Download Buttons */}
          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/brochures/franchise-prospectus.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F2040] hover:bg-[#F65A36] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
            >
              <Download className="w-4 h-4 text-[#F6A04D]" />
              <span>Download Franchise Prospectus</span>
            </a>

            <a
              href="/brochures/curriculum-overview.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border-2 border-slate-200 hover:border-[#F65A36] text-[#0F2040] text-xs sm:text-sm font-bold shadow-xs transition-all"
            >
              <Download className="w-4 h-4 text-[#2F8FD0]" />
              <span>Download Curriculum Guide</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}