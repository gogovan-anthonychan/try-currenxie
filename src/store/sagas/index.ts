import { TransactionType } from './../../Constants/types'
import ReducerActions from '../actions'
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'

function* fetchTransactions() {
  const response: { data: [TransactionType] } = yield axios.get(
    'https://612b85ec22bb490017893b77.mockapi.io/transaction'
  )
  const data = response.data
  if (response.data) {
    yield put({ type: ReducerActions.GET_TRANSACTION_SUCCESS, data })
  } else {
    yield put({ type: ReducerActions.GET_TRANSACTION_FAILED })
  }
}

export function* helloSaga() {
  yield takeLatest(ReducerActions.GET_TRANSACTION, fetchTransactions)
}
