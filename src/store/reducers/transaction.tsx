import { LoadingStatusType, TransactionType } from '../../Constants/types'
import ReducerActions from '../actions'

export const permissionStatus = {
  UNCHECK: 'UNCHECK',
  IS_GRANTED: 'IS_GRANTED',
  IS_DENIED: 'IS_DENIED',
}

export const status = {
  IDEL: 'IDEL',
  SAVEING: 'SAVEING',
  FAIL: 'FAIL',
  SUCCESS: 'SUCCESS',
}

export type TransactionState = {
  status: LoadingStatusType
  data?: [TransactionType]
}

const initTransactionState: TransactionState = {
  status: 'IDEL',
}

export const transactionReducer = (
  state: TransactionState = initTransactionState,
  action: { type: string; data: [TransactionType] }
): TransactionState => {
  switch (action.type) {
    case ReducerActions.GET_TRANSACTION:
      return { ...state, status: 'IDEL' }
    case ReducerActions.GET_TRANSACTION_SUCCESS:
      return { ...state, status: 'SUCCESS', data: action.data }
    case ReducerActions.GET_TRANSACTION_FAILED:
      return { ...state, status: 'FAILED' }
    default:
      return state
  }
}
