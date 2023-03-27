/* eslint-disable object-curly-newline */
/* eslint-disable import/no-extraneous-dependencies */
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { toast, Toaster } from 'react-hot-toast'
import styles from './Payments.module.css'
import { validatorPayments } from './validatorPayments'

export function Payments() {
  const initPaymentsValues = {
    number: '',
    date: '',
    cvc: '',
  }

  const submitHandler = () => {
    toast.success('payment completed successfully!', {
      duration: 2000,
    })
  }

  return (
    <div className={styles.payments}>
      <p className={styles.textA}>Enter your card details:</p>
      <div>
        <Formik
          initialValues={initPaymentsValues}
          onSubmit={submitHandler}
          validationSchema={validatorPayments}
        >
          <Form className={styles.form}>
            <div className={styles.inputBoxN}>
              <Field name="number" placeholder="1234 1234 1234 1234" type="number" />
              <div className={styles.errorMessage}>
                <ErrorMessage component="p" className={styles.error} name="email" />
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.inputBoxD}>
                <Field name="date" placeholder="MM / YY" type="text" />
                <div className={styles.errorMessage}>
                  <ErrorMessage component="p" className={styles.error} name="email" />
                </div>
              </div>
              <div className={styles.inputBoxC}>
                <Field name="cvc" placeholder="CVC" type="number" />
                <div className={styles.errorMessage}>
                  <ErrorMessage component="p" className={styles.error} name="email" />
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div>
        <p className={styles.textB}>
          *Your card details are protected using PCI DSS v3.2 security standards.
        </p>
      </div>
      <div>
        <button className={styles.pay} type="button" onClick={submitHandler}>
          place order
        </button>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            border: '1px solid white',
            borderRadius: '8px',
            backgroundColor: 'rgba(0, 0, 0)',
            padding: '4px',
            color: 'white',
          },
        }}
      />
    </div>
  )
}
