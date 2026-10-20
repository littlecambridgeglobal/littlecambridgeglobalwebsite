"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, BookOpen } from "lucide-react";

const AboutHeader = () => {
  return (
    <header className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-pastel-lavender-50/40 to-[#FAF8F5]">
      {/* Ambient Pastel Glows */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-pastel-lavender-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-pastel-peach-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-lavender-100 border border-pastel-lavender-200 text-pastel-lavender-900 text-xs sm:text-sm font-bold mb-5 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-pastel-lavender-700" />
            <span>The Vision • Our Story</span>
          </div>

          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
            A space where natural curiosity <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-peach-500 via-rose-500 to-rose-600">
              becomes a lifelong superpower.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            We replace rigid institutional drills with child-led discovery, emotional warmth, and milestone-centered pathways designed for the modern child.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default AboutHeader;