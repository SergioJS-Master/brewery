import classNames from 'classnames'
import styles from './ButtonAnimated.module.css'

export function ButtonAnimated() {
  return (
    <button className={classNames(styles.button, styles['glow-effect'])} type="button">
      DELETE
      <svg className={styles['glow-container']}>
        <rect pathLength="100" strokeLinecap="round" className={styles['glow-blur']} />
        <rect pathLength="100" strokeLinecap="round" className={styles['glow-line']} />
      </svg>
    </button>
  )
}
