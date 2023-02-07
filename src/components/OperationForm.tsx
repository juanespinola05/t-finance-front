/* eslint-disable @typescript-eslint/no-misused-promises */
import { FC, ReactElement } from 'react'
import { SubmitHandler, useForm, UseFormProps } from 'react-hook-form'
import { createOperation, updateOperation } from '../store/actions/operations.actions'
import { removeSucess, setSuccess } from '../store/slices/operations.slice'
import { useAppDispatch, useAppSelector } from '../store/store'
import { Operation } from '../types/operation'
import ErrorAlert from './ErrorAlert'
import Form from './Form'
import Input from './Input'
import InvalidInputText from './InvalidInputText'
import Spinner from './Spinner'
import SucessAlert from './SucessAlert'

interface IProps {
  operation?: Operation
}

const OperationForm: FC<IProps> = ({ operation }): ReactElement => {
  const dispatch = useAppDispatch()
  const isCreating = typeof operation !== 'object'
  const formOptions: UseFormProps<Operation> = !isCreating
    ? {
        defaultValues: {
          ...operation,
          date: operation.date.toISOString().split('T')[0] as any
        }
      }
    : {}

  const { register, reset, watch, handleSubmit, formState: { errors } } = useForm<Operation>(formOptions)
  const { loading, error, success } = useAppSelector(state => state.operations)
  const showCategoriesSelect = watch('type')

  const onSubmit: SubmitHandler<Operation> = data => {
    if (data.type === 'outflow') data.amount = data.amount * -1
    const promise = isCreating
      ? dispatch(createOperation(data))
      : dispatch(updateOperation(data))
    void promise.then(() => {
      dispatch(setSuccess())
      setTimeout(() => {
        dispatch(removeSucess())
      }, 4000)
      reset()
    })
  }

  return (
    <>
      {
        success && <SucessAlert message={`Operation ${isCreating ? 'created' : 'updated'}`} />
      }
      <ErrorAlert error={error} />
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className={`w-max mt-16 mx-auto ${loading ? 'opacity-30' : ''}`}
      >
        {loading && <Spinner />}
        <div>
          <Input
            placeholder='Concept'
            fieldError={errors.concept}
            errorMessage='Concept is required'
            {...register('concept', { required: true, minLength: 3 })}
          />
        </div>
        <div>
          <Input
            placeholder='100.000'
            fieldError={errors.amount}
            type='number'
            errorMessage='Amount is required'
            {...register('amount', { required: true, min: 0 })}
          />
        </div>
        <div>
          <Input
            fieldError={errors.date}
            type='date'
            errorMessage='Date is required'
            {...register('date', { required: true })}
          />
        </div>
        <div>
          <fieldset>
            <legend>Operation Type</legend>
            <div className='flex gap-4 mt-2'>
              <input
                id='outflow'
                className='hidden input-selection'
                type='radio' value='outflow'
                {...register('type', { required: true })}
              />
              <label htmlFor='outflow' className='w-6/12 p-2 select-none text-center rounded-xl text-gray-700 border-blue border-2'>
                Outflow
              </label>
              <input
                id='income'
                className='hidden input-selection'
                type='radio' value='income'
                {...register('type', { required: true })}
              />
              <label htmlFor='income' className='w-6/12 p-2 select-none text-center rounded-xl text-gray-700 border-blue border-2'>
                Income
              </label>
            </div>
            {
              (errors.type !== undefined) && <InvalidInputText>Select the operation type</InvalidInputText>
            }
          </fieldset>
        </div>
        {
          isCreating && showCategoriesSelect === 'outflow' && (
            <div>
              <select
                defaultValue='Personal'
                className='h-12 w-80 px-4 rounded-xl bg-gray-100 shadow-input'
                {...register('category')}
              >
                <option value='food'>Food</option>
                <option value='personal'>Personal</option>
                <option value='expenses'>Expenses</option>
                <option value='house'>House</option>
              </select>
            </div>
          )
        }
        <div>
          <input
            value={isCreating ? 'Create' : 'Update operation'}
            className='button w-80'
            type='submit'
          />
        </div>
      </Form>
    </>
  )
}

export default OperationForm
