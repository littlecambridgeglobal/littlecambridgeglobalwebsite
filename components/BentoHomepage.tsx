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

// Hero Carousel 4 Slides Data
const heroSlides = [
  {
    id: "igniting-curious-minds",
    slideNum: "01",
    navTitle: "Curious Minds",
    badgeText: "Early Learning Reimagined • 2026/2027",
    badgeIcon: Sparkles,
    badgeBg: "bg-pastel-peach-100 text-pastel-peach-900 border-pastel-peach-200",
    badgeIconColor: "text-rose-600",
    headingPrefix: "Igniting",
    headingHighlight: "Curious Minds.",
    highlightGradient: "from-pastel-peach-500 via-rose-500 to-rose-600",
    subheading:
      "A modern space where early learning feels like an adventure. Watch them discover their world through child-led curiosity, sensory wonder, and joyful mentorship.",
    primaryCta: {
      text: "Start the Journey",
      href: "/admission",
      bgClass: "bg-slate-900 hover:bg-slate-800 text-white shadow-soft hover:shadow-soft-lg",
    },
    secondaryCta: {
      text: "Discover Learning Pathways",
      href: "#pathways",
      bgClass: "bg-pastel-sage-50 hover:bg-pastel-sage-100 text-pastel-sage-900 border border-pastel-sage-200/80",
    },
    trustPoints: [
      { text: "100% Play-Based Discovery", bg: "bg-pastel-peach-100", textCol: "text-pastel-peach-800" },
      { text: "1:8 Warm Educator Ratio", bg: "bg-pastel-sage-100", textCol: "text-pastel-sage-800" },
      { text: "Montessori Inspired", bg: "bg-pastel-lavender-100", textCol: "text-pastel-lavender-800" },
    ],
    bgClass: "from-[#FFF6F0] via-[#FFF1F4] to-[#FAF8F5]",
    blob1: "bg-pastel-peach-200/50",
    blob2: "bg-rose-200/40",
    image: miaAndLeo,
    imageAlt: "Mia and Leo reading and exploring",
    floatingCard1: {
      icon: Star,
      title: "Rated #1 Early Learning",
      subtitle: "Delhi NCR • Bangalore • Indore",
      color: "bg-amber-50/95 text-amber-800 border-amber-200/90",
      iconCol: "text-amber-500",
    },
    floatingCard2: {
      icon: ShieldCheck,
      title: "100% Child-Safe Architecture",
      subtitle: "Non-Toxic Materials & Live CCTV",
      color: "bg-emerald-50/95 text-emerald-800 border-emerald-200/90",
      iconCol: "text-emerald-600",
    },
  },
  {
    id: "milestones-met",
    slideNum: "02",
    navTitle: "Learning Pathways",
    badgeText: "Milestones, Met • Learning Pathways",
    badgeIcon: Compass,
    badgeBg: "bg-pastel-lavender-100 text-pastel-lavender-900 border-pastel-lavender-200",
    badgeIconColor: "text-purple-600",
    headingPrefix: "Milestones, Met.",
    headingHighlight: "Every Stage Celebrated.",
    highlightGradient: "from-purple-600 via-indigo-500 to-sky-500",
    subheading:
      "From their very first steps to kindergarten readiness, explore how we nurture every stage of your child's growth through experiential, hands-on learning.",
    primaryCta: {
      text: "Explore All Pathways",
      href: "/Programs",
      bgClass: "bg-purple-900 hover:bg-purple-800 text-white shadow-soft hover:shadow-soft-lg",
    },
    secondaryCta: {
      text: "Schedule a Campus Walk",
      href: "/admission",
      bgClass: "bg-pastel-lavender-50 hover:bg-pastel-lavender-100 text-pastel-lavender-900 border border-pastel-lavender-200/80",
    },
    trustPoints: [
      { text: "Little Minds (1–2y)", bg: "bg-pastel-peach-100", textCol: "text-pastel-peach-800" },
      { text: "Curious Minds (2–3y)", bg: "bg-pastel-sage-100", textCol: "text-pastel-sage-800" },
      { text: "Emerging Learners (3–4y)", bg: "bg-pastel-sky-100", textCol: "text-pastel-sky-800" },
      { text: "Kindergarten (4–6y)", bg: "bg-pastel-lavender-100", textCol: "text-pastel-lavender-800" },
    ],
    bgClass: "from-[#F7F5FF] via-[#EFEAFF] to-[#FAF8F5]",
    blob1: "bg-purple-200/40",
    blob2: "bg-indigo-200/30",
    image: tobbyAndMia,
    imageAlt: "Children engaged in creative painting and hands-on art",
    floatingCard1: {
      icon: GraduationCap,
      title: "Montessori Prepared Studio",
      subtitle: "Phonics, Logic & Creative Arts",
      color: "bg-purple-50/95 text-purple-800 border-purple-200/90",
      iconCol: "text-purple-600",
    },
    floatingCard2: {
      icon: Activity,
      title: "Milestone-Driven Tracking",
      subtitle: "Continuous developmental portfolio",
      color: "bg-indigo-50/95 text-indigo-800 border-indigo-200/90",
      iconCol: "text-indigo-600",
    },
  },
  {
    id: "close-to-home",
    slideNum: "03",
    navTitle: "Our Locations",
    badgeText: "Find a Campus • Neighborhood Sanctuaries",
    badgeIcon: MapPin,
    badgeBg: "bg-pastel-sage-100 text-pastel-sage-900 border-pastel-sage-200",
    badgeIconColor: "text-emerald-700",
    headingPrefix: "Close to Home.",
    headingHighlight: "Sanctuaries of Wonder.",
    highlightGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    subheading:
      "Find a vibrant campus right in your neighborhood with real-time parent CCTV streaming, organic nutrition, sensory splash parks, and pediatrician-trained educators.",
    primaryCta: {
      text: "Find a Campus Near You",
      href: "/Ourcenters",
      bgClass: "bg-emerald-900 hover:bg-emerald-800 text-white shadow-soft hover:shadow-soft-lg",
    },
    secondaryCta: {
      text: "Book a Campus Walk",
      href: "/contact",
      bgClass: "bg-pastel-sage-50 hover:bg-pastel-sage-100 text-pastel-sage-900 border border-pastel-sage-200/80",
    },
    trustPoints: [
      { text: "Delhi NCR (Janakpuri & Pitampura)", bg: "bg-pastel-sage-100", textCol: "text-pastel-sage-800" },
      { text: "Bangalore (Yelahanka New Town)", bg: "bg-pastel-sky-100", textCol: "text-pastel-sky-800" },
      { text: "Indore (Airport Road Enclave)", bg: "bg-pastel-peach-100", textCol: "text-pastel-peach-800" },
      { text: "Vijayawada (Ashok Nagar)", bg: "bg-emerald-100", textCol: "text-emerald-800" },
    ],
    bgClass: "from-[#F2FBF6] via-[#E8F8F0] to-[#FAF8F5]",
    blob1: "bg-emerald-200/40",
    blob2: "bg-teal-200/30",
    image: leoMagnifying,
    imageAlt: "Leo exploring nature with a magnifying glass",
    floatingCard1: {
      icon: ShieldCheck,
      title: "Live CCTV Parent Streaming",
      subtitle: "Real-time peace of mind on mobile",
      color: "bg-emerald-50/95 text-emerald-800 border-emerald-200/90",
      iconCol: "text-emerald-600",
    },
    floatingCard2: {
      icon: Sun,
      title: "Splash Zones & Sensory Parks",
      subtitle: "Outdoor motor & nature discovery",
      color: "bg-teal-50/95 text-teal-800 border-teal-200/90",
      iconCol: "text-teal-600",
    },
  },
  {
    id: "build-the-future",
    slideNum: "04",
    navTitle: "Partner With Us",
    badgeText: "Partner • Franchise Collaboration",
    badgeIcon: HeartHandshake,
    badgeBg: "bg-pastel-mint-100 text-emerald-900 border-pastel-mint-200",
    badgeIconColor: "text-emerald-700",
    headingPrefix: "Build the Future.",
    headingHighlight: "Shape Early Education.",
    highlightGradient: "from-amber-500 via-orange-500 to-rose-500",
    subheading:
      "Bring Little Cambridge Global's award-winning early education model to your city. Turnkey architectural blueprints, Montessori training academy, and 360° operational guidance.",
    primaryCta: {
      text: "Partner With Us",
      href: "/franchise",
      bgClass: "bg-amber-600 hover:bg-amber-700 text-white shadow-soft hover:shadow-soft-lg",
    },
    secondaryCta: {
      text: "Say Hello",
      href: "/contact",
      bgClass: "bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80",
    },
    trustPoints: [
      { text: "Turnkey 360° Setup Model", bg: "bg-amber-100", textCol: "text-amber-800" },
      { text: "Certified Montessori Academy", bg: "bg-rose-100", textCol: "text-rose-800" },
      { text: "High ROI & Rapid Breakeven", bg: "bg-emerald-100", textCol: "text-emerald-800" },
      { text: "PAN-India Expansion 2026", bg: "bg-sky-100", textCol: "text-sky-800" },
    ],
    bgClass: "from-[#FFFDF2] via-[#FFF8E7] to-[#FAF8F5]",
    blob1: "bg-amber-200/40",
    blob2: "bg-orange-200/30",
    image: tobbyTeddy,
    imageAlt: "Tobby hugging teddy bear, representing trusted care and partnership",
    floatingCard1: {
      icon: Users,
      title: "98% Partner Satisfaction",
      subtitle: "Turnkey operational & academic blueprints",
      color: "bg-amber-50/95 text-amber-800 border-amber-200/90",
      iconCol: "text-amber-600",
    },
    floatingCard2: {
      icon: Building2,
      title: "45-Day Fast-Track Setup",
      subtitle: "Architectural blueprints & supply support",
      color: "bg-rose-50/95 text-rose-800 border-rose-200/90",
      iconCol: "text-rose-600",
    },
  },
];

export default function BentoHomepage() {
  const [activePathway, setActivePathway] = useState(0);
  const [selectedCampusIndex, setSelectedCampusIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Hero Carousel State: 4 slides, auto-advance every 3 seconds
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  // Auto-scroll every 3 seconds (3000ms) with pause-on-hover support
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const activeSlideData = heroSlides[currentSlide] ?? heroSlides[0]!;
  const BadgeIcon = activeSlideData?.badgeIcon;
  const Card1Icon = activeSlideData?.floatingCard1.icon;
  const Card2Icon = activeSlideData?.floatingCard2.icon;

  return (
    <div className="w-full bg-[#FAF8F5] text-slate-800 overflow-x-hidden font-jakarta selection:bg-rose-100 selection:text-rose-900">

      {/* =========================================================================
          SECTION 1: HERO FULL-WIDTH CAROUSEL (4 Slides, Auto-scroll 3s)
      ========================================================================= */}
      <section
        className={`relative w-full overflow-hidden bg-gradient-to-br ${activeSlideData?.bgClass} transition-colors duration-700 select-none`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Little Cambridge Global Hero Carousel"
      >
        {/* Soft Ambient Blobs for aesthetic depth */}
        <div
          className={`absolute top-12 left-10 sm:left-1/4 w-80 sm:w-96 lg:w-[480px] h-80 sm:h-96 lg:h-[480px] ${activeSlideData?.blob1} rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -z-10 transition-colors duration-700`}
        />
        <div
          className={`absolute bottom-16 right-5 sm:right-20 w-80 sm:w-96 lg:w-[480px] h-80 sm:h-96 lg:h-[480px] ${activeSlideData?.blob2} rounded-full blur-[100px] sm:blur-[130px] pointer-events-none -z-10 transition-colors duration-700`}
        />

        {/* Carousel Container: Full-width wrapper with responsive padding */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 min-h-[85vh] sm:min-h-[720px] lg:min-h-[760px] flex flex-col justify-between relative">

          {/* Slide Content with AnimatePresence */}
          <div className="flex-1 flex items-center my-auto py-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSlideData?.id}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({
                    x: dir > 0 ? 60 : -60,
                    opacity: 0,
                    scale: 0.98,
                  }),
                  center: {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                  exit: (dir: number) => ({
                    x: dir > 0 ? -60 : 60,
                    opacity: 0,
                    scale: 0.98,
                    transition: {
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* LEFT CONTENT COLUMN */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">
                  {/* Category / Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs sm:text-sm font-bold mb-5 self-start shadow-sm backdrop-blur-sm bg-white/70"
                  >
                    <BadgeIcon className={`w-4 h-4 ${activeSlideData?.badgeIconColor}`} />
                    <span className="text-slate-900">{activeSlideData?.badgeText}</span>
                  </motion.div>

                  {/* Main Headline */}
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.45 }}
                    className="font-outfit text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08] mb-5"
                  >
                    {activeSlideData?.headingPrefix}{" "}
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${activeSlideData?.highlightGradient}`}>
                      {activeSlideData?.headingHighlight}
                    </span>
                  </motion.h1>

                  {/* Subheading / Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.45 }}
                    className="text-slate-600 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium max-w-2xl mb-7"
                  >
                    {activeSlideData?.subheading}
                  </motion.p>

                  {/* CTAs */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.45 }}
                    className="flex flex-wrap items-center gap-3 sm:gap-4 mb-7"
                  >
                    <Link href={activeSlideData?.primaryCta.href ?? "#"}>
                      <motion.button
                        whileHover={{ scale: 1.03, y: -1 }}
                        whileTap={{ scale: 0.97 }}
                        className={`inline-flex items-center gap-2.5 font-bold text-sm sm:text-base px-7 py-3.5 sm:py-4 rounded-full transition-all ${activeSlideData?.primaryCta.bgClass}`}
                      >
                        <span>{activeSlideData?.primaryCta.text}</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>

                    <Link href={activeSlideData?.secondaryCta.href ?? "#"}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex items-center gap-2 font-bold text-sm sm:text-base px-6 py-3.5 sm:py-4 rounded-full transition-all ${activeSlideData?.secondaryCta.bgClass}`}
                      >
                        <span>{activeSlideData?.secondaryCta.text}</span>
                      </motion.button>
                    </Link>
                  </motion.div>

                  {/* Trust Badges / Tags */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.45 }}
                    className="pt-5 border-t border-slate-200/70 flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-semibold text-slate-600"
                  >
                    {activeSlideData?.trustPoints.map((point, pIndex) => (
                      <div
                        key={pIndex}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-slate-200/80 shadow-xs"
                      >
                        <div className={`w-2 h-2 rounded-full ${point.bg}`} />
                        <span className={point.textCol}>{point.text}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* RIGHT IMAGE & FLOATING CARDS COLUMN */}
                <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">
                  {/* Glowing Backdrop Circle */}
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-md rounded-[2.5rem] sm:rounded-[3rem] border border-white/80 shadow-soft-lg -z-10" />

                  {/* Floating Badge 1 (Top Left) */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                    className={`absolute -top-3 sm:-top-5 -left-2 sm:-left-6 px-4 py-2.5 rounded-2xl border shadow-soft flex items-center gap-2.5 backdrop-blur-md z-20 ${activeSlideData?.floatingCard1.color}`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-xs">
                      <Card1Icon className={`w-4 h-4 ${activeSlideData?.floatingCard1.iconCol}`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight text-slate-900">
                        {activeSlideData?.floatingCard1.title}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500 leading-tight">
                        {activeSlideData?.floatingCard1.subtitle}
                      </p>
                    </div>
                  </motion.div>

                  {/* High Quality Main Image */}
                  <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[420px] aspect-square flex items-center justify-center p-6 sm:p-8">
                    <Image
                      src={activeSlideData?.image}
                      alt={activeSlideData?.imageAlt}
                      width={440}
                      height={440}
                      priority
                      className="w-auto h-auto max-h-[300px] sm:max-h-[360px] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Floating Badge 2 (Bottom Right) */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.4 }}
                    className={`absolute -bottom-3 sm:-bottom-5 -right-2 sm:-right-6 px-4 py-2.5 rounded-2xl border shadow-soft flex items-center gap-2.5 backdrop-blur-md z-20 ${activeSlideData?.floatingCard2.color}`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center shadow-xs">
                      <Card2Icon className={`w-4 h-4 ${activeSlideData?.floatingCard2.iconCol}`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight text-slate-900">
                        {activeSlideData?.floatingCard2.title}
                      </p>
                      <p className="text-[11px] font-medium text-slate-500 leading-tight">
                        {activeSlideData?.floatingCard2.subtitle}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* BOTTOM CONTROLS & 3-SECOND PROGRESS INDICATORS */}
          <div className="pt-8 mt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* 4 Interactive Slide Tabs with 3-Second Progress Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full sm:w-auto flex-1 max-w-3xl">
              {heroSlides.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`relative p-2.5 sm:p-3 rounded-2xl text-left transition-all overflow-hidden ${isActive
                      ? "bg-white shadow-soft border border-slate-200/90"
                      : "bg-white/40 hover:bg-white/70 border border-transparent"
                      }`}
                    aria-label={`Jump to slide ${index + 1}: ${slide.navTitle}`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className={`font-mono font-bold ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                        {slide.slideNum}
                      </span>
                      {isActive && (
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                      )}
                    </div>
                    <p
                      className={`text-xs sm:text-sm font-bold truncate ${isActive ? "text-slate-900" : "text-slate-500"
                        }`}
                    >
                      {slide.navTitle}
                    </p>

                    {/* Progress Bar Track: Auto-fills over 3 seconds when active */}
                    <div className="h-1 w-full bg-slate-200/70 rounded-full overflow-hidden mt-2">
                      {isActive ? (
                        <motion.div
                          key={`progress-${currentSlide}-${isPaused}`}
                          initial={{ width: "0%" }}
                          animate={{ width: isPaused ? "100%" : "100%" }}
                          transition={{
                            duration: isPaused ? 0 : 3,
                            ease: "linear",
                          }}
                          className="h-full bg-slate-900 rounded-full"
                        />
                      ) : (
                        <div
                          className={`h-full rounded-full transition-all ${index < currentSlide ? "w-full bg-slate-300" : "w-0"
                            }`}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Carousel Controls: Prev, Next & Pause/Play */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              {/* Pause / Resume Button */}
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/80 hover:bg-white border border-slate-200/80 shadow-xs text-xs font-bold text-slate-700 transition-all"
                title={isPaused ? "Resume auto-scroll (3s)" : "Pause auto-scroll"}
                aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                    <span className="hidden md:inline">Resume</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 text-slate-600" />
                    <span className="hidden md:inline">3s Auto</span>
                  </>
                )}
              </button>

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all hover:scale-105 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-slate-200/80 shadow-xs flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all hover:scale-105 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: LEARNING PATHWAYS BENTO BOX (Formerly Programs)
      ========================================================================= */}
      <section id="pathways" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-lavender-100 border border-pastel-lavender-200 text-pastel-lavender-900 text-xs sm:text-sm font-bold mb-4">
            <Compass className="w-3.5 h-3.5 text-pastel-lavender-700" />
            <span>Discover • Learning Pathways</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Milestones, Met.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            From their very first steps to kindergarten readiness, explore how we nurture every stage of your child's growth.
          </p>
        </div>

        {/* Bento Grid Layout for Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

          {pathways.map((prog, index) => {
            // Uneven bento column spans:
            // First 3 items: 4 columns each
            // 4th item: 7 columns
            // 5th item: 5 columns
            const colSpanClass =
              index < 3
                ? "lg:col-span-4"
                : index === 3
                  ? "lg:col-span-7"
                  : "lg:col-span-5";

            return (
              <motion.div
                key={prog.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className={`${colSpanClass} ${prog.colorBg} border-2 ${prog.colorBorder} rounded-3xl sm:rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-soft-lg transition-all relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${prog.colorBadge}`}>
                      {prog.age}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-white/80 px-2.5 py-0.5 rounded-full">
                      {prog.tag}
                    </span>
                  </div>

                  <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-3">
                    {prog.stage}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium mb-6">
                    {prog.description}
                  </p>

                  {/* Developmental Milestones */}
                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Core Milestones
                    </p>
                    <ul className="space-y-2">
                      {prog.milestones.map((m, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${prog.colorAccent}`} />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200/50 flex items-center justify-between">
                  <Link href="/admission">
                    <button className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-900 hover:text-rose-600 transition-colors">
                      <span>Enroll in {prog.stage}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>

                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                    <Image
                      src={prog.image}
                      alt={prog.stage}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </section>

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
