import React, { FC } from "react";
import { Form as FinalForm, Field, FormSpy } from "react-final-form";
import Select from "react-select";

import { Button, FormLabel, Input } from "@material-ui/core";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

export const Form: FC = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <FinalForm
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <FormSpy subscription={{ values: true }}>
              {({ values }) => {
                console.log(JSON.stringify(values, null, 2));
                return null;
              }}
            </FormSpy>
            <div>
              <h1>Transfer</h1>
              <FormLabel>Amount</FormLabel>
              <div>
                <Field
                  name="amount"
                  render={({ input }) => <Input onChange={input.onChange} />}
                  placeholder="1000"
                />
              </div>
            </div>
            <FormLabel>Beneficiary</FormLabel>
            <div>
              <Field
                name="beneficiary"
                render={({ input }) => (
                  <Select onChange={input.onChange} options={options} />
                )}
              />
            </div>
            <FormLabel>Currency</FormLabel>
            <div>
              <Field
                name="currency"
                render={({ input }) => (
                  <Input
                    onChange={input.onChange}
                    placeholder="Select beneficiary"
                    disabled
                  />
                )}
              />
            </div>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        )}
      />
    </>
  );
};
