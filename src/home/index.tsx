import { DownloadArea } from '../component/downloadArea/index'
import { FaqArea } from '../component/faqArea'
import { Header } from '../component/header'
import { PlansArea } from '../component/plansArea'
import { TimeArea } from '../component/timeArea'

export const Home = () => {
  return (
    <>
      <Header />
      <DownloadArea />
      <PlansArea />
      <FaqArea />
      <TimeArea />
    </>
  )
}
