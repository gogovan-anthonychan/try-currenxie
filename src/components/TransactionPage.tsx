import { Button } from "@material-ui/core";
import Modal from "react-modal";
import React, { useState } from "react";
import { TransactionsTable } from "./TransactionsTable";
import { Form } from "./Form";

Modal.setAppElement("#root");

export const TransactionPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionsTable />
      <Button
        onClick={() => setIsOpen((prevState) => !prevState)}
        variant="contained"
        color="primary"
      >
        New Transfer
      </Button>
      <Modal onRequestClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Form />
      </Modal>
    </div>
  );
};
