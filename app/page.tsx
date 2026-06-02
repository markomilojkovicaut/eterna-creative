import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import LogoStrip from '@/components/sections/LogoStrip'
import Services from '@/components/sections/Services'
import CaseStudies from '@/components/sections/CaseStudies'
import Testimonials from '@/components/sections/Testimonials'
import Team from '@/components/sections/Team'
import BlogPreview from '@/components/sections/BlogPreview'

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoStrip />
      <Services />
      <CaseStudies />
      <Testimonials />
      <Team />
      <BlogPreview />
      <Footer />
    </main>
  )
}
