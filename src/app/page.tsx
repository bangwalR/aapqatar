import SplitHero from "@/components/SplitHero";
import StatsCounter from "@/components/StatsCounter";
import BrandLogoGallery from "@/components/BrandLogoGallery";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShoppingBag, Truck, CheckCircle2, MapPin, Phone, Mail, Quote } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <SplitHero />

      {/* Stats */}
      <StatsCounter />

      {/* About — "Building Business Excellence Together" */}
      <section className="py-16 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image with stats overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1a2e5a]" />
              <Image
                src="/assets/hero/hero.jpg"
                alt="AAP Group team meeting"
                width={700}
                height={500}
                className="w-full h-[420px] object-cover"
              />
              {/* Stats badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-5 shadow-xl flex items-center justify-around gap-4">
                <div className="text-center">
                  <p className="text-[#D32F2F] text-2xl font-black font-montserrat">18+</p>
                  <p className="text-navy/60 text-xs font-medium">Years Experience</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-[#1a2e5a] text-2xl font-black font-montserrat">7+</p>
                  <p className="text-navy/60 text-xs font-medium">Retail Branches</p>
                </div>
                <div className="w-px h-10 bg-gray-200" />
                <div className="text-center">
                  <p className="text-[#D32F2F] text-2xl font-black font-montserrat">5+</p>
                  <p className="text-navy/60 text-xs font-medium">Distribution Verticals</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-navy text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat leading-tight mb-6">
                Building Business<br />Excellence Together
              </h2>
              <p className="text-navy/65 leading-relaxed mb-5">
                AAP Group of Companies stands as a beacon of business excellence in Qatar,
                operating across two dynamic divisions that serve communities and industries
                alike. Our Retail Division brings premium fresh produce and everyday
                essentials directly to consumers through 7+ strategically located branches.
              </p>
              <p className="text-navy/65 leading-relaxed mb-8">
                Meanwhile, our Distribution Division powers FMCG supply chains across Qatar
                and the wider Gulf region, connecting manufacturers with markets through 5+
                specialized verticals. Together, we create value, drive growth, and build
                lasting partnerships.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#D32F2F] font-bold hover:gap-3 transition-all group"
              >
                Learn Our Story <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services — "Comprehensive Business Solutions" */}
      <section id="services" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-navy text-3xl sm:text-4xl font-black font-montserrat mb-3">
              Comprehensive Business Solutions
            </h2>
            <p className="text-navy/55 max-w-xl mx-auto text-sm lg:text-base">
              Two specialized divisions working in harmony to deliver exceptional value across retail
              and distribution sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Retail */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="h-1.5 bg-[#D32F2F]" />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#D32F2F] rounded-full flex items-center justify-center shrink-0">
                    <ShoppingBag size={24} className="text-white" />
                  </div>
                  <h3 className="text-navy text-2xl font-bold font-montserrat">Retail Division</h3>
                </div>
                <p className="text-navy/65 text-sm leading-relaxed mb-6">
                  Our Retail Division operates 7+ branches across Qatar, serving
                  communities with premium fresh produce and trusted everyday
                  essentials. We bring quality products directly to consumers through
                  strategically located stores.
                </p>
                <ul className="space-y-2.5">
                  {["Premium fresh produce sourcing", "7+ branches across Qatar", "Community-focused service", "Quality assured products", "Competitive pricing strategy"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-navy/70 text-sm">
                      <CheckCircle2 size={15} className="text-[#D32F2F] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Distribution */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="h-1.5 bg-[#1a2e5a]" />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#1a2e5a] rounded-full flex items-center justify-center shrink-0">
                    <Truck size={24} className="text-white" />
                  </div>
                  <h3 className="text-navy text-2xl font-bold font-montserrat">Distribution Division</h3>
                </div>
                <p className="text-navy/65 text-sm leading-relaxed mb-6">
                  Powering FMCG supply chains across Qatar and the wider Gulf region
                  through 5+ specialized distribution verticals. We connect manufacturers
                  with markets efficiently and reliably.
                </p>
                <ul className="space-y-2.5">
                  {["5+ distribution verticals", "Gulf region coverage", "FMCG supply chain expertise", "Reliable logistics network", "Strategic market partnerships"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-navy/70 text-sm">
                      <CheckCircle2 size={15} className="text-[#1a2e5a] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logo Gallery */}
      <BrandLogoGallery />

      {/* Portfolio */}
      <section id="portfolio" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-[#D32F2F] text-xs font-semibold tracking-[0.25em] uppercase mb-3 border border-[#D32F2F]/30 px-3 py-1 rounded-full">
              Our Portfolio
            </span>
            <h2 className="text-navy text-3xl sm:text-4xl font-black font-montserrat mb-3">
              Featured Projects
            </h2>
            <p className="text-navy/55 max-w-xl mx-auto text-sm lg:text-base">
              Highlights from our retail and distribution sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { tag: "RETAIL",       title: "Fresh Market Expansion",   img: "/assets/stores/rmart-wakra.jpg" },
              { tag: "DISTRIBUTION", title: "Gulf Logistics Network",    img: "/assets/stores/rmart-mesaieed.jpg" },
              { tag: "RETAIL",       title: "Community Store Launch",    img: "/assets/stores/rmart-sheireb.jpg" },
              { tag: "DISTRIBUTION", title: "FMCG Partnership",          img: "/assets/stores/rmart-sanayya.jpg" },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: item.tag === "RETAIL" ? "#D32F2F" : "#1a2e5a" }}
                  >
                    {item.tag}
                  </p>
                  <h4 className="text-navy font-bold text-base font-montserrat">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1a2e5a]" />
              <Image
                src="/assets/hero/distribution-hero.jpg"
                alt="Client testimonial"
                width={600}
                height={500}
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Quote */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-[#D32F2F]" />
                <span className="text-navy/50 text-xs font-semibold uppercase tracking-widest">
                  Client Testimonials
                </span>
              </div>

              <Quote size={48} className="text-[#D32F2F]/20 mb-4" />

              <blockquote className="text-navy text-xl sm:text-2xl lg:text-3xl font-bold font-montserrat leading-snug mb-8">
                &ldquo;AAP Group has been instrumental in transforming
                our supply chain operations. Their distribution
                expertise and retail network have opened new
                markets for our products across the Gulf region.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div>
                  <p className="text-navy font-bold text-base">Mohammed Al-Rashid</p>
                  <p className="text-navy/55 text-sm">CEO, Gulf Food Industries</p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
                  <CheckCircle2 size={12} /> Verified Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 lg:py-24 bg-[#0C1B2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-white text-2xl sm:text-3xl font-black font-montserrat mb-2">
              Ready to partner with Qatar&apos;s leading retail and distribution group? Reach
              out to our team today.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Retail */}
            <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-8 w-1 h-14 bg-[#D32F2F]" />
              <div className="flex items-center gap-4 mb-6 pt-2">
                <div className="w-14 h-14 bg-[#D32F2F] rounded-full flex items-center justify-center shrink-0">
                  <ShoppingBag size={22} className="text-white" />
                </div>
                <h3 className="text-navy text-2xl font-bold font-montserrat">Retail Division</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <div className="flex items-start gap-2 text-navy/70 text-sm">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-navy/40" />
                    Al Sadd Street, Doha, Qatar
                  </div>
                </div>
                <div>
                  <p className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:97444643977" className="flex items-center gap-2 text-navy/70 text-sm hover:text-navy transition-colors">
                    <Phone size={14} className="text-navy/40" /> +974 44643977
                  </a>
                </div>
                <div>
                  <p className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:retail@aapqatar.com" className="flex items-center gap-2 text-navy/70 text-sm hover:text-navy transition-colors">
                    <Mail size={14} className="text-navy/40" /> retail@aapqatar.com
                  </a>
                </div>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold text-center py-4 rounded-full transition-colors"
              >
                Contact Retail Team
              </Link>
            </div>

            {/* Distribution */}
            <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-8 w-1 h-14 bg-[#1a2e5a]" />
              <div className="flex items-center gap-4 mb-6 pt-2">
                <div className="w-14 h-14 bg-[#1a2e5a] rounded-full flex items-center justify-center shrink-0">
                  <Truck size={22} className="text-white" />
                </div>
                <h3 className="text-navy text-2xl font-bold font-montserrat">Distribution Division</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-[#1a2e5a] text-xs font-bold uppercase tracking-widest mb-1">Location</p>
                  <div className="flex items-start gap-2 text-navy/70 text-sm">
                    <MapPin size={14} className="mt-0.5 shrink-0 text-navy/40" />
                    Industrial Area, Doha, Qatar
                  </div>
                </div>
                <div>
                  <p className="text-[#1a2e5a] text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:97444643977" className="flex items-center gap-2 text-navy/70 text-sm hover:text-navy transition-colors">
                    <Phone size={14} className="text-navy/40" /> +974 44643977
                  </a>
                </div>
                <div>
                  <p className="text-[#1a2e5a] text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:distribution@aapqatar.com" className="flex items-center gap-2 text-navy/70 text-sm hover:text-navy transition-colors">
                    <Mail size={14} className="text-navy/40" /> distribution@aapqatar.com
                  </a>
                </div>
              </div>
              <Link
                href="/distribution#inquiry"
                className="block w-full bg-[#1a2e5a] hover:bg-[#0C1B2E] text-white font-bold text-center py-4 rounded-full transition-colors"
              >
                Contact Distribution Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
