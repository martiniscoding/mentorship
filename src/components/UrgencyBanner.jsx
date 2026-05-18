import { useEffect, useState } from 'react'

const DEADLINE = new Date('2026-05-23T00:00:00').getTime()

function getRemaining() {
  const diff = Math.max(0, DEADLINE - Date.now())
  const d = Math.floor(diff / (1000 * 60 * 60 * 24))
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const m = Math.floor((diff / (1000 * 60)) % 60)
  const s = Math.floor((diff / 1000) % 60)
  return { d, h, m, s }
}

function Box({ value, label }) {
  return (
    <div className="flex flex-col items-center bg-black/40 backdrop-blur border border-white/15 rounded-xl px-3 py-2 md:px-5 md:py-3 min-w-[64px] md:min-w-[84px]">
      <span className="text-2xl md:text-4xl font-extrabold text-brand-gold tabular-nums">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white/70">
        {label}
      </span>
    </div>
  )
}

export default function UrgencyBanner() {
  const [time, setTime] = useState(getRemaining())

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full bg-gradient-to-r from-brand-redDark via-brand-red to-brand-redDark overflow-hidden">
      {/* shine */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(255,215,0,0.25), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 5s linear infinite',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 py-6 md:py-7 flex flex-col md:flex-row items-center justify-between gap-5">
        <p className="text-center md:text-left text-white font-semibold text-sm md:text-lg leading-snug">
          <i className="fa-solid fa-bolt text-brand-gold mr-2"></i>
          <span className="hidden sm:inline">JEE 2026 Counseling Season is </span>
          <span className="uppercase font-extrabold">Here.</span>{' '}
          Don't lose your dream college to confusion.
        </p>
        <div className="flex items-center gap-2 md:gap-3">
          <Box value={time.d} label="Days" />
          <span className="text-brand-gold font-extrabold text-xl md:text-3xl">
            :
          </span>
          <Box value={time.h} label="Hours" />
          <span className="text-brand-gold font-extrabold text-xl md:text-3xl">
            :
          </span>
          <Box value={time.m} label="Min" />
          <span className="text-brand-gold font-extrabold text-xl md:text-3xl">
            :
          </span>
          <Box value={time.s} label="Sec" />
        </div>
      </div>
    </section>
  )
}
