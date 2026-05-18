const testimonials = [
  {
    quote:
      "I had a 12,000 rank and had no idea whether to take NIT Raipur CS or VIT. My mentor helped me choose VIT — best decision ever!",
    name: 'Aryan S.',
    meta: 'JEE 2025 · VIT Vellore CSE',
    initials: 'AS',
    color: 'from-rose-500 to-red-700',
  },
  {
    quote:
      "Confused between branches. My mentor from IIT BHU explained everything about placements and life. Worth every rupee.",
    name: 'Priya M.',
    meta: 'JEE 2025 · IIT BHU Chemical',
    initials: 'PM',
    color: 'from-amber-500 to-yellow-700',
  },
  {
    quote:
      "At ₹1,199 I expected basic help. I got an hour-long call, college list, cutoff data, 2 months of WhatsApp access — everything. These guys actually care.",
    name: 'Rohan K.',
    meta: 'MHT-CET 2025 · COEP Pune',
    initials: 'RK',
    color: 'from-purple-500 to-pink-700',
  },
]

function Stars() {
  return (
    <div className="flex gap-1 text-brand-gold mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className="fa-solid fa-star text-sm"></i>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-bg2">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block text-brand-red font-bold uppercase tracking-widest text-xs mb-3">
            Real Results
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Students Who Got{' '}
            <span className="text-gold-gradient">Clarity</span> With JEE Society
          </h2>
          <p className="mt-4 text-white/70 text-base md:text-lg">
            Real stories from real students who made the right call.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="reveal relative bg-brand-card border-l-4 border-brand-red rounded-2xl p-7 hover:shadow-2xl hover:shadow-brand-red/20 transition-all"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <i className="fa-solid fa-quote-left absolute top-5 right-5 text-3xl text-brand-red/30"></i>
              <Stars />
              <p className="text-white/85 leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-white/60">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
