import { ReactElement, useEffect } from 'react'
import AnimatedPage from '../../components/AnimatedPage'
import ListOfOperations from '../../components/ListOfOperations'
import LoggedInLayout from '../../components/LoggedInLayout'
import Navbar from '../../components/Navbar'
import Spinner from '../../components/Spinner'
import { MONTH_NAMES } from '../../constants/month'
import { getAllOperations } from '../../store/actions/operations.actions'
import { useAppDispatch, useAppSelector } from '../../store/store'

const Operations = (): ReactElement => {
  const dispatch = useAppDispatch()
  const { app: { period }, operations: { operations, loading } } = useAppSelector(state => state)

  useEffect(() => {
    if (operations.length > 0) return
    const month = MONTH_NAMES.indexOf(period.month)
    const promise = dispatch(getAllOperations({ month }))

    return () => {
      promise.abort()
    }
  }, [])

  return (
    <AnimatedPage>
      <LoggedInLayout>
        <div className='bg-lightBg'>
          <div className='border-gray-100 border-solid border-b-2 h-16 bg-white grid place-content-center'>
            <h1 className='text-xl text-gray-800'>Operations</h1>
          </div>
          {
            loading && <Spinner />
          }
          {
            !loading && (operations.length === 0) && (
              <p className='text-center mt-12'>No operations registered {period.year}, {period.month}</p>
            )
          }
          <ListOfOperations operations={operations} />
        </div>
        <Navbar />
      </LoggedInLayout>
    </AnimatedPage>
  )
}

export default Operations
