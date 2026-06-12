import { Hero } from '@/components/sections/Hero'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { WhyChooseUs } from '@/components/sections/Stats'
import { CtaSection } from '@/components/sections/CtaSection'
import { SectionDivider } from '@/components/ui/SectionDivider'

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <ServicesPreview />
      <SectionDivider />
      <WhyChooseUs />
      <SectionDivider />
      <CtaSection />
    </>
  )
}
