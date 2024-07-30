import { DownloadArea } from '../component/downloadArea/index'
import { FaqArea } from '../component/faqArea'
import { Footer } from '../component/footer'
import { Header } from '../component/header'
import { PlansArea } from '../component/plansArea'
import { TimeArea } from '../component/timeArea'
import { VideoArea } from '../component/videoArea'

export const Home = () => {
  return (
    <>
      <Header />
      <DownloadArea />
      <VideoArea />
      <PlansArea />
      <FaqArea />
      <TimeArea />
      <Footer />
    </>
  )
}
