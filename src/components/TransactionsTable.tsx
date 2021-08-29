import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(
  holderName: string,
  currency: string,
  amount: number,
  date: number
) {
  return { holderName, currency, amount, date };
}

const rows = [
  createData("Akeem Spencer", "DKK", 562.97, 1604990516),
  createData("Miss Mariane Douglas", "JOD", 358.82, 1604990456)
];

export const TransactionsTable: FC = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Holder Name</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.holderName}>
              <TableCell component="th" scope="row">
                {row.holderName}
              </TableCell>
              <TableCell align="right">{row.currency}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
