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
  LayoutGrid
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logonew from "../../public/newlogo.jpeg";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="fixed  top-0 left-0 right-0 z-50 pointer-events-none">
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
            <a href="tel:+917340655077" className="flex items-center gap-2 hover:text-[#FF8E7A] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#F65A36]" />
              +91 734 065 5077
            </a>
            <a href="mailto:info@littlecambridgeglobal.com" className="flex items-center gap-2 hover:text-[#FF8E7A] transition-colors">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[68px] sm:h-[80px] flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div className="relative w-[150px] sm:w-[200px] xl:w-[260px] h-[48px] sm:h-[56px] transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={logonew}
                alt="Little Cambridge Global"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation: orange icon bubble above label */}
          <div className="hidden lg:flex items-start gap-5 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === "/#pathways" && pathname === "/Programs");
              const IconComponent = link.icon;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col items-center gap-1.5 w-[104px] text-center"
                >
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md ${isActive ? "bg-[#0F2040]" : "bg-[#F65A36] group-hover:bg-[#E84A26]"
                      }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </span>
                  <span
                    className={`text-[12px] xl:text-[13px] font-semibold leading-tight transition-colors ${isActive ? "text-[#F65A36]" : "text-slate-900 group-hover:text-[#F65A36]"
                      }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right: Apply Now + grid menu button */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/admission" className="hidden sm:inline-flex">
              <motion.button
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#F65A36] hover:bg-[#E84A26] text-white font-bold text-sm px-6 py-3 rounded-full shadow-[0_8px_16px_-8px_rgba(246,90,54,0.8)] transition-colors"
              >
                Apply Now
              </motion.button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <LayoutGrid className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Glassmorphic Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden pointer-events-auto max-w-7xl mx-auto px-4 sm:px-6 pt-2"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-white/80 rounded-3xl p-5 shadow-soft-lg flex flex-col gap-1.5">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Navigation
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pastel-sage-100 text-pastel-sage-700">
                  Curious Minds Welcome
                </span>
              </div>

              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const IconComponent = link.icon;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all
                      ${isActive
                        ? `${link.activeColor}`
                        : "text-slate-700 hover:bg-slate-50"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-100/80 flex items-center justify-center text-slate-600">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span>{link.label}</span>
                    </div>
                    {link.badge && (
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-white/80 text-slate-500 border border-slate-100">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="/admission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full"
                >
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pastel-peach-500 to-rose-600 text-white font-bold py-3.5 rounded-2xl shadow-sm text-sm">
                    Join Us (Start the Journey)
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>

                <p className="text-center text-xs text-slate-400 font-medium pt-1">
                  Questions? Call <a href="tel:+917340655077" className="text-slate-600 font-bold hover:underline">+91 734 065 5077</a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;