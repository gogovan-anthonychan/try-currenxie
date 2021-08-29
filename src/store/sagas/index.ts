import { TransactionType, BeneficiaryType } from './../../Constants/types'
import ReducerActions from '../actions'
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios'

function* fetchBeneficiary() {
  const response: { data: [BeneficiaryType] } = yield axios.get(
    'https://612b85ec22bb490017893b77.mockapi.io/beneficiary'
  )
  const data = response.data
  if (response.data) {
    yield put({ type: ReducerActions.GET_BENEFICIARY_SUCCESS, data })
  } else {
    yield put({ type: ReducerActions.GET_BENEFICIARY_FAILED })
  }
}

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

function* postTransactions(action: { type: string; transaction: { amount: string; beneficiary: BeneficiaryType } }) {
  const randomRespose = Math.random() * 100
  if (randomRespose > 50) {
    yield put({ type: ReducerActions.MAKE_TRANSACTION_SUCCESS })
  } else {
    yield put({ type: ReducerActions.MAKE_TRANSACTION_FAILED })
  }
}

export function* appSaga() {
  yield takeLatest(ReducerActions.GET_TRANSACTION, fetchTransactions)
  yield takeLatest(ReducerActions.GET_BENEFICIARY, fetchBeneficiary)
  yield takeLatest(ReducerActions.MAKE_TRANSACTION, postTransactions)
}
