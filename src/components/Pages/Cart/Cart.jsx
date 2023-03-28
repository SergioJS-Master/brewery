/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-useless-fragment */
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faMobileScreen, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  basketCheckboxRemove,
  basketIsCheckedAllCards,
  clearAll,
  getBasketSelector,
} from '../../../redux/slices/basketSlice'
import { getMerchByIdsSelector } from '../../../redux/slices/merchSlice'
import styles from './Cart.module.css'
import { CartItem } from './CartItem/CartItem'

export function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartArray = useSelector(getBasketSelector) // массив товаров в корзине (id count check)

  const ids = cartArray.map((product) => product.id) // массив id в корзине

  const arrayProductsInCart = useSelector((state) => getMerchByIdsSelector(state, ids))

  const countCheckedProduct = cartArray.filter((product) => product.isChecked) // массив выбранных товаров в корзине

  const clearCart = () => {
    dispatch(clearAll())
  } // очистка корзины

  const checkedAllProducts = () => cartArray.every((product) => product.isChecked)
  // функция, при вызове которой ставиться чекбокс, если все чекбоксы проставлены

  const selectedAllProducts = (event) => {
    dispatch(basketIsCheckedAllCards(event.target.checked))
    // выбираем все продукты (чекбокс)
  }

  const removeSelectedProductsHandler = () => {
    dispatch(basketCheckboxRemove())
    // удаляет выбранный по чекбоксу товар
  }

  const selectedProductsIsChecked = cartArray.filter(
    (product) => product.isChecked === true,
    // массив, в котором отфильтрованы товары лежащие в корзине по ключу isCheked
  )

  const selectedProducts = arrayProductsInCart.filter(
    (item) => selectedProductsIsChecked.find((product) => product.id === item.id),
    // массив товаров отфильтрованных по нажатию на чекбокс (фулл)
  )

  const getTotalPrice = () => {
    const priceSelectedProduct = selectedProducts.reduce((sum, product) => {
      const { count } = countCheckedProduct.find((item) => item.id === product.id)
      return Math.round(product.price * count * ((100 - product.discount) / 100) + sum)
    }, 0)
    // массив хранит в себе цену выбранных продуктов. Проходимся по массиву и считаем суммарно цену с учетом скидок
    return priceSelectedProduct
  }

  const countTotalProductInCart = () => {
    if (countCheckedProduct.length === 0) return <p>No items selected</p>
    if (countCheckedProduct.length >= 1) return <p>{countCheckedProduct.length} item</p>
  }

  const navToCheckout = () => {
    navigate('/checkout')
  }

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
        <>
          <hr className={styles.hrH} />
          <h2 className={styles.title}>CART</h2>
          <div className={styles.wr}>
            <div className={styles.left}>
              <div className={styles.headerCart}>
                <div className={styles.inputBox}>
                  <input
                    className={styles.itemInput}
                    type="checkbox"
                    onChange={selectedAllProducts}
                    checked={checkedAllProducts()}
                  />
                  <p>SELECT ALL</p>
                </div>
                <div className={styles.btnBoxH}>
                  <button
                    className={styles.btnClear}
                    type="button"
                    onClick={removeSelectedProductsHandler}
                  >
                    delete checked
                  </button>
                  <button className={styles.btnClear} type="button" onClick={clearCart}>
                    CLEAR ALL
                  </button>
                </div>
              </div>
              {arrayProductsInCart.map((el) => (
                <CartItem
                  key={el.id}
                  id={el.id}
                  name={el.name}
                  size={el.size}
                  picture={el.picture}
                  discription={el.discription}
                  discount={el.discount}
                  price={el.price}
                  count={el.count}
                />
              ))}
            </div>
            {/* {arrayProductsInCart.map((el) => (
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
            ))} */}
            <div className={styles.cartRight}>
              <div>
                <p className={styles.order}>ORDER CONDITIONS</p>
              </div>
              <hr />
              <div className={styles.box}>
                <div className={styles.cartRightBox}>
                  <div className={styles.cartRightSum}>
                    <p className={styles.totalI}>total item</p>
                    <div className={styles.countTotal}>{countTotalProductInCart()}</div>
                  </div>
                  <div className={styles.totalPriceBox}>
                    <p className={styles.totalP}>total price</p>
                    <div className={styles.totalPrice}>{getTotalPrice()} €</div>
                  </div>
                </div>
                <div className={styles.btnBox}>
                  <button className={styles.btnCart} type="button" onClick={navToCheckout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.text}>
              <FontAwesomeIcon icon={faMobileScreen} className={styles.img} />
              <div className={styles.textBox}>
                <p className={styles.textOne}>GET IN TOUCH</p>
                <p className={styles.textTwo}>CHAT WITH US LIVE</p>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.text}>
              <FontAwesomeIcon icon={faTruck} className={styles.img} />
              <div className={styles.textBox}>
                <p className={styles.textOne}>FREE SHIPPING</p>
                <p className={styles.textTwo}>OVER $80.00</p>
              </div>
            </div>
            <hr className={styles.hr} />
            <div className={styles.text}>
              <FontAwesomeIcon icon={faCircleCheck} className={styles.img} />
              <div className={styles.textBox}>
                <p className={styles.textOne}>WE&apos;VE GOT YOU COVERED</p>
                <p className={styles.textTwo}>AMAZING CUSTOMER SERVICE</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
