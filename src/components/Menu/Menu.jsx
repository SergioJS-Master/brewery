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
          <Link to="/about">о нас</Link>
          <Link to="/bars">бары</Link>
          <Link to="/catalog">каталог</Link>
          <Link to="/news">новости</Link>
          <Link to="/favorite">избранное</Link>
        </ul>
      </div>
    </div>
  )
}
