import classNames from 'classnames'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import styles from './detailPageBar.module.css'
import { getIniteState } from '../../../redux/initState'
import {
  addItemInFavourite,
  deleteItemFromFavourite,
} from '../../../redux/slices/favouriteSlice'
import { Loader } from '../../Loader/Loader'
import { barsApi } from '../../../API/BarsApi'

export function DetailPageBar() {
  const { barId } = useParams()
  console.log(barId)
  const dispatch = useDispatch()

  const {
    user: { token },
  } = getIniteState()

  const itemsFavourite = useSelector((state) => state.favourite)
  const isItemInFavourite = itemsFavourite.some((item) => item.id === +barId)

  const getQueryDetailPageKey = (id) => ['detailPage', id]

  const {
    data, isLoading, isError, error, refetch,
  } = useQuery({
    queryKey: getQueryDetailPageKey(+barId),
    queryFn: () => barsApi.getBarById(+barId),
    enabled: !!barId,
  })

  if (isLoading) return <Loader />
  if (isError) return <h1>Error happend</h1>

  console.log(data, error, refetch)

  const clickFavouriteHandler = (e) => {
    e.stopPropagation()
    e.preventDefault()
    if (isItemInFavourite) {
      dispatch(deleteItemFromFavourite(+barId))
    } else {
      dispatch(addItemInFavourite(+barId))
    }
  }
  return (
    <div className={styles.wr}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <div
            style={{
              backgroundImage: `url(${data.pictureMain})`,
              backgroundRepeat: 'no-repeat',
            }}
            className={styles.image1}
          />
          <div className={styles.imageWrRight}>
            <div
              style={{
                backgroundImage: `url(${data.picture_1})`,
                backgroundRepeat: 'no-repeat',
              }}
              className={styles.image2}
            />
            <div
              style={{
                backgroundImage: `url(${data.picture_2})`,
                backgroundRepeat: 'no-repeat',
              }}
              className={styles.image3}
            />
          </div>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardName}>
            <h3>{data.name}</h3>
          </div>
          <div className={styles.descriptionWr}>
            <div className={styles.cardDescription}>
              <p>
                {data.description_2}
              </p>
              <p>
                Address:
                {' '}
                {data.city}
                ,
                {' '}
                {data.address}
              </p>
              <div className={styles.iconsWr}>
                <div className={styles.rating}>
                  <i className={classNames('bi bi-star-fill', styles.gradient)} />
                  <p className={styles.gradient}>5</p>
                </div>
                {token ? (
                  <Link onClick={clickFavouriteHandler} to="/#">
                    <i
                      className={classNames(
                        {
                          'bi bi-heart-fill': isItemInFavourite,
                          'bi bi-heart': !isItemInFavourite,
                        },
                        styles.icon,
                      )}
                    />
                  </Link>
                ) : null}
              </div>
            </div>
            {/* <div className={styles.timeWorking}>
              <p>12:00 – 01:00</p>
              <button className={styles.aboutMeBtnBottom} type="button">
                Book now
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
