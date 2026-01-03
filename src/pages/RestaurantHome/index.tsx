import { useParams } from 'react-router-dom'

import Footer from '../../containers/Footer'
import Header from '../../containers/Header'
import Banner from '../../containers/Banner'
import FoodList from '../../containers/FoodList'
import Cart from '../../containers/Cart'

import { useGetRestaurantDataQuery } from '../../Redux/services/api'

type RestaurantParams = {
  id: string
}

const RestaurantHome = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurantData, isLoading: isLoadingData } =
    useGetRestaurantDataQuery(id)

  return (
    <>
      <Header headernav="active" />
      <Banner bannerRestaurant={restaurantData} isLoading={isLoadingData} />
      <FoodList foods={restaurantData} isLoading={isLoadingData} />
      <Footer />
      <Cart />
    </>
  )
}

export default RestaurantHome
