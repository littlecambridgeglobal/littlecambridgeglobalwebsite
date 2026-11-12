"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  HeartHandshake,
  Building2,
  ShieldCheck,
  ArrowDownToLine,
  Eye,
} from "lucide-react";
import { toast } from "sonner";

export interface FlyerItem {
  id: string;
  title: string;
  category: string;
  file: string;
  filename: string;
  fileSize: string;
  description: string;
  highlights: string[];
  theme: {
    accent: string;
    border: string;
    hoverBorder: string;
    pillBg: string;
    pillText: string;
    buttonBg: string;
    cardBg: string;
    badgeGlow: string;
    iconBg: string;
  };
  icon: React.ElementType;
}

export const flyersData: FlyerItem[] = [
  {
    id: "daycare",
    title: "Day Care Program Flyer",
    category: "Early Years & Day Care",
    file: "/assests/Day Care Flyer.pdf",
    filename: "Little-Cambridge-Day-Care-Flyer.pdf",
    fileSize: "3.5 MB • PDF",
    description:
      "A complete guide to our safe, loving Montessori-inspired Day Care program, infant sensory pods, nutritious dining, and flexible scheduling.",
    highlights: [
      "Montessori routine with sensory learning",
      "Infant & Toddler pods (12 months – 6 years)",
      "Pediatric nutrition & hygienic kitchen standard",
      "1:8 educator ratio with parent CCTV live stream",
    ],
    theme: {
      accent: "#F65A36",
      border: "border-orange-200/80",
      hoverBorder: "hover:border-[#F65A36]",
      pillBg: "bg-orange-50",
      pillText: "text-[#F65A36]",
      buttonBg: "bg-[#F65A36] hover:bg-[#e04a27]",
      cardBg: "from-white via-[#FFF8F4] to-white",
      badgeGlow: "bg-[#FFEFE6]",
      iconBg: "bg-orange-500",
    },
    icon: HeartHandshake,
  },
  {
    id: "franchise",
    title: "Franchise Opportunity Flyer",
    category: "Franchise & Entrepreneurship",
    file: "/assests/Franchise Flyer.pdf",
    filename: "Little-Cambridge-Franchise-Flyer.pdf",
    fileSize: "2.6 MB • PDF",
    description:
      "Discover the rewarding journey of opening a Little Cambridge Global franchise with high ROI, turnkey campus setup, and year-round admissions assistance.",
    highlights: [
      "Proven high-ROI early education model",
      "Turnkey architectural & child-safe campus design",
      "Facilitator hiring & rigorous Montessori training",
      "Full digital marketing & student admission leads",
    ],
    theme: {
      accent: "#0284C7",
      border: "border-sky-200/80",
      hoverBorder: "hover:border-[#0284C7]",
      pillBg: "bg-sky-50",
      pillText: "text-[#0284C7]",
      buttonBg: "bg-[#0284C7] hover:bg-[#0369a1]",
      cardBg: "from-white via-[#F0F8FD] to-white",
      badgeGlow: "bg-[#E6F3FA]",
      iconBg: "bg-[#0284C7]",
    },
    icon: Building2,
  },
  {
    id: "matrix",
    title: "360° Partner Support Matrix",
    category: "Operational & Academic Framework",
    file: "/assests/360 Support Matrix.pdf",
    filename: "Little-Cambridge-360-Support-Matrix.pdf",
    fileSize: "2.7 MB • PDF",
    description:
      "An in-depth breakdown of our 360-degree support ecosystem—from regulatory clearances and curriculum handbooks to audit frameworks and safety drills.",
    highlights: [
      "End-to-end operational roadmap for partners",
      "Montessori curriculum kits & term-wise lesson plans",
      "Pediatric first-aid certification & CCTV standards",
      "Centralized ERP, attendance, and parent mobile app",
    ],
    theme: {
      accent: "#059669",
      border: "border-emerald-200/80",
      hoverBorder: "hover:border-emerald-600",
      pillBg: "bg-emerald-50",
      pillText: "text-emerald-700",
      buttonBg: "bg-emerald-600 hover:bg-emerald-700",
      cardBg: "from-white via-[#F0FAF5] to-white",
      badgeGlow: "bg-[#E7F7EE]",
      iconBg: "bg-emerald-600",
    },
    icon: ShieldCheck,
  },
];

interface FlyersSectionProps {
  id?: string;
  className?: string;
  showHeading?: boolean;
}

export default function FlyersSection({
  id = "official-flyers",
  className = "",
  showHeading = true,
}: FlyersSectionProps) {
  // Handler that opens PDF in a new window AND triggers auto-download
  const handleViewAndDownload = (fileUrl: string, fileName: string, title: string) => {
    const encodedUrl = encodeURI(fileUrl);

    // 1. Open in new window / tab for instant viewing
    try {
      window.open(encodedUrl, "_blank", "noopener,noreferrer");
    } catch (e) {
      console.warn("Popup blocked or window.open failed:", e);
    }

    // 2. Trigger auto-download via simulated anchor tag
    try {
      const link = document.createElement("a");
      link.href = encodedUrl;
      link.download = fileName;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success(`Opening & downloading: ${title}`, {
        description: "The flyer opened in a new tab and your download started.",
      });
    } catch (e) {
      console.error("Auto download failed:", e);
      toast.info(`Opened "${title}" in a new tab. Click the download icon in your browser viewer to save.`);
    }
  };

  return (
    <section id={id} className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {showHeading && (
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEFE6] border border-[#F65A36]/20 text-[#F65A36] text-xs sm:text-sm font-bold shadow-xs">
            <FileText className="w-3.5 h-3.5 text-[#F65A36]" />
            <span>Official Resource Center • Information Kits</span>
          </div>

          <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2040] tracking-tight leading-tight">
            Explore &amp; Download Our{" "}
            <span className="text-[#F65A36]">Official Flyers</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            Review detailed brochures covering our Montessori Day Care programs, preschool franchise model, and comprehensive 360° support frameworks. Click any flyer to view instantly in a new tab and auto-download.
          </p>
        </div>
      )}

      {/* 3 Interactive Flyer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {flyersData.map((flyer) => {
          const IconComp = flyer.icon;

          return (
            <motion.div
              key={flyer.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className={`relative rounded-3xl sm:rounded-[2.25rem] bg-gradient-to-b ${flyer.theme.cardBg} p-6 sm:p-7 border-2 ${flyer.theme.border} ${flyer.theme.hoverBorder} shadow-soft hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group`}
            >
              {/* Top ambient soft blur */}
              <div
                className={`absolute top-0 right-0 w-44 h-44 ${flyer.theme.badgeGlow} rounded-full blur-2xl pointer-events-none -z-10 group-hover:scale-125 transition-transform duration-500`}
              />

              <div>


                {/* Hero Illustration / Icon Presentation */}
                <div className="relative mb-5 p-5 rounded-2xl bg-white/95 border border-slate-100 shadow-sm flex items-center gap-3.5 group-hover:border-slate-200 transition-colors">
                  <div className={`w-12 h-12 rounded-2xl ${flyer.theme.iconBg} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-[10.5px] font-extrabold uppercase tracking-wider ${flyer.theme.pillText}`}>
                      {flyer.category}
                    </span>
                    <h3 className="font-outfit font-black text-lg sm:text-xl text-[#0F2040] leading-tight truncate">
                      {flyer.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                  {flyer.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Key Highlights Included:
                  </span>
                  <ul className="space-y-1.5">
                    {flyer.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[12px] font-semibold text-slate-700">
                        <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${flyer.theme.pillText}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100/90">
                {/* Primary Button: View & Auto-Download */}
                <button
                  type="button"
                  onClick={() => handleViewAndDownload(flyer.file, flyer.filename, flyer.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 ${flyer.theme.buttonBg} text-white text-xs sm:text-sm font-bold py-3 sm:py-3.5 px-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all focus:outline-none`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>View &amp; Download</span>
                  <ArrowDownToLine className="w-4 h-4 ml-0.5" />
                </button>

                {/* Secondary Quick Action Row */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  {/* View in New Tab */}
                  <a
                    href={encodeURI(flyer.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0F2040] text-[11px] font-bold border border-slate-200/80 shadow-2xs transition-all"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>View in Tab</span>
                    <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
                  </a>

                  {/* Direct Download */}
                  <a
                    href={encodeURI(flyer.file)}
                    download={flyer.filename}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 hover:text-[#0F2040] text-[11px] font-bold border border-slate-200/80 shadow-2xs transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-slate-500" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

