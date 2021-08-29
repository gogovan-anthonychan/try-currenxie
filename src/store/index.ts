import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'

import { rootReducer } from "./reducers";
import { appSaga } from "./sagas";
import { TransactionState } from "./reducers/transaction";
import { BeneficiaryState } from "./reducers/beneficiary";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(appSaga);

export type RootState = {
  transaction: TransactionState
  beneficiary: BeneficiaryState
}