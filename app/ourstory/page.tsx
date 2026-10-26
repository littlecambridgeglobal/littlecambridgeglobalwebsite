"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Award,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronDown,
  GraduationCap,
  Globe2,
  Building2,
  HeartHandshake,
  Check,
  Compass,
} from "lucide-react";


const faqs = [
  {
    q: "How does child-led, adventure learning prepare my child for formal school?",
    a: "Rather than passive rote memorization, children at Little Cambridge develop deep conceptual clarity, phonetic fluency, independent critical thinking, and social poise. Evidence shows Montessori children adapt faster and achieve top evaluations during formal primary school admissions.",
  },
  {
    q: "What is your educator-to-child ratio and safety standard?",
    a: "We maintain an intimate 1:8 ratio for toddlers and 1:12 for kindergarteners. Campuses are equipped with HD live-streaming CCTV cameras for parents, pediatric first-aid certified educators, rounded-corner architecture, and strictly sanitized premises.",
  },
  {
    q: "Can parents visit a campus before deciding to enroll?",
    a: "Yes, absolutely! We welcome and encourage parents to book a personalized campus walkthrough. You will meet our leadership team, experience our Montessori classrooms firsthand, and receive tailored developmental insights for your child.",
  },
  {
    q: "What meals and nutrition are provided in the daycare program?",
    a: "Our in-house chef prepares fresh, wholesome, pediatric-approved vegetarian meals and fruit snacks daily. We cater to individual dietary preferences and allergy guidelines in a hygienic, family-style dining setting.",
  },
  {
    q: "At what age can a child start at Little Cambridge Global?",
    a: "Children can join our nurturing Infant & Toddler sensory pods starting from 12 months of age, progressing smoothly through Playgroup, Nursery, LKG, and UKG until 6 years.",
  },
];

export default function OurStoryRedesign() {
  const [activeLeader, setActiveLeader] = useState<"both" | "director" | "ceo" | "coo" | "mentor">("both");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="w-full bg-[#FFFDF9] text-[#0F2040] overflow-x-hidden font-jakarta selection:bg-[#FFEFE6] selection:text-[#F65A36]">
      {/* =========================================================================
          SECTION 1: HERO HEADER (Matching Screenshot with Clouds, Kid & Badges)
      ========================================================================= */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden bg-gradient-to-b from-[#FFF9EE] via-[#FFF5E5] to-[#FFFDF9]">
        {/* Playful Floating Background Doodles */}
        <div className="absolute top-16 left-8 sm:left-16 w-16 h-16 opacity-30 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-amber-400">
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="6" strokeDasharray="6 6" />
            <path d="M50 10 V20 M50 80 V90 M10 50 H20 M80 50 H90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute top-24 right-1/4 w-12 h-12 text-[#F65A36]/25 opacity-70 pointer-events-none hidden sm:block animate-pulse">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 left-12 w-20 h-20 text-sky-300/30 pointer-events-none hidden md:block">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M20,60 Q30,40 50,45 Q70,30 80,50 Q95,55 90,70 Q85,85 60,85 Q40,88 25,80 Q10,75 20,60 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6 text-left"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/25 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
                <Sparkles className="w-4 h-4 text-[#F65A36]" />
                <span>Early Learning Excellence • Our Story</span>
              </div>

              {/* Headline */}
              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F2040] tracking-tight leading-[1.12]">
                Nurturing Young Minds <br />
                <span className="text-[#F65A36]">For A Bright Future</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-medium max-w-xl leading-relaxed">
                Every child blooms in our inspiring space where education meets joyful play. We replace rigid rote learning with child-guided Montessori discovery, warmth, and global milestones.
              </p>

              {/* Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/admission">
                  <button className="inline-flex items-center gap-2.5 bg-[#F65A36] hover:bg-[#e04a27] text-white text-sm sm:text-base font-bold px-7 py-3.5 rounded-full shadow-lg shadow-[#F65A36]/25 hover:-translate-y-0.5 transition-all">
                    <span>Admissions Open</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>

                <a href="#leadership-messages">
                  <button className="inline-flex items-center gap-2.5 bg-[#0F2040] hover:bg-[#1a3464] text-white text-sm sm:text-base font-bold px-6 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all">
                    <HeartHandshake className="w-4 h-4 text-[#F65A36]" />
                    <span>Leadership Messages</span>
                  </button>
                </a>
              </div>

              {/* Quick stats mini ribbon */}
              <div className="pt-4 flex items-center gap-6 text-xs sm:text-sm font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Montessori Certified
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  1:8 Educator Ratio
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Live CCTV Access
                </span>
              </div>
            </motion.div>

            {/* Right Visual Image with Playful Accents (Matching Screenshot) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              {/* Background Cloud Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FFE8D6]/60 via-[#FFF1E0]/50 to-[#EBF5FF]/50 rounded-[3rem] blur-2xl -z-10" />

              <div className="relative w-full max-w-[420px] aspect-[4/4.5] rounded-[2.5rem] bg-gradient-to-b from-white via-[#FFF9F2] to-[#FAF8F5] p-4 sm:p-5 border-4 border-white shadow-xl shadow-amber-900/5 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assests/boy_pointingtowardform.png"
                  alt="Happy Student Learning at Little Cambridge Global"
                  width={420}
                  height={480}
                  className="object-contain drop-shadow-xl z-10"
                  priority
                />

                {/* Floating Alphabet Blocks Badge in Bottom Left */}
                <div className="absolute bottom-5 left-5 z-20 bg-white/95 backdrop-blur-xs px-3.5 py-2 rounded-2xl shadow-md border border-slate-100 flex items-center gap-2.5">
                  <div className="flex gap-1 text-xs font-black">
                    <span className="w-6 h-6 rounded-md bg-[#F65A36] text-white flex items-center justify-center shadow-xs">A</span>
                    <span className="w-6 h-6 rounded-md bg-[#2F8FD0] text-white flex items-center justify-center shadow-xs">B</span>
                    <span className="w-6 h-6 rounded-md bg-[#7839CD] text-white flex items-center justify-center shadow-xs">C</span>
                  </div>
                  <span className="text-xs font-bold text-slate-700">Montessori</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =========================================================================
              HERO BOTTOM FLOATING 4 PASTEL PILL CARDS (Matching Screenshot)
          ========================================================================= */}
          <div className="mt-16 sm:mt-20 pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {/* Pill 1: Active Learning */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#FFF4F0] border-2 border-[#FCDCC5] rounded-3xl p-5 text-center shadow-soft flex flex-col items-center group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#F65A36] mb-3 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-black text-[#0F2040] text-base sm:text-lg mb-1">
                  Active Learning
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Tactile hands-on discovery kits
                </p>
              </motion.div>

              {/* Pill 2: Experiential Play */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#F6F3FC] border-2 border-[#E5DBFA] rounded-3xl p-5 text-center shadow-soft flex flex-col items-center group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#7839CD] mb-3 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-black text-[#0F2040] text-base sm:text-lg mb-1">
                  Experiential Play
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Sensory stimulation & creativity
                </p>
              </motion.div>

              {/* Pill 3: Child-First Sanctuary */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#F0F8FC] border-2 border-[#D1EAF7] rounded-3xl p-5 text-center shadow-soft flex flex-col items-center group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#2F8FD0] mb-3 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-black text-[#0F2040] text-base sm:text-lg mb-1">
                  Safe Sanctuary
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Live CCTV feed & pediatric care
                </p>
              </motion.div>

              {/* Pill 4: Global Montessori */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#F1FAF5] border-2 border-[#CEEEDD] rounded-3xl p-5 text-center shadow-soft flex flex-col items-center group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-xs flex items-center justify-center text-[#1D7A56] mb-3 group-hover:scale-110 transition-transform">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-black text-[#0F2040] text-base sm:text-lg mb-1">
                  Global Montessori
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  World-class early milestones
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Organic Cloud Wave Transition at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-10 sm:h-16 text-white fill-current"
          >
            <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: INSPIRE GROWTH THROUGH PLAYFUL DISCOVERY (Matching Screenshot)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Organic Photo Frame with Happy Children */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[480px]">
              {/* Playful backdrop shadow */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-[2.5rem] bg-[#FFEFE6] -z-10" />

              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl shadow-slate-900/5 aspect-[4/4.2] bg-slate-100">
                <Image
                  src="/mariamontesori.webp"
                  alt="Inspiring Growth Through Playful Discovery"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#FFF2E8] flex items-center justify-center text-[#F65A36]">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text and Key Checkboxes */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2E8] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>About Little Cambridge Global</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2040] tracking-tight leading-tight">
              Inspire Growth Through{" "}
              <span className="text-[#F65A36]">Playful Discovery</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              At Little Cambridge Global, we believe learning should never feel like a chore. Inspired by Dr. Maria Montessori’s groundbreaking insights into the absorbent mind, our classrooms transform education into a magical journey of self-paced exploration and tactile curiosity.
            </p>

            {/* Checkbox Pills from Screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#FFF9F5] border border-[#FCDCC5]">
                <div className="w-8 h-8 rounded-full bg-[#F65A36] text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-outfit font-bold text-xs sm:text-sm text-[#0F2040]">
                  Active Learning Methods
                </span>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6F9FF] border border-[#D5E5FF]">
                <div className="w-8 h-8 rounded-full bg-[#2F8FD0] text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-outfit font-bold text-xs sm:text-sm text-[#0F2040]">
                  Safe & Nurturing Habitat
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              We respect every child’s individuality while fostering concentration, linguistic agility, and emotional resilience in a loving community.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link href="/admission">
                <button className="inline-flex items-center gap-2 bg-[#F65A36] hover:bg-[#e04a27] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md hover:-translate-y-0.5 transition-all">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#0F2040] border border-slate-200 font-bold text-sm px-6 py-3 rounded-full shadow-xs hover:-translate-y-0.5 transition-all">
                  <Phone className="w-4 h-4 text-[#F65A36]" />
                  <span>Schedule Campus Walk</span>
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: WHY CHOOSE OUR SCHOOL + 4 ROUND STATS (Matching Screenshot)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F3] to-[#FFFDF9] rounded-[3rem] my-8 border border-amber-100/60 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Content & Bullet Points */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold">
              <Award className="w-3.5 h-3.5" />
              <span>Why Choose Us</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2040] tracking-tight leading-tight">
              Why Choose <br />
              <span className="text-[#F65A36]">Our School</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed font-medium">
              We understand that choosing your child’s first school is one of the most sacred decisions you will ever make. Here is why families trust Little Cambridge Global:
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {[
                "Authentic Montessori-trained & child-psychology certified educators",
                "Ultra-secure campus with parent-accessible live CCTV streaming",
                "Inquiry-based sensory labs, organic arts, and phonics readiness",
                "Fresh, pediatrician-approved nutritious meals and calm daycare suites",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F65A36] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/admission">
                <button className="inline-flex items-center gap-2 bg-[#F65A36] hover:bg-[#e04a27] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all">
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#0F2040] border border-slate-200 font-bold text-sm px-6 py-3.5 rounded-full shadow-xs hover:-translate-y-0.5 transition-all">
                  <span>Contact Our Team</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Cloud-Shaped Photo Frame of Kids Doing Art */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/3.5] rounded-[3rem] overflow-hidden border-4 border-white shadow-xl shadow-slate-900/5 bg-slate-100">
              <Image
                src="/multiple_childre.jpg"
                alt="Children Smiling and Learning at Little Cambridge"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 460px"
              />
            </div>
          </div>
        </div>


      </section>

      {/* =========================================================================
          SECTION 8: CURVED CALLOUT BANNER - "BOOK ADMISSION FOR YOUR CHILD"
      ========================================================================= */}
      <section className="relative my-12 py-20 overflow-hidden bg-[#0F2040]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/multiple_childre.jpg"
            alt="School Children Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#FFF5ED] via-white to-[#FFF5ED] rounded-[2.5rem] p-8 sm:p-12 border-4 border-white shadow-2xl max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFEFE6] text-[#F65A36] text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited Seats for 2026–2027</span>
            </div>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2040] tracking-tight leading-tight mb-4">
              Book Admission <br />
              <span className="text-[#F65A36]">For Your Child</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed mb-6">
              Give your young explorer the gift of an international Montessori foundation. Schedule a personalized campus walk and consultation today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/admission">
                <button className="inline-flex items-center gap-2 bg-[#F65A36] hover:bg-[#e04a27] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg shadow-[#F65A36]/30 hover:-translate-y-0.5 transition-all">
                  <span>Apply Online Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="tel:+917340655077">
                <button className="inline-flex items-center gap-2 bg-[#0F2040] hover:bg-[#1a3464] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md hover:-translate-y-0.5 transition-all">
                  <Phone className="w-4 h-4 text-[#F65A36]" />
                  <span>Call +91 734 065 5077</span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: LEADERSHIP MESSAGES (DIRECTOR'S & CEO'S MESSAGES)
          + OUR EXPERT TEACHERS & MENTORS (User requested directly on ourstory page!)
      ========================================================================= */}
      <section id="leadership-messages" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#F65A36]" />
            <span>Voices of Leadership & Guidance</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2040] tracking-tight leading-tight">
            Our Guiding Vision &{" "}
            <span className="text-[#F65A36]">Expert Mentors</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Hear directly from the leadership shaping our international benchmark in early education, followed by our dedicated Montessori team.
          </p>

          {/* Interactive Leader Selector Tabs */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveLeader("both")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${activeLeader === "both"
                ? "bg-[#0F2040] text-white shadow-md"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/80 shadow-xs"
                }`}
            >
              All Leadership Messages
            </button>
            <button
              onClick={() => setActiveLeader("director")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${activeLeader === "director"
                ? "bg-[#0F2040] text-white shadow-md"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/80 shadow-xs"
                }`}
            >
              Director&apos;s Message
            </button>
            <button
              onClick={() => setActiveLeader("ceo")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${activeLeader === "ceo"
                ? "bg-[#0F2040] text-white shadow-md"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/80 shadow-xs"
                }`}
            >
              CEO&apos;s Message
            </button>
            <button
              onClick={() => setActiveLeader("coo")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${activeLeader === "coo"
                ? "bg-[#0F2040] text-white shadow-md"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/80 shadow-xs"
                }`}
            >
              COO&apos;s Message
            </button>
            <button
              onClick={() => setActiveLeader("mentor")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${activeLeader === "mentor"
                ? "bg-[#0F2040] text-white shadow-md"
                : "bg-white text-slate-600 hover:text-[#0F2040] border border-slate-200/80 shadow-xs"
                }`}
            >
              Mentor&apos;s Message
            </button>
          </div>
        </div>

        {/* --- LEADERSHIP CARDS --- */}
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
                className="relative bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-slate-100 shadow-soft overflow-hidden"
              >
                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFEFE6]/60 rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F0F8FF]/70 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* LEFT: Director Portrait Card (Arched Style from Screenshot) */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="relative w-full max-w-[360px] sm:max-w-[390px] rounded-[2.5rem] bg-gradient-to-b from-white via-[#FFF7F2] to-[#FAF8F5] p-4 sm:p-5 border-2 border-white shadow-lg">
                      {/* Floating Badge */}
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F2040] text-white text-[11px] sm:text-xs font-bold shadow-md whitespace-nowrap">
                        <GraduationCap className="w-3.5 h-3.5 text-[#F65A36]" />
                        <span>Founder & Director</span>
                      </div>

                      {/* Photo Frame */}
                      <div className="relative w-full aspect-[4/4.8] rounded-[2rem] overflow-hidden bg-slate-100 shadow-inner group">
                        <Image
                          src="/pankaj malik.jpeg"
                          alt="Mr. Pankaj Malik - Founder & Director, Little Cambridge Global"
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2040]/80 via-transparent to-transparent opacity-85" />

                        {/* Overlaid Info */}
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
                      <div className="mt-4 pt-3 border-t border-slate-100 px-2 space-y-2">
                        <p className="text-[12px] sm:text-[13px] font-bold text-[#0F2040] leading-snug">
                          Little Cambridge Global Preschool & Day Care
                        </p>
                        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-slate-500">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                            <Sparkles className="w-3 h-3 text-[#F65A36]" />
                            Montessori Sanctuary
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" />
                            Child-Centric Focus
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Director Message Body */}
                  <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
                      <HeartHandshake className="w-3.5 h-3.5 text-[#F65A36]" />
                      <span>Founder & Director&apos;s Message</span>
                    </div>

                    <div>
                      <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                        Where Little Steps Turn Into{" "}
                        <span className="text-[#F65A36]">Global Success</span>
                      </h3>
                      <p className="mt-2 text-sm sm:text-base font-semibold text-slate-600 italic border-l-2 border-[#F65A36] pl-3">
                        &ldquo;Welcome to Little Cambridge Global Preschool & Day Care, where we turn Little Steps to Global Success.&rdquo;
                      </p>
                    </div>

                    <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                      <p>
                        As the Founder and Director, it is my absolute privilege to welcome you to our nurturing community. Early childhood is the most crucial phase of human development. It is when the foundation for lifelong learning, curiosity, and emotional resilience is laid. With this understanding, we built <strong className="text-[#0F2040] font-bold">Little Cambridge Global Preschool & Day Care</strong>.
                      </p>

                      <p>
                        Our vision is rooted in a simple yet powerful philosophy: to blend global educational standards with deeply personal care. We designed an environment that sparks imagination, encourages critical thinking, and fosters empathy. From our inquiry-based curriculum to our warm, secure day care facilities, every corner is crafted to ensure your child feels safe, loved, and inspired.
                      </p>

                      <p>
                        Education is not just about preparing children for the next academic grade; it is about equipping them for life. We focus equally on cognitive growth and emotional intelligence. Our dedicated team does not merely teach—they guide, listen, and celebrate every small triumph.
                      </p>

                      <p className="font-semibold text-slate-700">
                        Thank you for trusting us with your most precious treasure. We look forward to walking alongside you as your child takes their unforgettable steps toward a bright and boundless future.
                      </p>
                    </div>

                    {/* Signature Block */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                className="relative bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-slate-100 shadow-soft overflow-hidden"
              >
                {/* Background Ambient Glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0F8FF]/70 rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFEFE6]/60 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Content on Left for alternating flow */}
                  <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF5FF] border border-[#2F8FD0]/20 text-[#1B6CA8] text-xs sm:text-sm font-bold shadow-xs">
                      <Globe2 className="w-3.5 h-3.5 text-[#2F8FD0]" />
                      <span>Chief Executive Officer&apos;s Message</span>
                    </div>

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

                    <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                      <p>
                        Early childhood is a brief, critical window during which a child’s lifelong foundation is built. At Little Cambridge Global Preschool & Day Care, we do not believe in rushing or forcing education. Instead, we champion the time-tested philosophy of <strong className="text-[#0F2040] font-bold">Dr. Maria Montessori</strong>, blending it with premium, modern day care services to provide a holistic ecosystem where young minds thrive naturally through sensory exploration and self-discovery.
                      </p>

                      <p>
                        Our mission extends beyond running traditional classrooms. We are building a global network of premium early childhood hubs that respect each child’s unique learning pace, fostering true independence, creativity, and cognitive growth. To achieve this, our franchise framework is built on uncompromising operational excellence and rigorous quality benchmarks.
                      </p>

                      <p>
                        To our franchise partners, we offer more than a profitable business model in a highly resilient education sector. We offer a legacy. When you join the Little Cambridge Global family, you gain access to an international standard of early life education, a robust operational blueprint, and continuous corporate support.
                      </p>

                      <p className="font-semibold text-slate-700">
                        Thank you for your shared passion for nurturing the next generation of confident, independent, and socially conscious global citizens. Let us build bright beginnings, one child and one neighbourhood at a time.
                      </p>
                    </div>

                    {/* Signature Block */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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

                  {/* RIGHT: CEO Portrait Card */}
                  <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
                    <div className="relative w-full max-w-[360px] sm:max-w-[390px] rounded-[2.5rem] bg-gradient-to-b from-white via-[#F0F8FF] to-[#FAF8F5] p-4 sm:p-5 border-2 border-white shadow-lg">
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F2040] text-white text-[11px] sm:text-xs font-bold shadow-md whitespace-nowrap">
                        <Globe2 className="w-3.5 h-3.5 text-[#2F8FD0]" />
                        <span>Chief Executive Officer</span>
                      </div>

                      <div className="relative w-full aspect-[4/4.8] rounded-[2rem] overflow-hidden bg-slate-100 shadow-inner group">
                        <Image
                          src="/sayanighosh.jpeg"
                          alt="Ms. Sayanii Ghosh - Chief Executive Officer, Little Cambridge Global"
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2040]/80 via-transparent to-transparent opacity-85" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                          <p className="font-outfit text-xl sm:text-2xl font-black tracking-tight leading-tight">
                            Ms. Sayanii Ghosh
                          </p>
                          <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                            Chief Executive Officer
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 px-2 space-y-2">
                        <p className="text-[12px] sm:text-[13px] font-bold text-[#0F2040] leading-snug">
                          Little Cambridge Global Preschool & Day Care
                        </p>
                        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-slate-500">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                            <Building2 className="w-3 h-3 text-[#2F8FD0]" />
                            Global Expansion
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
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

          {/* =========================================================================
              CARD 3: CHIEF OPERATING OFFICER'S MESSAGE (public/chiefOfoperatingofficer.jpeg)
          ========================================================================= */}
          <AnimatePresence mode="wait">
            {(activeLeader === "both" || activeLeader === "coo") && (
              <motion.div
                key="coo-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="relative bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-slate-100 shadow-soft overflow-hidden"
              >
                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#EBF7F2]/60 rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFEFE6]/60 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* LEFT: COO Portrait Card */}
                  <div className="lg:col-span-5 flex flex-col items-center">
                    <div className="relative w-full max-w-[360px] sm:max-w-[390px] rounded-[2.5rem] bg-gradient-to-b from-white via-[#F2FAF6] to-[#FAF8F5] p-4 sm:p-5 border-2 border-white shadow-lg">
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F2040] text-white text-[11px] sm:text-xs font-bold shadow-md whitespace-nowrap">
                        <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Chief Operating Officer</span>
                      </div>

                      <div className="relative w-full aspect-[4/4.8] rounded-[2rem] overflow-hidden bg-slate-100 shadow-inner group">
                        <Image
                          src="/chiefOfoperatingofficer.jpeg"
                          alt="Chief Operating Officer - Little Cambridge Global"
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2040]/80 via-transparent to-transparent opacity-85" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                          <p className="font-outfit text-xl sm:text-2xl font-black tracking-tight leading-tight">
                            Chief Operating Officer
                          </p>
                          <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                            Executive Operations & Safety
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 px-2 space-y-2">
                        <p className="text-[12px] sm:text-[13px] font-bold text-[#0F2040] leading-snug">
                          Little Cambridge Global Preschool & Day Care
                        </p>
                        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-slate-500">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" />
                            Child Safety Protocols
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                            <Building2 className="w-3 h-3 text-[#2F8FD0]" />
                            Campus Infrastructure
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: COO Message Body */}
                  <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF7F2] border border-emerald-500/20 text-[#1D7A56] text-xs sm:text-sm font-bold shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Chief Operating Officer&apos;s Message</span>
                    </div>

                    <div>
                      <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                        Engineering Uncompromising{" "}
                        <span className="text-[#F65A36]">Safety & Operational Rigor</span>
                      </h3>
                      <p className="mt-2 text-sm sm:text-base font-semibold text-slate-600 italic border-l-2 border-emerald-500 pl-3">
                        &ldquo;Every campus we launch is an uncompromising benchmark in pediatric safety, hygienic architecture, and seamless operational warmth.&rdquo;
                      </p>
                    </div>

                    <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                      <p>
                        At Little Cambridge Global, delivering a magical learning journey begins with flawless operational foundations. Our teams work relentlessly behind the scenes to engineer environments where children are unconditionally protected, healthy, and inspired every second of their day.
                      </p>
                      <p>
                        From our strict 1:8 educator-to-child ratios, pediatrician-approved organic food supply chain, and hospital-grade sanitization protocols to high-definition parent-accessible live CCTV feeds, every standard is designed for complete parent peace of mind.
                      </p>
                      <p>
                        We ensure that whether a family enters our campus in Delhi NCR, Bangalore, Indore, or Vijayawada, they encounter the exact same world-class operational excellence, loving attention, and transparent support.
                      </p>
                      <p className="font-semibold text-slate-700">
                        We are honored to safeguard and nurture your child&apos;s joyful first steps into the world.
                      </p>
                    </div>

                    {/* Signature Block */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                          Warm regards,
                        </p>
                        <p className="font-outfit text-lg sm:text-xl font-black text-[#0F2040] mt-0.5">
                          Chief Operating Officer
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-emerald-600">
                          Operations & Campus Expansion
                        </p>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                          Little Cambridge Global Preschool & Day Care
                        </p>
                      </div>

                      <Link href="/contact">
                        <button className="inline-flex items-center gap-2 bg-[#0F2040] hover:bg-[#1a3464] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-full shadow-soft hover:shadow-md hover:-translate-y-0.5 transition-all self-start sm:self-auto">
                          <span>Tour Our Facilities</span>
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
              CARD 4: MESSAGE FROM THE MENTOR (Mr. Abhimanyu Boora)
          ========================================================================= */}
          <AnimatePresence mode="wait">
            {(activeLeader === "both" || activeLeader === "mentor") && (
              <motion.div
                key="mentor-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="relative bg-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-slate-100 shadow-soft overflow-hidden"
              >
                {/* Background Ambient Glows */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFF2E8]/60 rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F0F8FF]/70 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Content on Left for alternating flow */}
                  <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
                      <Compass className="w-3.5 h-3.5 text-[#F65A36]" />
                      <span>Message from the Mentor</span>
                    </div>

                    <div>
                      <h3 className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                        Empowering Future Leaders with a{" "}
                        <span className="text-[#F65A36]">Global Foundation</span>
                      </h3>
                      <p className="mt-2 text-sm sm:text-base font-semibold text-slate-600 italic border-l-2 border-[#F65A36] pl-3">
                        &ldquo;In my journey with the Ministry of External Affairs, I have witnessed firsthand how rapidly the world is evolving. To thrive, our future generations need a foundation rooted in global competencies.&rdquo;
                      </p>
                    </div>

                    <div className="space-y-3.5 text-slate-600 text-sm sm:text-[15px] leading-relaxed font-medium">
                      <p>
                        It is a matter of immense pride to be associated with <strong className="text-[#0F2040] font-bold">Little Cambridge Global Preschool & Day Care</strong> as a Mentor.
                      </p>

                      <p>
                        In my journey with the Ministry of External Affairs, I have witnessed firsthand how rapidly the world is evolving and how interconnected our global community has become. To thrive in this dynamic landscape, our future generations need more than just traditional schooling; they need a foundation rooted in global competencies, emotional intelligence, and resilient values right from their early years.
                      </p>

                      <p>
                        Little Cambridge Global is built on this very vision. Our mission is to turn Little Steps in to Global Success with the world-class foundational education and nurturing care. We are not just creating a franchise network, we are building a safe, stimulating ecosystem where children discover the joy of learning, explore their unique potentials, and develop a truly global outlook.
                      </p>

                      <p>
                        As a mentor, my focus is to ensure that our franchise partners are equipped with the highest standards of operational excellence, compliance, and academic integrity. Together, we are committed to empowering educators and entrepreneurs across the nation to deliver an unparalleled early childhood experience.
                      </p>

                      <p className="font-semibold text-slate-700">
                        We invite you to be a part of this transformative journey-whether as a parent trusting us with your child’s future, or as a franchise partner sharing our vision for excellence. Let us shape the leaders of tomorrow, starting today.
                      </p>
                    </div>

                    {/* Signature Block */}
                    <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                          Warm regards,
                        </p>
                        <p className="font-outfit text-lg sm:text-xl font-black text-[#0F2040] mt-0.5">
                          Mr. Abhimanyu Boora
                        </p>
                        <p className="text-xs sm:text-sm font-bold text-[#F65A36]">
                          Assistant Section Officer (ASO), MINISTRY OF EXTERNAL AFFAIRS
                        </p>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                          Mentor, Little Cambridge Global Preschool & Day Care
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

                  {/* RIGHT: Mentor Portrait Card */}
                  <div className="lg:col-span-5 flex flex-col items-center order-1 lg:order-2">
                    <div className="relative w-full max-w-[360px] sm:max-w-[390px] rounded-[2.5rem] bg-gradient-to-b from-white via-[#FFF7F2] to-[#FAF8F5] p-4 sm:p-5 border-2 border-white shadow-lg">
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0F2040] text-white text-[11px] sm:text-xs font-bold shadow-md whitespace-nowrap">
                        <Compass className="w-3.5 h-3.5 text-[#F65A36]" />
                        <span>Ministry of External Affairs (ASO) • Mentor</span>
                      </div>

                      <div className="relative w-full aspect-[4/4.8] rounded-[2rem] overflow-hidden bg-slate-100 shadow-inner group">
                        <Image
                          src="/abhimanubura.jpeg"
                          alt="Mr. Abhimanyu Boora - Mentor, Little Cambridge Global"
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2040]/80 via-transparent to-transparent opacity-85" />

                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
                          <p className="font-outfit text-xl sm:text-2xl font-black tracking-tight leading-tight">
                            Mr. Abhimanyu Boora
                          </p>
                          <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                            Assistant Section Officer (ASO), MEA • Mentor
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 px-2 space-y-2">
                        <p className="text-[12px] sm:text-[13px] font-bold text-[#0F2040] leading-snug">
                          Little Cambridge Global Preschool & Day Care
                        </p>
                        <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-slate-500">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                            <Globe2 className="w-3 h-3 text-[#2F8FD0]" />
                            Global Diplomacy
                          </span>
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700">
                            <Award className="w-3 h-3 text-[#F65A36]" />
                            Academic Integrity
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* =========================================================================
              OUR EXPERT TEACHERS & MENTORS (Matching Screenshot Arched Portrait Cards)
          ========================================================================= */}
          <div className="pt-12">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F65A36]">
                Loving Mentorship
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-black text-[#0F2040]">
                Our Expert Teachers & Guides
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Certified early educators who observe, guide, and celebrate every milestone.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "Mr. Pankaj Malik",
                  role: "Founder & Director",
                  image: "/pankaj malik.jpeg",
                  theme: "bg-[#0F2040] text-white",
                },
                {
                  name: "Ms. Sayanii Ghosh",
                  role: "Chief Executive Officer",
                  image: "/sayanighosh.jpeg",
                  theme: "bg-[#2F8FD0] text-white",
                },
                {
                  name: "Chief Operating Officer",
                  role: "Operations & Safety Lead",
                  image: "/chiefOfoperatingofficer.jpeg",
                  theme: "bg-emerald-600 text-white",
                },
                {
                  name: "Mr. Abhimanyu Boora",
                  role: "Mentor (ASO, MEA)",
                  image: "/abhimanubura.jpeg",
                  theme: "bg-[#F65A36] text-white",
                },
              ].map((member, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-[2rem] p-4 text-center border border-slate-100 shadow-soft hover:shadow-lg transition-all"
                >
                  <div className="relative w-full aspect-[4/5] rounded-[1.75rem] overflow-hidden mb-4 bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h4 className="font-outfit font-black text-sm sm:text-base text-[#0F2040] leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-400 mt-0.5">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FREQUENTLY ASKED QUESTIONS (Matching Screenshot FAQ Layout)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-b from-[#FFFDF9] via-[#FBF9F5] to-[#FFFDF9] rounded-[3rem]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Kid with Books and Cloud Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-square rounded-[3rem] bg-gradient-to-tr from-[#FFF2E8] via-white to-[#EBF5FF] p-6 border-4 border-white shadow-xl flex items-center justify-center">
              <Image
                src="/girlwithbook.png"
                alt="Student asking questions"
                width={340}
                height={340}
                className="object-contain drop-shadow-lg"
              />
              <div className="absolute -bottom-4 bg-white px-5 py-2 rounded-full shadow-md border border-slate-100 text-xs font-black text-[#F65A36] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Curiosity Unlocked</span>
              </div>
            </div>
          </div>

          {/* Right: Expandable FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F65A36]">
                Clear Answers For Parents
              </span>
              <h2 className="font-outfit text-3xl sm:text-4xl font-black text-[#0F2040] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                Everything you need to know about our Montessori pedagogy, safety guidelines, and admissions.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-outfit font-black text-sm sm:text-base text-[#0F2040] hover:text-[#F65A36] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#F65A36]" : ""
                          }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: SIGN UP TO OUR NEWSLETTER (Navy Curved Pill Banner)
      ========================================================================= */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="bg-[#0F2040] rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F65A36]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#2F8FD0]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-4">
            <span className="text-xs font-black uppercase tracking-widest text-[#F65A36]">
              Stay Connected
            </span>

            <h2 className="font-outfit text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Sign Up To Our Newsletter
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
              Get weekly parenting tips, Montessori home-play ideas, and priority announcements regarding admissions and campus workshops.
            </p>

            <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="w-full px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#F65A36]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F65A36] hover:bg-[#e04a27] text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-md transition-all"
              >
                {subscribed ? "Subscribed! 🎉" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
      </section>



      {/* =========================================================================
          SECTION 14: ACCREDITATION & TRUST RECOGNITION STRIP
      ========================================================================= */}
      <section className="py-12 border-y border-slate-100 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400">
              Recognized & Accredited Standards
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-600 font-outfit font-extrabold text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#F65A36]" />
              <span>International Montessori Standard</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Pediatric First-Aid Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[#2F8FD0]" />
              <span>Child-Safe Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-[#7839CD]" />
              <span>Holistic Global Curriculum</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 15: BOTTOM CAMPUS MOMENTS GALLERY (5 Capsule Pill Photos)
      ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F65A36]">
            Everyday Wonder
          </span>
          <h2 className="font-outfit text-2xl sm:text-3xl font-black text-[#0F2040]">
            Moments on Campus
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            A glimpse into the joy, friendships, and hands-on discovery at Little Cambridge Global.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { img: "/programs/artists_workshop.jpg", label: "Art Studio" },
            { img: "/programs/creative_play_lab.jpg", label: "Sensory Play" },
            { img: "/multiple_childre.jpg", label: "Friendship" },
            { img: "/programs/stem_explorers.jpg", label: "Inquiry Lab" },
            { img: "/school_And_car.jpg", label: "Safe Campus" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border-2 border-white group"
            >
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-white text-xs font-bold">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}