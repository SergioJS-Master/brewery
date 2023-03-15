/* eslint-disable max-len */
import styles from './Main.module.css'
import video from '../../../videos/video1.mp4'
import { dataCardsBeer } from '../../../API/dataCardsBeer'
import { Slider } from './Sliders/Slider'
import picnicImg from '../../../images/picnic.jpg'

export function Main() {
  return (
    <>
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
      </div>
      <div className={styles.content}>
        <h3 className={styles.headingSlider}>OUR QUALITY PRODUCTS</h3>
        <div className={styles.sliderContainer}>
          <Slider sliders={dataCardsBeer} />
        </div>
      </div>
      <div>
        <hr className={styles.hrMain} />
      </div>
      <div className={styles.picnicContainer}>
        <h2 className={styles.picnicHeaderH2}>TIME WITH MOUNTAIN</h2>
        <div className={styles.picnicContant}>
          <div className={styles.picnicContantText}>
            <div>
              <h1 className={styles.picnicHeaderH1}>PICNICE TIME</h1>
              <h3 className={styles.picnicHeaderH3}>NICE EXPERIENCE</h3>
            </div>
            <div className={styles.picnicContantParagraph}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam numquam eaque omnis sapiente consectetur animi excepturi natus asperiores recusandae mollitia culpa dicta est ab, eligendi nemo earum eos provident dolorem?</p>
            </div>
          </div>
          <div>
            <img
              className={styles.picnicImgLogo}
              src={picnicImg}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </>
  )
}
