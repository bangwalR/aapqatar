"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: ["1st Floor, Retailmart Al Wakra Building", "P.O. Box 9138, Doha — Qatar"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+974 44643977"],
    href: "tel:97444643977",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@aapqatar.com"],
    href: "mailto:info@aapqatar.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Sunday – Thursday: 8:00 AM – 6:00 PM", "Friday – Saturday: 9:00 AM – 5:00 PM"],
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      // Use existing inquiry API endpoint
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, division: "general-inquiry" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-80 h-80 bg-gold rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 border border-gold/30 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-white text-3xl sm:text-5xl font-black font-montserrat leading-tight mb-4">
            Contact <span className="gold-shimmer-text">AAP Group</span>
          </h1>
          <p className="text-white/65 max-w-xl text-sm sm:text-base leading-relaxed">
            You may please feel free to contact us for any queries — whether you&apos;re a
            retail customer, supplier, B2B partner, or media inquiry.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-navy/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-navy font-medium">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact info cards */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactDetails.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-cream rounded-xl p-6 border border-gray-100 hover:border-gold/30 hover:shadow-md transition-all group">
                  <div className="p-2.5 bg-gold/10 rounded-xl w-fit mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <h3 className="text-navy font-bold text-sm font-montserrat mb-2">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-navy/65 text-sm hover:text-gold transition-colors">
                      {c.lines.map((l, i) => <span key={i} className="block">{l}</span>)}
                    </a>
                  ) : (
                    c.lines.map((l, i) => (
                      <p key={i} className="text-navy/65 text-sm leading-relaxed">{l}</p>
                    ))
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: info + map */}
            <div className="lg:col-span-2">
              <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 border border-gold/30 px-3 py-1 rounded-full">
                Find Us
              </span>
              <h2 className="text-navy text-2xl sm:text-3xl font-black font-montserrat mb-4 leading-tight">
                Corporate Office<br />
                <span className="gold-shimmer-text">Al Wakra, Doha</span>
              </h2>
              <p className="text-navy/60 text-sm leading-relaxed mb-6">
                Our corporate office is located in the Retailmart Al Wakra Building.
                For store-specific queries, please visit any of our Retailmart branches
                directly.
              </p>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-6 h-52">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.3!2d51.5987!3d25.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEwJzAwLjAiTiA1McKwMzUnNTMuMiJF!5e0!3m2!1sen!2sqa!4v1617000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AAP Group Corporate Office"
                />
              </div>

              {/* Store locations quick link */}
              <div className="p-5 bg-navy rounded-xl border border-gold/15">
                <p className="text-white font-semibold text-sm mb-1">Looking for a Retailmart store?</p>
                <p className="text-white/55 text-xs mb-3">Find your nearest branch with hours and location details.</p>
                <Link href="/retail#store-locations" className="inline-flex items-center gap-2 bg-gold text-white font-semibold text-xs px-4 py-2 rounded hover:bg-gold-light transition-colors">
                  View All Stores <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              {submitted ? (
                <div className="text-center py-14">
                  <CheckCircle className="text-gold mx-auto mb-4" size={56} strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold text-navy mb-2 font-montserrat">Message Received!</h3>
                  <p className="text-navy/60 max-w-sm mx-auto">
                    Thank you for reaching out. Our team will get back to you
                    within <strong>24 business hours</strong>.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-navy text-xl font-bold font-montserrat mb-1">Send Us a Message</h3>
                  <p className="text-navy/50 text-sm mb-7">Fill in the form below and our team will respond promptly.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">Your Name *</label>
                        <input
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Full name"
                          className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors placeholder:text-gray-400 min-h-[48px]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">Your Email *</label>
                        <input
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="email@company.com"
                          className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors placeholder:text-gray-400 min-h-[48px]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">Subject *</label>
                      <input
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors placeholder:text-gray-400 min-h-[48px]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-navy uppercase tracking-wide mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Your message..."
                        className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-colors placeholder:text-gray-400 resize-none"
                      />
                    </div>
                    {error && (
                      <p className="text-red-500 text-sm text-center bg-red-50 rounded-lg p-3">{error}</p>
                    )}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 bg-navy text-white font-bold py-4 min-h-[52px] rounded-lg hover:bg-navy-light transition-colors disabled:opacity-60 text-sm uppercase tracking-widest group active:scale-95"
                    >
                      {submitting ? "Sending..." : (
                        <>Send Message <Send size={15} className="group-hover:translate-x-1 transition-transform" /></>
                      )}
                    </button>
                    <p className="text-center text-xs text-navy/40">
                      By submitting you agree to be contacted by AAP Group regarding your inquiry.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* B2B strip */}
      <section className="py-12 bg-cream border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-navy font-bold font-montserrat text-lg mb-1">Business Inquiry?</p>
            <p className="text-navy/55 text-sm">For B2B partnerships, distribution and supplier enquiries use our dedicated form.</p>
          </div>
          <Link href="/distribution#inquiry" className="shrink-0 inline-flex items-center gap-2 bg-gold text-white font-bold px-6 py-3 rounded hover:bg-gold-light transition-colors shadow-lg">
            B2B Inquiry Form <ChevronRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
