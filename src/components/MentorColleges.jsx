const colleges = [
  'IIT BHU',
  'IIT Bombay',
  'IIT Delhi',
  'NIT Trichy',
  'NIT Surathkal',
  'VIT Vellore',
  'COEP Pune',
  'VJTI Mumbai',
  'MIT Manipal',
  'BITS Pilani',
  'NIT Warangal',
  'IIIT Hyderabad',
  'DTU Delhi',
  'NSUT Delhi',
  'PICT Pune',
  'MHT-CET Colleges',
]

function Pill({ name, gold }) {
  return (
    <div
      className={`shrink-0 mx-3 px-6 py-3 rounded-full font-semibold text-sm md:text-base border ${
        gold
          ? 'bg-brand-gold/10 border-brand-gold/50 text-brand-gold'
          : 'bg-brand-red/10 border-brand-red/50 text-white'
      }`}
    >
      <i
        className={`fa-solid fa-graduation-cap mr-2 ${
          gold ? 'text-brand-gold' : 'text-brand-red'
        }`}
      ></i>
      {name}
    </div>
  )
}

export default function MentorColleges() {
  // Duplicate the list so the marquee loops seamlessly
  const list = [...colleges, ...colleges]
  return (
    <section id="mentors" className="relative py-20 md:py-28 bg-brand-bg2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 text-center reveal">
        <span className="inline-block text-brand-red font-bold uppercase tracking-widest text-xs mb-3">
          Top Mentors. Real Students.
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Your Mentor Could Be From…
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-white/70">
          We've onboarded students from India's most prestigious engineering
          institutes — your mentor will match your target college.
        </p>
      </div>

      {/* Marquee */}
      <div className="mt-14 marquee-wrapper relative">
        {/* Fades on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-brand-bg2 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-brand-bg2 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {list.map((c, i) => (
            <Pill key={i} name={c} gold={i % 4 === 0} />
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-white/40 text-sm">
        …and 30+ more colleges across India
      </p>
    </section>
  )
}
