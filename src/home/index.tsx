import { Box, useBreakpointValue } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { AppArea } from '../component/appArea'
import { DownloadArea } from '../component/downloadArea/index'
import { FaqArea } from '../component/faqArea'
import { Footer } from '../component/footer'
import { Header } from '../component/header'
import { PlansArea } from '../component/plansArea'
import { TimeArea } from '../component/timeArea'
import { WhatsAppFAB } from '../component/fab'
import { AnimatedBackground } from '../component/AnimatedBackground'
import { CustomCursor } from '../component/CustomCursor'
import { LoadingScreen } from '../component/LoadingScreen'

export const Home = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />
      <AnimatedBackground />
      {!isMobile && <CustomCursor />}
      {isMobile ? (
        <Box
          style={{
            background:
              'radial-gradient(75.96% 66.21% at 93.03% 14.84%, #AFD6F1 0%, #FEFFFF 100%)',
          }}
        >
          <Header />
          <DownloadArea />
        </Box>
      ) : (
        <>
          <Header />
          <DownloadArea />
        </>
      )}

      <AppArea />
      <PlansArea />
      <FaqArea />
      <TimeArea />
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
