"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sprout,
  Puzzle,
  Palette,
  Rocket,
  Brain,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { orangePattern, navyPattern } from "./NurturingCarousel";

import tobbyTeddy from "../public/tobby_with_his_teddy.png";
import leoMagnifying from "../public/leo_with_magnyfying_glass.png";
import tobbyWithBook from "../public/tobby_with_book.png";
import tobbyAndMia from "../public/tobby_And_mia_on_table_painting.png";
import miaAndLeo from "../public/miaandleoforthankyoupage.png";

const ORANGE = "#F65A36";
const NAVY = "#0F2040";

type Stage = {
  id: string;
  icon: LucideIcon;
  stage: string;
  age: string;
  tag: string;
  description: string;
  milestones: string[];
  image: StaticImageData;
};

const stages: Stage[] = [
  {
    id: "toddler",
    icon: Sprout,
    stage: "Little Minds",
    age: "1 – 2 Years",
    tag: "Sensory & First Steps",
    description:
      "Gentle first steps away from home in a cozy, sensory-rich haven. We focus on emotional security, sensory discovery, and joyful motor milestones.",
    milestones: [
      "First vocabulary & song rhythm",
      "Sensory texture discrimination",
      "Comfortable social separation",
      "Gross motor coordination",
    ],
    image: tobbyTeddy,
  },
  {
    id: "playgroup",
    icon: Puzzle,
    stage: "Curious Minds",
    age: "2 – 3 Years",
    tag: "Nature & Social Spark",
    description:
      "An enriching Montessori environment where children explore, question, and make independent choices through tactile materials and joyful peer play.",
    milestones: [
      "Expressive vocabulary explosion",
      "Fine motor grip & pouring",
      "Turn-taking & empathetic play",
      "Curiosity-led questioning",
    ],
    image: leoMagnifying,
  },
  {
    id: "nursery",
    icon: Palette,
    stage: "Emerging Learners",
    age: "3 – 4 Years",
    tag: "Language & Math Magic",
    description:
      "Unlocking patterns, phonics, numbers, and creative arts. Hands-on Montessori learning centers build analytical confidence and concentration.",
    milestones: [
      "Phonetic awareness & letter sounds",
      "Early numeracy & spatial sorting",
      "Artistic expression & story comprehension",
      "Self-directed work cycles",
    ],
    image: tobbyWithBook,
  },
  {
    id: "kindergarten",
    icon: Rocket,
    stage: "Ready for Tomorrow",
    age: "4 – 6 Years",
    tag: "School Readiness & Leadership",
    description:
      "Equipping children with the academic readiness, critical thinking, emotional resilience, and leadership to transition seamlessly to premier primary schools.",
    milestones: [
      "Fluent reading & early sentence craft",
      "Mathematical logic & simple addition",
      "Scientific observation & inquiry",
      "Public speaking & group leadership",
    ],
    image: tobbyAndMia,
  },
  {
    id: "mindlab",
    icon: Brain,
    stage: "Mind Lab & Daycare",
    age: "Infant to 6 Years",
    tag: "Holistic Care & Strategy",
    description:
      "Higher-order thinking games and warm daycare supervision. Nutritious balanced meals, quiet rest suites, and creative enrichment when parents need peace of mind.",
    milestones: [
      "Cognitive strategy & focus games",
      "Peaceful rest & hygiene routines",
      "Healthy social dining habits",
      "Flexible hours for modern parents",
    ],
    image: miaAndLeo,
  },
];

export default function MilestonesSection() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const n = stages.length;

  const select = (i: number) => {
    setDir(i >= active ? 1 : -1);
    setActive(i);
  };

  const s = stages[active]!;
  const isNavy = active % 2 === 1;
  const pct = (active / (n - 1)) * 100;

  return (
    <section id="pathways" className="relative w-full overflow-hidden bg-[#FFF8F4] py-16 sm:py-24">
      {/* ambient accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#F65A36]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#0F2040]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F65A36] px-4 py-1.5 text-xs font-bold text-white shadow-[0_8px_16px_-8px_rgba(246,90,54,0.8)] sm:text-sm">
            <Compass className="h-3.5 w-3.5" />
            Discover • Learning Pathways
          </span>
          <h2 className="font-outfit text-3xl font-extrabold tracking-tight text-[#0F2040] sm:text-4xl lg:text-5xl">
            Milestones,{" "}
            <span className="relative inline-block text-[#F65A36]">
              Met.
              <svg aria-hidden className="absolute -bottom-2 left-0 h-2.5 w-full" viewBox="0 0 100 10" preserveAspectRatio="none" fill="none">
                <path d="M2 7C30 1 60 1 98 6" stroke="#F65A36" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
            From their very first steps to kindergarten readiness, explore how we nurture every stage of your
            child&apos;s growth.
          </p>
        </div>

        {/* Journey stepper */}
        <div className="relative mb-12 sm:mb-16">
          {/* track (desktop) */}
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-[3px] rounded-full bg-[#0F2040]/10 md:block">
            <motion.div
              className="h-full rounded-full bg-[#F65A36]"
              animate={{ width: `${pct}%` }}
              transition={{ type: "spring", stiffness: 90, damping: 18 }}
            />
          </div>

          <ol className="relative grid grid-cols-5 gap-1 sm:gap-3">
            {stages.map((st, i) => {
              const Icon = st.icon;
              const isActive = i === active;
              const done = i < active;
              return (
                <li key={st.id} className="flex justify-center">
                  <button
                    id={`stage-${st.id}`}
                    onClick={() => select(i)}
                    aria-current={isActive ? "step" : undefined}
                    aria-label={`${st.stage}, ${st.age}`}
                    className="group flex w-full flex-col items-center text-center"
                  >
                    <motion.span
                      animate={{ scale: isActive ? 1.12 : 1 }}
                      whileHover={{ y: -3 }}
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-colors sm:h-14 sm:w-14 ${
                        isActive
                          ? "border-[#F65A36] bg-[#F65A36] text-white shadow-[0_12px_24px_-10px_rgba(246,90,54,0.9)]"
                          : done
                          ? "border-[#0F2040] bg-[#0F2040] text-white"
                          : "border-[#F65A36]/40 bg-white text-[#F65A36] group-hover:border-[#F65A36]"
                      }`}
                    >
                      {isActive && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#F65A36]/30" />
                      )}
                      <Icon className="relative h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.span>
                    <span
                      className={`mt-3 hidden text-sm font-bold leading-tight sm:block ${
                        isActive ? "text-[#0F2040]" : "text-slate-500 group-hover:text-[#0F2040]"
                      }`}
                    >
                      {st.stage}
                    </span>
                    <span className={`mt-1 text-[10px] font-semibold sm:text-xs ${isActive ? "text-[#F65A36]" : "text-slate-400"}`}>
                      {st.age}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Stage detail */}
        <div className="relative min-h-[520px] lg:min-h-[460px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={s.id}
              custom={dir}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? 50 : -50, opacity: 0 }),
                center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                exit: (d: number) => ({ x: d > 0 ? -50 : 50, opacity: 0, transition: { duration: 0.25 } }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12"
            >
              {/* Doodle panel + character */}
              <div className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none">
                <div
                  className="relative mx-auto aspect-[1/1] w-full max-w-[430px] rounded-[2.5rem] shadow-[0_30px_50px_-25px_rgba(15,32,64,0.55)] sm:rounded-[3rem]"
                  style={{
                    backgroundColor: isNavy ? NAVY : ORANGE,
                    backgroundImage: isNavy ? navyPattern : orangePattern,
                    backgroundSize: "210px 210px",
                  }}
                >
                  <div className="absolute inset-x-0 bottom-0 top-[-8%] flex items-end justify-center">
                    <Image
                      src={s.image}
                      alt={s.stage}
                      className="h-auto max-h-[96%] w-auto max-w-[86%] object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.25)]"
                    />
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ repeat: Infinity, duration: 3.6, ease: "easeInOut" }}
                  className="absolute -left-2 top-6 z-10 rounded-2xl bg-white px-4 py-2.5 shadow-[0_14px_30px_-12px_rgba(15,32,64,0.4)] sm:-left-6"
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">Stage {active + 1} of {n}</span>
                  <span className="block font-outfit text-lg font-extrabold leading-tight text-[#F65A36]">{s.age}</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="lg:col-span-7">
                <span className="inline-flex rounded-full border border-[#0F2040]/10 bg-white px-3.5 py-1.5 text-xs font-bold text-[#0F2040] shadow-sm sm:text-sm">
                  {s.tag}
                </span>
                <h3 className="mt-4 font-outfit text-3xl font-extrabold tracking-tight text-[#0F2040] sm:text-4xl">
                  {s.stage}
                </h3>
                <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-slate-600">{s.description}</p>

                <p className="mb-3 mt-7 text-xs font-bold uppercase tracking-wider text-slate-400">Core Milestones</p>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {s.milestones.map((m, i) => (
                    <motion.li
                      key={m}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.07 }}
                      className="flex items-start gap-3 rounded-2xl border border-[#0F2040]/5 bg-white p-3.5 shadow-sm"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F65A36] text-white">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm font-semibold leading-snug text-[#0F2040]">{m}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link href="/admission">
                    <motion.span
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#F65A36] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_20px_-10px_rgba(246,90,54,0.9)] transition-colors hover:bg-[#E84A26]"
                    >
                      Enroll in {s.stage}
                      <ArrowRight className="h-4 w-4" />
                    </motion.span>
                  </Link>
                  <button
                    onClick={() => select((active + 1) % n)}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-[#0F2040] px-6 py-3 text-sm font-bold text-[#0F2040] transition-colors hover:bg-[#0F2040] hover:text-white"
                  >
                    Next stage
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
