export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5">
        {/* Brand */}
        <div>
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-gradient-to-br from-brand-red to-brand-redDark text-brand-gold shadow-lg shadow-brand-red/30">
              <i className="fa-solid fa-crown text-lg"></i>
            </span>
            <div>
              <div className="font-extrabold text-lg leading-tight">
                JEE <span className="text-brand-red">Society</span>
              </div>
              <div className="text-xs text-white/50">since 2023</div>
            </div>
          </a>
          <p className="mt-5 text-white/65 max-w-xl leading-relaxed">
            Rank Se Dream College Tak — India's most affordable personal
            mentorship for engineering aspirants.
          </p>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© 2026 JEE Society. All rights reserved.</div>
          <div>
            Made with <span className="text-brand-red">♥</span> for JEE
            aspirants
          </div>
        </div>
      </div>
    </footer>
  )
}
