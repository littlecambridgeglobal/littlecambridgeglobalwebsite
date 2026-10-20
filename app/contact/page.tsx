"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  MessageCircle,
  Send,
  User,
  MessageSquare,
  Globe,
  Smartphone,
  Mail,
  ChevronRight,
  Sparkles,
  Phone,
  Clock,
  Heart
} from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you for reaching out! A campus mentor will connect with you shortly.");
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-slate-800 font-jakarta selection:bg-rose-100 selection:text-rose-900">

      {/* HEADER SECTION (Say Hello) */}
      <header className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-amber-50/40 to-[#FAF8F5]">
        {/* Ambient Pastel Glow */}
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-pastel-peach-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold mb-4 shadow-sm">
              <MessageCircle className="w-3.5 h-3.5 text-amber-700" />
              <span>Say Hello • Open Hearts & Warm Welcomes</span>
            </div>

            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-4">
              Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-rose-600">Hello.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-medium max-w-xl mx-auto leading-relaxed">
              Whether you have questions about learning pathways, campus visits, or partnership opportunities—we’d love to talk.
            </p>
          </motion.div>
        </div>
      </header>

      {/* =========================================
          SECTION 1: QUICK CONTACT CARDS
      ========================================= */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Visit */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-soft text-center hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-pastel-peach-100 rounded-2xl mx-auto flex items-center justify-center mb-5 text-pastel-peach-700">
              <MapPin className="w-7 h-7" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">Visit a Campus</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Campuses in Delhi NCR, Bangalore, Indore, & Vijayawada. Open for parent walks Mon–Sat.
            </p>
          </div>

          {/* Card 2: Call */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-soft text-center hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-pastel-sage-100 rounded-2xl mx-auto flex items-center justify-center mb-5 text-pastel-sage-700">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">Call Direct</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-2">
              Speak with a friendly admissions counselor:
            </p>
            <a href="tel:+917340655077" className="font-bold text-slate-900 hover:text-rose-600 transition-colors text-base">
              +91 734 065 5077
            </a>
          </div>

          {/* Card 3: Email */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/80 shadow-soft text-center hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 bg-pastel-lavender-100 rounded-2xl mx-auto flex items-center justify-center mb-5 text-pastel-lavender-700">
              <Mail className="w-7 h-7" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600 text-sm leading-relaxed font-medium mb-2">
              We respond promptly within 24 hours:
            </p>
            <a href="mailto:info@littlecambridgeglobal.com" className="font-bold text-slate-900 hover:text-rose-600 transition-colors text-base break-words">
              info@littlecambridgeglobal.com
            </a>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: MESSAGE FORM & WHATSAPP BENTO
      ========================================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Form (col-span-7) */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-12 border border-white shadow-soft">
            <div className="mb-8">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-pastel-sage-100 text-pastel-sage-800">
                Send a Note
              </span>
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Drop us a line
              </h2>
              <p className="text-slate-600 text-sm font-medium mt-1">
                Tell us a bit about your child or your inquiry, and we will be in touch.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-pastel-sage-50 border border-pastel-sage-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-pastel-sage-100 text-pastel-sage-800 mx-auto flex items-center justify-center font-bold">
                  ✓
                </div>
                <h3 className="font-outfit font-bold text-xl text-slate-900">Message Received!</h3>
                <p className="text-sm text-slate-600 font-medium">
                  Thank you for saying hello. A member of our family will connect with you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Your Name *</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Priya Sharma"
                      className="w-full bg-slate-50 border-2 border-slate-200/80 rounded-2xl py-3 px-4 text-sm font-medium text-slate-800 focus:outline-none focus:border-rose-400 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border-2 border-slate-200/80 rounded-2xl py-3 px-4 text-sm font-medium text-slate-800 focus:outline-none focus:border-rose-400 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Email Address *</label>
                    <input
                      required
                      type="email"
                      placeholder="you@domain.com"
                      className="w-full bg-slate-50 border-2 border-slate-200/80 rounded-2xl py-3 px-4 text-sm font-medium text-slate-800 focus:outline-none focus:border-rose-400 focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Nearest Campus</label>
                    <select className="w-full bg-slate-50 border-2 border-slate-200/80 rounded-2xl py-3 px-4 text-sm font-medium text-slate-800 focus:outline-none focus:border-rose-400 focus:bg-white transition-all cursor-pointer">
                      <option value="Delhi NCR">Delhi NCR (Pitampura & Janakpuri)</option>
                      <option value="Bangalore">Bangalore (Yelahanka New Town)</option>
                      <option value="Indore">Indore (Airport Road)</option>
                      <option value="Vijayawada">Vijayawada (Ashok Nagar)</option>
                      <option value="Franchise">Interested in Partnering</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">How can we help? *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us your child's age or any specific questions..."
                    className="w-full bg-slate-50 border-2 border-slate-200/80 rounded-2xl py-3 px-4 text-sm font-medium text-slate-800 focus:outline-none focus:border-rose-400 focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right WhatsApp & Quick Answers (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">

            {/* WhatsApp Quick Chat Card */}
            <div className="bg-gradient-to-br from-pastel-mint-50 via-white to-emerald-50 rounded-3xl p-8 border border-emerald-100 shadow-soft space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-outfit text-2xl font-bold text-slate-900 mb-2">
                  Prefer a Quick Chat?
                </h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">
                  Message our campus mentors directly on WhatsApp for immediate answers regarding availability, fee structure, and booking an in-person tour.
                </p>
              </div>

              <button
                onClick={() => window.open('https://wa.me/917340655077', '_blank')}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm flex items-center justify-center gap-2 text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 734 065 5077)</span>
              </button>

              <p className="text-[11px] text-slate-400 font-semibold text-center">
                *Active Mon–Sat, 8:30 AM to 6:30 PM
              </p>
            </div>

            {/* Safety & Culture Pill Card */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white shadow-soft space-y-4">
              <h4 className="font-outfit font-bold text-lg text-slate-900">
                What to Expect on Your Visit
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-pastel-sage-100 text-pastel-sage-800 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                  <span>Unrushed walk through the prepared Montessori discovery studios</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-pastel-peach-100 text-pastel-peach-800 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                  <span>Private consultation with our lead developmental educator</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-pastel-lavender-100 text-pastel-lavender-800 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">✓</span>
                  <span>Observation of real child-led learning in action</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}