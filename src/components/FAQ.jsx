import { useState } from 'react'

const faqs = [
  {
    q: 'Who are the mentors?',
    a: "Real students currently studying in top engineering colleges — IITs, NITs, VIT, BITS, MHT-CET colleges and more. Every mentor is verified and personally onboarded by our team.",
  },
  {
    q: "What if I'm not satisfied with my mentor?",
    a: "If your matched mentor doesn't feel like the right fit, just let us know — we'll reassign you to a different mentor from your target college, no questions asked.",
  },
  {
    q: 'Which counselings do you cover?',
    a: 'JoSAA, CSAB, MHT-CET, VIT, COMEDK, KCET, BITSAT, and all major state-level counselings. If you have rank in it, we can guide you through it.',
  },
  {
    q: 'When will I be contacted?',
    a: 'Within 24 hours of payment. Most students hear from their mentor on the same day, via WhatsApp.',
  },
  {
    q: 'Is ₹1,199 the total cost?',
    a: 'Yes — one-time payment, no hidden charges, no upsells. Pay once, get full 2-month access to your personal mentor.',
  },
]

function Item({ item, open, onToggle, index }) {
  return (
    <div
      className="reveal border border-white/10 rounded-xl bg-brand-card overflow-hidden"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-base md:text-lg text-white">
          {item.q}
        </span>
        <span
          className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            open
              ? 'bg-brand-red text-white rotate-45'
              : 'bg-white/5 text-brand-gold'
          }`}
        >
          <i className="fa-solid fa-plus"></i>
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 md:px-6 pb-6 text-white/70 leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center reveal">
          <span className="inline-block text-brand-red font-bold uppercase tracking-widest text-xs mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Got Questions?{' '}
            <span className="text-gold-gradient">We've Got Answers.</span>
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <Item
              key={i}
              index={i}
              item={f}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
