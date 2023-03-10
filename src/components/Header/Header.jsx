import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <nav>
        <ul className={styles.pagesContainer}>
          <div>
            <li>
              <NavLink
            // className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
                to="/"
              >
                {/* <img src= alt="" /> */}
              </NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink
            // className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
                to="/about"
              >
                О нас
              </NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink
            // className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
                to="/bars"
              >
                Bars
              </NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink
            // className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
                to="/catalog"
              >
                catalog
              </NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink
            // className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
                to="/news"
              >
                news
              </NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink
            // className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
                to="/favorite"
              >
                favorite
              </NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink
            // className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
                to="/user"
              >
                user
              </NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink
            // className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
                to="/signup"
              >
                signup
              </NavLink>
            </li>
          </div>
          <div>
            <li>
              <NavLink
            // className={({ isActive }) => classNames({ [headerStyle.activeLink]: isActive })}
                to="/signin"
              >
                signin
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}
