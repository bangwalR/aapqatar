import Image from "next/image";
import Link from "next/link";
import BrandLogoGallery from "@/components/BrandLogoGallery";
import {
  MapPin,
  Clock,
  ChevronRight,
  Star,
  ShoppingCart,
  Leaf,
  Award,
} from "lucide-react";

const stores = [
  {
    name: "Retailmart Madinath Khalifa",
    location: "Madinath Khalifa, Doha",
    image: "/assets/stores/rmart-madinath-khalifa.jpg",
    hours: "7:00 AM – 11:00 PM",
    features: ["Fresh Produce", "Bakery", "Butchery"],
  },
  {
    name: "Retailmart Mesaieed",
    location: "Mesaieed Industrial City",
    image: "/assets/stores/rmart-mesaieed.jpg",
    hours: "7:00 AM – 11:00 PM",
    features: ["Grocery", "Fresh Dairy", "Deli"],
  },
  {
    name: "Retailmart Wakra",
    location: "Al Wakra, Doha",
    image: "/assets/stores/rmart-wakra.jpg",
    hours: "7:00 AM – 11:00 PM",
    features: ["Fresh Produce", "Organic Range", "Bulk Goods"],
  },
  {
    name: "Retailmart Wakra 2",
    location: "Al Wakra South, Doha",
    image: "/assets/stores/rmart-wakra-2.jpg",
    hours: "7:00 AM – 11:00 PM",
    features: ["Family Shopping", "Fresh Meat", "Bakery"],
  },
  {
    name: "Retailmart Sheireb",
    location: "Msheireb Downtown, Doha",
    image: "/assets/stores/rmart-sheireb.jpg",
    hours: "8:00 AM – 12:00 AM",
    features: ["Premium Range", "Import Goods", "Café Corner"],
  },
  {
    name: "Retailmart Sanayya",
    location: "Industrial Area, Doha",
    image: "/assets/stores/rmart-sanayya.jpg",
    hours: "7:00 AM – 11:00 PM",
    features: ["Bulk Buying", "Business Packs", "Fresh Produce"],
  },
];

const nismHighlights = [
  { icon: Leaf, text: "Premium fresh organic produce sourced daily" },
  { icon: Star, text: "Authentic Indian groceries & spices" },
  { icon: ShoppingCart, text: "Wide range of South Asian FMCG brands" },
  { icon: Award, text: "Heritage quality trusted since establishment" },
];

export default function RetailPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative h-[45vh] sm:h-[55vh] min-h-[300px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/hero/hero.jpg"
            alt="AAP Retail World"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{background: 'linear-gradient(160deg, rgba(183,28,28,0.95) 0%, rgba(211,47,47,0.88) 40%, rgba(229,57,53,0.80) 100%)'}} />
        </div>
        {/* Red accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white/40 via-white/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-14 w-full">
          <span className="inline-block text-white/90 text-xs font-semibold tracking-[0.2em] uppercase mb-2 sm:mb-3 border border-white/30 px-3 py-1 rounded-full">
            Retail Division
          </span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-6xl font-black font-montserrat leading-tight">
            Our Retail World
          </h1>
          <p className="text-white/85 text-sm sm:text-lg mt-2 sm:mt-3 max-w-2xl">
            7+ branches bringing premium quality groceries, fresh produce, and
            trusted brands to communities across Qatar.
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
            <span className="text-navy font-medium">Retail Division</span>
          </div>
        </div>
      </div>

      {/* ── NEW INDIAN SUPERMARKET ── */}
      <section className="py-14 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative h-60 sm:h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/logos/nism.jpg"
                  alt="New Indian Supermarket"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold text-white font-black text-sm px-5 py-3 rounded-xl shadow-lg">
                Est. Heritage Brand
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-4 border border-gold/30 px-3 py-1 rounded-full">
                Featured Retail Brand
              </span>
              <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-black font-montserrat leading-tight mb-4">
                New Indian
                <br />
                <span className="gold-shimmer-text">Supermarket</span>
              </h2>
              <p className="text-navy/65 leading-relaxed mb-6">
                The New Indian Supermarket is a Doha institution — a curated
                grocery experience bringing the finest South Asian produce,
                spices, and FMCG brands to Qatar&apos;s diverse community. Each
                product is selected with care to honour authentic flavours and
                premium quality.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {nismHighlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="p-2 bg-gold/10 rounded-lg">
                        <Icon size={16} className="text-gold" />
                      </div>
                      <span className="text-navy/75 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 text-sm text-navy/50">
                <MapPin size={14} className="text-gold" />
                <span>Doha, Qatar — 1 Flagship Location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RETAILMART NETWORK ── */}
      <section id="store-locations" className="py-14 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-10 lg:mb-14">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 border border-gold/30 px-3 py-1 rounded-full">
              Our Store Network
            </span>
            <h2 className="text-navy text-2xl sm:text-3xl lg:text-4xl font-black font-montserrat mb-3">
              Retailmart — 6 Active Branches
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto">
              Strategically located across Qatar&apos;s key communities, each
              Retailmart branch is stocked with fresh produce, international
              brands, and everyday essentials.
            </p>
          </div>

          {/* Store grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <div
                key={store.name}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={store.image}
                    alt={store.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      Open Now
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-navy font-bold text-base mb-2 font-montserrat">
                    {store.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-navy/50 text-xs mb-1.5">
                    <MapPin size={12} className="text-gold" />
                    <span>{store.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-navy/50 text-xs mb-4">
                    <Clock size={12} className="text-gold" />
                    <span>{store.hours}</span>
                  </div>
                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {store.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs bg-cream text-navy/60 px-2.5 py-1 rounded-full border border-gray-200"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMING SOON — 7th BRANCH ── */}
      <section id="coming-soon" className="py-14 lg:py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-10">
            <span className="inline-block text-gold text-xs font-semibold tracking-[0.2em] uppercase mb-3 border border-gold/30 px-3 py-1 rounded-full">
              Branch 7 — Work In Progress
            </span>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-black font-montserrat mb-3">
              Opening Soon Across Qatar
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              AAP Group is expanding. Our 7th Retailmart branch is under
              construction and will serve a new community with the same premium
              quality experience.
            </p>
          </div>

          {/* Opening Soon visual */}
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <div className="relative h-56">
              <Image
                src="/assets/misc/opening-soon.jpg"
                alt="Opening Soon"
                fill
                className="object-contain py-4"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy/30 to-navy/70" />
            </div>
          </div>

          {/* Progress tracker */}
          <div className="bg-navy-light rounded-2xl p-8 border border-gold/20">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white font-semibold text-sm">
                Construction Progress
              </span>
              <span className="text-gold font-bold text-sm">75%</span>
            </div>
            <div className="relative h-3 bg-navy-dark rounded-full overflow-hidden mb-6">
              <div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                style={{ width: "75%" }}
              />
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Site Prep", done: true },
                { label: "Construction", done: true },
                { label: "Fit-Out", done: false },
              ].map((step) => (
                <div key={step.label} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                      step.done
                        ? "bg-gold text-white"
                        : "bg-navy-dark text-white/40 border border-white/20"
                    }`}
                  >
                    {step.done ? "✓" : "●"}
                  </div>
                  <span className="text-white/60 text-xs">{step.label}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-white/50 text-xs mt-6">
              Target opening: Q3 2026 — Stay tuned for the grand opening
              announcement.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Gallery */}
      <BrandLogoGallery />

      {/* CTA */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-navy text-2xl font-bold font-montserrat mb-3">
            Interested in Our Distribution Network?
          </h3>
          <p className="text-navy/60 mb-6 max-w-xl mx-auto text-sm">
            Our retail strength is backed by a powerful distribution arm. If
            you&apos;re a brand or supplier looking to enter Qatar&apos;s
            market, we&apos;d love to hear from you.
          </p>
          <Link
            href="/distribution#inquiry"
            className="inline-flex items-center gap-2 bg-gold text-white font-bold px-7 py-3.5 rounded hover:bg-gold-light transition-colors shadow-lg"
          >
            Submit B2B Inquiry <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
