"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Loyalty", href: "/loyalty" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY > 10 && mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-navy/95 backdrop-blur-md shadow-xl" : "bg-transparent"
    }`}>
      {/* Top info bar — visible only after scroll */}
      <div className={`hidden md:block border-b border-white/10 transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none h-0 overflow-hidden"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8">
            <div className="flex items-center gap-6">
              <a href="tel:97444643977" className="flex items-center gap-1.5 text-white/55 hover:text-gold transition-colors text-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +974 44643977
              </a>
              <a href="mailto:info@aapqatar.com" className="flex items-center gap-1.5 text-white/55 hover:text-gold transition-colors text-xs">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,12 2,6"></polyline></svg>
                info@aapqatar.com
              </a>
            </div>
            <span className="text-white/35 text-xs">Established 1972 &bull; Doha, Qatar</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`transition-colors duration-500 ${scrolled ? "border-b border-white/10" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
              <Image
                src="/assets/logos/logo.png"
                alt="AAP Group"
                width={614}
                height={76}
                className="h-16 w-56 sm:h-20 sm:w-72 md:h-24 md:w-80 object-contain"
                priority
              />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/75 hover:text-gold transition-colors text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/retail"
              className="flex items-center gap-1 bg-[#D32F2F] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#B71C1C] transition-all duration-200 shadow-md"
            >
              Retail Division
            </Link>
            <Link
              href="/distribution"
              className="flex items-center gap-1 bg-[#1a2e5a] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-[#0C1B2E] transition-all duration-200 shadow-md"
            >
              Distribution Division
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-dark border-t border-gold/20 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-gold hover:bg-white/5 transition-colors font-medium py-3 px-3 rounded-lg min-h-[48px] flex items-center"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/retail"
                className="bg-[#D32F2F] text-white px-5 py-3.5 rounded-full font-semibold text-sm text-center mt-3 min-h-[48px] flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Retail Division
              </Link>
              <Link
                href="/distribution"
                className="bg-[#1a2e5a] text-white px-5 py-3.5 rounded-full font-semibold text-sm text-center mt-2 min-h-[48px] flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Distribution Division
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
