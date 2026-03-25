import SplitHero from "@/components/SplitHero";
import StatsCounter from "@/components/StatsCounter";
import BrandLogoGallery from "@/components/BrandLogoGallery";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ShoppingBag, Truck, Award, Globe } from "lucide-react";

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
                          ? "linear-gradient(135deg, #0A1F44 0%, #122952 100%)"
                          : "linear-gradient(135deg, #A8863A 0%, #C9A84C 100%)",
                    }}
                  >
                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-white/15 rounded-xl">
                        <Icon
                          size={24}
                          className={
                            card.title === "Retail Division"
                              ? "text-gold"
                              : "text-navy"
                          }
                        />
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-bold text-lg mb-2 font-montserrat ${
                            card.title === "Retail Division"
                              ? "text-white"
                              : "text-navy"
                          }`}
                        >
                          {card.title}
                        </h3>
                        <p
                          className={`text-sm leading-relaxed mb-4 ${
                            card.title === "Retail Division"
                              ? "text-white/70"
                              : "text-navy/70"
                          }`}
                        >
                          {card.desc}
                        </p>
                        <span
                          className={`inline-flex items-center gap-1 text-sm font-semibold ${
                            card.title === "Retail Division"
                              ? "text-gold"
                              : "text-navy"
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
                className="flex items-center gap-2 bg-gold text-navy font-bold px-7 py-3.5 rounded hover:bg-gold-light transition-colors shadow-lg"
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
