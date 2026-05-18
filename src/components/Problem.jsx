const pains = [
  {
    icon: 'fa-circle-question',
    title: "Don't know which branch to pick?",
    desc: "CS vs ECE vs Mechanical vs IT — every senior gives a different opinion and you're left more confused than before.",
  },
  {
    icon: 'fa-shuffle',
    title: 'Confused between NIT, VIT, MHCET, Private?',
    desc: 'A lower NIT or a top VIT? A private gem or a Tier-2 government? One wrong pick costs you 4 years.',
  },
  {
    icon: 'fa-circle-exclamation',
    title: 'No one to guide you through JoSAA / CSAB?',
    desc: 'Choice filling, locking, floating, sliding — counseling has its own language. Parents and YouTube can only do so much.',
  },
]

export default function Problem() {
  return (
    <section className="relative py-24 md:py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block text-brand-red font-bold uppercase tracking-widest text-xs mb-3">
            The Reality
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Most Students Lose Their{' '}
            <span className="text-brand-red">Best College</span> —<br className="hidden md:block" />
            Not Because of Their Rank, But Because of{' '}
            <span className="text-gold-gradient">Wrong Choices</span>
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg">
            Every year, thousands of capable students settle for a worse college
            simply because they didn't know what was possible.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pains.map((p, i) => (
            <div
              key={i}
              className="reveal card-glow relative bg-brand-card border border-white/10 rounded-2xl p-7 overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-red/20 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-brand-red/15 border border-brand-red/40 flex items-center justify-center text-brand-red text-2xl mb-5">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-white/65 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
