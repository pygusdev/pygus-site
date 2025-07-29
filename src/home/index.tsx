import { Box } from '@chakra-ui/react'
import { Header } from '../component/header'
import { HeroSection } from '../component/HeroSection'
import { DownloadSection } from '../component/DownloadSection'
import { VideoSection } from '../component/VideoSection'
import { PlansArea } from '../component/plansArea'
import { ModernFAQ } from '../component/ModernFAQ'
import { Footer } from '../component/footer'
import { WhatsAppFAB } from '../component/fab'

export const Home = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <DownloadSection />
      <VideoSection />
      <PlansArea />
      <ModernFAQ />
      <Footer />
      <WhatsAppFAB />
    </Box>
  )
}
