/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-useless-fragment */
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getMerchtSelector } from '../../../redux/slices/merchSlice'
import styles from './Cart.module.css'
import { CartItem } from './CartItem/CartItem'

export function Cart() {
  const cartArray = useSelector(getMerchtSelector)
  console.log(cartArray)
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
        <div>
          {cartArray.map((el) => (
            <CartItem
              key={el.id}
              id={el.id}
              name={el.name}
              size={el.size}
              picture={el.picture}
              discription={el.discription}
              discount={el.discount}
              price={el.price}
            />
          ))}
        </div>
      )}
    </>
  )
}
