/* eslint-disable import/no-extraneous-dependencies */
import { memo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.css'
import logo from '../../images/logo.png'
import { Menu } from '../Menu/Menu'

export function Header() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className={styles.header}>
      <Link to="/">
        <img className={styles.headerLogo} src={logo} alt="logo" />
      </Link>
      <button type="button" className={styles.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Menu active={menuActive} setActive={setMenuActive} />
    </div>
  )
}

export const HeaderMemo = memo(Header)
