import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Target,
  Eye,
  Heart,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Star,
  Users,
  Award,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About AAP Group | Al Ansari & Partners — Qatar",
  description:
    "Established in 1972 in Al Bidda, Doha, AAP Group has grown from a small neighbourhood store to Qatar's leading retail and distribution conglomerate with 48+ years of excellence.",
};

const milestones = [
  {
    year: "1972",
    title: "Founded in Al Bidda",
    desc: "Al Ansari Group opens its first small neighbourhood store in Al Bidda, Doha — the beginning of Qatar's supermarket industry.",
  },
  {
    year: "1990s",
    title: "Retail Expansion",
    desc: "Growth into multiple supermarket formats, establishing New Indian Supermarket at Old Airport as a flagship brand serving Qatar's diverse communities.",
  },
  {
    year: "2000s",
    title: "Distribution Arm Formed",
    desc: "Launch of Al Ansari & Partners Trading, Aroma International, and associated entities to build a full FMCG import and distribution network.",
  },
  {
    year: "2010s",
    title: "Retailmart Network",
    desc: "Rapid expansion of the Retailmart hypermarket chain across key Qatar communities — Mesaieed, Al Wakra, Sheireb, Sanayya, and more.",
  },
  {
    year: "Today",
    title: "AAP Group of Companies",
    desc: "A leading Doha-headquartered conglomerate with 7+ Retailmart branches, 5+ distribution verticals, 20+ brands, and over 15,000 customers served daily.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Mission",
    desc: "To cater to our residents with unparalleled value and customer service — the guiding light of our journey of growth and expansion across Qatar.",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "To provide exceptional value and customer service to the residents of Qatar through our wide range of high-quality products and services.",
  },
  {
    icon: Heart,
    title: "Values",
    desc: "Customer-first thinking, transparency, quality assurance, and community commitment drive every decision we make at AAP Group.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "We source most of our supplies through air and sea freight, ensuring that our products consistently meet the highest standards of freshness and quality.",
  },
];

const divisions = [
  {
    icon: ShoppingBag,
    title: "New Indian Supermarket",
    subtitle: "Flagship Retail Brand",
    desc: "Our flagship store located in Old Airport, Qatar, offering a diverse range of products — from fresh South Asian produce to household essentials. A Doha institution serving the city's diverse community with authentic quality.",
    href: "/retail",
    cta: "View Retail",
    dark: true,
  },
  {
    icon: ShoppingBag,
    title: "Retailmart",
    subtitle: "Hypermarket Network",
    desc: "Seven well-equipped Retailmart hypermarket outlets strategically located across Qatar's key communities including Mesaieed, Al Wakra, Sheireb, Madinath Khalifa and Sanayya — providing everyday essentials to over 15,000 customers daily.",
    href: "/retail",
    cta: "View Stores",
    dark: false,
  },
  {
    icon: Truck,
    title: "Imports & Distribution",
    subtitle: "5 Specialist Verticals",
    desc: "Our imports division comprises Al Ansari Partners Trading Company, Aroma International, French Avenue Perfumes, New Indian Packing Centre, and Al Naadij Trading — specialising in sourcing and importing food and non-food items from around the world.",
    href: "/distribution",
    cta: "View Distribution",
    dark: true,
  },
];

const services = [
  { icon: ShoppingBag, title: "Grocery Store", desc: "A one-stop destination for all your daily essentials across our Retailmart and New Indian Supermarket locations." },
  { icon: Star,        title: "Consumer Goods", desc: "Our supermarkets are stocked with a diverse selection of consumer goods catering to every aspect of daily life." },
  { icon: ShieldCheck, title: "Frozen Foods", desc: "A vast assortment of frozen delights sourced from trusted international and regional suppliers." },
  { icon: Heart,       title: "Cosmetics", desc: "Beauty and personal care products available across our stores, with premium lines through our French Avenue and Aroma verticals." },
  { icon: Globe,       title: "Retail & Wholesale", desc: "A complete retail and B2B wholesale experience — from individual shoppers to business supply chain partners." },
  { icon: Truck,       title: "FMCG Distribution", desc: "End-to-end distribution services for international brands entering the Qatar market through our five specialist verticals." },
];

const stats = [
  { icon: Users,  value: "15,000+", label: "Customers Per Day"     },
  { icon: Award,  value: "48+",     label: "Years of Excellence"    },
  { icon: ShoppingBag, value: "7+", label: "Retail Branches"       },
  { icon: Truck,  value: "5+",      label: "Distribution Verticals" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 sm:py-28 overflow-hidden relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 border border-gold/30 px-3 py-1 rounded-full">
            Our Story
          </span>
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-black font-montserrat leading-tight mb-5 max-w-3xl">
            48+ Years of Quality<br />
            <span className="gold-shimmer-text">and Service in Qatar</span>
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            Established in 1972 in Al Bidda, Doha, Al Ansari &amp; Partners (AAP) Group
            has grown from a small neighbourhood store into Qatar&apos;s leading retail
            and distribution conglomerate — pioneering the supermarket industry
            in Qatar for nearly five decades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/retail" className="inline-flex items-center gap-2 bg-gold text-white font-bold px-6 py-3 rounded hover:bg-gold-light transition-colors shadow-lg group">
              Our Retail World <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/distribution" className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-6 py-3 rounded hover:border-gold hover:text-gold transition-colors group">
              Distribution Network <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-navy/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-navy font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex items-center gap-3">
                  <div className="p-2.5 bg-gold/10 rounded-xl shrink-0">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-navy font-black text-xl font-montserrat leading-none">{s.value}</p>
                    <p className="text-navy/50 text-xs mt-0.5">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full history */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 border border-gold/30 px-3 py-1 rounded-full">
                Our History
              </span>
              <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-black font-montserrat mb-5 leading-tight">
                Pioneers of Qatar&apos;s<br />
                <span className="gold-shimmer-text">Supermarket Industry</span>
              </h2>
              <p className="text-navy/65 leading-relaxed mb-5">
                Established in 1972 in Al Bidda, Doha — Qatar, the Al Ansari Group has
                a rich history spanning over 48 years. What started as a small
                neighbourhood store has evolved into a leading conglomerate of companies
                with a commitment to delivering exceptional value and customer service.
              </p>
              <p className="text-navy/65 leading-relaxed mb-5">
                We take pride in our roots as the pioneers of the supermarket industry in
                Qatar, and we continue to uphold our founding vision with an even wider
                reach and enhanced services. Today, we operate seven well-equipped Retail
                Mart hypermarket outlets and our flagship New Indian Supermarket,
                conveniently located in Old Airport, Qatar.
              </p>
              <p className="text-navy/65 leading-relaxed">
                With over 15,000 customers per day, quality is at the core of our
                business. We meticulously source most of our supplies through air and sea
                freight, ensuring that our products consistently meet the highest standards
                of freshness and excellence.
              </p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0 z-10">
                      <span className="text-white text-xs font-bold">
                        {i === milestones.length - 1 ? "★" : (i + 1)}
                      </span>
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-gold/25 my-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-gold text-xs font-bold tracking-widest uppercase">{m.year}</span>
                    <h3 className="text-navy font-bold text-base font-montserrat mt-0.5 mb-1">{m.title}</h3>
                    <p className="text-navy/55 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-3 border border-gold/30 px-3 py-1 rounded-full">
              What Drives Us
            </span>
            <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-black font-montserrat">
              Mission, Vision &amp; Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="p-3 bg-gold/10 rounded-xl w-fit mb-5 group-hover:bg-gold/20 transition-colors">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-navy font-bold text-lg font-montserrat mb-3">{p.title}</h3>
                  <p className="text-navy/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Divisions */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-3 border border-gold/30 px-3 py-1 rounded-full">
              Our Divisions
            </span>
            <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-black font-montserrat mb-3">
              Two Engines. One Group.
            </h2>
            <p className="text-navy/60 max-w-xl mx-auto text-sm lg:text-base">
              AAP Group operates through two powerful and synergistic divisions — Retail and Distribution — each serving a distinct but complementary role in Qatar&apos;s economy.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            {divisions.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.title}
                  className="rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                  style={{
                    background: d.dark
                      ? "linear-gradient(135deg, #0C1B2E 0%, #152C4A 100%)"
                      : "linear-gradient(135deg, #F5F7FF 0%, #EEF2FF 100%)",
                    border: d.dark ? "1px solid rgba(200,68,0,0.2)" : "1px solid #E2E8F0",
                  }}
                >
                  <div className={`p-4 rounded-2xl shrink-0 ${d.dark ? "bg-gold/15" : "bg-navy/5"}`}>
                    <Icon size={28} className={d.dark ? "text-gold" : "text-navy"} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${d.dark ? "text-gold/70" : "text-navy/50"}`}>{d.subtitle}</p>
                    <h3 className={`font-bold text-xl font-montserrat mb-2 ${d.dark ? "text-white" : "text-navy"}`}>{d.title}</h3>
                    <p className={`text-sm leading-relaxed max-w-2xl ${d.dark ? "text-white/65" : "text-navy/65"}`}>{d.desc}</p>
                  </div>
                  <Link
                    href={d.href}
                    className={`shrink-0 inline-flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded transition-colors group whitespace-nowrap ${d.dark ? "bg-gold text-white hover:bg-gold-light" : "bg-navy text-white hover:bg-navy-light"}`}
                  >
                    {d.cta} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-3 border border-gold/30 px-3 py-1 rounded-full">
              What We Offer
            </span>
            <h2 className="text-white text-2xl sm:text-3xl font-black font-montserrat mb-3">Our Services</h2>
            <p className="text-white/55 max-w-xl mx-auto text-sm">
              From fresh groceries to global FMCG distribution — AAP Group covers every aspect of Qatar&apos;s retail and supply chain landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-navy-light rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-colors group">
                  <div className="p-2.5 bg-gold/10 rounded-xl w-fit mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h4 className="text-white font-bold text-base font-montserrat mb-2">{s.title}</h4>
                  <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logo / Image */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="relative w-48 h-16">
              <Image src="/assets/logos/logo-aap.png" alt="AAP Group" fill className="object-contain" />
            </div>
            <div className="text-center sm:text-left max-w-lg">
              <h3 className="text-navy text-xl font-bold font-montserrat mb-2">Join Our Journey</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                Join us as we continue to serve the people of Qatar with dedication, quality, and innovation.
                Our customers are at the heart of everything we do.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gold text-white font-bold px-5 py-3 rounded hover:bg-gold-light transition-colors">
                Contact Us
              </Link>
              <Link href="/distribution#inquiry" className="inline-flex items-center gap-2 border-2 border-navy text-navy font-semibold px-5 py-3 rounded hover:bg-navy hover:text-white transition-colors">
                B2B Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
