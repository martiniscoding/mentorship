import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'JEE 2027', href: '#jee-2027' },
  { label: 'JEE 2028', href: '#jee-2028' },
  { label: 'Trust', href: '#trust' },
]

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

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/85 hover:text-brand-gold transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-brand-gold hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-redDark text-white font-semibold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full border-2 border-brand-gold/70 hover:border-brand-gold transition-all shadow-lg shadow-brand-red/30 shrink-0"
        >
          Book Now → ₹1,199
        </a>
      </div>
    </header>
  )
}
