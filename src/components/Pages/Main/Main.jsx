import styles from './Main.module.css'
import video from '../../../videos/video1.mp4'

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
          <div className={styles.fullScreenText}>только пиво и ничего кроме!</div>
        </div>
        <video preload="auto" autoPlay muted loop className={styles.fullScreenVideo}>
          <source type="video/mp4" src={video} />
        </video>
      </div>
    </div>
  )
}
