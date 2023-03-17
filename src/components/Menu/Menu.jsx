/* eslint-disable jsx-a11y/no-static-element-interactions */
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTokenSelector, removeUser } from '../../redux/slices/userSlice'
import styles from './Menu.module.css'

export function Menu({ active, setActive }) {
  const dispatch = useDispatch()
  const token = useSelector(getTokenSelector)
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

  const deleteUser = () => {
    dispatch(removeUser())
  }

  return (
    <div className={active ? styles.menuActive : styles.menu}>
      <div className={styles.menuContentBlur} onClick={closeMenu} />
      <div className={styles.menuContent} onClick={closeMenuByClickWrapper}>
        <div className={styles.menuX} onClick={closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul className={styles.menuList}>
          <div className={styles.menuListA}>
            <Link to="/about">ABOUT</Link>
          </div>
          <div className={styles.menuListA}>
            <Link to="/bars">BARS</Link>
          </div>
          <div className={styles.menuListA}>
            <Link to="/user">USER</Link>
          </div>
          <div className={styles.menuListA}>
            <Link to="/news">NEWS</Link>
          </div>
          <div className={styles.menuListA}>
            <Link to="/favorite">FAVORITES</Link>
          </div>
        </ul>
        <ul className={styles.menuListTwo}>
          <div className={styles.reg}>
            <Link to="/signup">SIGN-UP</Link>
          </div>
          {token ? (
            <div className={styles.reg}>
              <Link to="/signin" onClick={deleteUser}>
                LOGOUT
              </Link>
            </div>
          ) : (
            <div className={styles.reg}>
              <Link to="/signin">LOG-IN</Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  )
}
