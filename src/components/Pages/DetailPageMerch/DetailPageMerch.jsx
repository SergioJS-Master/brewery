/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable max-len */
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faMobileScreen, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { basketAdd } from '../../../redux/slices/basketSlice'
import {
  decrement,
  getMerchByIdSelector,
  increment,
  setSize,
  resetCount,
} from '../../../redux/slices/merchSlice'
import styles from './detailPageMerch.module.css'

export function DetailPageMerch() {
  const dispatch = useDispatch()
  const [over, setOver] = useState(false)
  // const [isActive, setActive] = useState(false)
  const { merchId } = useParams()

  const {
    id, selectedSize, size, name, stock, count, picture, picture2, discription, discount, price, tags,
  } = useSelector((state) => getMerchByIdSelector(state, merchId))

  const [active, setActive] = useState(size?.[0])

  const addNewItemToCart = (e) => {
    e.preventDefault()
    toast.success('Product added!', {
      duration: 2000,
    })
    dispatch(basketAdd(merchId))
  }

  const priceDiscount = Math.round(price * (1 - discount / 100))

  const decrementButton = () => {
    if (count > 1) {
      dispatch(decrement({ id }))
    }
  }

  const incrementButton = () => {
    if (count < stock) {
      dispatch(increment({ id }))
    } else if (size[selectedSize] > count) {
      dispatch(increment({ id }))
    }
  }

  const onSizeClick = (newSize) => {
    dispatch(setSize({ id, size: newSize }))
  }

  useEffect(() => {
    dispatch(resetCount(id))
  }, [merchId, selectedSize, dispatch])

  return (
    <>
      <div className={styles.DetailPageMerchBlock}>
        <div className={styles.DetailPageMerchContainer}>
          <div className={styles.DetailPageMerchContantPictures}>
            <div className={styles.DetailPageMerchImgContainer}>
              {tags && (
              <div>
                <h3 className={styles.tags}>{tags.toUpperCase()}</h3>
              </div>
              )}
              {!discount ? null : discount && (
                <div>
                  <h3 className={styles.discount}>{discount}<span>% OFF</span></h3>
                </div>
              )}
              { picture2 ? (
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
            <div>
              <h1 className={styles.headerNameH1}>{name.toUpperCase()}</h1>
              <hr />
            </div>
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
                    key={key}
                    onClick={() => { onSizeClick(key); setActive(key) }}
                    type="button"
                    disabled={!size[key]}
                    className={active === key ? (styles.buttonSizeActive) : (styles.buttonSize)}
                  >
                    {key}
                  </button>
                ))}

              </div>
            )}
            <h2 className={styles.discription}>
              {discription}
            </h2>
            <div>
              <div>
                <p className={styles.stockStyles}>STOCK: {size?.[selectedSize] || stock}</p>
              </div>
              <div className={styles.counterContainer}>
                <button
                  type="button"
                  className={styles.counterh2}
                  onClick={decrementButton}
                  disabled={!size ? (count === 1) : (!selectedSize || count === 1)}
                >-
                </button>
                <h2 className={styles.counter}>{count}</h2>
                <button
                  type="button"
                  className={styles.counterh2}
                  onClick={incrementButton}
                  disabled={!size ? (count === stock) : (!selectedSize || count === size[selectedSize])}
                >+
                </button>
                <button
                  className={styles.addBasketButton}
                  type="button"
                  disabled={!size ? (null) : (!selectedSize)}
                  onClick={addNewItemToCart}
                >
                  ADD CART
                </button>
              </div>
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
    </>
  )
}
