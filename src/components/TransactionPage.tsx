import { Button } from '@material-ui/core'
import Modal from 'react-modal'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TransactionsTable } from './TransactionsTable'
import { Form } from './Form'
import ReducerActions from '../store/actions'
import { RootState } from '../store'
import { BeneficiaryType } from '../Constants/types'

Modal.setAppElement('#root')

export const TransactionPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
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

  const onSubmit = (beneficiary: BeneficiaryType, amount: string) => {}

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
    </div>
  )
}
