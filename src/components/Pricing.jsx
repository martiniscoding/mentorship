const inclusions = [
  'Personal mentor assigned from your target college',
  'Rank-based personalized college list',
  'JoSAA / CSAB / State counseling guidance',
  'Direct WhatsApp support from your mentor',
  'Unlimited doubt sessions for 2 full months',
  'Cutoff data, branch analysis & placement insights',
]

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 bg-gradient-to-b from-brand-bg2 to-brand-bg overflow-hidden"
    >
      {/* glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-red/15 rounded-full blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block text-brand-gold font-bold uppercase tracking-widest text-xs mb-3">
            Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            One Price. No Hidden Fees.{' '}
            <span className="text-brand-red">No Confusion.</span>
          </h2>
        </div>

        <div className="mt-16 max-w-xl mx-auto reveal">
          <div className="relative rounded-3xl bg-gradient-to-b from-brand-card to-black border-2 border-brand-gold/40 p-1 shadow-2xl shadow-brand-red/30">
            {/* Most popular ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-black text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
              ⭐ Most Popular
            </div>

            <div className="rounded-[22px] bg-brand-card px-7 py-10 md:p-10">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white/90">
                  JEE Society Mentorship
                </h3>
                <p className="text-white/55 text-sm mt-1">
                  One-time payment · 2 months full access
                </p>

                <div className="mt-7 flex items-end justify-center gap-3">
                  <span className="text-white/40 text-2xl line-through font-semibold">
                    ₹2,999
                  </span>
                  <span className="text-7xl md:text-8xl font-extrabold text-gold-gradient leading-none">
                    ₹1,199
                  </span>
                </div>
                <div className="mt-3 inline-block bg-brand-red/15 border border-brand-red/40 text-brand-red text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Save 60% — Limited Time
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-white/85"
                  >
                    <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-green-500/15 border border-green-500/40 flex items-center justify-center">
                      <i className="fa-solid fa-check text-green-400 text-xs"></i>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#pricing"
                className="btn-pulse mt-9 w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-redDark text-white font-bold py-4 rounded-full text-lg border-2 border-brand-gold/60 transition-all"
              >
                Claim Your Mentor → ₹1,199
              </a>

              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/60">
                <i className="fa-solid fa-lock text-brand-gold"></i>
                Secure Payment · 100% Genuine Mentors
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
