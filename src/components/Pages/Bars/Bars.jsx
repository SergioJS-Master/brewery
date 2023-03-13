import classNames from 'classnames'
import styles from './bars.module.css'
import { MapYandex } from './components/MapYandex/MapYandex'

export function Bars() {
  return (
    <div className={styles.wr}>

      <div className={styles.card}>
        <div className={styles.cardImage1}>
          <div className={styles.cardName}>
            <h3>The Royal Oak</h3>
          </div>
          <div className={styles.cardDescription}>
            <p>
              Ирландский паб с насыщенной концертной программой. Название
              заведения в переводе с английского значит «Королевский дуб». В
              барной карте паба — большой выбор разливного пива от зарубежных и
              отечественных производителей
            </p>
            <div>
              <p>Адрес: г.Москва, ул. Новый Арбат, д.8</p>
              <div className={styles.iconsWr}>
                <div className={styles.rating}>
                  <i className={classNames('bi bi-star-fill', styles.gradient)} />
                  <p className={styles.gradient}>5</p>
                </div>
                <i
                  className={classNames(
                    'bi bi-heart',
                    styles.icon,
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardImage2}>
          <div className={styles.cardName}>
            <h3>Hofbräuhaus</h3>
          </div>
          <div className={styles.cardDescription}>
            <p>
              Известный во всём мире большой пивной ресторан с пивным садом,
              расположенный в Мюнхене на площади Плацль (Platzl),
              недалеко от центральной площади города Мариенплац.
              Открылся в качестве придворной пивоварни баварских герцогов в 1607 году.
              С 1828 года пивоварня открыта для свободного посещения.
            </p>
            <div>
              <p>Адрес: г.Мюнхен, Плацль, д.8</p>
              <div className={styles.iconsWr}>
                <div className={styles.rating}>
                  <i className={classNames('bi bi-star-fill', styles.gradient)} />
                  <p className={styles.gradient}>5</p>
                </div>
                <i
                  className={classNames(
                    'bi bi-heart',
                    styles.icon,
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.cardImage3}>
          <div className={styles.cardName}>
            <h3>Flava</h3>
          </div>
          <div className={styles.cardDescription}>
            <p>
              Современный бар в центре Москвы
            </p>
            <div>
              <p>Адрес: г.Москва, ул. Тверская, д.17</p>
              <div className={styles.iconsWr}>
                <div className={styles.rating}>
                  <i className={classNames('bi bi-star-fill', styles.gradient)} />
                  <p className={styles.gradient}>5</p>
                </div>
                <i
                  className={classNames(
                    'bi bi-heart',
                    styles.icon,
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mapWr}>
        <MapYandex />
      </div>
    </div>
  )
}
