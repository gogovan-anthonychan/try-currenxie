import { LoadingStatusType, BeneficiaryType } from '../../Constants/types'
import ReducerActions from '../actions'

export type BeneficiaryState = {
  status: LoadingStatusType
  data?: [BeneficiaryType]
}

const initBeneficiaryState: BeneficiaryState = {
  status: 'IDEL',
}

export const beneficiaryReducer = (
  state: BeneficiaryState = initBeneficiaryState,
  action: { type: string; data: [BeneficiaryType] }
): BeneficiaryState => {
  switch (action.type) {
    case ReducerActions.GET_BENEFICIARY:
      return { ...state, status: 'IDEL' }
    case ReducerActions.GET_BENEFICIARY_SUCCESS:
      return { ...state, status: 'SUCCESS', data: action.data }
    case ReducerActions.GET_BENEFICIARY_FAILED:
      return { ...state, status: 'FAILED' }
    default:
      return state
  }
}
