"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  HeartHandshake,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Compass,
  Star,
  CheckCircle2,
  Phone,
  ChevronDown,
  Building2,
  Users,
  Heart,
  Clock,
  HelpCircle,
  Mail,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import MilestonesSection from "./MilestonesSection";
import NurturingCarousel, { doodleTile, toDataUri } from "./NurturingCarousel";
import LeadershipMessages from "./LeadershipMessages";

// Campus Locations data
const campusLocations = [
  {
    city: "Delhi NCR",
    area: "Pitampura & Janakpuri",
    address: "B1/622, Pillar No. 575, Janakpuri, New Delhi - 110058",
    timing: "8:30 AM – 6:30 PM",
    features: ["Montessori Sensory Lab", "Outdoor Play Garden", "Live CCTV Parent Feed", "Infant Care Suite"],
    status: "Accepting Walk-ins",
    phone: "+91 734 065 5077",
  },
  {
    city: "Bangalore",
    area: "Yelahanka New Town",
    address: "Rachana Towers, #2053/A, 1st Floor, 3rd Stage, Sector 'B', Bangalore - 560064",
    timing: "8:00 AM – 7:00 PM",
    features: ["Splash Play Zone", "Mind Lab Studio", "Organic Nutrition", "Full-Day Daycare"],
    status: "Admissions Open",
    phone: "+91 907 152 5966",
  },
  {
    city: "Indore",
    area: "Airport Road, HL Link City",
    address: "B Block - 601, Leeds Enclave, Airport Road, Indore, MP - 452005",
    timing: "9:00 AM – 6:00 PM",
    features: ["Interactive Gym", "Storytelling Dome", "Low 1:8 Educator Ratio", "Phonics Discovery Corner"],
    status: "New Campus Open",
    phone: "+91 734 065 5077",
  },
  {
    city: "Vijayawada",
    area: "Ashok Nagar, Kanuru",
    address: "D No. 14-11-219, Ashok Nagar, Kanuru, Vijayawada, AP - 520007",
    timing: "8:30 AM – 6:00 PM",
    features: ["Outdoor Sensory Park", "Early Phonics Studio", "Certified Pediatric Nurse", "Activity Courtyard"],
    status: "Admissions Open",
    phone: "+91 734 065 5077",
  },
];

// FAQs Data
const faqs = [
  {
    q: "How does child-led, adventure learning prepare my child for formal school?",
    a: "Rather than rote repetition, children at Little Cambridge build conceptual clarity, phonetic fluency, independent problem-solving, and emotional stamina. Studies prove self-directed Montessori graduates adapt faster, focus longer, and excel in formal primary school entrance assessments.",
  },
  {
    q: "What is your educator-to-child ratio and safety standard?",
    a: "We maintain an intimate 1:8 ratio for early toddlers and 1:12 for kindergarten. Every campus features high-definition CCTV coverage with parent-accessible live streams, child-proof fixtures, rounded corners, non-toxic materials, and certified pediatric first-aid trained educators.",
  },
  {
    q: "Can parents visit a campus before deciding to enroll?",
    a: "Absolutely! We warmly encourage campus walks. You will experience the prepared environment firsthand, meet our lead educators, observe student activities, and receive personalized developmental guidance tailored to your child.",
  },
  {
    q: "How does the 'Partner' model work for entrepreneurs?",
    a: "Our franchise partnership is designed as a turnkey early education model with 360° support: complete architectural blueprints, Montessori training academy, centralized curriculum, operational software, and national brand visibility.",
  },
  {
    q: "What nutrition and daycare support do you offer?",
    a: "Our full-day daycare options provide nutritious, balanced meals planned by pediatric nutritionists, dedicated peaceful rest suites, and creative enrichment activities when working parents need total peace of mind.",
  },
];

export default function BentoHomepage() {
  const [selectedCampusIndex, setSelectedCampusIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeCampus = campusLocations[selectedCampusIndex]!;

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0F2040] overflow-x-hidden font-jakarta selection:bg-[#FFEFE6] selection:text-[#F65A36]">
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 1.5: NURTURING CARD CAROUSEL */}
      <NurturingCarousel />

      {/* SECTION: VOICES OF LEADERSHIP (DIRECTOR & CEO MESSAGES) */}
      <LeadershipMessages />

      {/* SECTION 2: MILESTONES, MET */}
      {/* <MilestonesSection /> */}

      {/* =========================================================================
          SECTION 3: OUR STORY BENTO (The Vision)
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="relative bg-white/95 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white shadow-soft overflow-hidden"
          style={{
            backgroundImage: toDataUri(doodleTile("rgba(15,32,64,0.035)")),
            backgroundSize: "280px 280px",
          }}
        >
          {/* Soft ambient background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFEFE6]/60 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
                <BookOpen className="w-3.5 h-3.5 text-[#F65A36]" />
                <span>Our Story • The Vision</span>
              </div>

              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2040] tracking-tight leading-tight">
                Where early learning feels like an adventure, not a chore.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                At Little Cambridge Global, we step away from outdated institutional repetition. We believe every child is born with an absorbent, naturally curious mind. When you give children beautiful, tactile materials, passionate mentors who listen, and the freedom to explore at their own rhythm, extraordinary growth unfolds.
              </p>

              {/* 3 Pillars Bento Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="group bg-[#FFF5F0] hover:bg-white rounded-2xl p-4 sm:p-5 border border-[#FCD9C8] hover:border-[#F65A36]/40 shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#FFEFE6] text-[#F65A36] flex items-center justify-center mb-3">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="font-outfit font-bold text-[#0F2040] text-sm sm:text-base mb-1">
                    Child-Led
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Prepared Montessori environments that nurture innate focus, agency, and natural discipline.
                  </p>
                </div>

                <div className="group bg-[#F0F7FF] hover:bg-white rounded-2xl p-4 sm:p-5 border border-[#CDE5FE] hover:border-[#5DB6E0]/40 shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E3F1FB] text-[#2F8FD0] flex items-center justify-center mb-3">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h4 className="font-outfit font-bold text-[#0F2040] text-sm sm:text-base mb-1">
                    Whole Child
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Social and emotional harmony valued equally alongside early mathematical logic and reading.
                  </p>
                </div>

                <div className="group bg-[#F2FCF5] hover:bg-white rounded-2xl p-4 sm:p-5 border border-[#C8F0D6] hover:border-emerald-300 shadow-xs hover:shadow-md transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] text-emerald-700 flex items-center justify-center mb-3">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-outfit font-bold text-[#0F2040] text-sm sm:text-base mb-1">
                    Gentle Mentors
                  </h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Educators who observe, encourage, and guide with love without standardized pressure.
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <Link href="/ourstory">
                  <button className="inline-flex items-center gap-2.5 bg-[#0F2040] hover:bg-[#1a3464] text-white font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <span>Read Our Story (The Vision)</span>
                    <ArrowRight className="w-4 h-4 text-[#F65A36]" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Character Showcase (Col 5) - Featuring big owl book.png */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#FFF5EE] via-[#F0F8FF] to-[#FAF8F5] p-6 sm:p-8 border-2 border-white shadow-soft flex flex-col items-center justify-center text-center group">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-xs font-bold text-[#0F2040] shadow-xs mb-3 border border-slate-100">
                  <GraduationCap className="w-3.5 h-3.5 text-[#F65A36]" />
                  Curious Minds, Global Futures
                </span>

                <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center">
                  <Image
                    src="/assests/big_owl_book.png"
                    alt="Little Cambridge Story Owl with Book"
                    width={320}
                    height={330}
                    priority
                    className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3 border border-slate-100 shadow-xs w-full text-center">
                  <p className="text-xs sm:text-sm font-bold text-[#0F2040]">
                    &quot;Every child is born with an absorbent, curious mind.&quot;
                  </p>
                  <p className="text-[11px] text-[#F65A36] font-extrabold uppercase tracking-wider mt-0.5">
                    Dr. Maria Montessori Philosophy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* =========================================================================
          SECTION 7: PARENT FAQS BENTO
          Featuring quirillookingcluless.png curious squirrel mascot!
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (Col 4) - Mascot & Helpline */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#FFF5EE] via-white to-[#F0F8FF] rounded-3xl p-7 sm:p-8 border border-white shadow-soft flex flex-col justify-between text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-[#0F2040] text-xs font-bold shadow-xs mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-[#F65A36]" />
                <span>Parent Questions & Clarity</span>
              </div>

              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0F2040] tracking-tight">
                Curious Minds Have Questions.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                Everything you need to know about our Montessori-inspired philosophy, safety standards, and admissions.
              </p>
            </div>

            {/* Mascot Image - quirillookingcluless.png */}
            <div className="my-6 flex justify-center">
              <div className="relative w-48 h-48">
                <Image
                  src="/assests/quirillookingcluless.png"
                  alt="Curious Squirrel Mascot"
                  width={200}
                  height={200}
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs text-left">
              <p className="text-xs font-bold text-[#0F2040] mb-0.5">
                Still have a specific question?
              </p>
              <p className="text-[11px] text-slate-500 mb-3 font-medium">
                Our counselors are happy to speak with you.
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

          {/* Right Column (Col 8) - Accordion */}
          <div className="lg:col-span-8 space-y-4">
            <div className="mb-6">
              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0F2040]">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Click on any question to read detailed developmental insights.
              </p>
            </div>

            {faqs.map((faq, idx) => {
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
                    <span className="font-outfit text-base sm:text-lg font-bold text-[#0F2040]">
                      {faq.q}
                    </span>
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
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4">
                          {faq.a}
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
