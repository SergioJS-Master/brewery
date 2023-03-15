/* eslint-disable react/jsx-one-expression-per-line */
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { breweryApi } from '../../../API/BreweryApi'
import { getTokenSelector } from '../../../redux/slices/userSlice'
import { Loader } from '../../Loader/Loader'
import { Modal } from '../../Modal/Modal'
import styles from './User.module.css'

export function User() {
  const token = useSelector(getTokenSelector)
  const [isOpenModalAvatar, setIsOpenModalAvatar] = useState()

  const closeModalAvatar = () => {
    setIsOpenModalAvatar(false)
  }
  const openModalAvatar = () => {
    setIsOpenModalAvatar(true)
  }

  const { data, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => breweryApi.getUserByToken(token),
    keepPreviousData: true,
  })
  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={styles.wr}>
      <div className={styles.headerUser}>
        <div className={styles.headerUserLeft}>
          <p className={styles.textTitle}>WELCOME TO PERSONAL PAGE</p>
        </div>
        <div className={styles.headerUserRight}>
          <img className={styles.avatarMini} src={data.avatar} alt="avatar" />
          <p className={styles.textTitleRight}>Hello {data.name.split(' ', 1)}</p>
        </div>
      </div>
      <div className={styles.userInfo}>
        <div className={styles.userInfoLeft}>
          <div className={styles.avatarBox}>
            <img className={styles.avatarFull} src={data.avatar} alt="avatarFull" />
          </div>
          <div className={styles.btnAvatar}>
            <button className={styles.aboutMeBtn} type="button" onClick={openModalAvatar}>
              Edit avatar
            </button>
          </div>
          <p className={styles.aboutMeTitle}>MY PROFILE</p>
          <div className={styles.about}>
            <p className={styles.aboutMe}>
              First Name: <span>{data.name.split(' ', 1)}</span>
            </p>
            <p className={styles.aboutMe}>
              Last Name: <span>{data.name.split(' ').slice(1, 2)}</span>
            </p>
            <p className={styles.aboutMe}>
              About: <span>{data.about.toLowerCase()}</span>
            </p>
            <p className={styles.aboutMe}>
              Email: <span>***** {data.email.substring(5)}</span>
            </p>
          </div>
          <div className={styles.btnAvatar}>
            <button className={styles.aboutMeBtnBottom} type="button" onClick={openModalAvatar}>
              Edit User
            </button>
          </div>
        </div>
        <div className={styles.userInfoRight}>
          <div className={styles.userInfoRightTop}>
            <div className={styles.userInfoRightTitleDiv}>
              <p className={styles.userInfoRightTitle}>MY FAVORITE BARS</p>
            </div>
            <hr />
            <div className={styles.barLink}>
              <p className={styles.text}>bar 1</p>
              <button type="button">go to bar</button>
            </div>
            <div className={styles.barLink}>
              <p className={styles.text}>bar 2</p>
              <button type="button">go to bar</button>
            </div>
            <div className={styles.barLink}>
              <p className={styles.text}>bar 3</p>
              <button type="button">go to bar</button>
            </div>
            <div className={styles.barLink}>
              <p className={styles.text}>bar 4</p>
              <button type="button">go to bar</button>
            </div>
          </div>
          <div className={styles.userInfoRightBottom}>
            <div className={styles.userInfoRightTitleDiv}>
              <p className={styles.userInfoRightTitle}>MY FAVORITE BEERS</p>
            </div>
            <hr />
            <div className={styles.barLink}>
              <p className={styles.text}>beer 1</p>
              <button type="button">go to beer</button>
            </div>
            <div className={styles.barLink}>
              <p className={styles.text}>beer 2</p>
              <button type="button">go to beer</button>
            </div>
            <div className={styles.barLink}>
              <p className={styles.text}>beer 3</p>
              <button type="button">go to beer</button>
            </div>
            <div className={styles.barLink}>
              <p className={styles.text}>beer 4</p>
              <button type="button">go to beer</button>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpenModalAvatar} closeHandler={closeModalAvatar}>
        <div className={styles.modal}>asd</div>
      </Modal>
    </div>
  )
}
