/* eslint-disable import/no-extraneous-dependencies */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import logo1 from '../../images/test1.jpeg'
import logo2 from '../../images/test2.png'
import logo3 from '../../images/test3.jpg'

export function Footer() {
  return (
    <footer className={styles.wr}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGroup}>
          <Link to="/about">
            <span className={styles.footerSpan}>О НАС</span>
          </Link>
          <div className={styles.footerLinks}>
            <Link to="/about">ТУТ О ПИВОВАРНЕ 1</Link>
            <Link to="/about">ТУТ О ПИВОВАРНЕ2</Link>
            <Link to="/about">ТУТ О ПИВОВАРНЕ 3</Link>
          </div>
        </div>
        <div className={styles.footerGroup}>
          <Link to="/bars">
            <span className={styles.footerSpan}>БАРЫ</span>
          </Link>
          <div className={styles.footerLinks}>
            <Link to="/bars">БАР 1</Link>
            <Link to="/bars">БАР 2</Link>
            <Link to="/bars">БАР 3</Link>
            <Link to="/bars">БАР 4</Link>
            <Link to="/bars">БАР 5</Link>
            <Link to="/bars">БАР 6</Link>
          </div>
        </div>
        <div className={styles.footerGroup}>
          <Link to="/catalog">
            <span className={styles.footerSpan}>КАТАЛОГ</span>
          </Link>
          <div className={styles.footerLinks}>
            <Link to="/catalog">СОРТ 1</Link>
            <Link to="/catalog">СОРТ 2</Link>
            <Link to="/catalog">СОРТ 3</Link>
            <Link to="/catalog">СОРТ 4</Link>
            <Link to="/catalog">СОРТ 5</Link>
            <Link to="/catalog">СОРТ 6</Link>
          </div>
        </div>
        <div className={styles.footerGroup}>
          <Link to="/news">
            <span className={styles.footerSpan}>НОВОСТИ</span>
          </Link>
          <div className={styles.footerLinks}>
            <Link to="/news">НОВОСТИ 1</Link>
            <Link to="/news">НОВОСТИ 2</Link>
            <Link to="/news">НОВОСТИ 3</Link>
            <Link to="/news">НОВОСТИ 4</Link>
            <Link to="/news">НОВОСТИ 5</Link>
            <Link to="/news">НОВОСТИ 6</Link>
          </div>
        </div>
        <div className={styles.footerGroup}>
          <Link to="/">
            <span className={styles.footerSpan}>ПОЛЬЗОВАТЕЛЬ</span>
          </Link>
          <div className={styles.footerLinks}>
            <Link to="/signin">ВХОД</Link>
            <Link to="/signup">РЕГИСТРАЦИЯ</Link>
            <Link to="/user">ЛИЧНАЯ СТРАНИЦА</Link>
          </div>
        </div>
        <div className={styles.footerSocial}>
          <a href="https://vk.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faVk} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <hr />
      <div className={styles.footerContainerBottom}>
        <div className={styles.footerContainerBottomLeft}>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img className={styles.footerImg} src={logo1} alt="logo1" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img className={styles.footerImg} src={logo2} alt="logo1" />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img className={styles.footerImg} src={logo3} alt="logo1" />
          </a>
        </div>
        <div className={styles.footerContainerBottomRight}>
          <ul className={styles.footerContainerBottomRightUl}>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/TnC_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                Conditions of Use
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://www.diageoprivacycentre.com/en-row?pp=https://footer.diageohorizon.com/dfs/assets/www.guinness.com/PrivacyPolicy_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                Diageo Privacy Centre
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/UGC_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                UGC Policy
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/www.guinness.com_en-row_final_accessibility.html"
                target="_blank"
                rel="noreferrer"
              >
                Accessibility
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/PrivacyPolicy_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Settings
              </a>
            </li>
            <li>
              <a
                // eslint-disable-next-line max-len
                href="https://footer.diageohorizon.com/dfs/assets/www.guinness.com/PrivacyPolicy_en.html?locale=en-row"
                target="_blank"
                rel="noreferrer"
              >
                Privacy and Cookie Notice
              </a>
            </li>
            <li>
              <a href="https://responsibledrinking.eu/" target="_blank" rel="noreferrer">
                Responsible Drinking
              </a>
            </li>
            <li>
              <a href="https://www.drinkiq.com/" target="_blank" rel="noreferrer">
                DrinkIQ
              </a>
            </li>
            <li>
              <a href="https://www.thebar.com/" target="_blank" rel="noreferrer">
                theBar.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export const FooterMemo = memo(Footer)
