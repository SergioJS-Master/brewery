import styles from './Merch.module.css'
import { MerchItem } from './MerchItem/MerchItem'

export function Merch() {
  return (
    <div className={styles.productListWr}>
      <div className={styles.wr}>
        <MerchItem />
      </div>
      <hr style={{ width: '80%' }} />
    </div>
  )
}
