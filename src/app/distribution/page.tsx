import Image from "next/image";
import Link from "next/link";
import B2BForm from "@/components/B2BForm";
import {
  ChevronRight,
  Package,
  Sparkles,
  Factory,
  BarChart3,
  Globe,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";

const entities = [
  {
    id: "al-ansari-trading",
    name: "Al Ansari & Partners Trading",
    tagline: "General Trading Powerhouse",
    description:
      "The cornerstone of AAP Group's distribution arm. Al Ansari & Partners Trading deals in a broad spectrum of FMCG categories, acting as the primary sourcing and wholesale partner for Qatar's retail sector. With years of deep market knowledge, we connect global brands with local shelves efficiently and reliably.",
    icon: Package,
    features: [
      "Multi-category FMCG trading",
      "Direct brand partnerships",
      "Qatar-wide distribution reach",
      "End-to-end supply chain management",
    ],
    accent: "bg-navy",
    textColor: "text-white",
    subTextColor: "text-white/65",
    iconBg: "bg-gold/20",
    iconColor: "text-gold",
    featureColor: "text-white/75",
    featureDot: "bg-gold",
  },
  {
    id: "aroma-french-avenue",
    name: "Aroma International & French Avenue Perfumes",
    tagline: "Luxury FMCG & Fragrance Distribution",
    description:
      "A premium distribution vertical dedicated to luxury fragrances and high-end FMCG products. French Avenue Perfumes curates an exclusive portfolio of international perfume brands, while Aroma International handles premium personal care and lifestyle FMCG across Qatar's most discerning retail outlets.",
    icon: Sparkles,
    features: [
      "Exclusive luxury fragrance distribution",
      "Premium personal care FMCG",
      "Retail boutique partnerships",
      "Tailored brand presentation & merchandising",
    ],
    accent: "bg-cream",
    textColor: "text-navy",
    subTextColor: "text-navy/65",
    iconBg: "bg-gold/15",
    iconColor: "text-gold-dark",
    featureColor: "text-navy/70",
    featureDot: "bg-gold",
  },
  {
    id: "new-indian-packing",
    name: "New Indian Packing Centre",
    tagline: "Hygiene, Quality & Supply Chain Excellence",
    description:
      "A state-of-the-art packing and repackaging facility ensuring that products meet the highest standards of hygiene and presentation before reaching the consumer. The New Indian Packing Centre is a critical link in Qatar's FMCG supply chain, serving both retail and institutional clients.",
    icon: Factory,
    features: [
      "Certified hygienic packing facility",
      "Custom repackaging for local market compliance",
      "Bulk-to-retail portion processing",
      "Cold chain compatible operations",
    ],
    accent: "bg-navy",
    textColor: "text-white",
    subTextColor: "text-white/65",
    iconBg: "bg-gold/20",
    iconColor: "text-gold",
    featureColor: "text-white/75",
    featureDot: "bg-gold",
  },
  {
    id: "al-naadij-trading",
    name: "Al Naadij Trading",
    tagline: "Market Penetration & Logistics",
    description:
      "Al Naadij Trading specialises in market penetration strategies, bringing emerging and established brands deeper into Qatar's diverse consumer market. Leveraging AAP's extensive retail network and logistics infrastructure, Al Naadij ensures maximum shelf presence and distribution velocity for partner brands.",
    icon: BarChart3,
    features: [
      "Strategic market entry support",
      "Last-mile logistics solutions",
      "Retail shelf placement optimisation",
      "Sales & distribution analytics",
    ],
    accent: "bg-cream",
    textColor: "text-navy",
    subTextColor: "text-navy/65",
    iconBg: "bg-gold/15",
    iconColor: "text-gold-dark",
    featureColor: "text-navy/70",
    featureDot: "bg-gold",
  },
];

const whyAap = [
  {
    icon: Globe,
    title: "Qatar-Wide Reach",
    desc: "Distribution network spanning Doha, industrial zones, and suburban communities.",
  },
  {
    icon: TrendingUp,
    title: "Proven Track Record",
    desc: "15+ years of reliable FMCG distribution with measurable growth for partner brands.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Ready",
    desc: "All operations are fully compliant with Qatar's import, food safety, and trading regulations.",
  },
  {
    icon: Zap,
    title: "Speed to Market",
    desc: "Established cold-chain and warm logistics ensure rapid product availability across all locations.",
  },
];

export default function DistributionPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/distribution-hero.jpg"
            alt="AAP Distribution"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-14 w-full">
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3 border border-gold/30 px-3 py-1 rounded-full">
            Distribution Division
          </span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-black font-montserrat leading-tight">
            Global Distribution
            <br />
            <span className="gold-shimmer-text">Power</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-lg mt-2 sm:mt-3 max-w-2xl">
            5 specialised distribution entities covering FMCG, luxury fragrances,
            packing, and logistics across Qatar and beyond.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-navy/50">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="text-navy font-medium">Distribution Division</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-navy text-xl sm:text-2xl lg:text-3xl font-bold font-montserrat mb-4 max-w-3xl mx-auto">
            Five Specialised Verticals. One Powerful Distribution Network.
          </h2>
          <p className="text-navy/60 max-w-3xl mx-auto leading-relaxed">
            AAP Group&apos;s distribution arm comprises five dedicated entities,
            each mastering a different segment of Qatar&apos;s FMCG and trading
            landscape. Together they form a comprehensive, end-to-end supply
            chain partner for both local businesses and international brands
            entering the Qatari market.
          </p>
        </div>
      </section>

      {/* ── ENTITY SECTIONS ── */}
      {entities.map((entity, index) => {
        const Icon = entity.icon;
        const isEven = index % 2 === 0;
        return (
          <section
            key={entity.id}
            id={entity.id}
            className={`py-16 lg:py-20 ${entity.accent} border-b border-black/5`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? "lg:grid-flow-col" : ""
                }`}
              >
                {/* Icon / Visual block */}
                <div className={`${!isEven ? "lg:order-2" : ""}`}>
                  <div
                    className={`rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-6 ${
                      isEven
                        ? "bg-white/10 border border-white/15"
                        : "bg-navy/5 border border-navy/10"
                    }`}
                    style={{ minHeight: "300px" }}
                  >
                    <div className={`p-4 sm:p-5 rounded-2xl ${entity.iconBg}`}>
                      <Icon size={36} className={`sm:!w-12 sm:!h-12 ${entity.iconColor}`} />
                    </div>
                    <div>
                      <p
                        className={`text-xs font-semibold uppercase tracking-widest mb-2 ${
                          isEven ? "text-gold/70" : "text-gold-dark/70"
                        }`}
                      >
                        Distribution Entity
                      </p>
                      <h3
                        className={`text-xl font-black font-montserrat ${entity.textColor}`}
                      >
                        {entity.name}
                      </h3>
                    </div>
                    <Link
                      href="#inquiry"
                      className={`inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded transition-all ${
                        isEven
                          ? "bg-gold text-navy hover:bg-gold-light"
                          : "bg-navy text-white hover:bg-navy-light"
                      }`}
                    >
                      Partner With Us <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Text */}
                <div className={`${!isEven ? "lg:order-1" : ""}`}>
                  <span
                    className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-3 border px-3 py-1 rounded-full ${
                      isEven
                        ? "text-gold border-gold/30"
                        : "text-gold-dark border-gold-dark/30"
                    }`}
                  >
                    {entity.tagline}
                  </span>
                  <h2
                    className={`text-xl sm:text-2xl lg:text-3xl font-black font-montserrat mb-4 leading-tight ${entity.textColor}`}
                  >
                    {entity.name}
                  </h2>
                  <p className={`leading-relaxed mb-7 ${entity.subTextColor}`}>
                    {entity.description}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {entity.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-3 text-sm ${entity.featureColor}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${entity.featureDot}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why AAP */}
      <section className="py-14 lg:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-3 border border-gold/30 px-3 py-1 rounded-full">
              Why Choose AAP
            </span>
            <h2 className="text-white text-2xl sm:text-3xl font-black font-montserrat">
              The AAP Distribution Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyAap.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-navy-light rounded-xl p-7 border border-gold/10 hover:border-gold/30 transition-colors group"
                >
                  <div className="p-3 bg-gold/10 rounded-xl w-fit mb-5">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h4 className="text-white font-bold text-base mb-2 font-montserrat">
                    {item.title}
                  </h4>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── B2B INQUIRY FORM ── */}
      <section id="inquiry" className="py-14 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 border border-gold/30 px-3 py-1 rounded-full">
                B2B Partnership
              </span>
              <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-black font-montserrat leading-tight mb-5">
                Start a Business
                <br />
                <span className="gold-shimmer-text">Conversation</span>
              </h2>
              <p className="text-navy/65 leading-relaxed mb-7">
                Whether you&apos;re a brand looking to enter Qatar&apos;s
                market, a supplier seeking distribution, or a business
                requiring logistics support — AAP Group has the right vertical
                for you.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <Globe size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">
                      International Brands
                    </p>
                    <p className="text-navy/55 text-xs">
                      Looking to enter Qatar? We are your gateway.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <Package size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">
                      Local Suppliers
                    </p>
                    <p className="text-navy/55 text-xs">
                      Partner with our retail & distribution network.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="p-2 bg-gold/10 rounded-lg">
                    <TrendingUp size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-navy font-semibold text-sm">
                      Growth Partners
                    </p>
                    <p className="text-navy/55 text-xs">
                      Scale your brand across Qatar with AAP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-navy text-xl font-bold font-montserrat mb-1">
                Submit Your Inquiry
              </h3>
              <p className="text-navy/50 text-sm mb-7">
                Fill in the form and our team will reach out within 24 business
                hours.
              </p>
              <B2BForm />
            </div>
          </div>
        </div>
      </section>

      {/* Brand showcase footer strip */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-navy font-bold font-montserrat text-lg mb-1">
                Visit Our Retail Network
              </p>
              <p className="text-navy/55 text-sm">
                7+ Retailmart branches across Qatar serving your community.
              </p>
            </div>
            <Link
              href="/retail"
              className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-6 py-3 rounded hover:bg-gold-light transition-colors whitespace-nowrap"
            >
              View Retail Stores <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
