/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faMobileScreen, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable max-len */
// import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  decrement,
  getMerchByIdSelector,
  increment,
  setSize,
} from '../../../redux/slices/merchSlice'
import { basketAdd, getBasketSelector } from '../../../redux/slices/basketSlice'
import styles from './detailPageMerch.module.css'

export function DetailPageMerch() {
  // const merch = useSelector()
  const [over, setOver] = useState(false)
  const { merchId } = useParams()
  console.log(merchId)
  const dispatch = useDispatch()

  const { id, size, name, picture, picture2, discription, discount, price, tags } = useSelector(
    (state) => getMerchByIdSelector(state, merchId),
  )
  const addNewItemToCart = (e) => {
    e.preventDefault()
    dispatch(basketAdd(merchId))
  }

  const productInCart = useSelector(getBasketSelector)
  console.log(productInCart)

  const priceDiscount = Math.round(price * (1 - discount / 100))

  const incrementButton = () => {
    dispatch(increment(id))
  }

  const decrementButton = () => {
    dispatch(decrement())
  }

  const onSizeClick = (selectedSize) => {
    dispatch(setSize({ id, size: selectedSize }))
  }

  return (
    <>
      <div className={styles.DetailPageMerchBlock}>
        <div className={styles.DetailPageMerchContainer}>
          <div className={styles.DetailPageMerchContantPictures}>
            <div className={styles.DetailPageMerchImgContainer}>
              <div>
                <h3 className={styles.tags}>{tags}</h3>
              </div>
              {picture2 ? (
                <img
                  onMouseOver={() => setOver(true)}
                  onMouseOut={() => setOver(false)}
                  src={!over ? picture : picture2}
                  className={styles.DetailPageMerchImg}
                  alt="картинка"
                />
              ) : (
                <img src={picture} className={styles.DetailPageMerchImg} alt="картинка" />
              )}
            </div>
          </div>
          <div className={styles.DetailPageMerchContantInfo}>
            <h1 className={styles.headerNameH1}>{name.toUpperCase()}</h1>
            <div>
              <p className={styles.statusProduct}>In Stock</p>
              <h1 className={styles.price}>
                {!discount ? (
                  <div className={styles.priceWr}>
                    {' '}
                    <p>€{price} </p>
                  </div>
                ) : (
                  <div className={styles.priceDiscountWr}>
                    <p className={styles.priceDiscount}>€{priceDiscount}</p>
                    <div>
                      <p className={styles.oldPrice}>€{price}</p>
                    </div>
                  </div>
                )}
              </h1>
            </div>
            {size && (
              <div className={styles.sizeContainer}>
                {Object.keys(size).map((key) => (
                  <button
                    onClick={() => onSizeClick(key)}
                    type="button"
                    disabled={!size[key]}
                    className={styles.buttonSize}
                  >
                    {key}
                  </button>
                ))}
              </div>
            )}
            <h2 className={styles.discription}>{discription}</h2>
            <div className={styles.counterContainer}>
              <button type="button" className={styles.counterh2} onClick={decrementButton}>
                -
              </button>
              <h2 className={styles.counterh2}>1</h2>
              <button type="button" className={styles.counterh2} onClick={incrementButton}>
                +
              </button>
              <button type="button" onClick={addNewItemToCart}>
                ADD BASKET
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
  )
}
