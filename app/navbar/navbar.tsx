"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  ArrowRight,
  MapPin,
  HeartHandshake,
  MessageCircle,
  GraduationCap,
  BookOpen,
  Home,
  Phone,
  Mail,
  LayoutGrid,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logonew from "../../public/newlogo.png";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle ESC key when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // Action-oriented, welcoming terminology (Phase 2 IA)
  const navLinks = [
    {
      href: "/",
      label: "Home",
      icon: Home,
      pillColor: "hover:bg-pastel-sage-100 hover:text-pastel-sage-900",
      activeColor: "bg-pastel-sage-100 text-pastel-sage-900 font-bold",
      accentDot: "bg-pastel-sage-500",
    },
    {
      href: "/ourstory",
      label: "Our Story",
      badge: "The Vision",
      icon: BookOpen,
      pillColor: "hover:bg-pastel-lavender-100 hover:text-pastel-lavender-900",
      activeColor: "bg-pastel-lavender-100 text-pastel-lavender-900 font-bold",
      accentDot: "bg-pastel-lavender-500",
    },
    {
      href: "/#pathways",
      label: "Learning Pathways",
      badge: "Discover",
      icon: GraduationCap,
      pillColor: "hover:bg-pastel-peach-100 hover:text-pastel-peach-900",
      activeColor: "bg-pastel-peach-100 text-pastel-peach-900 font-bold",
      accentDot: "bg-pastel-peach-500",
    },
    {
      href: "/ourlocations",
      label: "Our Locations",
      badge: "Find a Campus",
      icon: MapPin,
      pillColor: "hover:bg-pastel-sky-100 hover:text-pastel-sky-900",
      activeColor: "bg-pastel-sky-100 text-pastel-sky-900 font-bold",
      accentDot: "bg-pastel-sky-500",
    },
    {
      href: "/partner",
      label: "Partner",
      badge: "Collaborate",
      icon: HeartHandshake,
      pillColor: "hover:bg-pastel-mint-100 hover:text-emerald-900",
      activeColor: "bg-pastel-mint-100 text-emerald-900 font-bold",
      accentDot: "bg-emerald-500",
    },
    {
      href: "/contact",
      label: "Say Hello",
      icon: MessageCircle,
      pillColor: "hover:bg-amber-100/70 hover:text-amber-900",
      activeColor: "bg-amber-100/70 text-amber-900 font-bold",
      accentDot: "bg-amber-500",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top contact strip (collapses on scroll) */}
      <div
        className={`pointer-events-auto bg-[#0F2040] text-white overflow-hidden transition-all duration-300 ${scrolled ? "max-h-0" : "max-h-12"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-9 flex items-center justify-between text-[11px] sm:text-xs font-medium">
          <span className="hidden md:flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#F65A36]" />
            Delhi NCR • Bangalore • Indore • Vijayawada
          </span>
          <div className="flex items-center gap-4 sm:gap-6 w-full md:w-auto justify-between md:justify-end">
            <a
              href="tel:+917340655077"
              className="flex items-center gap-2 hover:text-[#FF8E7A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F65A36]" />
              +91 734 065 5077
            </a>
            <a
              href="mailto:info@littlecambridgeglobal.com"
              className="flex items-center gap-2 hover:text-[#FF8E7A] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F65A36]" />
              <span className="truncate">info@littlecambridgeglobal.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav
        className={`pointer-events-auto py-2 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_6px_20px_-8px_rgba(15,32,64,0.25)]" : "shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[68px] sm:h-[80px] flex items-center justify-between gap-3 sm:gap-4">
          {/* Brand Logo + Text */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 py-20 transition-transform duration-300 group-hover:scale-105 shrink-0">
              <Image
                src={logonew}
                alt="Little Cambridge Global"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-outfit font-black text-[15px] sm:text-[18px] lg:text-[21px] text-[#0F2040] leading-tight tracking-tight group-hover:text-[#F65A36] transition-colors">
                Little Cambridge Global
              </span>
              <span className="font-jakarta text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#F65A36] mt-0.5">
                Preschool | Daycare | Smart Lab
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: colorful icon bubble above label */}
          <div className="hidden lg:flex items-start gap-2.5 xl:gap-5">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href === "/#pathways" && pathname === "/Programs");
              const IconComponent = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col items-center gap-1.5 w-[88px] xl:w-[98px] text-center"
                >
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md ${isActive
                      ? "bg-[#0F2040]"
                      : "bg-[#F65A36] group-hover:bg-[#E84A26]"
                      }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </span>
                  <span
                    className={`text-[12px] xl:text-[13px] font-semibold leading-tight transition-colors ${isActive
                      ? "text-[#F65A36]"
                      : "text-slate-900 group-hover:text-[#F65A36]"
                      }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right: Apply Now + Mobile Drawer button */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link href="/admission" className="hidden sm:inline-flex">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#F65A36] hover:bg-[#E84A26] text-white font-bold text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_8px_16px_-8px_rgba(246,90,54,0.8)] transition-colors"
              >
                Apply Now
              </motion.button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-2xl text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <LayoutGrid className="w-7 h-7 text-[#0F2040]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-in Side Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0F2040]/60 backdrop-blur-sm z-50 pointer-events-auto"
              aria-hidden="true"
            />

            {/* Side Drawer Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[86%] max-w-[380px] h-full bg-white z-50 pointer-events-auto flex flex-col shadow-2xl border-l border-slate-100 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Drawer"
            >
              {/* Drawer Top Bar */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-100 bg-[#FBFBFE]">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="relative w-9 h-9 shrink-0">
                    <Image
                      src={logonew}
                      alt="Little Cambridge Global"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-outfit font-black text-[15px] text-[#0F2040] leading-tight">
                      Little Cambridge
                    </span>
                    <span className="font-jakarta text-[9.5px] font-extrabold uppercase tracking-[0.2em] text-[#F65A36]">
                      Global
                    </span>
                  </div>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors focus:outline-none"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Links Content */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                {/* Brand Tagline Banner */}
                <div className="px-3.5 py-2.5 rounded-2xl bg-gradient-to-r from-pastel-peach-50 to-orange-50 border border-pastel-peach-200/60 flex items-center justify-between text-xs font-semibold text-pastel-peach-900">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F65A36]" />
                    Curious Minds Welcome
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F65A36] bg-white/80 px-2 py-0.5 rounded-full border border-pastel-peach-200">
                    Ages 1–6
                  </span>
                </div>

                {/* Nav Links List */}
                <div className="space-y-1.5">
                  {navLinks.map((link) => {
                    const isActive =
                      pathname === link.href ||
                      (link.href === "/#pathways" && pathname === "/Programs");
                    const IconComponent = link.icon;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`group flex items-center justify-between px-3.5 py-3 rounded-2xl transition-all ${isActive
                          ? "bg-[#0F2040] text-white shadow-sm"
                          : "text-slate-700 hover:bg-slate-50"
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isActive
                              ? "bg-[#F65A36] text-white shadow-sm"
                              : "bg-slate-100 text-slate-600 group-hover:bg-[#F65A36]/10 group-hover:text-[#F65A36]"
                              }`}
                          >
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col text-left">
                            <span
                              className={`text-sm font-bold leading-tight ${isActive
                                ? "text-white"
                                : "text-slate-800 group-hover:text-[#F65A36]"
                                }`}
                            >
                              {link.label}
                            </span>
                            {link.badge && (
                              <span
                                className={`text-[10px] font-medium leading-none mt-0.5 ${isActive ? "text-slate-300" : "text-slate-400"
                                  }`}
                              >
                                {link.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        <ChevronRight
                          className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isActive ? "text-[#F65A36]" : "text-slate-300"
                            }`}
                        />
                      </Link>
                    );
                  })}
                </div>

                {/* Direct CTA */}
                <div className="pt-2">
                  <Link
                    href="/admission"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block"
                  >
                    <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#F65A36] to-[#E84A26] hover:from-[#E84A26] hover:to-[#D43D1A] text-white font-bold py-3.5 px-4 rounded-2xl shadow-[0_8px_20px_-6px_rgba(246,90,54,0.6)] text-sm transition-all active:scale-[0.99]">
                      <span>Apply Now (Start the Journey)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>

                {/* Helpline & Quick Contact Card */}
                <div className="rounded-2xl bg-slate-50 border border-slate-100 p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">
                      Admissions Helpline
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Open Mon–Sat
                    </span>
                  </div>

                  <a
                    href="tel:+917340655077"
                    className="flex items-center gap-2.5 text-slate-800 hover:text-[#F65A36] font-bold text-sm transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#F65A36]">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <span>+91 734 065 5077</span>
                  </a>

                  <a
                    href="mailto:info@littlecambridgeglobal.com"
                    className="flex items-center gap-2.5 text-slate-600 hover:text-[#F65A36] text-xs font-medium transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#F65A36]">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    <span className="truncate">info@littlecambridgeglobal.com</span>
                  </a>
                </div>

                {/* Footprint text */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium px-1 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#F65A36] shrink-0" />
                  <span className="truncate">Delhi NCR • Bangalore • Indore • Vijayawada</span>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;