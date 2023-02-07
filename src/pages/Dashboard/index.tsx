import { ReactElement } from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import LoggedInLayout from '../../components/LoggedInLayout'
import DashboardBanner from '../../components/DashboardBanner'
import LimitDashboard from '../../components/LimitDashboard'

const Dashboard = (): ReactElement => {
  return (
    <AnimatedPage>
      <LoggedInLayout>
        <div className='bg-lightBg'>
          <DashboardBanner />
          <LimitDashboard />
        </div>
      </LoggedInLayout>
    </AnimatedPage>
  )
}

export default Dashboard
