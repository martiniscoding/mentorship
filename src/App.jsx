import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UrgencyBanner from './components/UrgencyBanner'
import Problem from './components/Problem'
import Solution from './components/Solution'
import MentorsShowcase from './components/MentorsShowcase'
import MentorColleges from './components/MentorColleges'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  // Scroll reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-brand-bg">
      <Navbar />
      <main>
        <Hero />
        <UrgencyBanner />
        <MentorsShowcase />
        <Problem />
        <Solution />
        <MentorColleges />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
