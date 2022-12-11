import { FC, ReactElement } from 'react'

const Spinner: FC = (): ReactElement => {
  return (
    <span className='animate-spin border-4 border-blue border-t-transparent w-12 h-12 rounded-full left-0 right-0 m-auto top-0 bottom-0 absolute' />
  )
}

export default Spinner
