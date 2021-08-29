import ReducerActions from '../actions'
import { takeLatest } from 'redux-saga/effects'


function* fetchTransactions() {
  console.log('fetchTransactions')
}

export function* helloSaga() {
  yield takeLatest(ReducerActions.GET_TRANSACTION, fetchTransactions)
}
