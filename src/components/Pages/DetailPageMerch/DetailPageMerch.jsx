/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faMobileScreen, faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './detailPageMerch.module.css'

export function DetailPageMerch() {
  return (
    <>
      <div className={styles.DetailPageMerchBlock}>
        <div className={styles.DetailPageMerchContainer}>
          <div className={styles.DetailPageMerchContantPictures}>
            <div className={styles.DetailPageMerchImgContainer}>
              <img
                className={styles.DetailPageMerchImg}
                src="https://img.printfact.ru/image/big/women/slavyanskaya-simvolika/hudi-runicheskiy-krug-i-valyknut-zuqu5lt.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={styles.DetailPageMerchContantInfo}>
            <h1 className={styles.headerNameH1}>HEADER NAME</h1>
            <div>
              <p className={styles.statusProduct}>In Stock</p>
              <h1 className={styles.price}>
                24 <span>&#8364;</span>
              </h1>
            </div>
            <div className={styles.sizeContainer}>
              <p className={styles.sizeP}>S</p>
              <p className={styles.sizeP}>M</p>
              <p className={styles.sizeP}>L</p>
              <p className={styles.sizeP}>XL</p>
              <p className={styles.sizeP}>2XL</p>
            </div>
            <h2 className={styles.discription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, explicabo sunt quidem
              consequatur nostrum dignissimos culpa impedit unde ab debitis neque ut perferendis
              odio magni veniam, qui quod. Sint, tempora!
            </h2>
            <div className={styles.counterContainer}>
              <h2 className={styles.counterh2}>-</h2>
              <h2 className={styles.counterh2}>1</h2>
              <h2 className={styles.counterh2}>+</h2>
              <button type="button">ADD BASKET</button>
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
