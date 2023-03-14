import { Link } from 'react-router-dom'
import styles from './Main.module.css'
import video from '../../../videos/video1.mp4'
import { dataCardsBeer } from '../../../API/dataCardsBeer'
import { Slider } from './Sliders/Slider'

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.fullScreen}>
        <div className={styles.fullScreenBody}>
          <div className={styles.fullScreenTitle}>
            brewery
            <span className={styles.span}>[</span>
            mountain
            <span className={styles.span}>]</span>
          </div>
          <div className={styles.fullScreenText}>ONLY BEER AND NOTHING BUT!</div>
        </div>
        <video preload="auto" autoPlay muted loop className={styles.fullScreenVideo}>
          <source type="video/mp4" src={video} />
        </video>
      </div>
      <div className={styles.sliderContainer}>
        <Slider sliders={dataCardsBeer} />
      </div>
      <Link to="/about">about</Link>
    </div>
  )
}
