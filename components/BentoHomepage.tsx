"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  HeartHandshake,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Smile,
  Compass,
  Star,
  CheckCircle2,
  Phone,
  Calendar,
  ChevronDown,
  Building2,
  Users,
  Sun,
  Activity,
  Heart,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from "lucide-react";
import { BadgeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import MilestonesSection from "./MilestonesSection";
import NurturingCarousel from "./NurturingCarousel";

// Images from public
import tobbyWithBook from "../public/tobby_with_book.png";
import leoMagnifying from "../public/leo_with_magnyfying_glass.png";
import tobbyAndMia from "../public/tobby_And_mia_on_table_painting.png";
import tobbyTeddy from "../public/tobby_with_his_teddy.png";
import miaAndLeo from "../public/miaandleoforthankyoupage.png";
import boyWithCup from "../public/boywithcup.png";

// Campus Locations data
const campusLocations = [
  {
    city: "Delhi NCR",
    area: "Pitampura & Janakpuri",
    address: "B1/622, Pillar No. 575, Janakpuri, New Delhi - 110058",
    timing: "8:30 AM – 6:30 PM",
    features: ["Montessori Lab", "Sensory Garden", "CCTV Live Feed", "Infant Care Suite"],
    status: "Accepting Walk-ins"
  },
  {
    city: "Bangalore",
    area: "Yelahanka New Town",
    address: "Rachana Towers, #2053/A, 1st Floor, 3rd Stage, Sector 'B', Bangalore - 560064",
    timing: "8:00 AM – 7:00 PM",
    features: ["Splash Play Zone", "Mind Lab Studio", "Organic Nutrition", "Full-day Daycare"],
    status: "Admissions Open"
  },
  {
    city: "Indore",
    area: "Airport Road, HL Link City",
    address: "B Block - 601, Leeds Enclave, Airport Road, Indore, MP - 452005",
    timing: "9:00 AM – 6:00 PM",
    features: ["Interactive Gym", "Storytelling Dome", "Low Student-Teacher Ratio"],
    status: "New Campus Open"
  },
  {
    city: "Vijayawada",
    area: "Ashok Nagar, Kanuru",
    address: "D No. 14-11-219, Ashok Nagar, Kanuru, Vijayawada, AP - 520007",
    timing: "8:30 AM – 6:00 PM",
    features: ["Outdoor Sensory Park", "Early Phonics Studio", "Certified Nurse on Site"],
    status: "Admissions Open"
  }
];

// Learning Pathways Data
const pathways = [
  {
    id: "toddler",
    stage: "Little Minds",
    age: "1 – 2 Years",
    tag: "Sensory & First Steps",
    description: "Gentle first steps away from home in a cozy, sensory-rich haven. We focus on emotional security, sensory discovery, and joyful motor milestones.",
    milestones: ["First vocabulary & song rhythm", "Sensory texture discrimination", "Comfortable social separation", "Gross motor coordination"],
    colorBg: "bg-pastel-peach-50",
    colorBorder: "border-pastel-peach-200",
    colorBadge: "bg-pastel-peach-100 text-pastel-peach-700",
    colorAccent: "text-pastel-peach-700",
    image: tobbyTeddy,
  },
  {
    id: "playgroup",
    stage: "Curious Minds",
    age: "2 – 3 Years",
    tag: "Nature & Social Spark",
    description: "An enriching Montessori environment where children explore, question, and make independent choices through tactile materials and joyful peer play.",
    milestones: ["Expressive vocabulary explosion", "Fine motor grip & pouring", "Turn-taking & empathetic play", "Curiosity-led questioning"],
    colorBg: "bg-pastel-sage-50",
    colorBorder: "border-pastel-sage-200",
    colorBadge: "bg-pastel-sage-100 text-pastel-sage-700",
    colorAccent: "text-pastel-sage-700",
    image: leoMagnifying,
  },
  {
    id: "nursery",
    stage: "Emerging Learners",
    age: "3 – 4 Years",
    tag: "Language & Math Magic",
    description: "Unlocking patterns, phonics, numbers, and creative arts. Hands-on Montessori learning centers build analytical confidence and concentration.",
    milestones: ["Phonetic awareness & letter sounds", "Early numeracy & spatial sorting", "Artistic expression & story comprehension", "Self-directed work cycles"],
    colorBg: "bg-pastel-sky-50",
    colorBorder: "border-pastel-sky-200",
    colorBadge: "bg-pastel-sky-100 text-pastel-sky-700",
    colorAccent: "text-pastel-sky-700",
    image: tobbyWithBook,
  },
  {
    id: "kindergarten",
    stage: "Ready for Tomorrow",
    age: "4 – 6 Years",
    tag: "School Readiness & Leadership",
    description: "Equipping children with the academic readiness, critical thinking, emotional resilience, and leadership to transition seamlessly to premier primary schools.",
    milestones: ["Fluent reading & early sentence craft", "Mathematical logic & simple addition", "Scientific observation & inquiry", "Public speaking & group leadership"],
    colorBg: "bg-pastel-lavender-50",
    colorBorder: "border-pastel-lavender-200",
    colorBadge: "bg-pastel-lavender-100 text-pastel-lavender-700",
    colorAccent: "text-pastel-lavender-700",
    image: tobbyAndMia,
  },
  {
    id: "mindlab",
    stage: "Mind Lab & Daycare",
    age: "All Stages (Infant to 6y)",
    tag: "Holistic Care & Strategy",
    description: "Higher-order thinking games and warm daycare supervision. Nutritious balanced meals, quiet rest suites, and creative enrichment when parents need peace of mind.",
    milestones: ["Cognitive strategy & focus games", "Peaceful rest & hygiene routines", "Healthy social dining habits", "Flexible hours for modern parents"],
    colorBg: "bg-[#FAF5ED]",
    colorBorder: "border-[#EADFCB]",
    colorBadge: "bg-amber-100 text-amber-800",
    colorAccent: "text-amber-800",
    image: miaAndLeo,
  }
];

// FAQs Data
const faqs = [
  {
    q: "How does child-led, adventure learning prepare my child for formal school?",
    a: "Rather than rote memorization, children at Little Cambridge build deep cognitive conceptual clarity, phonemic fluency, independent decision-making, and emotional stamina. Studies prove self-directed Montessori graduates adapt faster, focus longer, and excel in formal primary entrance assessments."
  },
  {
    q: "What is your educator-to-child ratio and safety standard?",
    a: "We maintain an intimate 1:8 ratio for early toddlers and 1:12 for kindergarten. Every campus features high-definition CCTV coverage with parent-accessible live streams, child-proof fixtures, rounded corners, non-toxic materials, and certified pediatric first-aid trained mentors."
  },
  {
    q: "Can parents visit a campus before deciding?",
    a: "Absolutely! We warmly encourage campus walks. You will experience the prepared environment, meet our lead educators, observe real student activity, and receive personalized developmental guidance for your child."
  },
  {
    q: "How does the 'Partner' model work for entrepreneurs?",
    a: "Our franchise partnership is designed as a turnkey early education model with 360° support: site selection, interior architectural blueprints, Montessori training academy, centralized curriculum, operational software, and national brand campaigns."
  }
];

export default function BentoHomepage() {
  const [activePathway, setActivePathway] = useState(0);
  const [selectedCampusIndex, setSelectedCampusIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-[#FAF8F5] text-slate-800 overflow-x-hidden font-jakarta selection:bg-rose-100 selection:text-rose-900">

      {/* HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 1.5: NURTURING CARD CAROUSEL */}
      <NurturingCarousel />

      {/* SECTION 2: MILESTONES, MET */}
      <MilestonesSection />

      {/* =========================================================================
          SECTION 3: OUR STORY BENTO (Formerly About Us / The Vision)
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white/90 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-sage-100 border border-pastel-sage-200 text-pastel-sage-900 text-xs sm:text-sm font-bold">
                <BookOpen className="w-3.5 h-3.5 text-pastel-sage-700" />
                <span>Our Story • The Vision</span>
              </div>

              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Where early learning feels like an adventure, not a chore.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                At Little Cambridge Global, we step away from outdated institutional repetition. We believe every child is born with an absorbent, naturally curious mind. When you give children beautiful, tactile materials, passionate mentors who listen, and the freedom to explore at their own rhythm, extraordinary growth unfolds.
              </p>

              {/* 3 Pillars in Bento Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-pastel-peach-50 rounded-2xl p-4 border border-pastel-peach-200/80">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Child-Led</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Freedom of choice inside prepared environments nurtures innate focus and self-discipline.
                  </p>
                </div>

                <div className="bg-pastel-sage-50 rounded-2xl p-4 border border-pastel-sage-200/80">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Whole Child</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Social and emotional harmony valued equally alongside early mathematical logic and reading.
                  </p>
                </div>

                <div className="bg-pastel-lavender-50 rounded-2xl p-4 border border-pastel-lavender-200/80">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Gentle Mentors</h4>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    Educators who observe, encourage, and guide without rigid dictation or standardized pressure.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/about">
                  <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-soft transition-all">
                    <span>Read Our Story (The Vision)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-gradient-to-tr from-pastel-peach-100 via-rose-50 to-pastel-lavender-100 p-8 border border-white shadow-soft flex items-center justify-center">
                <Image
                  src={miaAndLeo}
                  alt="Our Story - Little Cambridge Global"
                  width={340}
                  height={340}
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: OUR LOCATIONS BENTO (Formerly Centers)
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-peach-100 border border-pastel-peach-200 text-pastel-peach-900 text-xs sm:text-sm font-bold mb-4">
            <MapPin className="w-3.5 h-3.5 text-pastel-peach-700" />
            <span>Our Locations • Find a Campus</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Close to Home.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            Find a vibrant campus right in your neighborhood.
          </p>
        </div>

        {/* Campus Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

          {/* Left Campus Selector (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {campusLocations.map((campus, idx) => {
              const isSelected = selectedCampusIndex === idx;

              return (
                <button
                  key={campus.city}
                  onClick={() => setSelectedCampusIndex(idx)}
                  className={`text-left p-5 rounded-3xl border transition-all duration-200 flex flex-col justify-between
                    ${isSelected
                      ? "bg-white border-pastel-peach-300 shadow-soft scale-[1.02]"
                      : "bg-white/60 hover:bg-white/90 border-slate-200/70"
                    }
                  `}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-outfit text-lg font-bold text-slate-900">
                      {campus.city}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${isSelected ? "bg-pastel-peach-100 text-pastel-peach-700" : "bg-slate-100 text-slate-600"}`}>
                      {campus.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold mb-2">
                    {campus.area}
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-1">
                    {campus.address}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Selected Campus Spotlight (col-span-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[2.5rem] p-7 sm:p-10 border border-slate-200/80 shadow-soft flex flex-col justify-between">
            {(() => {
              const active = campusLocations[selectedCampusIndex]!;

              return (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-pastel-peach-700 uppercase tracking-wider">
                        Selected Campus
                      </span>
                      <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900">
                        {active.city} — {active.area}
                      </h3>
                    </div>
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-pastel-sage-100 text-pastel-sage-800">
                      Open Hours: {active.timing}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-slate-700 text-sm font-medium">
                      <MapPin className="w-5 h-5 text-pastel-peach-500 shrink-0 mt-0.5" />
                      <span>{active.address}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Campus Features & Safety
                    </h4>
                    <div className="grid grid-cols-2 gap-2.5">
                      {active.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 text-xs sm:text-sm font-semibold text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <Link href="/admission">
                      <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-soft flex items-center gap-2 transition-all">
                        <span>Book a Campus Tour</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>

                    <Link href="/Ourcenters">
                      <button className="text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 underline underline-offset-4 transition-colors">
                        Explore Full Campus Directory
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })()}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: PARTNER BENTO (Formerly Franchise)
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-pastel-mint-50 via-white to-pastel-sage-50 border-2 border-pastel-mint-200/90 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-soft relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-mint-100 text-emerald-900 text-xs sm:text-sm font-bold">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-700" />
                <span>Partner • Collaborate</span>
              </div>

              {/* Phase 4 Required Copy */}
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Build the Future With Us.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium max-w-2xl">
                Bring our modern approach to early education to your city and empower the next generation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/90 rounded-2xl p-4 border border-emerald-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Turnkey Support</h4>
                  <p className="text-xs text-slate-600 font-medium">Complete architecture, hiring assistance, and curriculum kit.</p>
                </div>
                <div className="bg-white/90 rounded-2xl p-4 border border-emerald-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Proven Trust</h4>
                  <p className="text-xs text-slate-600 font-medium">Nationally recognized pedagogy with high parent retention.</p>
                </div>
                <div className="bg-white/90 rounded-2xl p-4 border border-emerald-100 shadow-sm">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Meaningful ROI</h4>
                  <p className="text-xs text-slate-600 font-medium">Sustainable growth combined with educational impact.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/franchise">
                  <button className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm px-7 py-4 rounded-full shadow-soft flex items-center gap-2 transition-all">
                    <span>Collaborate With Us (Partner)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="bg-white/90 rounded-3xl p-6 border border-emerald-100 shadow-soft text-center space-y-4 max-w-xs">
                <div className="w-14 h-14 rounded-2xl bg-pastel-mint-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="font-outfit font-bold text-xl text-slate-900">Empower Your City</h3>
                <p className="text-xs text-slate-600 font-medium">
                  Join a network of visionary educators and entrepreneurs creating joyful childhoods.
                </p>
                <div className="pt-2 text-xs font-bold text-emerald-800">
                  ⚡ Comprehensive Partner Kit Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: JOIN US BENTO (Formerly Admission)
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white/85 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white/90 shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-peach-100 border border-pastel-peach-200 text-pastel-peach-900 text-xs sm:text-sm font-bold">
                <Sparkles className="w-3.5 h-3.5 text-pastel-peach-700" />
                <span>Join Us • Start the Journey</span>
              </div>

              {/* Phase 4 Required Copy */}
              <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Secure Their Spot.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Ready to take the first step? Let’s get to know each other.
              </p>

              <div className="space-y-3.5 text-sm font-medium text-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-pastel-sage-100 text-pastel-sage-800 flex items-center justify-center text-xs font-bold">1</div>
                  <span>Submit basic details about your child</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-pastel-peach-100 text-pastel-peach-800 flex items-center justify-center text-xs font-bold">2</div>
                  <span>Receive a welcoming callback from your nearest campus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-pastel-lavender-100 text-pastel-lavender-800 flex items-center justify-center text-xs font-bold">3</div>
                  <span>Experience a relaxed campus walk together</span>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/admission">
                  <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-soft flex items-center gap-2 transition-all">
                    <span>Fill Enrollment Form (Join Us)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Visual Character Illustration */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square rounded-3xl bg-pastel-peach-50 border border-pastel-peach-200/80 p-6 flex items-center justify-center">
                <Image
                  src={boyWithCup}
                  alt="Join Us - Little Cambridge"
                  width={340}
                  height={340}
                  className="object-contain drop-shadow-xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PARENT FAQS BENTO
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold mb-3">
            <span>Parent Questions & Clarity</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-outfit text-base sm:text-lg font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-slate-900 text-white" : "text-slate-600"}`}>
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
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
