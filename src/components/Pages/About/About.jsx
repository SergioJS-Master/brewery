/* eslint-disable max-len */
import story1 from '../../../images/story1.jpg'
import story2 from '../../../images/story2.jpg'
import story3 from '../../../images/story3.jpg'
import story4 from '../../../images/story4.jpg'
import stylesAbout from './About.module.css'

export function About() {
  return (
    <div className={stylesAbout.aboutContainer}>
      <div className={stylesAbout.aboutContant}>
        <div className={stylesAbout.aboutHeader}>
          <h1 className={stylesAbout.aboutHeaderH1}>THIS BIG STORY STARTED WITH SOMETHING VERY SMALL</h1>
        </div>
        <hr className={stylesAbout.hr} />
        <div className={stylesAbout.containerStory1}>
          <div>
            <img
              className={stylesAbout.imgStory1}
              src={story1}
              alt="logo"
            />
          </div>
          <div>
            <h1>ZAGOLOVOK</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil quo exercitationem voluptates consequatur corporis maxime. Ex culpa ea harum ullam, mollitia sapiente facere illum eveniet ipsum suscipit similique. Explicabo.
            </p>
          </div>
        </div>
        <div className={stylesAbout.containerStory2}>
          <div>
            <h1>ZAGOLOVOK</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nihil quo exercitationem voluptates consequatur corporis maxime. Ex culpa ea harum ullam, mollitia sapiente facere illum eveniet ipsum suscipit similique. Explicabo.
            </p>
          </div>
          <div>
            <img
              className={stylesAbout.imgStory1}
              src={story2}
              alt="logo"
            />
          </div>
        </div>
        <div className={stylesAbout.containerStory3_4}>
          <h1>ZAGOLOVOK</h1>
          <div className={stylesAbout.containerImgStory3_4}>
            <img className={stylesAbout.containerImgStory3} src={story3} alt="logo" />
            <img className={stylesAbout.containerImgStory4} src={story4} alt="logo" />
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo suscipit earum omnis sunt veniam voluptatum iste molestiae! Voluptate in eos harum exercitationem! Saepe provident ipsum debitis fuga esse dicta deserunt?</p>
        </div>
        <hr className={stylesAbout.hr} />
      </div>
    </div>

  )
}
