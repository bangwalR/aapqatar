import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | AAP Group — Qatar",
  description:
    "Alyoumi Rewards Loyalty Program Terms and Conditions — Retail Mart W.L.L., operated by AAP Group in Qatar.",
};

const sections = [
  {
    id: "acceptance",
    title: "Terms and Conditions Acceptance",
    content: [
      "The use of the Alyoumi Rewards loyalty card signifies the unconditional acceptance of the Alyoumi Rewards loyalty program along with its rules, terms and conditions, which may be subject to amendment from time to time.",
    ],
  },
  {
    id: "membership",
    title: "Membership",
    content: [
      "The Alyoumi Rewards loyalty Programme is free to join. Any person who is 18 years and above can join the programme by picking up a Membership Card with a pre-printed loyalty account number from the participating outlets.",
      "Membership will be active within 24 hours after registering on the loyalty website www.alyoumi.qa or in-store by completing the information of the Alyoumi Rewards registration form.",
      "The Alyoumi Rewards loyalty card cannot be duplicated or used for any purposes other than those provided in these terms and conditions. The Alyoumi Reward Membership is non-transferable and can only be used by the subscriber and family members.",
    ],
  },
  {
    id: "earning",
    title: "Earning",
    content: [
      "In order to collect points, the Alyoumi Rewards loyalty card must be handed to the checkout service before payment for initiating the transaction.",
      "No claims for closed transactions, irrespective of the time period, will be entertained.",
      "The Alyoumi Rewards loyalty card allows its card holder to earn points: 1 point for every 1 Qatari Riyal spent when making qualifying purchases in selected categories from participating stores in Doha, Qatar.*",
      "Card holders cannot earn points in conjunction with any other offer, promotion or discounted rates, unless otherwise stated.",
      "Card holders cannot earn points on Cigarettes, Telephone Cards, or Extended Warranty.",
      "Retailmart Group & its sister concerns' Management & Staff are not eligible for Alyoumi Rewards Points.",
      "Registered Alyoumi Rewards members can access their loyalty account information at any time on www.alyoumi.qa or at the customer service desk in the participating outlets.",
      "*Retail Mart W.L.L. has the right to modify the manner in which Points are earned and redeemed, including the number of Points earned and the value of these points, without prior notice.",
    ],
  },
  {
    id: "redemption",
    title: "Redemption — In-Store Rewards",
    content: [
      "Alyoumi Reward Vouchers will be issued only to Primary account members with a registered Alyoumi Rewards Loyalty account.",
      "To redeem in-store, members must present their Alyoumi Rewards loyalty card and a valid photo identity for verification.",
      "Members will need to ensure their personal and contact details are up-to-date on their Alyoumi Rewards Loyalty account to pass the security validation.",
      "When the card holder accumulates 2,500 points — which is the minimum for redeeming — they will automatically be eligible for a 25 Qatari Riyal loyalty voucher.",
      "Reward Vouchers will be issued in multiples of 25 Qatari Riyals. Any balance remaining in the account will be used towards the next Rewards Vouchers.",
      "The Reward Voucher can be used against the card holder's purchase in participating outlets for an amount greater than or equal to the face value of the Reward Voucher within the expiry date specified on the Reward Voucher.",
      "Alyoumi Rewards Loyalty Points are redeemable in-store only and cannot be used to purchase goods over the phone or via website.",
      "Other than Reward Vouchers, if any special goods are available for Point redemption, those are subject to availability, suppliers' warranties and restrictions at the time of redemption.",
      "The Reward Vouchers are non-refundable and cannot be exchanged for cash; no change will be given.",
      "Sales billed through Alyoumi redemption cannot be eligible for Cash Returns in any circumstances.",
      "Each Reward Voucher is linked to the loyalty account and points will automatically be deducted from the member's account at the time of redemption.",
      "The value of your redemption cannot exceed the total value of your purchase.",
      "Once the redemption has been processed it cannot be cancelled or refunded. Standard terms and conditions also apply.",
    ],
  },
  {
    id: "expiry",
    title: "Points & Accounts Expiry — Annual Points Expiry Policy",
    content: [
      "Alyoumi Rewards has an annual Point Expiry Policy, which is calculated on a First In, First Out basis.",
      "Example: All Points earned from 1st March 2021 up to 31st March 2021 will be subject to expiry on 31st March 2022.",
      "Retail Mart W.L.L. may close any Alyoumi Rewards Loyalty account on which no points have been collected or redeemed for a continuous period of 12 months. Upon account closure, any points in such account will expire.",
    ],
  },
  {
    id: "account-info",
    title: "Loyalty Account Information",
    content: [
      "Once the 24-hour registration period has passed, the card holder can access their loyalty account information through www.alyoumi.qa or the Customer Service Desk at the participating outlets.",
      "The card holder can modify their personal details at any time through the Customer Service Desk at the participating outlets or by logging in to www.alyoumi.qa.",
    ],
  },
  {
    id: "claims",
    title: "Claim and Item Refund",
    content: [
      "In case of a card holder contesting missing points, Reward Vouchers, or points balance, the card holder has seven days to formulate their claim to the concerned store or to the Customer Service Desk. However, the decision of Retail Mart Management will be final on such claims.",
      "At the time of returning a faulty item, the card holder must quote the Alyoumi Rewards Loyalty account number or card number along with the Invoice copy provided at the time of redemption as a reference.",
      "In case of an item being refunded, the points earned for that item will be deducted from the loyalty account.",
      "If the loyalty account does not have sufficient points to deduct, the number of missing points will be marked as negative in the respective customer's account, or equivalent Qatari Riyals will be deducted from the item refund.",
    ],
  },
  {
    id: "loss-theft",
    title: "Loss, Theft, Damage & Cancellation",
    content: [
      "Retail Mart W.L.L. cannot be held liable for any loss, theft, damage or unauthorized use of the Alyoumi Rewards Card or rewards. If this occurs, the card holder must immediately inform the store.",
      "Replacement Alyoumi Rewards Cards will be provided at our discretion. Any points accrued on the lost, stolen or damaged loyalty card at the time of declaration will be transferred to the new loyalty account.",
      "The membership of the programme can be revoked or refused if any member is involved in any act of fraud, shoplifting, re-selling or bulk buying, cheating, with or without cause and without notice. The membership can also be revoked if any member has breached these terms and conditions or supplied false or misleading information. In these cases, the card holder will lose all acquired benefits and the Membership Card shall also be cancelled.",
      "If registration is not done within 30 days following the first use of the card, or if the Alyoumi Rewards loyalty card is not used during a continuous period of 12 months, RETAIL MART W.L.L. will remove the loyalty account and the card holder will lose all acquired benefits and will not be able to use their Alyoumi Rewards loyalty card anymore.",
      "If a card holder wishes to close their Alyoumi Rewards loyalty account, they may return their card in-store with a written notification stipulating their demand, name, last name, loyalty account number and signature.",
    ],
  },
  {
    id: "responsibility",
    title: "Responsibility",
    content: [
      "RETAIL MART W.L.L. is exempted from any responsibility for any direct or indirect consequences linked to any malfunction; nevertheless, it will do its best to keep all the card holder's acquired benefits.",
      "RETAIL MART W.L.L. is exempted from any responsibility for any direct or indirect consequences linked to any fraudulent use or non-accordance use with these terms and conditions.",
    ],
  },
  {
    id: "general",
    title: "General",
    content: [
      "The Alyoumi Rewards loyalty card is the property of Retail Mart W.L.L. This Card is not a credit card and it can neither be transferred nor sold.",
      "The Alyoumi Rewards Loyalty Account has no monetary value and cannot be sold, transferred or otherwise dealt with except in accordance with these terms and conditions.",
      "These terms and any disputes or claims arising out of, or in connection with, their subject matter or formation (including non-contractual disputes or claims) are governed by and construed in accordance with the law of Qatar.",
      "RETAIL MART W.L.L. reserves the right to modify or close the Programme, or to change, cancel or withdraw any of the terms and conditions, without assigning any reason whatsoever at any point of time at its own discretion. It reserves the right to discontinue programme memberships — existing or new — temporarily or permanently for a period of time, as decided by the management.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-gold/15 rounded-xl">
              <FileText size={28} className="text-gold" />
            </div>
          </div>
          <span className="inline-block text-gold text-xs font-semibold tracking-[0.25em] uppercase mb-4 border border-gold/30 px-3 py-1 rounded-full">
            Legal
          </span>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-black font-montserrat leading-tight mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-white/65 max-w-2xl text-sm sm:text-base leading-relaxed">
            Alyoumi Rewards Loyalty Program Terms and Conditions, operated by
            Retail Mart W.L.L. — a limited liability company incorporated and
            existing under the laws and regulations of Qatar, registered under
            commercial license no. 90874, P.O. Box 9138, Doha, Qatar.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-cream border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-navy/50">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-navy font-medium">Terms &amp; Conditions</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

            {/* Sidebar TOC */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-24">
                <p className="text-xs font-semibold text-navy/40 uppercase tracking-widest mb-4">Contents</p>
                <nav className="flex flex-col gap-1">
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="text-sm text-navy/60 hover:text-gold hover:bg-gold/5 transition-colors px-3 py-2 rounded-lg leading-snug"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Intro */}
              <div className="mb-10 p-6 bg-navy rounded-2xl border border-gold/20">
                <h2 className="text-gold font-bold text-lg font-montserrat mb-3">
                  ALYOUMI REWARDS Loyalty Program
                </h2>
                <p className="text-white/75 text-sm leading-relaxed mb-3">
                  Alyoumi Rewards is a loyalty program operated by Retail Mart W.L.L.,
                  available at participating Retail Mart Outlets, New Indian Supermarket
                  and its associates in Qatar.
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  These terms and conditions relate to the membership, earning, redemption
                  and other rules of the Alyoumi Rewards loyalty program.
                </p>
              </div>

              {/* Sections */}
              <div className="flex flex-col divide-y divide-gray-100">
                {sections.map((section) => (
                  <div key={section.id} id={section.id} className="py-8 scroll-mt-24">
                    <h2 className="text-navy text-lg sm:text-xl font-bold font-montserrat mb-5 flex items-center gap-3">
                      <span className="w-1 h-6 bg-gold rounded-full shrink-0" />
                      {section.title}
                    </h2>
                    <ul className="flex flex-col gap-3">
                      {section.content.map((para, i) => (
                        <li key={i} className="flex items-start gap-3 text-navy/65 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-2 shrink-0" />
                          {para}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="mt-10 p-5 bg-cream rounded-xl border border-gray-200 text-xs text-navy/50 leading-relaxed">
                These Terms &amp; Conditions are applicable to the Alyoumi Rewards
                Loyalty Program operated by Retail Mart W.L.L. under AAP Group.
                For queries, please contact us at{" "}
                <a href="mailto:info@aapqatar.com" className="text-gold hover:underline">
                  info@aapqatar.com
                </a>{" "}
                or visit any participating outlet.
                <br />
                <span className="mt-2 block">Last updated: April 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
