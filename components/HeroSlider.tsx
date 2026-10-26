"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Star,
  ShieldCheck,
  GraduationCap,
  Activity,
  MapPin,
  Sun,
  Users,
  Building2,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

import tobbyAndMia from "../public/assests/big owl book.png";
import tobbyTeddy from "../public/assests/onlydogimage.png";
import miaAndLeo from "../public/assests/boy_pointingtowardform.png";
import leoMagnifying from "../public/assests/quirillookingcluless.png";

const ORANGE = "#F65A36";
const NAVY = "#0F2040";

// Repeating doodle tile (school bag, bottle, pencil, toys, geometry) with generous spacing
const makeTile = (ink: string, accent: string) => `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='360' height='360' viewBox='0 0 360 360' fill='none' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
  <g stroke='${ink}' stroke-opacity='0.14'>
    <!-- school bag -->
    <path d='M20 46q0-20 18-20h4q18 0 18 20v30q0 6-6 6H26q-6 0-6-6zM32 26v-5q0-4 6-4t6 4v5M27 60h22v16H27zM30 46h16'/>
    <!-- pencil -->
    <g transform='rotate(40 270 55)'><path d='M245 47h52l9 8-9 8h-52zM297 47l9 8-9 8M253 47v16'/></g>
    <!-- ABC block -->
    <g transform='rotate(-10 173 163)'><path d='M150 140h46v46h-46zM164 176l9-26 9 26M167 168h12'/></g>
    <!-- protractor -->
    <path d='M20 320A35 35 0 0 1 90 320zM32 320A23 23 0 0 1 78 320M55 285v5'/>
    <!-- open book -->
    <path d='M215 300q20-8 40 0q20-8 40 0v30q-20-8-40 0q-20-8-40 0zM255 300v30'/>
  </g>
  <g stroke='${accent}' stroke-opacity='0.4'>
    <!-- water bottle -->
    <path d='M150 12h10v8h-10zM148 20h14l4 10v44q0 4-4 4h-14q-4 0-4-4V30zM146 46h18M146 60h18'/>
    <!-- teddy bear -->
    <circle cx='55' cy='160' r='16'/><circle cx='42' cy='146' r='6'/><circle cx='68' cy='146' r='6'/>
    <ellipse cx='55' cy='200' rx='18' ry='20'/><path d='M37 192l-10 10M73 192l10 10M48 218l-4 10M62 218l4 10'/>
    <circle cx='50' cy='158' r='1.5'/><circle cx='60' cy='158' r='1.5'/>
    <!-- toy ball -->
    <circle cx='285' cy='175' r='22'/><path d='M263 175q22-14 44 0M263 175q22 14 44 0M285 153v44'/>
    <!-- set-square -->
    <path d='M120 330V270l52 60zM130 320v-26l24 26z'/>
    <!-- stars -->
    <path d='M318 106l3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1z'/>
    <path d='M108 120l5 9h-10z'/>
  </g>
</svg>`
)}")`;

type Slide = {
  id: string;
  num: string;
  nav: string;
  title: string;
  highlight: string;
  text: string;
  primary: { text: string; href: string };
  secondary: { text: string; href: string };
  points: string[];
  image: StaticImageData;
  alt: string;
  panel: "orange" | "navy";
  bg: string;
  ink: string;
  accent: string;
};

const slides: Slide[] = [
  {
    id: "curious-minds",
    bg: "#E3F1FB", ink: "#0F2040", accent: "#2F8FD0",

    num: "01",
    nav: "Curious Minds",
    title: "Little Steps",
    highlight: "to Global Success.",
    text: "A modern space where early learning feels like an adventure. Watch them discover their world through child-led curiosity, sensory wonder, and joyful mentorship.",
    primary: { text: "Start the Journey", href: "/admission" },
    secondary: { text: "Discover Learning Pathways", href: "#pathways" },
    points: ["100% Play-Based Discovery", "1:8 Warm Educator Ratio", "Montessori Inspired"],
    image: miaAndLeo,
    alt: "Mia and Leo reading and exploring",
    panel: "orange"
  },
  {
    id: "milestones-met",
    bg: "#FFEFE6", ink: "#0F2040", accent: "#F65A36",
    num: "02",
    nav: "Learning Pathways",
    title: "Milestones, Met.",
    highlight: "Every Stage Celebrated.",
    text: "From their very first steps to kindergarten readiness, explore how we nurture every stage of your child's growth through experiential, hands-on learning.",
    primary: { text: "Explore All Pathways", href: "/Programs" },
    secondary: { text: "Schedule a Campus Walk", href: "/admission" },
    points: ["Little Minds (1–2y)", "Curious Minds (2–3y)", "Emerging Learners (3–4y)", "Kindergarten (4–6y)"],
    image: tobbyAndMia,
    alt: "Children engaged in creative painting and hands-on art",
    panel: "navy"
  },
  {
    id: "close-to-home",
    bg: "#E4F6EA", ink: "#0F2040", accent: "#1FA463",
    num: "03",
    nav: "Our Locations",
    title: "Close to Home.",
    highlight: "Sanctuaries of Wonder.",
    text: "Find a vibrant campus right in your neighbourhood with real-time parent CCTV streaming, organic nutrition, sensory splash parks, and pediatrician-trained educators.",
    primary: { text: "Find a Campus Near You", href: "/Ourcenters" },
    secondary: { text: "Book a Campus Walk", href: "/contact" },
    points: ["Delhi NCR", "Bangalore", "Indore", "Vijayawada"],
    image: leoMagnifying,
    alt: "Leo exploring nature with a magnifying glass",
    panel: "orange"
  },
  {
    id: "build-the-future",
    bg: "#FFF3D1", ink: "#0F2040", accent: "#E89A0C",
    num: "04",
    nav: "Partner With Us",
    title: "Build the Future.",
    highlight: "Shape Early Education.",
    text: "Bring Little Cambridge Global's early education model to your city. Turnkey blueprints, Montessori training academy, and 360° operational guidance.",
    primary: { text: "Partner With Us", href: "/franchise" },
    secondary: { text: "Say Hello", href: "/contact" },
    points: ["Turnkey 360° Setup", "Certified Montessori Academy", "Rapid Breakeven", "PAN-India Expansion"],
    image: tobbyTeddy,
    alt: "Tobby hugging teddy bear, representing trusted care and partnership",
    panel: "navy"
  },
];

const AUTOPLAY_MS = 4500;

export default function HeroSlider() {
  const n = slides.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dir, setDir] = useState(1);

  const go = useCallback(
    (to: number, d?: number) => {
      setDir(d ?? (to > current ? 1 : -1));
      setCurrent((to + n) % n);
    },
    [current, n]
  );
  const next = useCallback(() => {
    setDir(1);
    setCurrent((p) => (p + 1) % n);
  }, [n]);
  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((p) => (p - 1 + n) % n);
  }, [n]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [paused, current, next]);

  const s = slides[current]!;
  const isNavy = s.panel === "navy";
  const tile = React.useMemo(() => makeTile(s.ink, s.accent), [s.ink, s.accent]);

  return (
    <section
      aria-label="Little Cambridge Global Hero Carousel"
      className="relative w-full overflow-hidden bg-[#FFF8F4] select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Sliding background: each slide brings its own colour + doodles */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} custom={dir}>
          <motion.div
            key={s.id}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%" }),
              center: { x: 0 },
              exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%" }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
            style={{ backgroundColor: s.bg }}
          >
            <div
              className="absolute inset-0 opacity-80 blur-[0.8px]"
              style={{
                backgroundImage: tile,
                backgroundSize: "360px 360px",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 20%, #000 82%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, transparent 0%, #000 20%, #000 82%, transparent 100%)",
              }}
            />
            <div className="absolute -left-24 top-24 h-72 w-72 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: s.accent }} />
            <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: s.ink }} />
          </motion.div>
        </AnimatePresence>
      </div>

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 340C260 310 480 250 720 285S1180 240 1440 130"
          stroke={ORANGE}
          strokeOpacity="0.55"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute left-[3%] top-[34%] hidden h-24 w-20 lg:block"
        viewBox="0 0 80 96"
        fill="#F97B4A"
      >
        {[0, 1, 2, 3, 4].map((r) =>
          [0, 1, 2].map((c) => (
            <ellipse
              key={`${r}-${c}`}
              cx={14 + c * 22 + (r % 2) * 6}
              cy={10 + r * 18}
              rx="5"
              ry="8"
              transform={`rotate(-30 ${14 + c * 22} ${10 + r * 18})`}
              opacity={0.9 - r * 0.1}
            />
          ))
        )}
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-36 sm:px-6 sm:pt-40 lg:px-8 lg:pt-44">
        <div className="flex min-h-[560px] items-center lg:min-h-[600px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={s.id}
              custom={dir}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
                center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, transition: { duration: 0.3 } }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8"
            >
              {/* ---------- LEFT: copy ---------- */}
              <div className="flex flex-col items-start lg:col-span-7">
                <h1 className="mb-5 font-outfit text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0F2040] sm:text-5xl lg:text-6xl">
                  {s.title}{" "}
                  <span className="relative inline-block text-[#F65A36]">
                    {s.highlight}
                    <svg
                      aria-hidden
                      className="absolute -bottom-2 left-0 h-2.5 w-full"
                      viewBox="0 0 200 10"
                      preserveAspectRatio="none"
                      fill="none"
                    >
                      <path d="M2 7C50 1 100 1 198 6" stroke="#F65A36" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                <p className="mb-7 max-w-xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                  {s.text}
                </p>

                <div className="mb-7 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link href={s.primary.href}>
                    <motion.span
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#F65A36] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_20px_-10px_rgba(246,90,54,0.9)] transition-colors hover:bg-[#E84A26] sm:py-4 sm:text-base"
                    >
                      {s.primary.text}
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                  <Link href={s.secondary.href}>
                    <motion.span
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center rounded-full border-2 border-[#0F2040] px-6 py-3 text-sm font-bold text-[#0F2040] transition-colors hover:bg-[#0F2040] hover:text-white sm:py-3.5 sm:text-base"
                    >
                      {s.secondary.text}
                    </motion.span>
                  </Link>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="inline-flex items-center gap-2 rounded-full border border-[#0F2040]/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0F2040] shadow-sm sm:text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#F65A36]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ---------- RIGHT: doodle panel + character ---------- */}
              <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
                <div
                  className="relative mx-auto aspect-[1/1.02] w-full max-w-[440px] rounded-[2.5rem] shadow-[0_30px_50px_-25px_rgba(15,32,64,0.55)] sm:rounded-[3rem]"
                  style={{ backgroundColor: isNavy ? NAVY : ORANGE }}
                >
                  {/* Character pops out of the panel */}
                  <div className="absolute inset-x-0 bottom-0 top-[-8%] flex items-end justify-center">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      priority
                      className="h-auto max-h-[96%] w-auto max-w-[88%] object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.25)]"
                    />
                  </div>
                </div>

                {/* Floating info cards */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                  className="absolute -left-2 top-6 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_14px_30px_-12px_rgba(15,32,64,0.4)] sm:-left-8"
                >

                </motion.div>

                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.4 }}
                  className="absolute -right-2 bottom-8 z-20 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_14px_30px_-12px_rgba(15,32,64,0.4)] sm:-right-6"
                >
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ---------- Slide tabs + controls ---------- */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#0F2040]/10 pt-6 sm:flex-row">
          <div className="grid w-full max-w-3xl flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
            {slides.map((sl, i) => {
              const active = i === current;
              return (
                <button
                  key={sl.id}
                  id={`hero-tab-${i}`}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}: ${sl.nav}`}
                  aria-current={active}
                  className={`rounded-2xl px-3.5 py-2.5 text-left transition-all ${active ? "bg-white shadow-md" : "bg-white/50 hover:bg-white/80"
                    }`}
                >
                  <span className="flex items-center justify-between text-xs font-bold">
                    <span className={active ? "text-[#F65A36]" : "text-slate-400"}>{sl.num}</span>
                  </span>
                  <span className={`block truncate text-xs font-bold sm:text-sm ${active ? "text-[#0F2040]" : "text-slate-500"}`}>
                    {sl.nav}
                  </span>
                  <span className="mt-2 block h-1 w-full overflow-hidden rounded-full bg-slate-200">
                    {active ? (
                      <motion.span
                        key={`${current}-${paused}`}
                        className="block h-full rounded-full bg-[#F65A36]"
                        initial={{ width: paused ? "100%" : "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
                      />
                    ) : (
                      <span className={`block h-full rounded-full bg-slate-300 ${i < current ? "w-full" : "w-0"}`} />
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setPaused((p) => !p)}
              aria-label={paused ? "Resume auto-play" : "Pause auto-play"}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F2040] shadow-sm transition-transform hover:scale-105"
            >
              {paused ? <Play className="h-4 w-4 fill-current" /> : <Pause className="h-4 w-4" />}
            </button>
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F65A36] text-white shadow-[0_8px_16px_-8px_rgba(246,90,54,0.9)] transition-transform hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F2040] text-white shadow-[0_8px_16px_-8px_rgba(15,32,64,0.9)] transition-transform hover:scale-105 active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
