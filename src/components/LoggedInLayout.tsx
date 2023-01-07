import { FC, PropsWithChildren, ReactElement } from 'react'

const LoggedInLayout: FC<PropsWithChildren> = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <div className='grid grid-cols-1 grid-rows-[auto_4rem] h-full'>
      {children}
    </div>
  )
}

export default LoggedInLayout
