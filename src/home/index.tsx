import { Box, useBreakpointValue } from '@chakra-ui/react'
import { AppArea } from '../components/appArea'
import { DownloadArea } from '../components/downloadArea/index'
import { FaqArea } from '../components/faqArea'
import { FeaturesArea } from '../components/FeaturesArea'
import { TestimonialsArea } from '../components/TestimonialsArea'
import { ModernFooter } from '../components/ModernFooter'
import { ModernHeader } from '../components/ModernHeader'
import { PlansArea } from '../components/plansArea'
import { WhatsAppFAB } from '../components/fab'

export const Home = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  return (
    <>
      {isMobile ? (
        <Box
          style={{
            background:
              'radial-gradient(75.96% 66.21% at 93.03% 14.84%, #AFD6F1 0%, #FEFFFF 100%)',
          }}
        >
          <ModernHeader />
          <DownloadArea />
        </Box>
      ) : (
        <>
          <ModernHeader />
          <DownloadArea />
        </>
      )}

      <FeaturesArea />
      <AppArea />
      <TestimonialsArea />
      <PlansArea />
      <FaqArea />
      <ModernFooter />
      <WhatsAppFAB />
    </>
  )
}
