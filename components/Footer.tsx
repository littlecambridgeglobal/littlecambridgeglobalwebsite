"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, Facebook, Instagram, Linkedin, Youtube, MapPin } from "lucide-react";
import logonew from "../public/newlogo.jpeg";
import { doodleTile, toDataUri } from "./NurturingCarousel";

const footerPattern = toDataUri(doodleTile("rgba(15,32,64,0.10)"));

const SocialIcon = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={href}
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F65A36] text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E84A26] hover:shadow-md"
  >
    {icon}
  </a>
);

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "/ourstory" },
  { name: "Learning Pathways", href: "/#pathways" },
  { name: "Our Locations", href: "/ourlocations" },
  { name: "Partner With Us", href: "/partner" },
];

const exploreLinks = [
  { name: "Contact", href: "/contact" },
  { name: "Admission", href: "/admission" },
  { name: "Find a Campus", href: "/ourlocations" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const linkClass = "text-sm font-medium text-[#0F2040]/85 transition-colors hover:text-white";

const Footer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => { });
    }
  }, []);

  return (
    <footer
      className="relative py-20 overflow-hidden bg-[#5DB6E0] font-jakarta text-[#0F2040]"
      style={{ backgroundImage: footerPattern, backgroundSize: "260px 260px" }}
    >
      {/* Background Giraffe Video Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          style={{ objectFit: "fill" }}
          className="absolute inset-0 h-full w-full object-fill opacity-40 mix-blend-multiply"
        >
          <source src="/assests/girafeemovingirafeefooter.mp4" type="video/mp4" />
          <source src="/assets/girafeemovingirafeefooter.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-8 pt-14 lg:px-8 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 rounded-2xl bg-white/95 px-3.5 py-2 shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-10 w-10 shrink-0">
                <Image src={logonew} alt="Little Cambridge Global Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-outfit font-black text-[15px] sm:text-base text-[#0F2040] leading-tight group-hover:text-[#F65A36] transition-colors">
                  Little Cambridge
                </span>
                <span className="font-jakarta text-[9.5px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#F65A36]">
                  Global
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm font-medium leading-relaxed">
              At Little Cambridge Global, we believe early years are the foundation of a child&apos;s future.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon
                href="https://www.facebook.com/profile.php?id=61594729036944"
                icon={<Facebook className="h-4 w-4" />}
                label="Facebook"
              />
              <SocialIcon
                href="https://www.instagram.com/littlecambridgeglobalpreschool?psln=Nm4ycXUwcmpnemFs"
                icon={<Instagram className="h-4 w-4" />}
                label="Instagram"
              />
              <SocialIcon
                href="https://www.linkedin.com/company/little-cambridge-global-preschool-day-care/"
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
              />
              <SocialIcon
                href="https://www.youtube.com/@LittleDreamersAtCambridge"
                icon={<Youtube className="h-4 w-4" />}
                label="YouTube"
              />
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" className="lg:col-span-2">
            <h3 className="font-outfit text-lg font-bold">Quick links</h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className={linkClass}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Explore */}
          <nav aria-label="Explore" className="lg:col-span-2">
            <h3 className="font-outfit text-lg font-bold">Explore</h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className={linkClass}>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="font-outfit text-lg font-bold">Contact Us</h3>
            <ul className="mt-5 space-y-4 text-sm font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#F65A36]" />
                <span>
                  <strong className="font-bold">Corporate office:</strong>
                  <br />
                  Ganesh nagar delhi  &amp; , Delhi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#F65A36]" />
                <a href="tel:+917340655077" className="transition-colors hover:text-white">
                  +91 734 065 5077
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#F65A36]" />
                <a href="mailto:info@littlecambridgeglobal.com" className="break-all transition-colors hover:text-white">
                  info@littlecambridgeglobal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wavy orange divider */}
      <svg aria-hidden className="relative z-10 block h-3 w-full" viewBox="0 0 1440 12" preserveAspectRatio="none" fill="none">
        <path
          d="M0 6 Q 20 0 40 6 T 80 6 T 120 6 T 160 6 T 200 6 T 240 6 T 280 6 T 320 6 T 360 6 T 400 6 T 440 6 T 480 6 T 520 6 T 560 6 T 600 6 T 640 6 T 680 6 T 720 6 T 760 6 T 800 6 T 840 6 T 880 6 T 920 6 T 960 6 T 1000 6 T 1040 6 T 1080 6 T 1120 6 T 1160 6 T 1200 6 T 1240 6 T 1280 6 T 1320 6 T 1360 6 T 1400 6 T 1440 6"
          stroke="#F65A36"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <p className="relative z-10 py-5 text-center text-xs font-medium">
        Copyright by ©{new Date().getFullYear()} Little Cambridge Global. Crafted for curious young minds.
      </p>
    </footer>
  );
};

export default Footer;