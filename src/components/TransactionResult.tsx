import React, { FC } from 'react'

type TransactionResultType = {
  isSuccess: boolean
  onPressOk: () => void
}

export const TransactionResult: FC<TransactionResultType> = ({ isSuccess, onPressOk }) => {
  return (
    <>
      <div>
        <h1>{isSuccess ? 'Transaction Success' : 'Transaction Failed'}</h1>
        {!isSuccess && <p>Please try again later!</p>}
        <button onClick={onPressOk}>OK</button>
      </div>
    </>
  )
}
