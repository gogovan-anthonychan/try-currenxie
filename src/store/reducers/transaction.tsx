import { LoadingStatusType, TransactionType } from '../../Constants/types'
import ReducerActions from '../actions'

export type TransactionState = {
  status: LoadingStatusType
  transactionStatus: LoadingStatusType
  data?: TransactionType[]
}

const initTransactionState: TransactionState = {
  status: 'IDEL',
  transactionStatus: 'IDEL'
}

export const transactionReducer = (
  state: TransactionState = initTransactionState,
  action: { type: string; data: [TransactionType], transaction?: TransactionType }
): TransactionState => {
  switch (action.type) {
    case ReducerActions.GET_TRANSACTION:
      return { ...state, status: 'IDEL' }
    case ReducerActions.GET_TRANSACTION_SUCCESS:
      return { ...state, status: 'SUCCESS', data: action.data }
    case ReducerActions.GET_TRANSACTION_FAILED:
      return { ...state, status: 'FAILED' }
    case ReducerActions.MAKE_TRANSACTION_SUCCESS:
      return { ...state, transactionStatus: 'SUCCESS'}
    case ReducerActions.MAKE_TRANSACTION_FAILED:
      return { ...state, transactionStatus: 'FAILED' }
    case ReducerActions.MAKE_TRANSACTION_RESET:
      return { ...state, transactionStatus: 'IDEL' }
    case ReducerActions.INSERT_TRANSACTION:
      if (action.transaction) {
        const existingData = state.data?.concat(action.transaction)
        return { ...state, data: existingData }
      } else {
        return state
      }
    default:
      return state
  }
}
