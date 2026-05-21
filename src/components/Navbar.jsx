import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/40 ${
        scrolled
          ? 'bg-brand-bg/90 backdrop-blur-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="flex items-center shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="JEE Society"
            className={`transition-all duration-300 w-auto rounded-md ${
              scrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'
            } drop-shadow-[0_4px_14px_rgba(192,0,29,0.45)]`}
          />
        </a>

        {/* Center: mentor-college trust strip */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="inline-flex items-center gap-3 text-xs lg:text-sm font-medium text-white/85 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2 backdrop-blur whitespace-nowrap">
            <i className="fa-solid fa-graduation-cap text-brand-gold"></i>
            <span>Mentors from</span>
            <span className="text-brand-gold font-semibold">IIT</span>
            <span className="text-white/30">·</span>
            <span className="text-brand-gold font-semibold">NIT</span>
            <span className="text-white/30">·</span>
            <span className="text-brand-gold font-semibold">VIT</span>
            <span className="text-white/30">·</span>
            <span className="text-brand-gold font-semibold">BITS</span>
            <span className="text-white/30">·</span>
            <span className="text-brand-gold font-semibold">COEP</span>
          </div>
        </div>

        {/* CTA */}
        <a
          href="https://rzp.io/rzp/Fmped2SK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redDark text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full border-2 border-brand-gold/70 hover:border-brand-gold transition-all shadow-lg shadow-brand-red/30 shrink-0"
        >
          Book Now → ₹1,199
        </a>
      </div>
    </header>
  )
}
