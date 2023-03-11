/* eslint-disable jsx-a11y/no-static-element-interactions */
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.css'

export function Menu({ active, setActive }) {
  useEffect(() => {
    const closeMenu = (e) => {
      if (e.key === 'Escape') {
        setActive(false)
      }
    }
    document.addEventListener('keyup', closeMenu)
    return () => {
      document.removeEventListener('keyup', closeMenu)
    }
  }, [setActive])

  const closeMenuByClickWrapper = (e) => {
    if (e.target !== e.currentTarget) {
      setActive(false)
    }
  }

  const closeMenu = () => {
    setActive(false)
  }

  return (
    <div className={active ? styles.menuActive : styles.menu}>
      <div className={styles.menuContentBlur} onClick={closeMenu} />
      <div className={styles.menuContent} onClick={closeMenuByClickWrapper}>
        <div className={styles.menuX} onClick={closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul className={styles.menuList}>
          <Link to="/about">О НАС</Link>
          <Link to="/bars">БАРЫ</Link>
          <Link to="/catalog">КАТАЛОГ</Link>
          <Link to="/news">НОВОСТИ</Link>
          <Link to="/favorite">ИЗБРАННОЕ</Link>
        </ul>
      </div>
    </div>
  )
}
