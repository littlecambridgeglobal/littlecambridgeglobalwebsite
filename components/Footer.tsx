"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Send,
  Heart,
  ArrowRight,
  Youtube,
  Globe,
  Sparkles,
  MapPin,
  Compass,
  Linkedin
} from "lucide-react";
import logo from "../public/logo.png";
import logonew from "../public/newlogo.jpeg";

const SocialIcon = ({
  href,
  icon,
  label,
  bgClass
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  bgClass: string;
}) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    aria-label={label}
    className={`w-10 h-10 rounded-2xl ${bgClass} text-white flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-soft transition-all duration-200`}
  >
    {icon}
  </a>
);

const Footer = () => {
  return (
    <footer className="relative bg-[#FAF8F5] pt-20 pb-12 overflow-hidden border-t border-slate-200/60 font-jakarta">
      {/* Ambient Pastel Background Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-pastel-lavender-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-pastel-sage-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Main Footer Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-16">

          {/* 1. Brand Card (col-span-5) */}
          <div className="lg:col-span-5 bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-soft space-y-6">
            <Link href="/" className="inline-block group">
              <div className="relative w-[180px] sm:w-[210px] h-[46px] transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={logonew}
                  alt="Little Cambridge Global Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <strong className="text-slate-800 font-bold">Igniting Curious Minds.</strong> A modern space where early learning feels like an adventure. Watch them discover their world with milestone-driven learning pathways and passionate mentors.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61594729036944"
                icon={<Facebook className="w-4 h-4" />}
                label="Facebook"
                bgClass="bg-[#1877F2]"
              />
              <SocialIcon
                href="https://www.instagram.com/littlecambridgeglobalpreschool?psln=Nm4ycXUwcmpnemFs"
                icon={<Instagram className="w-4 h-4" />}
                label="Instagram"
                bgClass="bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#d6249f]"
              />
              <SocialIcon
                href="https://www.linkedin.com/company/little-cambridge-global-preschool-day-care/"
                icon={<Linkedin className="w-4 h-4" />}
                label="LinkedIn"
                bgClass="bg-[#0A66C2]"
              />
              <SocialIcon
                href="https://www.youtube.com/@LittleDreamersAtCambridge"
                icon={<Youtube className="w-4 h-4" />}
                label="YouTube"
                bgClass="bg-[#FF0000]"
              />
            </div>
          </div>

          {/* 2. Navigation & Pathways (col-span-3) */}
          <div className="lg:col-span-3 bg-white/70 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-soft">
            <div className="flex items-center gap-2 mb-6">
              <Compass className="w-4 h-4 text-pastel-sage-700" />
              <h3 className="text-slate-800 font-outfit text-lg font-bold tracking-tight">
                Explore
              </h3>
            </div>
            <ul className="space-y-3 text-sm font-semibold">
              {[
                { name: 'Home', href: '/' },
                { name: 'Our Story (The Vision)', href: '/ourstory' },
                { name: 'Learning Pathways', href: '/#pathways' },
                { name: 'Our Locations (Campuses)', href: '/ourlocations' },
                { name: 'Partner With Us', href: '/partner' },
                { name: 'Say Hello', href: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between text-slate-600 hover:text-slate-900 transition-colors py-0.5"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pastel-peach-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Say Hello / Get in Touch (col-span-4) */}
          <div className="lg:col-span-4 bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-soft space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-800 font-outfit text-lg font-bold tracking-tight">
                Say Hello
              </h3>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-pastel-peach-100 text-pastel-peach-700">
                Campuses Across India
              </span>
            </div>

            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-pastel-sky-100 text-pastel-sky-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Hub</p>
                  <p className="font-semibold text-slate-700 leading-snug">
                    Rachana Towers, Yelahanka New Town, Bangalore & Pitampura, Delhi
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pastel-sage-100 text-pastel-sage-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Helpline</p>
                  <a href="tel:+919071525966" className="font-bold text-slate-700 hover:text-rose-600 transition-colors">
                    +91 90715 25966
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pastel-lavender-100 text-pastel-lavender-700 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</p>
                  <a href="mailto:info@littlecambridgeglobal.com" className="font-bold text-slate-700 hover:text-rose-600 transition-colors">
                    info@littlecambridgeglobal.com
                  </a>
                </div>
              </li>
            </ul>

            <Link href="/admission" className="block pt-2">
              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-5 rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow-soft">
                <span>Start the Journey (Join Us)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
          <p>© {new Date().getFullYear()} Little Cambridge Global. Crafted for curious young minds.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-800 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-800 transition-colors">Terms of Service</Link>
            <Link href="/ourlocations" className="hover:text-slate-800 transition-colors">Find a Campus</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;