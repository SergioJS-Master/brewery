import { useEffect, useState } from 'react'
import styles from './ModalWarning.module.css'
import { ModalWrapper } from './ModalWrapper/ModalWrapper'

const STORAGE_NAME = 'test-message'
const CHANGE_VALUE = '1'

export function ModalWarning() {
  const [isTest, setIsTest] = useState(Boolean(window.localStorage.getItem(STORAGE_NAME)))

  useEffect(() => {
    if (isTest) {
      window.localStorage.setItem(STORAGE_NAME, CHANGE_VALUE)
    }
    document.body.classList.toggle('test-message', !isTest)
  }, [isTest])

  const onSubmit = (e) => {
    e.preventDefault()
    setIsTest(true)
  }

  return (
    <ModalWrapper isOpen={!isTest}>
      <div className={styles.wr}>
        <div className={styles.textBox}>
          <p className={styles.warning}>WARNING!</p>
          <p className={styles.text}>
            Страницы, которые вы собираетесь посмотреть, могут содержать материалы, предназначенные
            для взрослых. Чтобы продолжить, вы должны подвтердить, что вам 18 лет
          </p>
        </div>
        <div className={styles.btnBox}>
          <button type="submit" onClick={onSubmit} className={styles.btn}>
            Я уже старый пес
          </button>
          <a className={styles.btn} href="https://animego.org/" target="_blank" rel="noreferrer">
            Пойду аниме посмотрю..
          </a>
        </div>
      </div>
    </ModalWrapper>
  )
}
