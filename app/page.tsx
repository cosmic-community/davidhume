import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import Footer from '@/components/Footer'
import { getServices, getTeamMembers, getTestimonials, getCaseStudies } from '@/lib/cosmic-data'

export default async function HomePage() {
  const [services, team, testimonials, caseStudies] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getTestimonials(),
    getCaseStudies(),
  ])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection services={services} />
      <TeamSection team={team} />
      <TestimonialsSection testimonials={testimonials} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <Footer />
    </div>
  )
}