import { LoadingStatusType } from '../../Constants/types'
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

type TransactionState = {
  status: LoadingStatusType
}

const initTransactionState: TransactionState = {
  status: 'IDEL',
}

export const transactionReducer = (state: TransactionState = initTransactionState, action: { type: string }) => {
  switch (action.type) {
    case ReducerActions.GET_TRANSACTION:
      console.log('get transaction')
      return state
    default:
      return state
  }
}
