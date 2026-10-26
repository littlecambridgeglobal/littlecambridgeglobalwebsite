"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ChevronDown,
  Building2,
  Users,
  Heart,
  Clock,
  HelpCircle,
  Mail,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./HeroSlider";
import NurturingCarousel, { doodleTile, toDataUri } from "./NurturingCarousel";
import WhyChooseOurSchool from "./WhyChooseOurSchool";
import OurstorySection from "./OurstorySection"
import HomePrograms from "./HomePrograms";

// Campus Locations data
const campusLocations = [
  {
    city: "Delhi NCR",
    area: "Pitampura & Janakpuri",
    address: "B1/622, Pillar No. 575, Janakpuri, New Delhi - 110058",
    timing: "8:30 AM – 6:30 PM",
    status: "Accepting Walk-ins",
    phone: "+91 734 065 5077",
  },
  {
    city: "Bangalore",
    area: "Yelahanka New Town",
    address: "Rachana Towers, #2053/A, 1st Floor, 3rd Stage, Sector 'B', Bangalore - 560064",
    timing: "8:00 AM – 7:00 PM",
    status: "Admissions Open",
    phone: "+91 907 152 5966",
  },
  {
    city: "Indore",
    area: "Airport Road, HL Link City",
    address: "B Block - 601, Leeds Enclave, Airport Road, Indore, MP - 452005",
    timing: "9:00 AM – 6:00 PM",
    status: "New Campus Open",
    phone: "+91 734 065 5077",
  },
  {
    city: "Vijayawada",
    area: "Ashok Nagar, Kanuru",
    address: "D No. 14-11-219, Ashok Nagar, Kanuru, Vijayawada, AP - 520007",
    timing: "8:30 AM – 6:00 PM",
    status: "Admissions Open",
    phone: "+91 734 065 5077",
  },
];

// FAQs Data
const faqs = [
  {
    q: "How does child-led, adventure learning prepare my child for formal school?",
    a: "Rather than rote repetition, children at Little Cambridge build conceptual clarity, phonetic fluency, independent problem-solving, and emotional stamina. Studies prove self-directed Montessori graduates adapt faster, focus longer, and excel in formal primary school entrance assessments.",
  },
  {
    q: "What is your educator-to-child ratio and safety standard?",
    a: "We maintain an intimate 1:8 ratio for early toddlers and 1:12 for kindergarten. Every campus features high-definition CCTV coverage with parent-accessible live streams, child-proof fixtures, rounded corners, non-toxic materials, and certified pediatric first-aid trained educators.",
  },
  {
    q: "Can parents visit a campus before deciding to enroll?",
    a: "Absolutely! We warmly encourage campus walks. You will experience the prepared environment firsthand, meet our lead educators, observe student activities, and receive personalized developmental guidance tailored to your child.",
  },
  {
    q: "How does the 'Partner' model work for entrepreneurs?",
    a: "Our franchise partnership is designed as a turnkey early education model with 360° support: complete architectural blueprints, Montessori training academy, centralized curriculum, operational software, and national brand visibility.",
  },
  {
    q: "What nutrition and daycare support do you offer?",
    a: "Our full-day daycare options provide nutritious, balanced meals planned by pediatric nutritionists, dedicated peaceful rest suites, and creative enrichment activities when working parents need total peace of mind.",
  },
];

export default function BentoHomepage() {
  const [selectedCampusIndex, setSelectedCampusIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeCampus = campusLocations[selectedCampusIndex]!;

  return (
    <div className="w-full bg-[#FAF8F5] text-[#0F2040] overflow-x-hidden font-jakarta selection:bg-[#FFEFE6] selection:text-[#F65A36]">
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 1.5: NURTURING CARD CAROUSEL */}
      <NurturingCarousel />

      <HomePrograms />
      {/* SECTION: WHY CHOOSE OUR SCHOOL (Screenshot Redesign) */}
      <WhyChooseOurSchool />

      <OurstorySection />


      {/* SECTION: OUR PROGRAMS / CLASSES */}




      {/* =========================================================================
          SECTION 7: PARENT FAQS BENTO
          Featuring quirillookingcluless.png curious squirrel mascot!
      ========================================================================= */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (Col 4) - Mascot & Helpline */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#FFF5EE] via-white to-[#F0F8FF] rounded-3xl p-7 sm:p-8 border border-white shadow-soft flex flex-col justify-between text-center sm:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-[#0F2040] text-xs font-bold shadow-xs mb-4">
                <HelpCircle className="w-3.5 h-3.5 text-[#F65A36]" />
                <span>Parent Questions & Clarity</span>
              </div>

              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0F2040] tracking-tight">
                Curious Minds Have Questions.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-2 leading-relaxed">
                Everything you need to know about our Montessori-inspired philosophy, safety standards, and admissions.
              </p>
            </div>

            {/* Mascot Image - quirillookingcluless.png */}
            <div className="my-6 flex justify-center">
              <div className="relative w-48 h-48">
                <Image
                  src="/assests/quirillookingcluless.png"
                  alt="Curious Squirrel Mascot"
                  width={200}
                  height={200}
                  className="object-contain drop-shadow-md"
                />
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs text-left">
              <p className="text-xs font-bold text-[#0F2040] mb-0.5">
                Still have a specific question?
              </p>
              <p className="text-[11px] text-slate-500 mb-3 font-medium">
                Our counselors are happy to speak with you.
              </p>
              <a
                href="tel:+917340655077"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#0F2040] hover:bg-[#1a3464] text-white text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#F65A36]" />
                <span>Call +91 734 065 5077</span>
              </a>
            </div>
          </div>

          {/* Right Column (Col 8) - Accordion */}
          <div className="lg:col-span-8 space-y-4">
            <div className="mb-6">
              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#0F2040]">
                Frequently Asked Questions
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Click on any question to read detailed developmental insights.
              </p>
            </div>

            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 overflow-hidden ${isOpen
                    ? "bg-white border-[#F65A36]/40 shadow-sm"
                    : "bg-white/80 hover:bg-white border-slate-200/80 shadow-xs"
                    }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-outfit text-base sm:text-lg font-bold text-[#0F2040]">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen
                        ? "rotate-180 bg-[#0F2040] text-white"
                        : "bg-slate-100 text-slate-600"
                        }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
