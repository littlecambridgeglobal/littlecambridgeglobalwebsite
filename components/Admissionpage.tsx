"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { EmailFormschemaType } from "@/lib/schema";
import { IEmaildetail } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Building2,
  ChevronDown,
  Loader2,
  Sparkles,
  ShieldCheck,
  Check,
  BookOpen,
  ArrowRight,
  Sun,
  Heart,
  Award,
  Clock,
  Compass,
  CheckCircle2,
  Calendar,
  Smile,
  MapPin,
  Globe,
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

const programsList = [
  {
    title: "Toddler Playgroup",
    age: "1.5 – 2.5 Years",
    desc: "Sensorial play, music, motor skills development, and gentle social bonding in a warm Montessori setting.",
    bgHex: "#EEF2FD",
    borderHex: "#D0DCFC",
    badgeHex: "#5066D6",
    icon: Smile,
  },
  {
    title: "Nursery Program",
    age: "2.5 – 3.5 Years",
    desc: "Montessori practical life exercises, phonetic sounds, early language, and creative hands-on arts.",
    bgHex: "#FFF6E5",
    borderHex: "#FDE6BA",
    badgeHex: "#E08518",
    icon: BookOpen,
  },
  {
    title: "Kindergarten (LKG & UKG)",
    age: "3.5 – 6 Years",
    desc: "Mathematical logic, independent problem-solving, environmental science, and structured school readiness.",
    bgHex: "#E2F6ED",
    borderHex: "#C4EED8",
    badgeHex: "#269A64",
    icon: Award,
  },
  {
    title: "Daycare & Activity Club",
    age: "1.5 – 8 Years",
    desc: "Safe, nurturing extended hours with nutritious meal plans, peaceful rest rooms, and engaging evening hobbies.",
    bgHex: "#E5F3FD",
    borderHex: "#C6E4FA",
    badgeHex: "#2B82C9",
    icon: Heart,
  },
];

export default function AdmissionPage({
  onHandleSubmit,
  defaultEmail,
  isLoading,
}: {
  defaultEmail?: IEmaildetail;
  onHandleSubmit: (data: EmailFormschemaType) => void;
  isLoading: boolean;
}) {
  const form = useForm<EmailFormschemaType>({
    mode: "all",
    defaultValues: {
      email: defaultEmail?.email || "",
      name: defaultEmail?.name || "",
      phone: defaultEmail?.phone || "",
      country: defaultEmail?.country || "India",
      city: defaultEmail?.city || "",
      state: defaultEmail?.state || "",
      message: defaultEmail?.message || "",
      admission_seeking: defaultEmail?.admission_seeking || "Toddler Playgroup (1.5–2.5 Years)",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: EmailFormschemaType) => {
    onHandleSubmit(data);
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0F2040] font-jakarta selection:bg-[#FFEFE6] selection:text-[#F65A36]">
      {/* SVG Defs for irregular photo clipping */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="admission-clip-1" clipPathUnits="objectBoundingBox">
            <path d="M 0.05 0.22 C 0.08 0.08, 0.25 0.03, 0.42 0.03 C 0.58 0.01, 0.75 0.05, 0.95 0.18 C 0.99 0.35, 1.00 0.65, 0.95 0.85 C 0.88 0.98, 0.70 0.98, 0.50 0.96 C 0.30 0.98, 0.12 0.98, 0.05 0.85 C 0.00 0.65, 0.01 0.35, 0.05 0.22 Z" />
          </clipPath>
          <clipPath id="admission-clip-2" clipPathUnits="objectBoundingBox">
            <path d="M 0.06 0.20 C 0.15 0.06, 0.32 0.08, 0.45 0.04 C 0.60 0.00, 0.80 0.02, 0.94 0.16 C 1.00 0.32, 0.98 0.68, 0.95 0.86 C 0.90 0.98, 0.72 0.96, 0.52 0.98 C 0.28 0.96, 0.10 0.98, 0.05 0.86 C 0.00 0.68, 0.00 0.32, 0.06 0.20 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* =========================================================================
          HERO SECTION: ADMISSIONS FORM FIRST
      ========================================================================= */}
      <section
        id="admission-hero"
        className="relative w-full overflow-hidden bg-[#FFF8F4] pt-28 sm:pt-36 pb-16 sm:pb-20 select-none"
        style={{ backgroundImage: heroPattern, backgroundSize: "320px 320px" }}
      >
        {/* Soft Ambient Radial Glows */}
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#F65A36]/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-[#2F8FD0]/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left: Value Proposition & Highlights */}
            <div className="flex flex-col items-start lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F65A36] px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-sm">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Admissions Open 2026–2027 • Limited Seats
              </span>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-[#0F2040]">
                Give Your Child the Foundation for{" "}
                <span className="text-[#F65A36]">Global Discovery.</span>
              </h1>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                Experience a joyful, Montessori-inspired early education ecosystem where curiosity thrives, emotional intelligence blossoms, and learning feels like an adventure every day.
              </p>

              {/* 3 Quick Value Badges */}
              <div className="space-y-2.5 w-full pt-1">
                {[
                  { text: "1:8 Educator Ratio with Certified Montessori Teachers", bg: "bg-[#FFEFE6]", color: "text-[#F65A36]" },
                  { text: "NEP 2020 Aligned & Froebel Play-Based Curriculum", bg: "bg-[#E3F1FB]", color: "text-[#2F8FD0]" },
                  { text: "Live Parent CCTV Access & 100% Child-Proof Environment", bg: "bg-[#E8F5E9]", color: "text-emerald-700" },
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

              {/* Character Mascot & Admissions Helpline */}
              <div className="pt-2 flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                  <Image
                    src="/assests/boy_pointingtowardform.png"
                    alt="Little Cambridge Student"
                    width={100}
                    height={100}
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div className="bg-white/90 rounded-2xl p-3.5 border border-slate-200/80 shadow-xs text-left">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Admissions Counselor Direct Helpline
                  </p>
                  <a
                    href="tel:+917340655077"
                    className="text-xs sm:text-sm font-extrabold text-[#F65A36] hover:underline flex items-center gap-1.5 mt-0.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 734 065 5077 (9 AM – 6 PM)</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: High-Conversion Admission Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="relative rounded-[2.5rem] bg-white p-6 sm:p-9 border-2 border-slate-100 shadow-[0_20px_45px_-20px_rgba(15,32,64,0.18)]">
                {/* Signature playful offset dashed outline */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2 translate-y-3 rotate-[0.6deg] rounded-[2.5rem] border-2 border-dashed border-[#F6A04D]/50 pointer-events-none -z-10"
                />

                <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="font-outfit text-xs font-bold text-[#F65A36] uppercase tracking-wider">
                      Academic Year 2026/27
                    </span>
                    <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0F2040]">
                      Admission Enquiry Form
                    </h2>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Schedule a campus tour & interactive child readiness session
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-emerald-800 text-xs font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Seats Available
                  </span>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Parent Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                      Parent / Guardian Name <span className="text-[#F65A36]">*</span>
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors" />
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder="e.g. Rohil Sharma"
                        disabled={isLoading}
                        className={`w-full bg-[#FAF8F5] border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${
                          errors.name ? "border-red-400" : "border-slate-200/80"
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
                        Contact Phone <span className="text-[#F65A36]">*</span>
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors" />
                        <input
                          {...register("phone", {
                            required: "Phone is required",
                            minLength: { value: 10, message: "Enter at least 10 digits" },
                          })}
                          type="tel"
                          placeholder="e.g. 9876543210"
                          disabled={isLoading}
                          className={`w-full bg-[#FAF8F5] border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${
                            errors.phone ? "border-red-400" : "border-slate-200/80"
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
                            pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                          })}
                          type="email"
                          placeholder="name@email.com"
                          disabled={isLoading}
                          className={`w-full bg-[#FAF8F5] border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${
                            errors.email ? "border-red-400" : "border-slate-200/80"
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] font-bold text-red-500">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* City & State Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                        City <span className="text-[#F65A36]">*</span>
                      </label>
                      <div className="relative group">
                        <MapPin className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors" />
                        <input
                          {...register("city", { required: "City is required" })}
                          type="text"
                          placeholder="e.g. Bangalore"
                          disabled={isLoading}
                          className={`w-full bg-[#FAF8F5] border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${
                            errors.city ? "border-red-400" : "border-slate-200/80"
                          }`}
                        />
                      </div>
                      {errors.city && (
                        <p className="text-[11px] font-bold text-red-500">{errors.city.message}</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                        State <span className="text-[#F65A36]">*</span>
                      </label>
                      <div className="relative group">
                        <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors" />
                        <input
                          {...register("state", { required: "State is required" })}
                          type="text"
                          placeholder="e.g. Karnataka"
                          disabled={isLoading}
                          className={`w-full bg-[#FAF8F5] border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${
                            errors.state ? "border-red-400" : "border-slate-200/80"
                          }`}
                        />
                      </div>
                      {errors.state && (
                        <p className="text-[11px] font-bold text-red-500">{errors.state.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Seeking Admission For */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                      Seeking Admission For
                    </label>
                    <div className="relative group">
                      <select
                        {...register("admission_seeking")}
                        disabled={isLoading}
                        className="w-full bg-[#FAF8F5] border-2 border-slate-200/80 rounded-2xl py-3 pl-4 pr-10 text-xs sm:text-sm text-[#0F2040] font-medium focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all appearance-none cursor-pointer"
                      >
                        <option value="Toddler Playgroup (1.5–2.5 Years)">Toddler Playgroup (1.5 – 2.5 Years)</option>
                        <option value="Nursery Program (2.5–3.5 Years)">Nursery Program (2.5 – 3.5 Years)</option>
                        <option value="Kindergarten LKG (3.5–4.5 Years)">Kindergarten LKG (3.5 – 4.5 Years)</option>
                        <option value="Kindergarten UKG (4.5–6 Years)">Kindergarten UKG (4.5 – 6 Years)</option>
                        <option value="Full-Day Daycare & Activity Club">Full-Day Daycare & Activity Club</option>
                        <option value="Mind Lab & Cognitive Development">Mind Lab & Cognitive Development</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-slate-400 pointer-events-none group-focus-within:text-[#F65A36]" />
                    </div>
                  </div>

                  {/* Message / Specific Questions */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[#0F2040] text-xs sm:text-sm">
                      Questions or Campus Visit Preferences
                    </label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors" />
                      <textarea
                        {...register("message")}
                        rows={3}
                        placeholder="Tell us about your child's age, preferred campus visit date, or specific queries..."
                        disabled={isLoading}
                        className="w-full bg-[#FAF8F5] border-2 border-slate-200/80 rounded-2xl py-3 pl-11 pr-4 text-xs sm:text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:bg-white focus:ring-4 focus:ring-[#F65A36]/10 transition-all resize-none"
                      />
                    </div>
                  </div>

                  {/* Hidden country field default */}
                  <input type="hidden" {...register("country")} value="India" />

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-[#F65A36] hover:bg-[#E84A26] text-white font-bold py-3.5 sm:py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-3 text-sm sm:text-base ${
                        isLoading ? "opacity-75 cursor-not-allowed hover:translate-y-0" : ""
                      }`}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Scheduling Visit...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Admission Enquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-1 text-center text-xs text-slate-500 font-semibold flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Instant WhatsApp Confirmation • Zero Registration Fee for Enquiry</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 4 FOUNDATIONAL PROGRAM PATHWAYS (Pastel Cloud Cards)
      ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden">
        <CloudEdge fill="#EEF0FB" />

        <div className="relative bg-[#EEF0FB] py-12 sm:py-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#F65A36]" />
                <span>Foundational Pathways</span>
              </div>

              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight mb-4">
                Designed for Every Growth Stage
              </h2>

              <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                Our age-curated Montessori environments stimulate curiosity, physical coordination, language mastery, and social empathy.
              </p>
            </div>

            {/* 4 Pastel Cloud Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programsList.map((prog, i) => {
                const IconComp = prog.icon;
                return (
                  <div
                    key={i}
                    className="relative flex flex-col justify-between p-6 sm:p-7 rounded-[2.5rem] border-2 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
                    style={{ backgroundColor: prog.bgHex, borderColor: prog.borderHex }}
                  >
                    <div>
                      <div
                        className="w-12 h-12 rounded-2xl text-white flex items-center justify-center mb-4 shadow-xs"
                        style={{ backgroundColor: prog.badgeHex }}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className="inline-block px-3 py-1 rounded-md bg-white/90 text-slate-700 text-[11px] font-extrabold mb-3 shadow-2xs">
                        {prog.age}
                      </span>

                      <h3 className="font-outfit font-extrabold text-xl text-[#0F2040] mb-2 leading-tight">
                        {prog.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        {prog.desc}
                      </p>
                    </div>

                    <div className="pt-5 border-t border-black/5 mt-5 flex items-center justify-between text-xs font-bold text-[#0F2040]">
                      <span>Montessori & Froebel</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#F65A36]" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <CloudEdge flip fill="#EEF0FB" />
      </section>

      {/* =========================================================================
          SECTION 3: WHY PARENTS CHOOSE US (Alternating Left-Right with Images)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        {/* Row 1: Authentic Montessori & Certified Mentors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#F65A36]" />
              <span>Child-Led Montessori Pedagogy</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
              Where Children Learn by Doing, <span className="text-[#F65A36]">Not Memorizing.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              At Little Cambridge Global, we step away from outdated institutional repetition. Children explore concepts with beautiful, tactile apparatus at their own rhythm, guided by passionate educators who observe and nurture their innate potential.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "1:8 Educator-to-Child ratio ensuring individualized attention every hour",
                "Tactile Froebel gifts & Montessori sensorial tools promoting deep conceptual clarity",
                "Phonetic reading readiness and joyful early mathematical logic",
              ].map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
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

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px]">
              <div
                className="relative w-full aspect-[4/3] overflow-hidden bg-white p-2 shadow-xl border-4 border-white transition-all duration-500 hover:scale-[1.02]"
                style={{
                  clipPath: "url(#admission-clip-1)",
                  borderRadius: "44% 56% 50% 50% / 55% 45% 55% 45%",
                }}
              >
                <Image
                  src="/programs/artists_workshop.jpg"
                  alt="Child engaged in Montessori art studio"
                  fill
                  sizes="(max-width: 640px) 90vw, 460px"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-4 right-4 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-lg border border-slate-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E8F5E9] text-emerald-700">
                  <Award className="h-4 w-4" />
                </span>
                <span className="text-xs font-extrabold text-[#0F2040]">
                  Global Benchmark Standards
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Uncompromising Safety, Hygiene & Live CCTV */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[460px]">
              <div
                className="relative w-full aspect-[4/3] overflow-hidden bg-white p-2 shadow-xl border-4 border-white transition-all duration-500 hover:scale-[1.02]"
                style={{
                  clipPath: "url(#admission-clip-2)",
                  borderRadius: "55% 45% 52% 48% / 46% 54% 46% 54%",
                }}
              >
                <Image
                  src="/why_choose_our_school.jpg"
                  alt="Children learning happily with teacher"
                  fill
                  sizes="(max-width: 640px) 90vw, 460px"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-4 left-4 z-20 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-2.5 shadow-lg border border-slate-100">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#E3F1FB] text-[#2F8FD0]">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span className="text-xs font-extrabold text-[#0F2040]">
                  Live Parent CCTV Streaming
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3F1FB] border border-[#2F8FD0]/20 text-[#2F8FD0] text-xs sm:text-sm font-bold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2F8FD0]" />
              <span>Campus Safety & Wellness</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
              100% Child-Safe Campus with <span className="text-[#F65A36]">Parent Transparency.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              We understand that choosing an early childhood center requires total peace of mind. Our campuses feature round-the-clock security, non-toxic rounded furniture, medical-grade sanitization, and parent mobile app integration.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Live mobile CCTV access allowing working parents to check in anytime",
                "Pediatric first-aid certified mentors and emergency protocol drills",
                "Wholesome, dietitian-planned meals and peaceful ergonomic sleep suites",
              ].map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
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
      </section>

      {/* =========================================================================
          SECTION 4: 4-STEP ADMISSION PROCESS
      ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs mb-3">
              <Clock className="w-3.5 h-3.5 text-[#F65A36]" />
              <span>Simple 4-Step Journey</span>
            </span>
            <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-[#0F2040]">
              How Admissions Work
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
              A transparent, supportive, and stress-free onboarding process for your family.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Enquiry & Dialogue",
                desc: "Fill our online form or call our admissions desk. Receive a customized curriculum brochure.",
              },
              {
                step: "02",
                title: "Campus Discovery Tour",
                desc: "Walk through our Montessori labs, meet educators, and observe real interactive sessions.",
              },
              {
                step: "03",
                title: "Child Play Interaction",
                desc: "A warm, pressure-free playdate where our mentors understand your child's natural interests.",
              },
              {
                step: "04",
                title: "Welcome Onboarding",
                desc: "Complete documentation, receive the student kit, and join our vibrant parent community.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-[#FAF8F5] border border-slate-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-outfit font-extrabold text-2xl text-[#F65A36] mb-3 block">
                    {item.step}
                  </span>
                  <h3 className="font-outfit font-extrabold text-lg text-[#0F2040] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: CAMPUS TOUR BOOKING & WHATSAPP BANNER
      ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-[3rem] bg-gradient-to-br from-[#0F2040] via-[#162B50] to-[#0A172D] text-white p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#5DB6E0] text-xs sm:text-sm font-bold border border-white/15 shadow-xs">
              <Calendar className="w-3.5 h-3.5 text-[#5DB6E0]" />
              <span>Experience Little Cambridge In Person</span>
            </span>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to Visit Our Campus?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
              Book a weekend campus visit or connect with our Senior Admissions Director for personalized fee structures and transport details.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/917340655077"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm sm:text-base font-bold shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>WhatsApp: +91 7340655077</span>
              </a>

              <a
                href="tel:+917340655077"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm sm:text-base font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-[#F6A04D]" />
                <span>Call Admissions Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}