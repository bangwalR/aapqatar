import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const retailBrands = [
  { name: "New Indian Supermarket", href: "/retail" },
  { name: "Retailmart", href: "/retail" },
];

const distributionEntities = [
  { name: "Al Ansari & Partners Trading", href: "/distribution" },
  { name: "Aroma International", href: "/distribution" },
  { name: "French Avenue Perfumes", href: "/distribution" },
  { name: "New Indian Packing Centre", href: "/distribution" },
  { name: "Al Naadij Trading", href: "/distribution" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/assets/logos/logo-aap-main.jpeg"
                alt="AAP Group"
                width={614}
                height={76}
                className="h-14 w-52 sm:h-16 sm:w-64 object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Qatar&apos;s trusted name in retail and distribution. Serving
              communities and businesses since our founding.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                <span>1st Floor, Retailmart Al Wakra Building, Doha, Qatar</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                <a href="tel:97444643977" className="hover:text-gold transition-colors">+974 44643977</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold shrink-0" />
                <a href="mailto:info@aapqatar.com" className="hover:text-gold transition-colors">info@aapqatar.com</a>
              </div>
            </div>
          </div>

          {/* Retail */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-widest mb-5">
              Retail Division
            </h4>
            <ul className="flex flex-col gap-3">
              {retailBrands.map((b) => (
                <li key={b.name}>
                  <Link
                    href={b.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/retail#store-locations"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Store Locations
                </Link>
              </li>
              <li>
                <Link
                  href="/retail#coming-soon"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Opening Soon
                </Link>
              </li>
            </ul>
          </div>

          {/* Distribution */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-widest mb-5">
              Distribution
            </h4>
            <ul className="flex flex-col gap-3">
              {distributionEntities.map((e) => (
                <li key={e.name}>
                  <Link
                    href={e.href}
                    className="text-white/60 hover:text-gold text-sm transition-colors"
                  >
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  About AAP Group
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/distribution#inquiry"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  B2B Inquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/loyalty"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Alyoumi Loyalty
                </Link>
              </li>
              <li>
                <a
                  href="https://aapqatar.nadij.qa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-gold text-sm transition-colors flex items-center gap-1"
                >
                  AAP Qatar Portal <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  About AAP Group
                </Link>
              </li>
              <li>
                <Link
                  href="/distribution#inquiry"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <Link
                href="/distribution#inquiry"
                className="inline-flex items-center gap-2 bg-gold text-white font-semibold text-sm px-4 py-2.5 rounded hover:bg-gold-light transition-colors w-full justify-center"
              >
                B2B Inquiry Form
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Al Ansari & Partners Group. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-white/70 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <p>Doha, Qatar &bull; aapqatar.nadij.qa</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
