import { FC, ReactElement } from 'react'
import { Operation } from '../types/operation'
import OperationCard from './OperationCard'

interface IProps {
  operations: Operation[]
}

const ListOfOperations: FC<IProps> = ({ operations }): ReactElement => {
  return (
    <div className='flex flex-col gap-4 overflow-y-scroll max-h-[570px] px-4 py-4'>
      {
        operations.map(operation => (
          <OperationCard key={operation.id} {...operation} />
        ))
      }
    </div>
  )
}

export default ListOfOperations
