"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";

export default function SplitHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #1a1a4e 0%, #2d1b69 20%, #6b2d6b 45%, #c0392b 70%, #e74c3c 85%, #c0392b 100%)" }}
      />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top left, rgba(255,255,255,0.08) 0%, transparent 60%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-40 pb-20">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
          <span className="inline-block border border-white/40 text-white/90 text-xs font-semibold tracking-[0.25em] uppercase px-5 py-2 rounded-full bg-white/5">
            Trusted Business Partner Since 2005
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
          <h1 className="font-black font-montserrat leading-tight mb-6">
            <span className="block text-white text-3xl sm:text-5xl lg:text-6xl">DRIVING EXCELLENCE</span>
            <span
              className="block text-3xl sm:text-5xl lg:text-6xl"
              style={{ background: "linear-gradient(90deg, #e88c8c 0%, #d4a0d4 50%, #8cb4e8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >ACROSS INDUSTRIES</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-white/75 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
          Leading Qatar&apos;s retail and distribution landscape with innovation, quality, and commitment to excellence.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/retail" className="inline-flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl text-sm sm:text-base group">
            Explore Retail <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/distribution" className="inline-flex items-center justify-center gap-2 bg-[#1a2e5a] hover:bg-[#0C1B2E] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 shadow-xl border border-white/20 text-sm sm:text-base group">
            Explore Distribution <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} className="mt-16 flex flex-col items-center gap-1 text-white/50">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
