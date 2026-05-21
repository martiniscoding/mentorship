export default function MentorsShowcase() {
  return (
    <section className="relative py-20 md:py-28 bg-brand-bg overflow-hidden">
      {/* decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] bg-brand-red/10 rounded-[50%] blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="inline-block text-brand-red font-bold uppercase tracking-widest text-xs mb-3">
            Mentor Network
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            One Network.{' '}
            <span className="text-gold-gradient">Every Counselling.</span>{' '}
            Every Branch.
          </h2>
          <p className="mt-5 text-white/70 text-base md:text-lg">
            From JoSAA and MHT-CET to COMEDK, VITEE, CUET, IAT, AKTU and beyond
            — we have mentors who've personally navigated every major
            counselling and ended up at top colleges across India.
          </p>
        </div>

        {/* Image showcase */}
        <div className="mt-14 reveal">
          <div className="relative mx-auto max-w-3xl">
            {/* glow behind image */}
            <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-brand-red/40 via-brand-gold/20 to-brand-red/40 rounded-3xl blur-2xl opacity-60" />

            <div className="relative rounded-2xl overflow-hidden border-2 border-brand-gold/30 shadow-2xl shadow-brand-red/40">
              <img
                src={`${import.meta.env.BASE_URL}poster.png`}
                alt="JEE Society — College counselling mentors across IAT, CUET, IIIT, JoSAA, MHT-CET, COMEDK, VITEE, AKTU"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 reveal">
          {[
            { num: '50+', label: 'Mentors' },
            { num: '8+', label: 'Counsellings Covered' },
            { num: '30+', label: 'Partner Colleges' },
            { num: '500+', label: 'Students Guided' },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-brand-card border border-white/10 rounded-2xl px-4 py-5 text-center hover:border-brand-red/50 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gold-gradient">
                {s.num}
              </div>
              <div className="text-xs md:text-sm text-white/65 mt-1 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
