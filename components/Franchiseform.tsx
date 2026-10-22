"use client";

import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { FranchiseFormSchemaType } from "@/lib/schema";
import { IFranchiseDetail } from "@/lib/types";
import Image from "next/image";
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
  Star,
  MapPin,
  FileText,
  Clock,
  Sparkles,
  ShieldCheck,
  Check,
  HelpCircle,
  ArrowRight,
  BookOpen,
  Heart,
  Calendar,
  Smile,
  ArrowUpRight,
} from "lucide-react";
import { doodleTile, toDataUri } from "./NurturingCarousel";

const ORANGE = "#F65A36";
const NAVY = "#0F2040";

// Reusable SVG Doodle Patterns
const heroPattern = toDataUri(doodleTile("rgba(15,32,64,0.08)"));
const darkPattern = toDataUri(doodleTile("rgba(255,255,255,0.06)"));
const peachPattern = toDataUri(doodleTile("rgba(246,90,54,0.12)"));

// Hero Interactive Tabs Data
const franchiseSlides = [
  {
    id: "turnkey",
    tab: "30–45 Days Setup",
    num: "01",
    badge: "Turnkey Launch Model • 2026/2027",
    title: "Turnkey Setup.",
    highlight: "Launch in 30–45 Days.",
    text: "Complete end-to-end support from site feasibility, 3D architectural blueprints, child-safe interior specifications, to Montessori materials and recruitment.",
    image: "/assests/big_owl_book.png",
    alt: "Little Cambridge Academic Mentor Owl",
    panelColor: "#0F2040",
    card1: { icon: Clock, title: "45-Day Fast Setup", sub: "Design & supply support" },
    card2: { icon: ShieldCheck, title: "100% Child-Safe", sub: "Architectural blueprint" },
    points: ["Site Feasibility Survey", "Child-Safe Interiors", "Equipment Sourcing", "Launch Marketing"],
  },
  {
    id: "economics",
    tab: "40%–50% ROI",
    num: "02",
    badge: "Unit Economics • Zero Royalty",
    title: "Zero Royalty.",
    highlight: "Keep 100% of Tuition.",
    text: "Unlike traditional 15%–20% royalty franchises, we operate on a transparent kit-based model. High student retention and daycare demand yield rapid operational breakeven.",
    image: "/assests/boy_pointingtowardform.png",
    alt: "Little Cambridge Smiling Student",
    panelColor: "#F65A36",
    card1: { icon: TrendingUp, title: "40% – 50% ROI", sub: "High-yield preschool model" },
    card2: { icon: DollarSign, title: "Zero Royalty", sub: "Kit-based transparent pricing" },
    points: ["₹10–12L Initial Setup", "Daycare Revenue Stream", "No Monthly Royalty Cut", "Predictable Cashflow"],
  },
  {
    id: "pedagogy",
    tab: "Montessori Academy",
    num: "03",
    badge: "Academic Excellence • Training",
    title: "Centralized Academy.",
    highlight: "Certified Teachers.",
    text: "Continuous teacher recruitment, child psychology workshops, and seasonal lesson plans powered by our Centralized Montessori Training Academy.",
    image: "/assests/onlydogimage.png",
    alt: "Welcoming Mascot Buddy",
    panelColor: "#0F2040",
    card1: { icon: Award, title: "Montessori Certified", sub: "Global early syllabus" },
    card2: { icon: Users, title: "1:8 Educator Ratio", sub: "Faculty recruitment help" },
    points: ["Centralized Curriculum", "Pediatric First-Aid", "Interactive Classrooms", "Parent App Tech"],
  },
];

// FAQs Data
const franchiseFaqData = [
  {
    question: "What is the initial investment required to start a Little Cambridge Global franchise?",
    answer:
      "The initial setup investment starts at approximately ₹10–12 lakhs and may vary depending on the city tier, property size, and custom infrastructure requirements. In premier metropolitan hubs, total capital may extend up to ₹1 crore for flagship campuses.",
    icon: DollarSign,
  },
  {
    question: "Is there any royalty fee on gross revenue?",
    answer:
      "No separate monthly or quarterly royalty fee is charged. Little Cambridge Global follows an entrepreneur-friendly kit-based pricing model, allowing franchise partners to retain 100% of their tuition fee collections.",
    icon: Award,
  },
  {
    question: "Is it necessary to own commercial property?",
    answer:
      "No. The preschool can be established on either an owned or leased commercial or residential premises. Our Operations & Architecture teams conduct a free site feasibility survey to approve the property.",
    icon: Award,
  },
  {
    question: "How much space is required for a campus?",
    answer:
      "A minimum covered area of approximately 3,500 sq. ft. is required for the Montessori setup, with potential to scale up to 10,000 sq. ft. including an outdoor sensory play courtyard.",
    icon: MapPin,
  },
  {
    question: "What is the typical setup timeline from agreement to launch?",
    answer:
      "The typical turnkey setup timeline is 30–45 days. Our project managers oversee interior branding, child-safe fixtures, play zones, and curriculum delivery to ensure a smooth launch.",
    icon: Clock,
  },
  {
    question: "What marketing and brand-building support do partners receive?",
    answer:
      "Partners receive 360° support: national digital marketing campaigns, Google Ads, hyper-local social media presence, event kits, brochures, and dedicated admissions lead generation for your pin code.",
    icon: TrendingUp,
  },
];

export default function FranchisePage({
  onHandleSubmit,
  defaultFranchise,
  isLoading,
}: {
  defaultFranchise?: IFranchiseDetail;
  onHandleSubmit: (data: FranchiseFormSchemaType) => void;
  isLoading: boolean;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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

  const currentSlide = franchiseSlides[activeSlide]!;
  const CardIcon1 = currentSlide.card1.icon;
  const CardIcon2 = currentSlide.card2.icon;

  const scrollToForm = () => {
    const el = document.getElementById("franchise-application-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0F2040] font-jakarta selection:bg-[#FFEFE6] selection:text-[#F65A36]">
      {/* =========================================================================
          HERO STAGE: Exact HeroSlider DNA with Dynamic Character Pop-Out
      ========================================================================= */}
      <section
        aria-label="Franchise Hero Stage"
        className="relative w-full overflow-hidden bg-[#FFF8F4] pt-32 sm:pt-40 pb-16 sm:pb-24 select-none"
        style={{ backgroundImage: heroPattern, backgroundSize: "360px 360px" }}
      >
        {/* Soft Ambient Radial Glows */}
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#F65A36]/10 blur-3xl pointer-events-none" />
        <div className="absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-[#2F8FD0]/10 blur-3xl pointer-events-none" />

        {/* Hand-drawn wavy line background accent */}
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 340C260 310 480 250 720 285S1180 240 1440 130"
            stroke="#F65A36"
            strokeOpacity="0.45"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* ---------- LEFT: Hero Headline & Action ---------- */}
            <div className="flex flex-col items-start lg:col-span-7">
              {/* Badge with pulsing white dot */}
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F65A36] px-4 py-1.5 text-xs sm:text-sm font-bold text-white shadow-[0_8px_16px_-8px_rgba(246,90,54,0.8)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                {currentSlide.badge}
              </span>

              {/* Massive Outfit Title with Hand-Drawn Wavy Underline */}
              <h1 className="mb-5 font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-[#0F2040]">
                {currentSlide.title}{" "}
                <span className="relative inline-block text-[#F65A36]">
                  {currentSlide.highlight}
                  <svg
                    aria-hidden
                    className="absolute -bottom-2 left-0 h-2.5 w-full"
                    viewBox="0 0 200 10"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M2 7C50 1 100 1 198 6"
                      stroke="#F65A36"
                      strokeOpacity="0.5"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mb-7 max-w-xl text-base sm:text-lg font-medium leading-relaxed text-slate-600">
                {currentSlide.text}
              </p>

              {/* Hero Action Buttons */}
              <div className="mb-7 flex flex-wrap items-center gap-3 sm:gap-4">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#F65A36] px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-[0_10px_20px_-10px_rgba(246,90,54,0.9)] transition-all hover:bg-[#E84A26] hover:-translate-y-0.5"
                >
                  <span>Apply for Franchise</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href="/brochures/franchise-prospectus.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F2040] px-6 py-3 sm:py-3.5 text-sm sm:text-base font-bold text-[#0F2040] transition-all hover:bg-[#0F2040] hover:text-white"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Prospectus</span>
                </a>
              </div>

              {/* Dynamic Checkmark Pills */}
              <ul className="flex flex-wrap gap-2.5">
                {currentSlide.points.map((p) => (
                  <li
                    key={p}
                    className="inline-flex items-center gap-2 rounded-full border border-[#0F2040]/10 bg-white px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#0F2040] shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#F65A36]" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* ---------- RIGHT: Giant Doodle Panel with Character Pop-Out ---------- */}
            <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
              <div
                className="relative mx-auto aspect-[1/1.02] w-full max-w-[440px] rounded-[2.5rem] sm:rounded-[3rem] shadow-[0_30px_50px_-25px_rgba(15,32,64,0.55)] transition-colors duration-500 overflow-visible"
                style={{ backgroundColor: currentSlide.panelColor }}
              >
                {/* Character pops out of the top/bottom boundary */}
                <div className="absolute inset-x-0 bottom-0 top-[-10%] flex items-end justify-center pointer-events-none">
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    width={400}
                    height={440}
                    priority
                    className="h-auto max-h-[98%] w-auto max-w-[90%] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)] transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Animated Badge 1 (Top-Left) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                className="absolute -left-2 top-6 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_14px_30px_-12px_rgba(15,32,64,0.35)] sm:-left-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFEFE6] text-[#F65A36]">
                  <CardIcon1 className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold leading-tight text-[#0F2040]">
                    {currentSlide.card1.title}
                  </span>
                  <span className="block text-[11px] font-medium leading-tight text-slate-500">
                    {currentSlide.card1.sub}
                  </span>
                </span>
              </motion.div>

              {/* Floating Animated Badge 2 (Bottom-Right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.4 }}
                className="absolute -right-2 bottom-6 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_14px_30px_-12px_rgba(15,32,64,0.35)] sm:-right-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E3F1FB] text-[#2F8FD0]">
                  <CardIcon2 className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold leading-tight text-[#0F2040]">
                    {currentSlide.card2.title}
                  </span>
                  <span className="block text-[11px] font-medium leading-tight text-slate-500">
                    {currentSlide.card2.sub}
                  </span>
                </span>
              </motion.div>
            </div>
          </div>

          {/* ---------- Interactive Model Switcher Tabs (Same as HeroSlider tabs) ---------- */}
          <div className="mt-12 pt-6 border-t border-[#0F2040]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="grid w-full max-w-3xl grid-cols-1 sm:grid-cols-3 gap-3">
              {franchiseSlides.map((slide, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`rounded-2xl p-3.5 text-left transition-all ${isActive
                        ? "bg-white border-2 border-[#F65A36] shadow-md ring-2 ring-[#F65A36]/15 scale-[1.01]"
                        : "bg-white/60 hover:bg-white border border-slate-200/80 shadow-xs"
                      }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-xs font-black ${isActive ? "text-[#F65A36]" : "text-slate-400"}`}>
                        {slide.num}
                      </span>
                      {isActive && (
                        <span className="inline-block w-2 h-2 rounded-full bg-[#F65A36] animate-pulse" />
                      )}
                    </div>
                    <span className="block font-outfit text-sm font-bold text-[#0F2040]">
                      {slide.tab}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <Sparkles className="w-4 h-4 text-[#F65A36]" />
              <span>Click a model to explore unit economics & architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: APPLICATION DESK & FORM (With boy_pointingtowardform.png)
      ========================================================================= */}
      <section id="franchise-application-form" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white shadow-soft relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (Col 5) - Character pointing directly at form */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
                <Send className="w-3.5 h-3.5 text-[#F65A36]" />
                <span>Partner Desk • Fast-Track Application</span>
              </div>

              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                Request Franchise <span className="text-[#F65A36]">Prospectus</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                Connect directly with our National Expansion Leadership. Receive a city-specific financial model, spatial blueprints, and turnkey onboarding kits.
              </p>

              {/* Boy pointing right at the form */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <div className="relative w-52 h-56 sm:w-60 sm:h-64">
                  <Image
                    src="/assests/boy_pointingtowardform.png"
                    alt="Boy Pointing to Franchise Form"
                    width={260}
                    height={280}
                    className="object-contain drop-shadow-xl"
                  />
                </div>
              </div>

              {/* Quick direct contact card */}
              <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-slate-200/80 shadow-xs text-left max-w-sm mx-auto lg:mx-0">
                <p className="text-xs font-bold text-[#0F2040]">Need an instant conversation?</p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Call our Director of Franchise Partnerships directly:
                </p>
                <a
                  href="tel:+917340655077"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-bold text-[#F65A36] hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>+91 734 065 5077 (10 AM – 7 PM IST)</span>
                </a>
              </div>
            </div>

            {/* Right Column (Col 7) - High-Conversion Application Form */}
            <div className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-6 sm:p-9 border border-slate-200/90 shadow-sm">
              <div className="mb-6 pb-4 border-b border-slate-200/70 flex items-center justify-between">
                <div>
                  <h3 className="font-outfit text-xl sm:text-2xl font-extrabold text-[#0F2040]">
                    Franchise Inquiry Form
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    Takes under 2 minutes • 100% Confidential
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-emerald-800 text-xs font-bold">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  Pan-India 2026/27
                </span>
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
                      className={`w-full bg-white border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${errors.name ? "border-red-400" : "border-slate-200/80"
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
                        className={`w-full bg-white border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${errors.phone ? "border-red-400" : "border-slate-200/80"
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
                        className={`w-full bg-white border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${errors.email ? "border-red-400" : "border-slate-200/80"
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
                      className={`w-full bg-white border-2 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#0F2040] font-medium placeholder:text-slate-400 focus:outline-none focus:border-[#F65A36] focus:ring-4 focus:ring-[#F65A36]/10 transition-all ${errors.city ? "border-red-400" : "border-slate-200/80"
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
                      Planned Investment Budget
                    </label>
                    <div className="relative group">
                      <DollarSign className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors z-10" />
                      <select
                        {...register("budget")}
                        disabled={isLoading}
                        className="w-full bg-white border-2 border-slate-200/80 rounded-2xl py-3 pl-11 pr-10 text-xs sm:text-sm text-[#0F2040] font-medium focus:outline-none focus:border-[#F65A36] focus:ring-4 focus:ring-[#F65A36]/10 transition-all appearance-none cursor-pointer"
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
                      Property Availability
                    </label>
                    <div className="relative group">
                      <Building2 className="absolute left-4 top-3.5 w-4 h-4 text-slate-400 group-focus-within:text-[#F65A36] transition-colors z-10" />
                      <select
                        {...register("property")}
                        disabled={isLoading}
                        className="w-full bg-white border-2 border-slate-200/80 rounded-2xl py-3 pl-11 pr-10 text-xs sm:text-sm text-[#0F2040] font-medium focus:outline-none focus:border-[#F65A36] focus:ring-4 focus:ring-[#F65A36]/10 transition-all appearance-none cursor-pointer"
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
                    className={`w-full bg-[#F65A36] hover:bg-[#E84A26] text-white font-bold py-4 px-8 rounded-full shadow-soft hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-3 text-base sm:text-lg ${isLoading ? "opacity-75 cursor-not-allowed hover:translate-y-0" : ""
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

                <div className="pt-2 text-center text-xs text-slate-500 font-semibold flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Confidential Advisory • No Third-Party Spam</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 4 REVOLUTIONARY PILLARS (Bento Grid)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#0F2040] text-xs sm:text-sm font-bold shadow-xs mb-4">
            <Star className="w-3.5 h-3.5 text-[#F65A36]" />
            <span>The Little Cambridge Business Model</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight mb-4">
            Built for Early Childhood Joy, <span className="text-[#F65A36]">Engineered for Profit</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Our partnership framework resolves the three biggest headaches in preschool operations: licensing complexity, educator turnover, and predatory royalties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFEFE6] text-[#F65A36] flex items-center justify-center mb-5">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-extrabold text-xl text-[#0F2040] mb-2">
                Zero Royalty Fees
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Retain 100% of all tuition and daycare fees. We only charge transparent student kit pricing, giving you maximum unit profit margins.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs font-bold text-[#F65A36]">
              Keep 100% Student Tuition
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E3F1FB] text-[#2F8FD0] flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-extrabold text-xl text-[#0F2040] mb-2">
                30–45 Days Launch
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                From agreement signing to your grand opening. Our project team delivers turnkey spatial plans, branding assets, and sensory play modules.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs font-bold text-[#2F8FD0]">
              Fast-Track Feasibility & Build
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F5E9] text-emerald-700 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-extrabold text-xl text-[#0F2040] mb-2">
                Parent CCTV Tech
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Stand out in your local market with live CCTV parent streaming, cloud ERP, digital attendance, and developmental portfolios on the parent app.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs font-bold text-emerald-700">
              #1 Parent Trust Factor
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF5ED] text-amber-700 flex items-center justify-center mb-5">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-outfit font-extrabold text-xl text-[#0F2040] mb-2">
                40%–50% ROI
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Multi-revenue streams from Toddler Playgroup, Nursery, Kindergarten, Mind Lab, Daycare, and holiday enrichment camps.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 text-xs font-bold text-amber-700">
              Rapid Capital Breakeven
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: 360° OPERATIONAL ECOSYSTEM (Navy Theme matching Hero)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="relative bg-gradient-to-br from-[#0F2040] via-[#162B50] to-[#0A172D] text-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-xl overflow-hidden border border-white/10"
          style={{ backgroundImage: darkPattern, backgroundSize: "300px 300px" }}
        >
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#5DB6E0] text-xs sm:text-sm font-bold mb-4 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-[#5DB6E0]" />
              <span>Full-Stack Operational Guidance</span>
            </div>
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Everything Provided, <span className="text-[#F65A36]">Zero Guesswork</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
              From day one, you get dedicated operational managers, teacher certification, and national brand power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Architectural & Interior Blueprint",
                desc: "3D architectural floor plans, sensory park designs, child-safe fixtures, and acoustic materials tailored to your premises.",
                icon: Building2,
              },
              {
                title: "Recruitment & Montessori Academy",
                desc: "Continuous recruitment assistance and certified training through our Centralized Montessori Academy with periodic audits.",
                icon: Users,
              },
              {
                title: "Digital ERP & Parent Mobile App",
                desc: "Cloud school ERP, student fee management, automated receipts, bus tracking, and real-time CCTV parent streaming.",
                icon: ShieldCheck,
              },
              {
                title: "Hyper-Local Digital Marketing",
                desc: "Geo-targeted Google Ads, Instagram lead campaigns, local school tie-ups, brochures, and admissions open-house events.",
                icon: TrendingUp,
              },
              {
                title: "Health, Safety & Hygiene SOPs",
                desc: "Standard operating procedures covering pediatric first-aid, sanitization routines, child-proofing, and emergency drills.",
                icon: CheckCircle2,
              },
              {
                title: "Mind Lab & Daycare Integration",
                desc: "Generate full-day operational revenue with cognitive Mind Lab strategy games, infant suites, and nutritious meal routines.",
                icon: Star,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-white/15 shadow-sm hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FFEFE6] text-[#F65A36] flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-bold text-lg sm:text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: SPACE, CRITERIA & DOWNLOADS (Featuring onlydogimage.png)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white shadow-soft relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Mascot Community Banner (Col 5) */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[380px] rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#FFEFE6] via-[#FAF8F5] to-[#E3F1FB] p-6 sm:p-8 border border-slate-200/80 shadow-soft text-center flex flex-col items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-bold text-[#0F2040] shadow-xs mb-3">
                  <Heart className="w-3.5 h-3.5 text-[#F65A36]" />
                  A Trusted Preschool Family
                </span>

                <div className="relative w-48 h-56 my-2">
                  <Image
                    src="/assests/onlydogimage.png"
                    alt="Campus Mascot Dog"
                    width={220}
                    height={250}
                    className="object-contain drop-shadow-md"
                  />
                </div>

                <div className="mt-2 bg-white rounded-2xl p-4 border border-slate-100 shadow-xs w-full text-center">
                  <p className="text-xs sm:text-sm font-bold text-[#0F2040]">
                    &quot;We look forward to welcoming you to the Little Cambridge family!&quot;
                  </p>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">
                    Free Property Site Audit Available
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Space Criteria & Direct Downloads (Col 7) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E3F1FB] border border-[#2F8FD0]/20 text-[#2F8FD0] text-xs sm:text-sm font-bold shadow-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2F8FD0]" />
                <span>Eligibility & Property Criteria</span>
              </div>

              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                Campus Space & <span className="text-[#F65A36]">Criteria</span>
              </h2>

              <div className="space-y-3.5">
                {[
                  {
                    title: "Space Requirement",
                    desc: "Minimum 3,500 sq. ft. of covered area, expandable up to 10,000 sq. ft. Ground-floor access with outdoor play space preferred.",
                  },
                  {
                    title: "Investment Profile",
                    desc: "Initial capital starts at ₹10–12 Lakhs (covering setup, branding, and curriculum kits) up to ₹1 Crore for premier multi-floor centers.",
                  },
                  {
                    title: "Property Status",
                    desc: "Can be established on owned or leased property in prime residential zones or well-connected commercial areas.",
                  },
                  {
                    title: "Agreement Tenure",
                    desc: "Standard 5 or 10-year renewable franchise agreement with complete ongoing support.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#FAF8F5] border border-slate-200/80"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#FFEFE6] text-[#F65A36] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-outfit font-bold text-[#0F2040] text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Official Download Buttons */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="/brochures/franchise-prospectus.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#0F2040] hover:bg-[#1a3464] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                >
                  <Download className="w-4 h-4 text-[#F65A36]" />
                  <span>Download Franchise Prospectus</span>
                </a>

                <a
                  href="/brochures/curriculum-overview.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 p-4 rounded-2xl bg-white border-2 border-slate-200 text-[#0F2040] hover:border-[#F65A36] text-xs sm:text-sm font-bold transition-all shadow-xs"
                >
                  <Download className="w-4 h-4 text-[#2F8FD0]" />
                  <span>Download Curriculum Guide</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FRANCHISE FAQS (Featuring quirillookingcluless.png)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (Col 4) - Curious Squirrel Mascot */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#FFF5EE] via-white to-[#F0F8FF] rounded-3xl p-7 sm:p-8 border border-white shadow-soft flex flex-col justify-between text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-[#0F2040] text-xs font-bold shadow-xs mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-[#F65A36]" />
                <span>Franchise Queries & Clarity</span>
              </div>

              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0F2040] tracking-tight">
                Curious About Partnering?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                Clear, transparent business answers to help you evaluate your city&apos;s early education opportunity.
              </p>
            </div>

            {/* Mascot Image - quirillookingcluless.png */}
            <div className="my-6 flex justify-center">
              <div className="relative w-44 h-44">
                <Image
                  src="/assests/quirillookingcluless.png"
                  alt="Curious Squirrel Mascot"
                  width={180}
                  height={180}
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Direct Helpline Box */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs text-left">
              <p className="text-xs font-bold text-[#0F2040] mb-0.5">
                Speak directly to our Director of Expansion
              </p>
              <p className="text-[11px] text-slate-500 mb-3 font-medium">
                Get one-on-one financial modeling for your city.
              </p>
              <a
                href="tel:+917340655077"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#0F2040] hover:bg-[#1a3464] text-white text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#F65A36]" />
                <span>Call +91 734 065 5077</span>
              </a>
            </div>
          </div>

          {/* Right Column (Col 8) - Interactive Accordion */}
          <div className="lg:col-span-8 space-y-3.5">
            <div className="mb-6">
              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0F2040]">
                Frequently Asked Partner Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Click on any question to view clear, detailed business answers.
              </p>
            </div>

            {franchiseFaqData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${isOpen
                      ? "bg-white border-[#F65A36]/40 shadow-sm"
                      : "bg-white/80 hover:bg-white border-slate-200/80 shadow-xs"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-[#FFEFE6] text-[#F65A36] flex items-center justify-center shrink-0">
                        <faq.icon className="w-4 h-4" />
                      </div>
                      <span className="font-outfit text-base sm:text-lg font-bold text-[#0F2040]">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen
                          ? "rotate-180 bg-[#0F2040] text-white"
                          : "bg-slate-100 text-slate-600"
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4 ml-0 sm:ml-11">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}