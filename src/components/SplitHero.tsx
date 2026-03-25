"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShoppingBag, Truck } from "lucide-react";

export default function SplitHero() {
  const [hovered, setHovered] = useState<"retail" | "distribution" | null>(
    null
  );

  return (
    <section className="flex flex-col md:flex-row h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] overflow-hidden">
      {/* ── Retail Half ── */}
      <motion.div
        className="relative overflow-hidden cursor-pointer"
        initial={{ flexGrow: 1 }}
        animate={{
          flexGrow: hovered === "distribution" ? 0.65 : 1,
        }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => setHovered("retail")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/hero.jpg"
            alt="AAP Retail World"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/60 to-transparent" />
        </div>

        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-8 lg:p-14">
          <div className="hidden sm:block">
            <ShoppingBag className="text-gold mb-3" size={28} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3 border border-gold/30 px-3 py-1 rounded-full">
              Retail Division
            </span>
            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-black leading-none mb-3 sm:mb-5 font-montserrat">
              Our
              <br />
              <span className="gold-shimmer-text">Retail</span>
              <br />
              World
            </h1>
            <p className="text-white/75 text-xs sm:text-base lg:text-lg mb-4 sm:mb-8 max-w-xs leading-relaxed">
              7+ branches across Qatar serving communities with premium
              fresh produce and trusted everyday brands.
            </p>
            <Link
              href="/retail"
              className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-gold-light transition-all duration-200 shadow-lg hover:shadow-gold/30 group text-sm sm:text-base"
            >
              Explore Retail
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Gold Divider ── */}
      <div className="h-px w-full md:h-auto md:w-px bg-gradient-to-r md:bg-gradient-to-b from-gold/20 via-gold/60 to-gold/20 z-10 flex-shrink-0" />

      {/* ── Distribution Half ── */}
      <motion.div
        className="relative overflow-hidden cursor-pointer"
        initial={{ flexGrow: 1 }}
        animate={{
          flexGrow: hovered === "retail" ? 0.65 : 1,
        }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        onMouseEnter={() => setHovered("distribution")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/distribution-hero.jpg"
            alt="AAP Distribution"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-navy/85 via-navy/60 to-transparent" />
        </div>

        {/* Gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-l from-gold via-gold-light to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between items-end p-5 sm:p-8 lg:p-14">
          <div className="hidden sm:block">
            <Truck className="text-gold mb-3" size={28} />
          </div>
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3 border border-gold/30 px-3 py-1 rounded-full">
              Distribution Division
            </span>
            <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl xl:text-7xl font-black leading-none mb-3 sm:mb-5 font-montserrat">
              Global
              <br />
              <span className="gold-shimmer-text">Distribution</span>
              <br />
              Power
            </h1>
            <p className="text-white/75 text-xs sm:text-base lg:text-lg mb-4 sm:mb-8 max-w-xs leading-relaxed ml-auto">
              5+ distribution verticals powering FMCG supply chains across
              Qatar and the wider Gulf region.
            </p>
            <Link
              href="/distribution"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-gold hover:text-navy transition-all duration-200 group text-sm sm:text-base"
            >
              Explore Distribution
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
