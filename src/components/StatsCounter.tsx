"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 7,
    suffix: "+",
    label: "Retail Branches",
    sublabel: "Across Qatar",
  },
  {
    value: 5,
    suffix: "+",
    label: "Distribution Verticals",
    sublabel: "FMCG & Trading",
  },
  {
    value: 20,
    suffix: "+",
    label: "Trusted Brands",
    sublabel: "In Our Portfolio",
  },
  {
    value: 15,
    suffix: "+",
    label: "Years of Excellence",
    sublabel: "Serving Qatar",
  },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-navy py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group"
            >
              {/* Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-gold font-montserrat mb-2 leading-none">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    delay={i * 0.2}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              {/* Label */}
              <div className="text-white font-semibold text-sm sm:text-base mb-1">
                {stat.label}
              </div>
              {/* Sublabel */}
              <div className="text-white/50 text-xs tracking-wide">
                {stat.sublabel}
              </div>
              {/* Gold underline */}
              <div className="mt-4 mx-auto w-8 h-0.5 bg-gold/40 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
