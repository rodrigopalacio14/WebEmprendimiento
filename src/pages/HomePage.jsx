import { CTA } from '../components/CTA'
import { DemosSection } from '../components/DemosSection'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { PlansSection } from '../components/PlansSection'
import { ProblemSection } from '../components/ProblemSection'
import { SecuritySupport } from '../components/SecuritySupport'
import { ServicesSection } from '../components/ServicesSection'
import { WorkProcess } from '../components/WorkProcess'

export function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ProblemSection />
      <ServicesSection />
      <PlansSection />
      <DemosSection onNavigate={onNavigate} />
      <WorkProcess />
      <SecuritySupport />
      <CTA />
      <Footer />
    </>
  )
}
