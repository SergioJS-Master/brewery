import { Link } from 'react-router-dom'
import { dataCardsBeer } from '../../../api/dataCardsBeer'
import styles from './Main.module.css'
import { Slider } from './Sliders/Slider'
// import { Slider } from './Sliders/Slider'

export function Main() {
  return (
    <div className={styles.main}>
      <h1>Main</h1>
      <div className={styles.sliderContainer}>
        <Slider sliders={dataCardsBeer} />
      </div>
      <Link to="/about">about</Link>
    </div>
  )
}
