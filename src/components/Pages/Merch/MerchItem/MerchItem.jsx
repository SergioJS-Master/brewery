import styles from './merchItem.module.css'
import pic from '../../../../images/merch1.jpg'

export function MerchItem() {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.image__body}>
          <div className={styles.discount}>
            <p>5% OFF</p>
          </div>
          <div className={styles.tag}>
            <p>New In</p>
          </div>
          <img
            src={pic}
            className={styles.card__image}
            alt="картинка"
          />
        </div>
        <div className={styles.card__body}>
          <div className={styles.merchName}>
            <p>NOTRE DAME OATMEAL STADIUM HOODIE NOTRE DAME OATMEAL STADIUM</p>
          </div>
          {/* {!discount ? (
        <div className={styles.priceWr}>
          {' '}
          <p>
            {price}
            {' '}
            ₽
          </p>
        </div>
      ) : ( */}
          <div className={styles.priceDiscountWr}>
            <p>
              €1000
            </p>
            <div>
              <p>
                €1100
              </p>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image__body}>
          <div className={styles.discount}>
            <p>5% OFF</p>
          </div>
          <div className={styles.tag}>
            <p>New In</p>
          </div>
          <img
            src={pic}
            className={styles.card__image}
            alt="картинка"
          />
        </div>
        <div className={styles.card__body}>
          <div className={styles.merchName}>
            <p>NOTRE DAME OATMEAL STADIUM HOODIE</p>
          </div>
          {/* {!discount ? ( */}
          <div className={styles.priceWr}>
            {' '}
            <p>
              €1100
            </p>
          </div>
          {/* ) : (
          <div className={styles.priceDiscountWr}>
            <h6>
              1000
              {' '}
              €
            </h6>
            <div>
              <p>
                1100
                {' '}
                €
              </p>
            </div>
          </div> */}
          {/* )} */}

        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image__body}>
          <div className={styles.discount}>
            <p>5% OFF</p>
          </div>
          <div className={styles.tag}>
            <p>New In</p>
          </div>
          <img
            src={pic}
            className={styles.card__image}
            alt="картинка"
          />
        </div>
        <div className={styles.card__body}>
          <div className={styles.merchName}>
            <p>NOTRE DAME OATMEAL STADIUM HOODIE NOTRE DAME OATMEAL STADIUM</p>
          </div>
          {/* {!discount ? (
        <div className={styles.priceWr}>
          {' '}
          <p>
            {price}
            {' '}
            ₽
          </p>
        </div>
      ) : ( */}
          <div className={styles.priceDiscountWr}>
            <p>
              €1000
            </p>
            <div>
              <p>
                €1100
              </p>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image__body}>
          <div className={styles.discount}>
            <p>5% OFF</p>
          </div>
          <div className={styles.tag}>
            <p>New In</p>
          </div>
          <img
            src={pic}
            className={styles.card__image}
            alt="картинка"
          />
        </div>
        <div className={styles.card__body}>
          <div className={styles.merchName}>
            <p>NOTRE DAME OATMEAL STADIUM HOODIE</p>
          </div>
          {/* {!discount ? ( */}
          <div className={styles.priceWr}>
            {' '}
            <p>
              €1100
            </p>
          </div>
          {/* ) : (
          <div className={styles.priceDiscountWr}>
            <h6>
              1000
              {' '}
              €
            </h6>
            <div>
              <p>
                1100
                {' '}
                €
              </p>
            </div>
          </div> */}
          {/* )} */}

        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image__body}>
          <div className={styles.discount}>
            <p>5% OFF</p>
          </div>
          <div className={styles.tag}>
            <p>New In</p>
          </div>
          <img
            src={pic}
            className={styles.card__image}
            alt="картинка"
          />
        </div>
        <div className={styles.card__body}>
          <div className={styles.merchName}>
            <p>NOTRE DAME OATMEAL STADIUM HOODIE NOTRE DAME OATMEAL STADIUM</p>
          </div>
          {/* {!discount ? (
        <div className={styles.priceWr}>
          {' '}
          <p>
            {price}
            {' '}
            ₽
          </p>
        </div>
      ) : ( */}
          <div className={styles.priceDiscountWr}>
            <p>
              €1000
            </p>
            <div>
              <p>
                €1100
              </p>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.image__body}>
          <div className={styles.discount}>
            <p>5% OFF</p>
          </div>
          <div className={styles.tag}>
            <p>New In</p>
          </div>
          <img
            src={pic}
            className={styles.card__image}
            alt="картинка"
          />
        </div>
        <div className={styles.card__body}>
          <div className={styles.merchName}>
            <p>NOTRE DAME OATMEAL STADIUM HOODIE</p>
          </div>
          {/* {!discount ? ( */}
          <div className={styles.priceWr}>
            {' '}
            <p>
              €1100
            </p>
          </div>
          {/* ) : (
          <div className={styles.priceDiscountWr}>
            <h6>
              1000
              {' '}
              €
            </h6>
            <div>
              <p>
                1100
                {' '}
                €
              </p>
            </div>
          </div> */}
          {/* )} */}

        </div>
      </div>
    </>
  )
}
