import React, { FC } from "react";

interface IBeneficiary {
  holderName: string;
  supportedCurrency: string;
  id: number;
}

interface IBeneficiariesContainer {
  render: (props: { beneficiaries: IBeneficiary[] }) => void;
}

export const BeneficiariesContainerBase: FC<IBeneficiariesContainer> = ({
  render
}) => {
  const data = [
    {
      holderName: "Flo Bahringer",
      supportedCurrency: "HKD",
      id: 1
    },
    {
      holderName: "Zoie Tillman DVM",
      supportedCurrency: "EUR",
      id: 2
    }
  ];

  return <>{render({ beneficiaries: data })}</>;
};

/* Connect the container with the redux store here and replace the dummy 
   data passed to the render function 
   export const BeneficiariesContainer = connect(mapStateToProps, mapDispatchToProps)(BeneficiariesContainerBase)
*/
