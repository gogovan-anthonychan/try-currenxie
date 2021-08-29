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

Modal.setAppElement('#root')

export const TransactionPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [pendingTransaction, setPendingTransaction] =
    useState<{ beneficiary: BeneficiaryType; amount: string } | undefined>(undefined)
  let dispatch = useDispatch()
  let transactioins = useSelector((state: RootState) => state.transaction.data) || []
  let beneficiary = useSelector((state: RootState) => state.beneficiary.data) || []

  useEffect(() => {
    dispatch({ type: ReducerActions.GET_TRANSACTION })
    dispatch({ type: ReducerActions.GET_BENEFICIARY })
  }, [])

  const onPressButton = () => {
    setIsOpen((prevState) => !prevState)
  }

  const onSubmit = (beneficiary: BeneficiaryType, amount: string) => {
    setPendingTransaction({
      beneficiary,
      amount,
    })
  }

  const onConfirm = () => {}

  const onPressDismissConfirmation = () => {
    setPendingTransaction(undefined)
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
    </div>
  )
}
