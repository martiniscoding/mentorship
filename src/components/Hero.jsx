import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  // Lightweight particle background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let particles = []

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 18000))
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        a: Math.random() * 0.6 + 0.2,
        gold: Math.random() < 0.25,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.gold
          ? `rgba(255, 215, 0, ${p.a})`
          : `rgba(255, 255, 255, ${p.a * 0.7})`
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-diagonal-red"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 bg-hero-radial pointer-events-none" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="particle-canvas" />

      {/* Diagonal red stripes */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(192,0,29,0.4) 0px, rgba(192,0,29,0.4) 2px, transparent 2px, transparent 28px)',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 text-center pt-32 md:pt-36 pb-20">
        {/* Limited seats — top centered chip */}
        <div className="mb-5 flex justify-center animate-fadeUp">
          <div className="inline-flex items-center gap-2 bg-brand-red/90 backdrop-blur border border-brand-gold/60 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full shadow-xl shadow-brand-red/40 animate-float">
            <i className="fa-solid fa-fire text-brand-gold"></i>
            Limited Seats — JEE 2026 Batch Open
          </div>
        </div>

        {/* Logo / brand mark */}
        <div
          className="mb-8 flex justify-center animate-fadeUp"
          style={{ animationDelay: '0.05s', opacity: 0 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-gold/40 bg-black/40 backdrop-blur">
            <i className="fa-solid fa-crown text-brand-gold"></i>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-white/90">
              JEE SOCIETY · SINCE 2023
            </span>
          </div>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight animate-fadeUp"
          style={{ animationDelay: '0.1s' }}
        >
          Get Into Your{' '}
          <span className="text-gold-gradient">Dream College</span>
          <br className="hidden sm:block" /> After{' '}
          <span className="text-brand-red">JEE 2026</span>
        </h1>

        <p
          className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-white/75 leading-relaxed animate-fadeUp"
          style={{ animationDelay: '0.25s', opacity: 0 }}
        >
          India's most affordable personal mentorship — by students from IITs,
          NITs, VIT, MH-CET colleges & more.{' '}
          <span className="text-white font-semibold">
            One mentor. Your rank. Best college guaranteed.
          </span>
        </p>

        {/* Price highlight chip */}
        <div
          className="mt-10 flex justify-center animate-fadeUp"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur border border-brand-gold/40 rounded-2xl px-5 py-3">
            <span className="text-white/50 text-sm md:text-base line-through font-semibold">
              ₹2,999
            </span>
            <span className="text-3xl md:text-4xl font-extrabold text-gold-gradient leading-none">
              ₹1,199
            </span>
            <span className="text-white/80 text-xs md:text-sm font-semibold leading-tight">
              for <span className="text-brand-gold">2 full months</span>
              <br className="hidden md:block" />
              <span className="text-white/55 font-normal">of mentorship</span>
            </span>
          </div>
        </div>

        <div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeUp"
          style={{ animationDelay: '0.45s', opacity: 0 }}
        >
          <a
            href="#pricing"
            className="btn-pulse inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-redDark text-white font-bold px-8 py-4 rounded-full text-base md:text-lg shadow-xl shadow-brand-red/40 transition-all border-2 border-brand-gold/60"
          >
            Start For ₹1,199 · 2 Months{' '}
            <i className="fa-solid fa-arrow-right"></i>
          </a>
          <a
            href="#why"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-brand-gold text-white hover:text-brand-gold font-semibold px-8 py-4 rounded-full text-base md:text-lg transition-all backdrop-blur"
          >
            See How It Works
          </a>
        </div>

        <p
          className="mt-4 text-xs md:text-sm text-white/55 font-medium animate-fadeUp"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          One-time payment · No recurring fees · No hidden charges
        </p>

        {/* Trust mini-row */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/60 text-sm animate-fadeUp"
          style={{ animationDelay: '0.55s', opacity: 0 }}
        >
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-brand-gold"></i>
            100% Genuine Mentors
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-brand-gold"></i>
            24-Hour Matching
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-graduation-cap text-brand-gold"></i>
            Mentors From Top Colleges
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-brand-bg pointer-events-none" />
    </section>
  )
}
