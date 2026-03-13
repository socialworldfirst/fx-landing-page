import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqAccordion from "@/components/FaqAccordion";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "China Payments", href: "#china-payments" },
  { label: "FAQ", href: "#faq" },
];

export default function Home() {
  return (
    <main>
      <Header navItems={navItems} />

      {/* Section 1: Hero — 2-column with rate card visual */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-wf-red/5 rounded-full blur-3xl floating-blob pointer-events-none" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl floating-blob-slow pointer-events-none" />
        {/* Subtle background pattern */}
        <div className="absolute inset-0 hero-pattern pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left: Copy */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight gradient-text">
                See What Your Bank <span className="block">Really Charges on FX</span>
              </h1>
              <p className="text-wf-text-secondary text-lg md:text-xl mt-6 max-w-xl">
                Banks hide 2-4% in every international payment. WorldFirst shows importers the real rate — and gets your money to China the same day.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <a
                  href="https://www.worldfirst.com/uk/world-account/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill px-8 py-3.5 bg-wf-red text-white font-medium hover:bg-wf-red-hover text-center"
                >
                  Open a World Account
                </a>
                <a
                  href="https://www.worldfirst.com/uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill px-8 py-3.5 border border-wf-border text-wf-text font-medium hover:border-wf-text-muted text-center"
                >
                  See Today&apos;s Rates
                </a>
              </div>
            </div>

            {/* Right: Rate comparison card */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white rounded-3xl border border-wf-border shadow-xl shadow-black/5 p-8">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-wf-success animate-pulse" />
                  <span className="text-xs font-medium text-wf-text-muted uppercase tracking-wider">Live rate comparison</span>
                </div>
                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-wf-red flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-wf-text">CNY payment sent — £25,000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-wf-success flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-wf-text">Supplier received ¥230,150 — same day</span>
                  </div>
                  <div className="h-px bg-wf-border" />
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-wf-text-muted">WorldFirst rate</span>
                      <span className="font-semibold text-wf-text">1 GBP = 9.2060 CNY</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-wf-text-muted">Your bank&apos;s rate</span>
                      <span className="font-medium text-wf-red line-through">1 GBP = 8.9400 CNY</span>
                    </div>
                    <div className="h-px bg-wf-border" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-wf-text-muted">You save</span>
                      <span className="text-lg font-bold text-wf-success">£723</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Trust Bar — Dark background */}
      <section className="bg-wf-text py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "40+", label: "Currencies supported" },
              { value: "90%", label: "CNY payments arrive same day" },
              { value: "150K+", label: "Businesses trust WorldFirst" },
              { value: "20+ yrs", label: "Powering global trade since 2004" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="text-3xl md:text-4xl font-semibold tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 0%, rgba(255,255,255,0.8) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-white/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Problem/Solution Cards — Red accent borders */}
      <section id="features" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-wf-text tracking-tight text-center mb-12">
            Four Problems. <span className="accent-word">One Account.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Hidden Markups */}
            <div className="rounded-2xl border border-wf-border p-6 card-hover card-accent">
              <div className="w-10 h-10 rounded-xl bg-wf-red/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-wf-text mb-2">Hidden Markups</h3>
              <p className="text-sm text-wf-text-secondary mb-3">
                Your bank charges 2-4% above the real exchange rate. On a £50K transfer, that&apos;s up to £2,000 you never see.
              </p>
              <p className="text-sm text-wf-text font-medium">
                WorldFirst shows you the real rate and what you&apos;re paying — before you send.
              </p>
            </div>

            {/* Card 2: Slow Payments */}
            <div className="rounded-2xl border border-wf-border p-6 card-hover card-accent">
              <div className="w-10 h-10 rounded-xl bg-wf-red/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-wf-text mb-2">Slow Payments</h3>
              <p className="text-sm text-wf-text-secondary mb-3">
                Bank transfers to China take 2-5 days. Your suppliers — and your shipments — are waiting.
              </p>
              <p className="text-sm text-wf-text font-medium">
                90% of our CNY payments clear the same day. Pay before the bank cut-off, receive confirmation before lunch.
              </p>
            </div>

            {/* Card 3: Rate Volatility */}
            <div className="rounded-2xl border border-wf-border p-6 card-hover card-accent">
              <div className="w-10 h-10 rounded-xl bg-wf-red/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-wf-text mb-2">Rate Volatility</h3>
              <p className="text-sm text-wf-text-secondary mb-3">
                You agreed a price in January. By the time you pay in March, the rate has moved 3%. Your margins just vanished.
              </p>
              <p className="text-sm text-wf-text font-medium">
                Lock your rate for up to 24 months with a forward contract. Fixed, flexible, or window — from just a 3% deposit.
              </p>
            </div>

            {/* Card 4: 1688 Complexity */}
            <div className="rounded-2xl border border-wf-border p-6 card-hover card-accent">
              <div className="w-10 h-10 rounded-xl bg-wf-red/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-wf-text mb-2">1688 Complexity</h3>
              <p className="text-sm text-wf-text-secondary mb-3">
                Buying from 1688 — China&apos;s largest domestic wholesale marketplace — usually means a sourcing agent, a Chinese bank account, and hoping the payment reaches your supplier.
              </p>
              <p className="text-sm text-wf-text font-medium">
                1688 World Pay lets you check out directly on 1688.com using your World Account balance. No agent. No local bank account. One click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: China Payments Deep Dive — Dark glow section */}
      <section id="china-payments" className="bg-wf-dark-glow py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-blob pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-wf-red/8 rounded-full blur-3xl floating-blob-slow pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">
              Built for Businesses That <span className="text-wf-red">Pay China</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
              Most payment platforms treat China like any other country. As part of the Ant Group ecosystem — the company behind Alipay and 1688.com — WorldFirst connects you directly to Chinese financial infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="glass-card rounded-2xl p-6 dark-card-hover">
              <div className="w-10 h-10 rounded-xl bg-wf-red/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Same-day CNY</h3>
              <p className="text-sm text-white/60">90% of payments to China clear the same day through our exclusive banking network via MYbank routing</p>
            </div>
            <div className="glass-card rounded-2xl p-6 dark-card-hover">
              <div className="w-10 h-10 rounded-xl bg-wf-red/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">1688 World Pay</h3>
              <p className="text-sm text-white/60">The official checkout for 1688.com — pay in your currency, suppliers receive CNY instantly. No sourcing agent needed.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 dark-card-hover">
              <div className="w-10 h-10 rounded-xl bg-wf-red/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">No middlemen</h3>
              <p className="text-sm text-white/60">Skip the sourcing agent. Pay suppliers directly, securely, and compliantly with verified beneficiary accounts.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 dark-card-hover">
              <div className="w-10 h-10 rounded-xl bg-wf-red/20 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Collect and pay</h3>
              <p className="text-sm text-white/60">Receive marketplace payouts in 40+ currencies from Amazon, eBay, Shopify — and pay suppliers from the same World Account.</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.worldfirst.com/uk/world-account/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-block px-8 py-3.5 bg-wf-red text-white font-medium hover:bg-wf-red-hover"
            >
              Open a World Account
            </a>
          </div>
        </div>
      </section>

      {/* Section 5: Social Proof — Warm background */}
      <section className="bg-wf-bg-warm py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-8 left-8 text-[200px] font-bold text-wf-text/[0.02] leading-none select-none pointer-events-none">&ldquo;</div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-wf-text tracking-tight text-center mb-12">
            Trusted by <span className="accent-word">150,000+</span> Businesses Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl bg-white border border-wf-border p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-wf-red/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-wf-text mb-2">20+ Years Moving Money Globally</h3>
              <p className="text-sm text-wf-text-secondary">
                WorldFirst has been powering international payments since 2004 — trusted by importers, ecommerce sellers, and SMEs in 200+ countries.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-wf-border p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-wf-red/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-wf-text mb-2">Backed by Ant Group</h3>
              <p className="text-sm text-wf-text-secondary">
                Part of the ecosystem behind Alipay and 1688.com — giving you direct access to Chinese financial infrastructure no other payment platform can match.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-wf-border p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-wf-red/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-wf-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-semibold text-wf-text mb-2">Collect. Convert. Pay. One Account.</h3>
              <p className="text-sm text-wf-text-secondary">
                Receive marketplace payouts from Amazon, eBay, and Shopify. Convert at competitive rates. Pay suppliers worldwide — all from your World Account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-wf-text tracking-tight text-center mb-12">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion
              items={[
                {
                  question: "How much does WorldFirst charge for FX transfers?",
                  answer: "You see the rate and fee before you confirm — nothing is buried. Unlike banks that hide 2-4% in the exchange rate, WorldFirst shows you exactly what you're paying. There are no monthly account fees.",
                },
                {
                  question: "How fast do payments to China arrive?",
                  answer: "90% of our CNY payments arrive the same day, provided you pay before bank cut-off times. This is possible through our exclusive Chinese banking network. Payments to other countries typically arrive within 1-2 business days.",
                },
                {
                  question: "What is a forward contract and how does it work?",
                  answer: "A forward contract lets you lock in today's exchange rate for a future payment — up to 24 months ahead. You pay a small deposit (from 3%) and get certainty on your costs. We offer three types: fixed (set date), flexible (draw down over time), and window (settle within a date range).",
                },
                {
                  question: "Is WorldFirst safe and regulated?",
                  answer: "WorldFirst has been operating since 2004 and is part of Ant Group, one of the world's largest digital financial services companies. We're authorised and regulated by the FCA in the UK. Over 150,000 businesses trust us with their international payments.",
                },
                {
                  question: "Is it hard to switch from my bank?",
                  answer: "Not at all. You can open a World Account in minutes — just basic business details and ID verification. You don't need to close your bank account; most importers run WorldFirst alongside their bank and gradually move international payments over as they see the savings.",
                },
                {
                  question: "How is WorldFirst different from Wise or my bank?",
                  answer: "Banks hide 2-4% in the exchange rate. Wise offers transparent rates but has no forward contracts and no dedicated China payment infrastructure. WorldFirst combines transparent pricing with tools specifically built for importers: same-day CNY payments, rate locking up to 24 months, and 1688 World Pay — the official checkout for China's largest domestic marketplace.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA Banner — Dark with glow effects */}
      <section className="bg-wf-dark-glow py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-wf-red/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
            One Account for Collections, Conversions, and Supplier Payments
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
            Open a World Account and see how much you could save on your next transfer.
          </p>
          <a
            href="https://www.worldfirst.com/uk/world-account/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill inline-block px-8 py-3.5 bg-wf-red text-white font-medium hover:bg-wf-red-hover"
          >
            Open a World Account
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
