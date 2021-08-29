import { Button } from '@material-ui/core'
import Modal from 'react-modal'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { TransactionsTable } from './TransactionsTable'
import { Form } from './Form'
import ReducerActions from '../store/actions'

Modal.setAppElement('#root')

export const TransactionPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  let dispatch = useDispatch()

  const onPressButton = () => {
    dispatch({type: ReducerActions.GET_TRANSACTION})
    setIsOpen((prevState) => !prevState)
  }

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionsTable />
      <Button onClick={onPressButton} variant='contained' color='primary'>
        New Transfer
      </Button>
      <Modal onRequestClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Form />
      </Modal>
    </div>
  )
}
