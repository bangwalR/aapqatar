import SplitHero from "@/components/SplitHero";
import StatsCounter from "@/components/StatsCounter";
import BrandLogoGallery from "@/components/BrandLogoGallery";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShoppingBag, Truck, Award, Globe, Star, ShieldCheck, Heart, Target, Eye } from "lucide-react";

const divisionCards = [
  {
    icon: ShoppingBag,
    title: "Retail Division",
    desc: "New Indian Supermarket & 7-branch Retailmart network bringing premium quality FMCG to Qatari communities.",
    href: "/retail",
    cta: "View Retail",
    accent: "bg-gradient-to-br from-navy to-navy-light",
  },
  {
    icon: Truck,
    title: "Distribution Division",
    desc: "5 specialised trading & distribution entities covering FMCG, perfumes, packaging, and general trading across Qatar.",
    href: "/distribution",
    cta: "View Distribution",
    accent: "bg-gradient-to-br from-gold-dark to-gold",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Split Hero */}
      <SplitHero />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Services Section */}
      <section className="py-14 lg:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-3 border border-gold/30 px-3 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="text-white text-2xl sm:text-3xl font-black font-montserrat mb-3">Our Services</h2>
            <p className="text-white/55 max-w-xl mx-auto text-sm">
              From daily groceries to global FMCG distribution — AAP Group covers every aspect of Qatar&apos;s retail and supply chain landscape.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: ShoppingBag, label: "Grocery Store",     desc: "Daily essentials across all branches" },
              { icon: Star,        label: "Consumer Goods",    desc: "Wide range of FMCG categories" },
              { icon: ShieldCheck, label: "Frozen Foods",      desc: "Fresh frozen assortment" },
              { icon: Heart,       label: "Cosmetics",         desc: "Beauty & personal care" },
              { icon: Truck,       label: "FMCG Distribution", desc: "End-to-end supply chain" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="bg-navy-light rounded-xl p-5 border border-gold/10 hover:border-gold/30 transition-colors group text-center">
                  <div className="p-2.5 bg-gold/10 rounded-xl w-fit mb-3 mx-auto group-hover:bg-gold/20 transition-colors">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h4 className="text-white font-bold text-sm font-montserrat mb-1">{s.label}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission / Vision strip */}
      <section className="py-12 bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Target, title: "Mission",          desc: "To cater to our residents with unparalleled value and customer service — the guiding light of our 48+ year journey." },
              { icon: Eye,    title: "Vision",           desc: "To provide exceptional value and customer service through our wide range of high-quality products and services." },
              { icon: Heart,  title: "Values",           desc: "Customer-first thinking, transparency, quality assurance, and community commitment at every level." },
              { icon: ShieldCheck, title: "Quality",    desc: "We source supplies via air and sea freight to ensure the highest standards of freshness and quality for 15,000+ daily customers." },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group">
                  <div className="p-2.5 bg-gold/10 rounded-xl w-fit mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-navy font-bold text-base font-montserrat mb-2">{p.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About AAP */}
      <section className="py-14 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Text */}
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 border border-gold/30 px-3 py-1 rounded-full">
                Who We Are
              </span>
              <h2 className="text-navy text-2xl sm:text-3xl lg:text-5xl font-black font-montserrat leading-tight mb-5">
                Qatar&apos;s Dual-Engine
                <br />
                <span className="gold-shimmer-text">Business Group</span>
              </h2>
              <p className="text-navy/65 leading-relaxed mb-6">
                Al Ansari & Partners (AAP) Group is a Doha-headquartered
                conglomerate with two powerful divisions operating in synergy.
                Our retail arm serves everyday consumers across Qatar, while our
                distribution division powers the supply chains of leading FMCG
                brands throughout the Gulf.
              </p>
              <p className="text-navy/65 leading-relaxed mb-8">
                With 7+ retail locations, 5+ distribution verticals, and a
                portfolio of 20+ trusted brands, AAP Group is the behind-the-
                scenes force keeping Qatar&apos;s retail shelves stocked and
                businesses supplied.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/retail"
                  className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold px-6 py-3 rounded hover:bg-navy-light transition-colors group"
                >
                  Our Retail World
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/distribution"
                  className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-semibold px-6 py-3 rounded hover:bg-navy hover:text-white transition-colors group"
                >
                  Distribution Network
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-5">
              {divisionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group relative overflow-hidden rounded-2xl p-7 hover:scale-[1.02] transition-transform duration-300"
                    style={{
                      background:
                        card.title === "Retail Division"
                          ? "linear-gradient(135deg, #0C1B2E 0%, #152C4A 100%)"
                          : "linear-gradient(135deg, #B71C1C 0%, #D32F2F 100%)",
                    }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-white/15 rounded-xl">
                        <Icon
                          size={24}
                          className={
                            card.title === "Retail Division"
                              ? "text-gold"
                              : "text-white"
                          }
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-bold text-lg mb-2 font-montserrat ${
                            card.title === "Retail Division"
                              ? "text-white"
                              : "text-white"
                          }`}
                        >
                          {card.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed mb-4 ${
                            card.title === "Retail Division"
                              ? "text-white/70"
                              : "text-white/70"
                          }`}
                        >
                          {card.desc}
                        </p>
                        <span
                          className={`inline-flex items-center gap-1 text-sm font-semibold ${
                            card.title === "Retail Division"
                              ? "text-gold"
                              : "text-white"
                          }`}
                        >
                          {card.cta}{" "}
                          <ChevronRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Logo Gallery */}
      <BrandLogoGallery />

      {/* Awards / Trust Strip */}
      <section className="py-14 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold font-montserrat mb-2">
                Ready to Partner with AAP?
              </h3>
              <p className="text-white/60">
                Join Qatar&apos;s most trusted distribution and retail network.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/distribution#inquiry"
                className="flex items-center gap-2 bg-gold text-white font-bold px-7 py-3.5 rounded hover:bg-gold-light transition-colors shadow-lg"
              >
                <Globe size={16} />
                B2B Inquiry
              </Link>
              <Link
                href="/retail"
                className="flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded hover:border-gold hover:text-gold transition-colors"
              >
                <Award size={16} />
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FLV Brand Section */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center text-center sm:text-left">
            <div className="relative w-32 h-20">
              <Image
                src="/assets/logos/logo-flv.png"
                alt="FLV Brand"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center sm:text-left max-w-lg">
              <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
                Featured Brand
              </p>
              <h3 className="text-navy text-xl font-bold font-montserrat mb-2">
                French Avenue & Aroma International
              </h3>
              <p className="text-navy/60 text-sm">
                Luxury fragrances and premium FMCG distributed exclusively
                across Qatar through our specialised distribution vertical.
              </p>
            </div>
            <Link
              href="/distribution"
              className="shrink-0 bg-navy text-white font-semibold px-5 py-2.5 rounded hover:bg-navy-light transition-colors text-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
