"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 18,
    suffix: "+",
    label: "Years in Business",
    sublabel: "Since 2005",
    color: "#D32F2F",
  },
  {
    value: 500,
    suffix: "+",
    label: "Happy Clients",
    sublabel: "And Growing",
    color: "#1a2e5a",
  },
  {
    value: 10,
    suffix: "K+",
    label: "Products Distributed",
    sublabel: "Across Qatar",
    color: "#D32F2F",
  },
  {
    value: 7,
    suffix: "+",
    label: "Retail Locations",
    sublabel: "Across Qatar",
    color: "#1a2e5a",
  },
];

export default function StatsCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-white py-16 sm:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group"
            >
              {/* Number */}
              <div
                className="text-4xl sm:text-5xl lg:text-6xl font-black font-montserrat mb-2 leading-none"
                style={{ color: stat.color }}
              >
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
              <div className="text-navy font-semibold text-sm sm:text-base mb-1">
                {stat.label}
              </div>
              {/* Sublabel */}
              <div className="text-navy/50 text-xs tracking-wide">
                {stat.sublabel}
              </div>
              {/* Underline */}
              <div className="mt-4 mx-auto w-8 h-0.5 bg-gray-200 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
