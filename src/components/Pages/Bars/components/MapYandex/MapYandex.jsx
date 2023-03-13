/* eslint-disable func-names */
import { useEffect } from 'react'
import styles from './mapYandex.module.css'

export function MapYandex() {
  useEffect(() => {
    function init() {
      // eslint-disable-next-line no-undef
      const map = new ymaps.Map('map', {
        center: [51.24525810760668, 13.179435288048003],
        zoom: 5,
      })

      // eslint-disable-next-line no-undef
      const placemark1 = new ymaps.Placemark([55.76374056896741, 37.60628049999999], {
        balloonContentHeader: 'Flava',
        balloonContentBody: 'г.Москва, ул. Тверская, д.17',
        // balloonContentFooter: 'рейтинг 5',
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/931/931949.png',
        iconImageSize: [30, 30],
        iconImageOffset: [0, 0],
      })

      // eslint-disable-next-line no-undef
      const placemark2 = new ymaps.Placemark([55.75310856899971, 37.59534799999998], {
        balloonContentHeader: 'The Royal Oak',
        balloonContentBody: 'г.Москва, ул. Новый Арбат, д.8',
        // balloonContentFooter: 'рейтинг 5',
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/931/931949.png',
        iconImageSize: [30, 30],
        iconImageOffset: [0, 0],
        // balloonImageOffset: [-36, -90], // смещание балуна, если его необходимо подогнать
      })

      // eslint-disable-next-line no-undef
      const placemark3 = new ymaps.Placemark([48.13793907401535, 11.580182499999964], {
        balloonContentHeader: 'Hofbräuhaus',
        balloonContentBody: 'г.Мюнхен, Плацль, д.8',
        // balloonContentFooter: 'рейтинг 5',
      }, {
        iconLayout: 'default#image',
        iconImageHref: 'https://cdn-icons-png.flaticon.com/512/931/931949.png',
        iconImageSize: [30, 30],
        iconImageOffset: [0, 0],
        // balloonImageOffset: [-36, -90], // смещание балуна, если его необходимо подогнать
      })

      map.geoObjects.add(placemark1)
      map.geoObjects.add(placemark2)
      map.geoObjects.add(placemark3)

      map.controls.remove('trafficControl') // удаляем контроль трафика
      map.controls.remove('typeSelector') // удаляем тип
      // map.controls.remove('zoomControl') // удаляем контрол зуммирования
    }
    // eslint-disable-next-line no-undef
    ymaps.ready(init)
  }, [])

  return (
    <div id="map" className={styles.map} />
  )
}
