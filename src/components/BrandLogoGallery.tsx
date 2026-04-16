"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const brands = [
  { name: "Eastern", logo: "/assets/logos/eastern.png" },
  { name: "Gold Winner", logo: "/assets/logos/goldwinner.png" },
  { name: "Illam", logo: "/assets/logos/illam.png" },
  { name: "MTR", logo: "/assets/logos/mtr.png" },
  { name: "Nirmal", logo: "/assets/logos/nirmal.png" },

];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BrandLogoGallery() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="py-20 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-3 border border-gold/30 px-3 py-1 rounded-full">
            Brand Portfolio
          </span>
          <h2 className="text-navy text-3xl lg:text-4xl font-black font-montserrat mb-3">
            Trusted Brands We Carry
          </h2>
          <p className="text-navy/60 max-w-xl mx-auto text-sm lg:text-base">
            A curated portfolio of premium FMCG brands delivered across Qatar
            through our retail and distribution networks.
          </p>
        </div>

        {/* Logo grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 40px rgba(211,47,47,0.2)",
              }}
              className="bg-white rounded-xl p-8 flex flex-col items-center justify-center gap-4 border border-transparent hover:border-gold/30 transition-colors duration-300 cursor-pointer group"
            >
              <div className="relative w-32 h-24">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                  className="object-contain"
                />
              </div>
              <span className="text-navy/50 text-sm font-medium group-hover:text-gold transition-colors">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
