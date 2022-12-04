import { FC, PropsWithChildren, ReactElement } from 'react'

const InvalidInputText: FC<PropsWithChildren> = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <p className='text-red-600 text-left pl-6'>
      {children}
    </p>
  )
}

export default InvalidInputText
