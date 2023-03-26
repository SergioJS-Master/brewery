/* eslint-disable react/jsx-one-expression-per-line */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen, faTruck } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { MerchItem } from './MerchItem/MerchItem'
import { merchDB } from '../../../API/merch'
import styles from './Merch.module.css'

export function Merch() {
  return (
    <div className={styles.productListWr}>
      <div className={styles.wr}>
        {merchDB.map((el) => (
          <MerchItem
            key={el.id}
            id={el.id}
            name={el.name}
            picture={el.picture}
            picture2={el.picture2}
            description={el.description}
            discount={el.discount}
            stock={el.stock}
            price={el.price}
            tags={el.tags}
          />
        ))}
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
