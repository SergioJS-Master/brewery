import * as Yup from 'yup'

export const validatorPayments = Yup.object({
  number: Yup.number().required('you need to enter number cart'),
  date: Yup.string().required('you need to enter cart date'),
  cvc: Yup.number().required('you need to enter CVC'),
})
