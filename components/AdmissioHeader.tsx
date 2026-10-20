"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

const AdmissionHeader = () => {
  return (
    <header className="relative pt-32 sm:pt-40 pb-10 sm:pb-14 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-pastel-peach-50/40 to-[#FAF8F5]">
      {/* Ambient Pastel Glows */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-pastel-peach-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 w-80 h-80 bg-pastel-sage-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-peach-100 border border-pastel-peach-200 text-pastel-peach-900 text-xs sm:text-sm font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-pastel-peach-700" />
            <span>Join Us • Start the Journey</span>
          </div>

          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
            Secure Their <span className="text-transparent bg-clip-text bg-gradient-to-r from-pastel-peach-500 via-rose-500 to-rose-600">Spot.</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-medium max-w-xl mx-auto leading-relaxed">
            Ready to take the first step? Let’s get to know each other.
          </p>
        </motion.div>
      </div>
    </header>
  );
};

export default AdmissionHeader;