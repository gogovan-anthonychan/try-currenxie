export type LoadingStatusType = 'IDEL' | 'LOADING' | 'FAILED' | 'SUCCESS'

export type TransactionType = {
  amount: number
  amountCurrency: string
  benficiaryId: number
  createdAt: number
  holderName: string
  id: string
}

export type BeneficiaryType = {
  supportedCurrency: string
  holderName: string
  id: string
}