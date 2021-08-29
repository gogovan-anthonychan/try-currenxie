import React, { FC } from 'react'
import { BeneficiaryType } from '../Constants/types'

type TransactionConfirmationType = {
  onPressConfirm: () => void
  onPressClose: () => void
  beneficiary: BeneficiaryType
  amount: string
}

export const TransactionConfirmation: FC<TransactionConfirmationType> = ({
  beneficiary,
  amount,
  onPressConfirm,
  onPressClose,
}) => {
  return (
    <>
      <div>
        <h1>Are you sure to continue to transaction?</h1>
        <div>
          <p>{`Beneficiary: ${beneficiary.holderName}`}</p>
          <p>{`amoune: ${amount} ${beneficiary.supportedCurrency}`}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button style={{ marginRight: 10 }} onClick={onPressConfirm}>
            Yes
          </button>
          <button onClick={onPressClose}>No</button>
        </div>
      </div>
    </>
  )
}
