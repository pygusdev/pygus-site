import { Box } from '@chakra-ui/react'
import { HeroSection } from '../component/HeroSection'
import { DownloadSection } from '../component/DownloadSection'
import { VideoSection } from '../component/VideoSection'
import { ModernFAQ } from '../component/ModernFAQ'
import { Footer } from '../component/footer'
import { WhatsAppFAB } from '../component/fab'

export const Home = () => {
  return (
    <Box>
      <HeroSection />
      <DownloadSection />
      <VideoSection />
      <ModernFAQ />
      <Footer />
      <WhatsAppFAB />
    </Box>
  )
}
