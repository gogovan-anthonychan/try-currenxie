import { beneficiaryReducer } from './beneficiary';
import { transactionReducer } from './transaction';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  transaction: transactionReducer,
  beneficiary: beneficiaryReducer
});
