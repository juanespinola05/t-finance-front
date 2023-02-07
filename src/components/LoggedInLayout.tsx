import { FC, PropsWithChildren, ReactElement } from 'react'
import Navbar from './Navbar'

const LoggedInLayout: FC<PropsWithChildren> = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className='grid grid-cols-1 grid-rows-[auto_4rem] h-full'>
      {children}
      <Navbar />
    </div>
  )
}

export default LoggedInLayout
