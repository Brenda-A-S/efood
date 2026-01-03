import Loader from '../../components/Loader'
import * as Styles from './styles'

type Props = {
  bannerRestaurant?: Restaurant
  isLoading: boolean
}

const Banner = ({ bannerRestaurant, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }
  return (
    <Styles.BannerContainerImg
      style={{
        backgroundImage: `url(${bannerRestaurant && bannerRestaurant.capa})`
      }}
    >
      <div className="container">
        <Styles.FoodType>
          {bannerRestaurant && bannerRestaurant.tipo}
        </Styles.FoodType>
        <Styles.RestaurantName>
          {bannerRestaurant && bannerRestaurant.titulo}
        </Styles.RestaurantName>
      </div>
    </Styles.BannerContainerImg>
  )
}

export default Banner
