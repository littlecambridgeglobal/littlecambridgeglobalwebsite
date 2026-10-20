"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Compass,
  Sparkles,
  MapPin,
  HeartHandshake,
  MessageCircle,
  GraduationCap,
  BookOpen,
  Home
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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 sm:pt-4">
        {/* Floating Soft Glassmorphism Pill */}
        <nav
          className={`pointer-events-auto w-full transition-all duration-300 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between
            ${scrolled
              ? "bg-white/85 backdrop-blur-md border border-white/70 shadow-soft shadow-slate-900/5 py-2"
              : "bg-white/75 backdrop-blur-md border border-white/60 shadow-soft"
            }
          `}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-[140px] sm:w-[170px] md:w-[290px] h-[48px] sm:h-[44px] transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={logonew}
                alt="Little Cambridge Global"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === "/#pathways" && pathname === "/Programs");
              const isHovered = hoveredLink === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={`relative px-3.5 py-2 rounded-full text-[13px] xl:text-[14px] font-semibold transition-all duration-200 flex items-center gap-1.5
                    ${isActive
                      ? link.activeColor
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/80"
                    }
                  `}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className={`w-1.5 h-1.5 rounded-full ${link.accentDot} animate-pulse`} />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action: Join Us (Formerly Admission / Enroll) + Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <Link href="/admission" className="hidden sm:inline-flex">
              <motion.button
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-pastel-peach-500 via-rose-500 to-rose-600 text-white font-bold text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-2.5 rounded-full shadow-sm hover:shadow-soft transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Join Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full" />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100/80 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

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
                  Questions? Call <a href="tel:+919071525966" className="text-slate-600 font-bold hover:underline">+91 90715 25966</a>
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