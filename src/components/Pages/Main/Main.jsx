import { Link } from 'react-router-dom'
import styles from './Main.module.css'

export function Main() {
  return (
    <div className={styles.main}>
      <h1>Main</h1>
      <Link to="/about">about</Link>
    </div>
  )
}
