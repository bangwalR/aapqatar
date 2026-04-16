"use client";

import Link from "next/link";
import { CreditCard, Gift, Coins, CheckCircle2, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const howItWorks = [
  {
    icon: CreditCard,
    title: "Register",
    description:
      "Pick up your free Alyoumi Card from any participating Retail Mart store in Qatar and register it to start earning.",
  },
  {
    icon: Gift,
    title: "Earn Points",
    description:
      "Earn 1 point for every 1 QAR you spend on qualifying purchases in selected categories at participating stores.",
  },
  {
    icon: Coins,
    title: "Redeem Rewards",
    description:
      "Redeem your accumulated points for discounts, special offers, and exclusive rewards on future purchases.",
  },
];

const faqs = [
  {
    q: "How do I register in Alyoumi loyalty program?",
    a: "The Alyoumi Rewards loyalty programme is free to join. Any individual aged 18 years or above can enroll by registering through the Alyoumi mobile application or by visiting the alyoumi webiste.",
  },
  {
    q: "How do I redeeem the points?",
    a: `Customers can redeem their points in two ways:\n1. OTP Redemption at the Store\n2. Voucher Redemption through the Alyoumi App`,
  },
  
  {
    q: "Where can I check my balance?",
    a: "You can check your current point balance anytime by visiting the alyoumi.qa and logging into your account. Alternatively, you may inquire at any participating  store.You can also download the Alyoumi application from the Play Store or Apple App Store. Through the app, you can easily view your point balance and access your complete account details.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-navy/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-cream/50 transition-colors"
      >
        <span className="text-navy font-semibold text-sm sm:text-base pr-4">{q}</span>
        {open ? (
          <ChevronUp size={18} className="text-gold shrink-0" />
        ) : (
          <ChevronDown size={18} className="text-navy/40 shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-navy/60 text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function LoyaltyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0C1B2E] via-[#162d4a] to-[#1a2e5a] pt-32 sm:pt-40 md:pt-44 pb-20 sm:pb-28">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_40%,#D32F2F_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white/80 text-xs sm:text-sm font-medium tracking-widest uppercase px-5 py-2 rounded-full mb-6 border border-white/10">
            Alyoumi Loyalty Programme
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-montserrat leading-tight mb-4">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#ff6b6b]">
              Alyoumi Rewards
            </span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
            Shop, earn points, and enjoy exclusive rewards at participating Retail Mart stores across Qatar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://alyoumi.qa/redeem.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-white font-bold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors text-sm tracking-wide"
            >
              Redeem Points <ChevronRight size={16} />
            </a>
            <a
              href="https://alyoumi.qa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm tracking-wide"
            >
              Visit Alyoumi.qa
            </a>
          </div>
        </div>
      </section>

      {/* About the Card */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-gold text-xs font-bold uppercase tracking-widest mb-3">
                About the Programme
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy font-montserrat mb-6 leading-tight">
                Your Loyalty, <br className="hidden sm:block" />Our Reward
              </h2>
              <p className="text-navy/60 text-sm sm:text-base leading-relaxed mb-6">
                The Alyoumi Loyalty Card is a free rewards programme exclusively available
                at Retail Mart stores in Qatar. Every purchase earns you points that can be
                redeemed for discounts and special offers.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Free to join — no sign-up fees",
                  "Earn 1 point per 1 QAR on qualifying purchases",
                  "Redeem points for discounts & exclusive offers",
                  "Available at all participating Retail Mart stores",
                  "Check your balance online at alyoumi.qa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy/70">
                    <CheckCircle2 size={16} className="text-gold mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://alyoumi.qa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-3.5 rounded-full hover:bg-navy-light transition-colors text-sm tracking-wide"
              >
                Learn More at Alyoumi.qa <ChevronRight size={16} />
              </a>
            </div>

            {/* Card visual */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="bg-gradient-to-br from-[#0C1B2E] via-[#162d4a] to-[#1a2e5a] rounded-2xl p-8 shadow-2xl aspect-[3/2] flex flex-col justify-between">
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-[0.25em] mb-1">
                      Loyalty Programme
                    </p>
                    <h3 className="text-white text-2xl font-extrabold font-montserrat">
                      Alyoumi
                    </h3>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">
                        Card Holder
                      </p>
                      <p className="text-white text-sm font-semibold tracking-wide">
                        YOUR NAME
                      </p>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-8 rounded-full bg-[#D32F2F]/80" />
                      <div className="w-8 h-8 rounded-full bg-[#ff6b6b]/60 -ml-3" />
                    </div>
                  </div>
                </div>
                {/* Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#D32F2F]/10 to-transparent rounded-3xl -z-10 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-gold text-xs font-bold uppercase tracking-widest mb-3">
              Simple &amp; Rewarding
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy font-montserrat">
              How It Works
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <div
                key={step.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-navy/5"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: i % 2 === 0 ? "#D32F2F" : "#0C1B2E" }}
                >
                  <step.icon size={28} className="text-white" />
                </div>
                <div className="text-gold text-xs font-bold tracking-widest mb-2">
                  STEP {i + 1}
                </div>
                <h3 className="text-navy text-lg font-bold font-montserrat mb-3">
                  {step.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-gold text-xs font-bold uppercase tracking-widest mb-3">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy font-montserrat">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0C1B2E] via-[#162d4a] to-[#1a2e5a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-montserrat mb-4">
            Start Earning Rewards Today
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Visit any participating Retail Mart store, pick up your free Alyoumi Card,
            and start earning points on every purchase.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://alyoumi.qa/redeem.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-white font-bold px-8 py-3.5 rounded-full hover:bg-gold-light transition-colors text-sm tracking-wide"
            >
              Redeem Your Points <ChevronRight size={16} />
            </a>
            <Link
              href="/retail"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm tracking-wide"
            >
              Find a Store
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
