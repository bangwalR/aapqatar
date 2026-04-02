"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Retail Division", href: "/retail" },
  { label: "Distribution", href: "/distribution" },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${scrolled ? "bg-navy shadow-xl border-gold/20" : "bg-navy/95 backdrop-blur-md border-gold/20 shadow-lg"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0" onClick={() => setMobileOpen(false)}>
            <div className="bg-white rounded-xl px-3 py-2 shadow-md hover:shadow-gold/20 transition-shadow">
              <Image
                src="/assets/logos/logo-aap.png"
                alt="AAP Group"
                width={614}
                height={76}
                className="h-8 sm:h-10 w-auto object-contain"
                style={{ width: "auto" }}
                priority
              />
            </div>
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
              href="/distribution#inquiry"
              className="flex items-center gap-1 bg-gold text-white px-5 py-2.5 rounded font-semibold text-sm hover:bg-gold-light transition-all duration-200 shadow-md hover:shadow-gold/30"
            >
              Get In Touch <ChevronRight size={14} />
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
                href="/distribution#inquiry"
                className="bg-gold text-white px-5 py-3.5 rounded-lg font-semibold text-sm text-center mt-3 min-h-[48px] flex items-center justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
