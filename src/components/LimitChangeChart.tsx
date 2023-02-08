/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, ReactElement, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'
import { getLimit, createLimit } from '../store/actions/limit.actions'
import { useAppDispatch, useAppSelector } from '../store/store'
import { Limit } from '../types/limit'
import ErrorAlert from './ErrorAlert'
import Input from './Input'

const LimitChangeChart: FC = (): ReactElement => {
  const { amount: limitAmount, error } = useAppSelector(state => state.limit)
  const dispatch = useAppDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm<Pick<Limit, 'amount'>>({
    mode: 'onChange'
  })
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    if (limitAmount > 0) return
    const action = dispatch(getLimit())
    return () => {
      action.abort()
    }
  }, [])

  const handleLimitSubmit = (data: Pick<Limit, 'amount'>): void => {
    void dispatch(createLimit(data))
    setEditing(prev => !prev)
  }

  return (
    <>
      <ErrorAlert error={error} />
      <div className='mt-2 flex flex-col gap-2'>
        <h4 className=''>Monthly Spending Limit</h4>
        <form className='flex gap-2' onSubmit={handleSubmit(handleLimitSubmit)}>
          <div>
            <Input
              type='number'
              errorMessage='Limit must be a number'
              fieldError={errors.amount}
              placeholder={limitAmount.toString()}
              className='w-52' disabled={!editing}
              {...register('amount', { required: true, min: 1 })}
            />
          </div>
          {
          editing
            ? (
              <>
                <button type='submit'>
                  <BsFillCheckCircleFill className='text-lg text-green-500' />
                </button>
                <button onClick={() => setEditing(prev => !prev)}>
                  <MdCancel className='text-lg text-red-500' />
                </button>
              </>
              )
            : (
              <button onClick={() => setEditing(prev => !prev)}>
                <AiFillEdit className='text-lg text-blue' />
              </button>
              )
        }
        </form>
      </div>
    </>
  )
}

export default LimitChangeChart
