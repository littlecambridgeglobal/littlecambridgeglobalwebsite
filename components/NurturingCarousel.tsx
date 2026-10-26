"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Doodle pattern tile (backpack, protractor, pencil, set-square, book, star).
 * Pure SVG line-art -> infinitely sharp, ~2KB, recolourable per card.
 * Swap this for a PNG/SVG file via `backgroundImage: url(/doodles.png)` if you
 * later get custom artwork from your designer.
 */
export const doodleTile = (stroke: string) => `
<svg xmlns="http://www.w3.org/2000/svg" width="260" height="260" viewBox="0 0 260 260"
  fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- backpack -->
  <path d="M20 40q0-22 20-22h4q20 0 20 22v34q0 6-6 6H26q-6 0-6-6z"/>
  <path d="M34 18v-6q0-4 6-4t6 4v6"/>
  <path d="M26 56h28v18H26zM30 42h20"/>
  <!-- protractor -->
  <path d="M150 72A50 50 0 0 1 250 72z"/>
  <path d="M170 72A30 30 0 0 1 230 72"/>
  <path d="M200 22v6M235 37l-4 4M165 37l4 4M247 55l-5 2M153 55l5 2"/>
  <!-- pencil -->
  <g transform="rotate(-35 70 150)">
    <path d="M40 140h60l10 10-10 10H40zM100 140l10 10-10 10M48 140v20"/>
  </g>
  <!-- set square -->
  <path d="M140 205V135l70 70zM150 195v-30l30 30z"/>
  <!-- open book -->
  <path d="M18 222q20-8 40 0q20-8 40 0v28q-20-8-40 0q-20-8-40 0zM58 222v28"/>
  <!-- star + squiggle -->
  <path d="M215 222l4 9 10 1-8 7 3 10-9-5-9 5 3-10-8-7 10-1z"/>
  <path d="M118 100q5-8 10 0t10 0t10 0"/>
  <circle cx="110" cy="40" r="3"/>
  <circle cx="125" cy="240" r="3"/>
</svg>`;

export const toDataUri = (svg: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(svg.replace(/\s+/g, " ").trim())}")`;

export const orangePattern = toDataUri(doodleTile("rgba(255,255,255,0.28)"));
export const navyPattern = toDataUri(doodleTile("rgba(148,180,255,0.22)"));

const cards = [
  {
    title: "Learning With Joy",
    text: "From storytelling to singing, from art to hugs—every day at Little Cambridge feels like a happy adventure. Smiles, laughter, and hands-on learning fill the air.",
  },
  {
    title: "Every Day Brings Discovery",
    text: "We encourage children to ask big questions and enjoy small surprises. Each day opens the door to something new.",
  },
  {
    title: "A Place to Grow, Play & Shine",
    text: "Children learn through joyful activities—whether it's painting, singing, or counting stars. Confidence and creativity bloom together.",
  },
  {
    title: "Safe, Warm & Nurturing",
    text: "Caring educators, child-safe spaces and live-CCTV peace of mind—so your little one can explore freely while you stay worry-free.",
  },
];

const GAP = 106; // % of card width between card centres

export default function NurturingCarousel() {
  const n = cards.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((p) => (p + 1) % n), [n]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 3500);
    return () => clearInterval(t);
  }, [paused, next]);

  return (
    <section
      id="nurturing"
      aria-labelledby="nurturing-heading"
      className="relative  w-full overflow-hidden  py-16 sm:py-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Flowing orange line */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 330C260 300 480 240 720 275S1180 230 1440 110"
          stroke="#F65A36"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* Dotted blob (top-left) */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-[6%] top-[28%] hidden h-24 w-20 lg:block"
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

      {/* Scalloped flower (bottom-right) */}
      <motion.svg
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="pointer-events-none absolute bottom-10 right-[8%] hidden h-14 w-14 text-[#FF8E7A] lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <circle
            key={i}
            cx={50 + 34 * Math.cos((i * Math.PI) / 5)}
            cy={50 + 34 * Math.sin((i * Math.PI) / 5)}
            r="14"
          />
        ))}
        <circle cx="50" cy="50" r="34" />
      </motion.svg>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2
          id="nurturing-heading"
          className="font-outfit text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
        >
          Nurturing Young Minds with Joy &amp; Wonder
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-slate-600 sm:text-base">
          At Little Cambridge Global, we welcome children aged 1 to 6 into a world filled with
          learning, play, and discovery. Our age-appropriate nursery and kindergarten programs
          are thoughtfully created to spark curiosity, build confidence, and make early
          education a delightful journey.
        </p>
      </div>

      {/* Carousel stage */}
      <div className="relative z-10 mx-auto mt-10 h-[360px] w-full max-w-6xl sm:h-[380px]">
        {cards.map((card, i) => {
          // -1 (left) | 0 (centre) | 1 (right) | 2 (hidden, queued on the right)
          const offset = ((i - active + 1 + n) % n) - 1;
          const hidden = offset === 2;
          const isCenter = offset === 0;

          return (
            <motion.article
              key={card.title}
              aria-hidden={!isCenter && hidden}
              initial={false}
              animate={{
                x: `${offset * GAP}%`,
                y: isCenter ? 36 : 0,
                scale: isCenter ? 1 : 0.97,
                opacity: hidden ? 0 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
                opacity: { duration: 0.35 },
              }}
              onClick={() => setActive(i)}
              className="absolute left-1/2 top-0 -ml-[calc(min(76vw,340px)/2)] flex h-[290px] w-[min(76vw,340px)] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-[2rem] px-7 text-center text-white shadow-[0_20px_40px_-18px_rgba(15,32,64,0.45)] sm:h-[300px] sm:px-9"
              style={{
                backgroundColor: isCenter ? "#0F2040" : "#F65A36",
                backgroundImage: isCenter ? navyPattern : orangePattern,
                backgroundSize: "210px 210px",
                transition: "background-color 0.6s ease",
              }}
            >
              <h3 className="font-outfit text-lg font-bold sm:text-xl">{card.title}</h3>
              <p className="mt-4 text-[13px] font-medium leading-relaxed text-white/95 sm:text-sm">
                {card.text}
              </p>
            </motion.article>
          );
        })}
      </div>

      {/* Dots */}
      <div className="relative z-10 mt-2 flex items-center justify-center gap-2" role="tablist">
        {cards.map((c, i) => (
          <button
            key={c.title}
            role="tab"
            aria-selected={active === i}
            aria-label={`Show card ${i + 1}: ${c.title}`}
            id={`nurturing-dot-${i}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-[#F65A36]" : "w-3 bg-slate-200 hover:bg-slate-300"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
