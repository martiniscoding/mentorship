const steps = [
  {
    n: 1,
    title: 'Pay ₹1,199 & Fill Your Details',
    desc: 'Share your rank, category, state, and college preferences in a 2-minute form.',
    icon: 'fa-credit-card',
  },
  {
    n: 2,
    title: 'Get Matched With Your Mentor',
    desc: 'Within 24 hours, we connect you with a student mentor from your dream college.',
    icon: 'fa-user-group',
  },
  {
    n: 3,
    title: 'Make the Best Decision of Your Life',
    desc: 'Unlimited guidance through choice filling — college confirmed, future secured.',
    icon: 'fa-trophy',
  },
]

export default function HowItWorks() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block text-brand-gold font-bold uppercase tracking-widest text-xs mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Get Guidance in{' '}
            <span className="text-brand-red">3 Simple Steps</span>
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg">
            No paperwork. No waiting. No confusion.
          </p>
        </div>

        <div className="relative mt-20">
          {/* gold horizontal line on desktop */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="reveal text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Number circle */}
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-red to-brand-redDark shadow-xl shadow-brand-red/40" />
                  <div className="absolute inset-1 rounded-full border-2 border-brand-gold/60 flex items-center justify-center text-3xl font-extrabold text-white">
                    {s.n}
                  </div>
                </div>
                {/* Icon */}
                <div className="text-brand-gold text-3xl mb-3">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-white/65 max-w-xs mx-auto leading-relaxed">
                  {s.desc}
                </p>

                {/* Arrow connector on mobile */}
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-8 text-brand-gold text-2xl">
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
