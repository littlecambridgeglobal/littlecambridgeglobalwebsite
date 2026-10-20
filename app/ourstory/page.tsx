"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import AboutHeader from "@/components/AboutHeader";
import { ArrowRight, Sparkles, CheckCircle2, Heart, Compass, ShieldCheck } from "lucide-react";

// Images
import boysitting from "../../public/tobby_with_book.png";
import girlwithbook from "../../public/tobby_And_mia_on_table_painting.png";
import boywithelephant from "../../public/tobby_with_his_teddy.png";
import girlonswing from "../../public/leo_with_magnyfying_glass.png";
import boywithcup from "../../public/tobyy_skiping_rope.png";
import girlfaceonly from "../../public/girlfaceonly.png";
import boywithbrush from "../../public/boywithbrush.png";

// Data for Story sections
const storySections = [
  {
    title: "Where Wonder Takes Flight",
    badge: "Our Vision",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
        <p>
          At Little Cambridge Global, we nurture confident, independent, and compassionate young explorers through modern, child-centered Montessori learning.
        </p>
        <p>
          We replace rote memorization with hands-on discovery, sensory exploration, and creative expression. Every child learns that their voice matters, their questions have value, and discovering how the world works is the greatest adventure.
        </p>
        <div className="p-4 rounded-2xl bg-pastel-sage-50 border border-pastel-sage-200 text-pastel-sage-900 font-bold text-base">
          We don’t just prepare children for school; we prepare them for a lifetime of confident learning.
        </div>
      </div>
    ),
    image: boysitting,
    pastelBg: "bg-pastel-sage-50/50",
    badgeColor: "bg-pastel-sage-100 text-pastel-sage-900",
  },
  {
    title: "The Joyful Discovery Method",
    badge: "The Approach",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
        <p>
          Inspired by Dr. Maria Montessori’s groundbreaking research on the absorbent mind, our methodology recognizes that young children learn continuously from their tactile environment.
        </p>
        <p>
          Every room is a carefully prepared discovery studio with open-ended sensorial materials, low shelves, natural light, and quiet reading nooks where children work at their own pace without arbitrary pressure.
        </p>
        <p>
          Our educators act as gentle mentors and facilitators—observing, supporting, and guiding children as they discover concepts independently.
        </p>
      </div>
    ),
    image: girlwithbook,
    pastelBg: "bg-pastel-lavender-50/50",
    badgeColor: "bg-pastel-lavender-100 text-pastel-lavender-900",
  },
  {
    title: "Building Foundations for Life",
    badge: "Milestones",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
        <p>
          The formative years between 12 months and 6 years define emotional security, linguistic confidence, and logical foundations that influence all future learning.
        </p>
        <p>
          Our dedicated educators combine warmth with insights from child developmental neuroscience. We respect each child’s individuality while fostering concentration, empathy, problem-solving, and joyful independence.
        </p>
        <ul className="space-y-2.5 pt-2">
          <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-pastel-peach-500 shrink-0" />
            <span>Child-centered rhythms matching each stage</span>
          </li>
          <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-pastel-peach-500 shrink-0" />
            <span>Active tactile materials over passive digital screens</span>
          </li>
          <li className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-pastel-peach-500 shrink-0" />
            <span>Harmonious social & emotional growth</span>
          </li>
        </ul>
      </div>
    ),
    image: boywithelephant,
    pastelBg: "bg-pastel-peach-50/50",
    badgeColor: "bg-pastel-peach-100 text-pastel-peach-900",
  },
  {
    title: "Where Children Feel Truly Safe to Grow",
    badge: "Safe Spaces",
    content: (
      <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
        <p>
          Learning begins with feeling secure, cherished, and heard. Our vibrant campuses are designed from the floor up with rounded corners, non-toxic organic materials, pediatric hygiene protocols, and live CCTV streaming for parent peace of mind.
        </p>
        <p>
          A safe environment builds confidence. Confidence inspires curiosity. And curiosity unlocks endless possibility.
        </p>
      </div>
    ),
    image: girlonswing,
    pastelBg: "bg-pastel-sky-50/50",
    badgeColor: "bg-pastel-sky-100 text-pastel-sky-900",
  }
];

// Learning Pathways (formerly Programs)
const pathways = [
  {
    title: "Little Minds",
    age: "1 – 2 Years",
    desc: "A nurturing toddler sanctuary fostering early language, sensory textures, and gentle social milestones.",
    theme: "bg-pastel-peach-50 border-pastel-peach-200 text-pastel-peach-900",
  },
  {
    title: "Curious Minds",
    age: "2 – 3 Years (Playgroup)",
    desc: "A tactile environment where children explore questions, vocabulary bursts, and cooperative play.",
    theme: "bg-pastel-sage-50 border-pastel-sage-200 text-pastel-sage-900",
  },
  {
    title: "Emerging Learners",
    age: "3 – 4 Years (Nursery)",
    desc: "Hands-on Montessori materials developing early phonics, number sense, and concentration.",
    theme: "bg-pastel-sky-50 border-pastel-sky-200 text-pastel-sky-900",
  },
  {
    title: "Ready for Tomorrow",
    age: "4 – 5 Years (LKG)",
    desc: "Mathematical logic, communicative storytelling, and collaborative problem-solving.",
    theme: "bg-pastel-lavender-50 border-pastel-lavender-200 text-pastel-lavender-900",
  },
  {
    title: "Future Achievers",
    age: "5 – 6 Years (UKG)",
    desc: "Complete kindergarten readiness, leadership skills, and fluid transition to formal primary schooling.",
    theme: "bg-pastel-mint-50 border-pastel-mint-200 text-emerald-900",
  },
  {
    title: "Mind Lab & Day Care",
    age: "All Stages",
    desc: "Cognitive strategy games combined with caring, nutritious, and peaceful day care routines.",
    theme: "bg-[#FAF5ED] border-[#EADFCB] text-amber-900",
  }
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[#FAF8F5] text-slate-800 font-jakarta selection:bg-rose-100 selection:text-rose-900">
      <AboutHeader />

      {/* Main Story Bento Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {storySections.map((sec, idx) => {
          const isReversed = idx % 2 !== 0;

          return (
            <motion.section
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-white/80 shadow-soft bg-white/80 backdrop-blur-md`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>

                {/* Text Side */}
                <div className={`lg:col-span-7 space-y-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold ${sec.badgeColor}`}>
                    {sec.badge}
                  </span>

                  <h2 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {sec.title}
                  </h2>

                  {sec.content}
                </div>

                {/* Visual Image */}
                <div className={`lg:col-span-5 flex justify-center ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="relative w-full max-w-[340px] aspect-square rounded-3xl bg-gradient-to-tr from-pastel-peach-50 via-white to-pastel-lavender-50 p-6 border border-white shadow-soft flex items-center justify-center">
                    <Image
                      src={sec.image}
                      alt={sec.title}
                      width={300}
                      height={300}
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>

              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Learning Pathways Section (Phase 2 & 4) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-lavender-100 text-pastel-lavender-900 text-xs sm:text-sm font-bold mb-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((prog, index) => (
            <motion.div
              key={prog.title}
              whileHover={{ y: -4 }}
              className={`rounded-3xl p-7 border-2 shadow-soft hover:shadow-soft-lg transition-all ${prog.theme}`}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white/90 text-slate-700">
                  {prog.age}
                </span>
                <span className="text-xs font-extrabold text-slate-400">
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-2">
                {prog.title}
              </h3>

              <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                {prog.desc}
              </p>

              <Link href="/admission">
                <button className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-rose-600 transition-colors">
                  <span>Start the Journey (Join Us)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/admission">
            <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-8 py-4 rounded-full shadow-soft transition-all">
              <span>Secure Their Spot (Join Us)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}