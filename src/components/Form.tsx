import React, { FC, useState } from 'react'
import { Form as FinalForm, Field, FormSpy } from 'react-final-form'
import Select from 'react-select'

import { Button, FormLabel, Input } from '@material-ui/core'
import { BeneficiaryType } from '../Constants/types'

type FormType = {
  beneficiary: BeneficiaryType[]
}

export const Form: FC<FormType> = ({ beneficiary }) => {
  const onSubmit = (values: string) => {
    console.log(values)
  }

  const renderSubmitButton = ({ values }: { values: { amount?: string; beneficiary: { value: string } } }) => {
    if (values.amount && values.beneficiary) {
      return (
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      )
    } else {
      return null
    }
  }

  const renderCurrencyField = ({ values }: { values: { beneficiary: { value: string } } }) => {
    const chosenBeneficiary = beneficiary.find((data) => data.id == values.beneficiary?.value)
    return (
      <div>
        <Field
          name='currency'
          render={({ input }) => (
            <Input
              onChange={input.onChange}
              placeholder={chosenBeneficiary?.supportedCurrency || 'Select beneficiary'}
              disabled
            />
          )}
        />
      </div>
    )
  }

  return (
    <>
      <FinalForm
        onSubmit={onSubmit}
        render={({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <h1>Transfer</h1>
              <FormLabel>Amount</FormLabel>
              <div>
                <Field name='amount' render={({ input }) => <Input onChange={input.onChange} placeholder={'1000'} />} />
              </div>
            </div>
            <FormLabel>Beneficiary</FormLabel>
            <div>
              <Field
                name='beneficiary'
                render={({ input }) => (
                  <Select
                    onChange={input.onChange}
                    options={beneficiary.map((data) => ({ value: data.id, label: data.holderName }))}
                  />
                )}
              />
            </div>
            <FormLabel>Currency</FormLabel>
            <FormSpy>{renderCurrencyField}</FormSpy>
            <FormSpy>{renderSubmitButton}</FormSpy>
          </form>
        )}
      />
    </>
  )
}
