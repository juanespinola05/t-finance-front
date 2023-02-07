import { FC, ReactElement } from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import LoggedInLayout from '../../components/LoggedInLayout'
import OperationForm from '../../components/OperationForm'

const NewOperation: FC = (): ReactElement => {
  return (
    <AnimatedPage>
      <LoggedInLayout>
        <div className='bg-white'>
          <div className='border-gray-100 border-solid border-b-2 h-16 bg-white grid place-content-center'>
            <h1 className='text-xl text-gray-800'>Create new operation</h1>
          </div>
          <div>
            <OperationForm />
          </div>
        </div>
      </LoggedInLayout>
    </AnimatedPage>
  )
}

export default NewOperation
