/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  basketIsCkeckedOne,
  basketRemove,
  getBasketSelector,
} from '../../../../redux/slices/basketSlice'
import styles from './CartItem.module.css'

export function CartItem({ id, name, picture, price, discount }) {
  const dispatch = useDispatch()

  const productInCart = useSelector(getBasketSelector) // массив товаров в корзине (id count check)
  const currentProduct = productInCart.find((product) => product.id === id) // каждый продукт по отдельности (id)
  if (!currentProduct) {
    return null
  }

  const deleteItemHandler = () => {
    dispatch(basketRemove(id))
  }

  const onSelectProduct = (event) => {
    dispatch(basketIsCkeckedOne({ isChecked: event.target.checked, id }))
    // один выбранный товар
  }

  return (
    <>
      <div className={styles.wr}>
        <div className={styles.itemBoxInput}>
          <input
            className={styles.itemInput}
            type="checkbox"
            onChange={onSelectProduct}
            checked={currentProduct.isChecked}
          />
        </div>
        <div className={styles.itemBoxImg}>
          <Link to={`./${id}`}>
            <img className={styles.cartImg} src={picture} alt="pic" />
          </Link>
        </div>
        <div className={styles.itemBox}>
          <Link to={`./${id}`}>
            <h5 className={styles.cartName}>{name}</h5>
          </Link>
        </div>
        <div className={styles.itemBoxPrice}>
          <h6 className={styles.price}>
            <span>{discount > 0 && `${price} €`}</span>
          </h6>
          <h4 className={styles.price}>
            {discount > 0 && `${(price * (100 - discount)) / 100} €`}
            {discount === 0 && `${price} €`}
          </h4>
        </div>
        <div className={styles.itemBoxBtn}>
          <button className={styles.cartBtn} type="button" onClick={deleteItemHandler}>
            delete
          </button>
        </div>
      </div>
      <hr className={styles.hrB} />
    </>
  )
}
