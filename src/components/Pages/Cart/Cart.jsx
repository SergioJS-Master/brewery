/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-useless-fragment */
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBasketSelector } from '../../../redux/slices/basketSlice'
import styles from './Cart.module.css'

export function Cart() {
  const cartArray = useSelector(getBasketSelector)
  return (
    <>
      {!cartArray.length ? (
        <div className={styles.clearCart}>
          <h1>Cart is empty</h1>
          <p className={styles.clearCartP}>
            You can go to the <Link to="/">main page</Link> or see the offers in the
            <Link to="/merch"> catalog</Link>
          </p>
        </div>
      ) : (
        <div>Cart</div>
      )}
    </>
  )
}
