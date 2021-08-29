import { Button } from '@material-ui/core'
import Modal from 'react-modal'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TransactionsTable } from './TransactionsTable'
import { Form } from './Form'
import ReducerActions from '../store/actions'
import { RootState } from '../store'
import { BeneficiaryType } from '../Constants/types'
import { TransactionConfirmation } from './TransactionConfirmation'
import { TransactionResult } from './TransactionResult'

Modal.setAppElement('#root')

export const TransactionPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isTransactionSuccess, setIsTransactionSuccess] = useState<boolean | undefined>(undefined)
  const [pendingTransaction, setPendingTransaction] =
    useState<{ beneficiary: BeneficiaryType; amount: string } | undefined>(undefined)
  let dispatch = useDispatch()
  let transactioinStatus = useSelector((state: RootState) => state.transaction.transactionStatus)
  let transactioins = useSelector((state: RootState) => state.transaction.data) || []
  let beneficiary = useSelector((state: RootState) => state.beneficiary.data) || []

  useEffect(() => {
    dispatch({ type: ReducerActions.GET_TRANSACTION })
    dispatch({ type: ReducerActions.GET_BENEFICIARY })
  }, [])

  useEffect(() => {
    if (transactioinStatus === 'FAILED') {
      setIsTransactionSuccess(false)
    } else if (transactioinStatus === 'SUCCESS') {
      setIsTransactionSuccess(true)
    } else {
      setIsTransactionSuccess(undefined)
    }
  }, [transactioinStatus])

  const onPressButton = () => {
    setIsOpen((prevState) => !prevState)
  }

  const onSubmit = (beneficiary: BeneficiaryType, amount: string) => {
    setPendingTransaction({
      beneficiary,
      amount,
    })
  }

  const onConfirm = () => {
    dispatch({ type: ReducerActions.MAKE_TRANSACTION, transaction: pendingTransaction })
  }

  const onPressDismissConfirmation = () => {
    setPendingTransaction(undefined)
  }

  const reset = () => {
    setIsOpen(false)
    setPendingTransaction(undefined)
    setIsTransactionSuccess(undefined)
    dispatch({ type: ReducerActions.MAKE_TRANSACTION_RESET })
  }

  const onPressResultOK = () => {
    if (isTransactionSuccess) {
      dispatch({
        type: ReducerActions.INSERT_TRANSACTION,
        transaction: {
          amount: pendingTransaction?.amount,
          amountCurrency: pendingTransaction?.beneficiary.supportedCurrency,
          benficiaryId: pendingTransaction?.beneficiary.id,
          createdAt: Date.now(),
          holderName: pendingTransaction?.beneficiary.holderName,
          id: transactioins.length + 2,
        },
      })
    }
    setIsOpen(false)
    setPendingTransaction(undefined)
    setIsTransactionSuccess(undefined)
    dispatch({ type: ReducerActions.MAKE_TRANSACTION_RESET })
  }

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionsTable transactions={transactioins} />
      <Button onClick={onPressButton} variant='contained' color='primary'>
        New Transfer
      </Button>
      <Modal onRequestClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Form beneficiary={beneficiary} onSubmitTransaction={onSubmit} />
      </Modal>
      <Modal onRequestClose={() => setPendingTransaction(undefined)} isOpen={!!pendingTransaction}>
        {pendingTransaction?.beneficiary && pendingTransaction.amount && (
          <TransactionConfirmation
            onPressConfirm={onConfirm}
            onPressClose={onPressDismissConfirmation}
            beneficiary={pendingTransaction?.beneficiary}
            amount={pendingTransaction?.amount}
          />
        )}
      </Modal>
      <Modal onRequestClose={reset} isOpen={isTransactionSuccess !== undefined}>
        <TransactionResult isSuccess={!!isTransactionSuccess} onPressOk={onPressResultOK} />
      </Modal>
    </div>
  )
}
