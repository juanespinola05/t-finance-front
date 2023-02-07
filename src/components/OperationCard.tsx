import { FC, ReactElement } from 'react'
import { Operation } from '../types/operation'
import { formatCurrency } from '../utils/intl'
import OperationTypeIcon from './OperationTypeIcon'

const OperationCard: FC<Partial<Operation>> = ({ amount = 0, category, concept, date, type = 'outflow' }): ReactElement => {
  return (
    <article className='p-2 rounded-2xl bg-white flex gap-2 items-center text-gray-700'>
      <div>
        <OperationTypeIcon type={type} />
      </div>
      <div className='overflow-hidden'>
        <p className='whitespace-nowrap truncate'>{concept}</p>
        <p className='text-sm text-gray-500'>${formatCurrency(amount)}</p>
      </div>
    </article>
  )
}

export default OperationCard
