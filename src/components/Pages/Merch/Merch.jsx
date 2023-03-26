import { useDispatch } from 'react-redux'
import styles from './Merch.module.css'
import { MerchItem } from './MerchItem/MerchItem'
import { merchDB } from '../../../API/merch'
import { setMerch } from '../../../redux/slices/merchSlice'

export function Merch() {
  const dispatch = useDispatch()
  dispatch(setMerch(merchDB))

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
      <hr style={{ width: '80%' }} />
    </div>
  )
}
