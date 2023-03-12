/* eslint-disable import/no-extraneous-dependencies */
import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'
import logo from '../../images/logo2.png'
import { Menu } from '../Menu/Menu'

export function Header() {
  const [menuActive, setMenuActive] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeBackgroundScrolled = () => {
    if (window.scrollY > 1) {
      setScroll(true)
    } else setScroll(false)
  }
  window.addEventListener('scroll', changeBackgroundScrolled)

  return (
    <div className={scroll ? styles.scrolledHeader : styles.scrollHeader}>
      <div className={styles.header}>
        <Link to="/">
          <img
            className={scroll ? styles.headerLogoScrolled : styles.headerLogo}
            src={logo}
            alt="logo"
          />
        </Link>
        <button
          type="button"
          className={styles.burgerBtn}
          onClick={() => setMenuActive(!menuActive)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <Menu active={menuActive} setActive={setMenuActive} />
      </div>
    </div>
  )
}

export const HeaderMemo = memo(Header)
