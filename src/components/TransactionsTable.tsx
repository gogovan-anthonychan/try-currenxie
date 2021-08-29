import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { TransactionType } from '../Constants/types'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

type TransactionsTableType = {
  transactions: TransactionType[]
}

export const TransactionsTable: FC<TransactionsTableType> = ({ transactions }) => {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Holder Name</TableCell>
            <TableCell align='right'>Currency</TableCell>
            <TableCell align='right'>Amount</TableCell>
            <TableCell align='right'>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.holderName}>
              <TableCell component='th' scope='row'>
                {transaction.holderName}
              </TableCell>
              <TableCell align='right'>{transaction.amountCurrency}</TableCell>
              <TableCell align='right'>{transaction.amount}</TableCell>
              <TableCell align='right'>{transaction.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
