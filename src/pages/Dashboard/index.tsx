import { ReactElement } from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import LoggedInLayout from '../../components/LoggedInLayout'
import Navbar from '../../components/Navbar'

import DashboardBanner from '../../DashboardBanner'

const Dashboard = (): ReactElement => {
  return (
    <AnimatedPage>
      <LoggedInLayout>
        <div className='bg-lightBg'>
          <DashboardBanner />
        </div>
        <Navbar />
      </LoggedInLayout>
    </AnimatedPage>
  )
}

export default Dashboard
