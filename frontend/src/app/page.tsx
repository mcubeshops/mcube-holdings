import HeroSection from '@/components/sections/hero-section'
import CompaniesSection from '@/components/sections/companies-section'
import StatsSection from '@/components/sections/stats-section'
import NewsSection from '@/components/sections/news-section'
import CareersHighlight from '@/components/sections/careers-highlight'
import NewsletterSection from '@/components/sections/newsletter-section'

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CompaniesSection />
      <StatsSection />
      <NewsSection />
      <CareersHighlight />
      <NewsletterSection />
    </div>
  )
}
