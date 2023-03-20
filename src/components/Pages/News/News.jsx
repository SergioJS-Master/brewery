/* eslint-disable max-len */
import { useEffect, useState } from 'react'
// import { View } from 'react-native'
// import { Card, Title } from 'react-native-paper'
import styles from './News.module.css'

import { listPicturesNews } from '../../../API/newsApi'

export function News() {
  const [randomImage, setRandomImage] = useState('')

  console.log(randomImage)

  const renderImage = () => {
    const randomImageIndex = Math.floor(Math.random() * Math.floor(3))
    return listPicturesNews[randomImageIndex].img
  }

  useEffect(() => {
    setRandomImage(renderImage)
  })

  return (
    <div style={styles.container}>
      <div>
        <div>
          <p>React Native Random Image</p>
        </div>
        <img src={renderImage()} alt="" />
      </div>
    </div>

  )
}
