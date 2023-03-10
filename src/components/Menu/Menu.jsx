/* eslint-disable jsx-a11y/no-static-element-interactions */
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
  return (
    <div className={active ? styles.menuActive : styles.menu}>
      <div className={styles.menuContentBlur} />
      <div className={styles.menuContent} onClick={closeMenuByClickWrapper}>
        <ul className={styles.menuList}>
          <Link to="/about">
            <div className={styles.about}>О нас</div>
          </Link>
          <Link to="/bars">
            <div className={styles.bars}>Бары</div>
          </Link>
          <Link to="/catalog">
            <div className={styles.catalog}>Каталог</div>
          </Link>
          <Link to="/news">
            <div className={styles.news}>Новости</div>
          </Link>
          <Link to="/favorite">
            <div className={styles.favorite}>Избранное</div>
          </Link>
        </ul>
      </div>
    </div>
  )
}
