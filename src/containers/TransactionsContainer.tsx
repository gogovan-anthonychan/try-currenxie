import React, { FC } from "react";

interface ITransactionContainer {}

export const TransactionContainerBase: FC<ITransactionContainer> = () => {
  return <>Container</>;
};

// const TransactionContainer = connect(mapStateToProps, mapDispatchToProps)(TransactionContainerBase)
