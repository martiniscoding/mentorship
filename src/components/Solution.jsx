const features = [
  {
    icon: 'fa-user-graduate',
    emoji: '🤝',
    title: '1-on-1 Personal Mentor',
    desc: 'Get matched with a real student currently studying at your target college. They\'ve been exactly where you are.',
  },
  {
    icon: 'fa-building-columns',
    emoji: '🏛️',
    title: 'All Counselings Covered',
    desc: 'JoSAA, CSAB, MHT-CET, COMEDK, KCET, VIT, BITSAT — we guide you through every round of every counseling.',
  },
  {
    icon: 'fa-bolt',
    emoji: '⚡',
    title: 'Fast Response',
    desc: 'Get answers within hours, not days. WhatsApp access to your mentor during the entire counseling period.',
  },
]

export default function Solution() {
  return (
    <section
      id="why"
      className="relative py-24 md:py-32 bg-gradient-to-b from-brand-bg to-brand-bg2"
    >
      {/* decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block text-brand-gold font-bold uppercase tracking-widest text-xs mb-3">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            We Match You With a Mentor Who Was In{' '}
            <span className="text-brand-red">YOUR</span> Exact Situation
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg">
            Not a generic counselor. Not an AI tool. A real student who took the
            same decision two years ago — and got it right.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="reveal card-glow group relative bg-brand-card border border-white/10 rounded-2xl p-7 md:p-8 overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/0 via-transparent to-brand-red/0 group-hover:from-brand-red/10 group-hover:to-brand-gold/5 transition-all" />
              <div className="relative flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-red to-brand-redDark flex items-center justify-center text-brand-gold text-2xl shadow-lg shadow-brand-red/30">
                  <i className={`fa-solid ${f.icon}`}></i>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
