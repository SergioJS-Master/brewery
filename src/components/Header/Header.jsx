/* eslint-disable import/no-extraneous-dependencies */
import { memo, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import styles from './Header.module.css'
import logo from '../../images/logo2.png'
import { Menu } from '../Menu/Menu'
import { getTokenSelector } from '../../redux/slices/userSlice'

export function Header() {
  const token = useSelector(getTokenSelector)
  const [menuActive, setMenuActive] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeBackgroundScrolled = () => {
    if (window.scrollY > 1) {
      setScroll(true)
    } else setScroll(false)
  }
  window.addEventListener('scroll', changeBackgroundScrolled)

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={scroll ? styles.scrolledHeader : styles.scrollHeader}>
      <div className={styles.header}>
        <Link to="/" onClick={scrollTop}>
          <img
            className={scroll ? styles.headerLogoScrolled : styles.headerLogo}
            src={logo}
            alt="logo"
          />
        </Link>
        <div className={styles.btnBox}>
          {token && (
            <NavLink
              className={({ isActive }) => classNames({ [styles.activeLink]: isActive })}
              to="/cart"
            >
              <button type="button" className={styles.btnCart}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </NavLink>
          )}
          <button
            type="button"
            className={styles.burgerBtn}
            onClick={() => {
              document.body.style.overflow = 'hidden'
              setMenuActive(!menuActive)
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <Menu active={menuActive} setActive={setMenuActive} />
      </div>
    </div>
  )
}

export const HeaderMemo = memo(Header)
