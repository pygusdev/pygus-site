import { DownloadArea } from '../component/downloadArea/index'
import { FaqArea } from '../component/faqArea'
import { Header } from '../component/header'
import { PlansArea } from '../component/plansArea'

export const Home = () => {
  return (
    <>
      <Header />
      <DownloadArea />
      <PlansArea />
      <FaqArea />
    </>
  )
}
