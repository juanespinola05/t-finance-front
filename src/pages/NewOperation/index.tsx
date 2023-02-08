import { FC, ReactElement } from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import LoggedInLayout from '../../components/LoggedInLayout'
import OperationForm from '../../components/OperationForm'

const NewOperation: FC = (): ReactElement => {
  return (
    <AnimatedPage>
      <LoggedInLayout>
        <div className='bg-white flex flex-col justify-center items-center gap-6'>
          <h1 className='text-xl text-gray-800'>Create new operation</h1>
          <OperationForm />
        </div>
      </LoggedInLayout>
    </AnimatedPage>
  )
}

export default NewOperation
