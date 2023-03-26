/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faMobileScreen, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable max-len */
// import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getMerchByIdSelector } from '../../../redux/slices/merchSlice'
import styles from './detailPageMerch.module.css'

export function DetailPageMerch() {
  // const merch = useSelector()
  const [over, setOver] = useState(false)
  const { merchId } = useParams()

  const {
    size, name, picture, picture2, discription, discount, price, tags,
  } = useSelector((state) => getMerchByIdSelector(state, merchId))
  const priceDiscount = Math.round(price * (1 - (discount / 100)))

  return (
    <div className={styles.DetailPageMerchBlock}>
      <div className={styles.DetailPageMerchContainer}>
        <div className={styles.DetailPageMerchContantPictures}>
          <div className={styles.DetailPageMerchImgContainer}>
            <div>
              {tags}
            </div>
            { picture2 ? (
              <img
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
                src={!over ? picture : picture2}
                className={styles.DetailPageMerchImg}
                alt="картинка"
              />
            ) : (
              <img
                src={picture}
                className={styles.DetailPageMerchImg}
                alt="картинка"
              />
            )}

          </div>
        </div>
        <div className={styles.DetailPageMerchContantInfo}>
          <h1 className={styles.headerNameH1}>
            {name.toUpperCase()}
          </h1>
          <div>
            <p className={styles.statusProduct}>In Stock</p>
            <h1 className={styles.price}>
              {!discount ? (
                <div className={styles.priceWr}>
                  {' '}
                  <p>
                    €
                    {price}
                    {' '}
                  </p>
                </div>
              ) : (
                <div className={styles.priceDiscountWr}>
                  <p>
                    €
                    {priceDiscount}
                  </p>
                  <div>
                    <p>
                      €
                      {price}
                    </p>
                  </div>
                </div>
              )}
              <span>&#8364;</span>
            </h1>
          </div>
          {size && (
            <div className={styles.sizeContainer}>
              {Object.keys(size).map((key) => <button type="button" disabled={!size[key]}>{key}</button>)}

            </div>
          )}
          <h2 className={styles.discription}>
            {discription}
          </h2>
          <div className={styles.counterContainer}>
            <h2 className={styles.counterh2}>-</h2>
            <h2 className={styles.counterh2}>1</h2>
            <h2 className={styles.counterh2}>+</h2>
            <button type="button">ADD BASKET</button>
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
    </div>
  )
}
