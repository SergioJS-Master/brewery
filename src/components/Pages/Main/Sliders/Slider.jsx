import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { dataCardsBeer } from '../../../../api/dataCardsBeer'

import sliderStyles from './Slider.module.css'

export function Slider({ sliders }) {
  const [current, setCurrent] = useState(0)
  const { length } = sliders

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(sliders) || sliders.length <= 0) {
    return null
  }
  return (
    <div className={sliderStyles.sliderContainer}>
      {dataCardsBeer.map((el, index) => (
        <div
          className={index === current ? (sliderStyles.slideActive) : (sliderStyles.slideActive)}
          key={el._id}
        >
          {index === current && (
            <div>
              <img
                src={el.pictures}
                className={sliderStyles.img}
                alt="logo"
              />
              <h1 style={{
                backgroundColor: el.bgColor,
                position: 'absolute',
                top: '83%',
                left: '314px',
                fontSize: '50px',
                padding: '20px',
                color: 'white',

              }}
              >
                {el.name}
              </h1>
            </div>
          )}
        </div>
      ))}
      <FontAwesomeIcon
        icon={faAngleRight}
        className={sliderStyles.arrowRight}
        onClick={nextSlide}
      />
      <FontAwesomeIcon
        icon={faAngleLeft}
        className={sliderStyles.arrowLeft}
        onClick={prevSlide}
      />

      {/* <Cards className={sliderStyles.cardsContainerSlider} /> */}
    </div>
  )
}
