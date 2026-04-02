import Link from "next/link";
import { ChevronRight, Shield, Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AAP Group — Qatar",
  description:
    "Read the AAP Group Privacy Policy to understand how we collect, use, and protect your personal information.",
};

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: `Al Ansari & Partners (AAP) Group ("AAP", "we", "our", or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, interact with our retail stores, or engage with our distribution services.

By accessing or using our services, you agree to the terms outlined in this Privacy Policy. If you do not agree, please discontinue use of our services.`,
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    subsections: [
      {
        subtitle: "2.1 Information You Provide Directly",
        text: `We collect personal information you voluntarily provide, including:
• Full name and contact details (email address, phone number, WhatsApp number)
• Company name, business type, and industry
• Mailing or billing address
• Inquiry details, messages, and service requirements
• Any other information you choose to share with us via our B2B inquiry forms or direct communications`,
      },
      {
        subtitle: "2.2 Information Collected Automatically",
        text: `When you visit our website, we may automatically collect:
• IP address and approximate location data
• Browser type, version, and device information
• Pages viewed, time spent, and navigation paths
• Referring website addresses
• Cookies and similar tracking technologies`,
      },
      {
        subtitle: "2.3 Information from Third Parties",
        text: `We may receive information about you from third-party partners, business referrals, or publicly available sources to supplement our records and improve service delivery.`,
      },
    ],
  },
  {
    id: "communications-consent",
    title: "3. Communications & Consent",
    highlight: true,
    content: `By proceeding with any inquiry, registration, or engagement with AAP Group — including submitting our B2B inquiry form, contacting us directly, or purchasing from our retail outlets — you agree to receive communications via SMS, WhatsApp, RCS, email, or calls from us regarding service updates, account notifications, and promotional offers.

You can opt out at any time by following the unsubscribe instructions provided in the communication, or by contacting us directly at info@aapqatar.com. Please allow up to 10 business days to process your opt-out request.

We do not sell your contact information to third parties and will only use it to communicate with you about our services, offers, and updates relevant to your interaction with AAP Group.`,
  },
  {
    id: "how-we-use",
    title: "4. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

• To process and respond to your B2B inquiries and business requests
• To manage and fulfil retail transactions and orders
• To send service updates, account notifications, and relevant promotional offers
• To communicate via SMS, WhatsApp, RCS, email, or phone calls as consented
• To improve our website, products, and service offerings
• To comply with legal obligations under Qatari law
• To prevent fraud and ensure the security of our systems
• To analyse usage patterns and enhance user experience`,
  },
  {
    id: "sharing",
    title: "5. Sharing Your Information",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:

• **Service Providers**: Trusted third-party vendors who assist us in operating our website or business (e.g., email delivery, analytics), under strict confidentiality obligations
• **Business Partners**: Distribution entities within the AAP Group when necessary to fulfil a service request
• **Legal Requirements**: When required by law, court order, or governmental authority in Qatar or applicable jurisdictions
• **Business Transfers**: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction`,
  },
  {
    id: "data-retention",
    title: "6. Data Retention",
    content: `We retain your personal information for as long as necessary to fulfil the purposes described in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements. When your information is no longer required, we will securely delete or anonymise it.`,
  },
  {
    id: "security",
    title: "7. Data Security",
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    id: "cookies",
    title: "8. Cookies & Tracking Technologies",
    content: `Our website uses cookies and similar technologies to enhance your browsing experience. These may include:

• **Essential Cookies**: Required for the website to function properly
• **Analytics Cookies**: Help us understand how visitors interact with our website (e.g., Google Analytics)
• **Marketing Cookies**: Used to deliver relevant promotional content

You can control cookie preferences through your browser settings. Disabling certain cookies may affect website functionality.`,
  },
  {
    id: "your-rights",
    title: "9. Your Rights",
    content: `You have the right to:

• **Access**: Request a copy of the personal information we hold about you
• **Correction**: Request correction of inaccurate or incomplete information
• **Deletion**: Request deletion of your personal data, subject to legal obligations
• **Opt-Out**: Withdraw consent for marketing communications at any time
• **Portability**: Request your data in a portable, machine-readable format

To exercise any of these rights, please contact us using the details in Section 11.`,
  },
  {
    id: "third-party",
    title: "10. Third-Party Links",
    content: `Our website may contain links to third-party websites, including the AAP Qatar Portal (aapqatar.nadij.qa). We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. The updated policy will be posted on this page with a revised "Last Updated" date. We encourage you to review this policy periodically.`,
  },
  {
    id: "contact",
    title: "12. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please contact us:`,
    isContact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #D32F2F 0%, transparent 50%), radial-gradient(circle at 80% 50%, #152C4A 0%, transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold text-xs font-semibold tracking-[0.25em] uppercase px-4 py-2 rounded-full mb-6">
            <Shield size={14} />
            Legal
          </div>
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-black font-montserrat leading-tight mb-5">
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We are committed to protecting your personal information and your right to privacy. This policy explains how AAP Group collects, uses, and safeguards your data.
          </p>
          <p className="text-white/35 text-xs mt-6">Last Updated: 2 April 2026</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-navy/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-navy font-medium">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

            {/* Sticky Table of Contents */}
            <aside className="lg:w-56 shrink-0">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold text-navy/40 uppercase tracking-widest mb-4">On This Page</p>
                <nav className="flex flex-col gap-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="text-xs text-navy/55 hover:text-gold transition-colors py-1.5 border-l-2 border-transparent hover:border-gold pl-3 leading-snug"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-10">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="text-navy text-lg sm:text-xl font-bold font-montserrat mb-4 pb-3 border-b border-gray-100">
                      {section.title}
                    </h2>

                    {/* Highlighted communications consent section */}
                    {section.highlight && (
                      <div className="bg-gold/5 border-l-4 border-gold rounded-r-xl p-5 sm:p-6 mb-2">
                        <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Communications Consent</p>
                        <p className="text-navy/75 text-sm leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    )}

                    {/* Normal content */}
                    {!section.highlight && section.content && !section.isContact && (
                      <div className="text-navy/70 text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections && (
                      <div className="flex flex-col gap-5">
                        {section.subsections.map((sub) => (
                          <div key={sub.subtitle}>
                            <h3 className="text-navy font-semibold text-sm mb-2">{sub.subtitle}</h3>
                            <p className="text-navy/70 text-sm leading-relaxed whitespace-pre-line">{sub.text}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Contact section */}
                    {section.isContact && (
                      <>
                        <p className="text-navy/70 text-sm leading-relaxed mb-6">{section.content}</p>
                        <div className="bg-cream rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gold/10 rounded-lg shrink-0">
                              <Mail size={16} className="text-gold" />
                            </div>
                            <div>
                              <p className="text-navy font-semibold text-sm">Email</p>
                              <a href="mailto:info@aapqatar.com" className="text-navy/60 text-sm hover:text-gold transition-colors">info@aapqatar.com</a>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-gold/10 rounded-lg shrink-0">
                              <Phone size={16} className="text-gold" />
                            </div>
                            <div>
                              <p className="text-navy font-semibold text-sm">Phone</p>
                              <a href="tel:+97444440000" className="text-navy/60 text-sm hover:text-gold transition-colors">+974 4444 0000</a>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-gold/10 rounded-lg shrink-0">
                              <MapPin size={16} className="text-gold" />
                            </div>
                            <div>
                              <p className="text-navy font-semibold text-sm">Address</p>
                              <p className="text-navy/60 text-sm">Al Ansari & Partners Group<br />Doha, State of Qatar</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-navy border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/50 text-sm mb-4">
            Have questions about your privacy or data? We&apos;re here to help.
          </p>
          <a
            href="mailto:info@aapqatar.com"
            className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded hover:bg-gold-light transition-colors text-sm"
          >
            <Mail size={15} />
            Contact Our Privacy Team
          </a>
        </div>
      </section>
    </>
  );
}
