export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-redDark via-brand-red to-[#5a000d]" />
      {/* pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,215,0,0.6) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-gold/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/30 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-5 text-center reveal">
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur border border-brand-gold/40 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-brand-gold mb-6">
          <i className="fa-solid fa-crown"></i> JEE 2026 Batch Now Open
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
          Your Dream College Is{' '}
          <span className="text-brand-gold">One Decision</span> Away
        </h2>
        <p className="mt-6 text-white/85 text-lg md:text-xl max-w-2xl mx-auto">
          Don't guess. Don't panic. Get a mentor who's been there.
        </p>

        <a
          href="https://rzp.io/rzp/Fmped2SK"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pulse mt-10 inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-yellow-400 text-black font-extrabold px-10 py-5 rounded-full text-lg md:text-xl shadow-2xl shadow-black/40 border-2 border-white/20 transition-all"
        >
          Book My Mentor → ₹1,199{' '}
          <i className="fa-solid fa-arrow-right"></i>
        </a>

        <p className="mt-6 text-white/80 text-sm font-semibold flex items-center justify-center gap-2">
          <i className="fa-solid fa-hourglass-half text-brand-gold"></i>
          Seats filling fast for JEE 2026 batch
        </p>
      </div>
    </section>
  )
}
