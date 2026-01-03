import Header from '../../containers/Header'
import RestaurantsList from '../../containers/RestaurantsList'
import Footer from '../../containers/Footer'

import { useGetRestaurantOptionsQuery } from '../../Redux/services/api'

const Home = () => {
  const { data: restaurantOptions, isLoading: isLoadingOptions } =
    useGetRestaurantOptionsQuery()

  return (
    <>
      <Header headernav="disable" />
      <RestaurantsList
        restaurantList={restaurantOptions}
        isLoading={isLoadingOptions}
      />
      <Footer />
    </>
  )
}

export default Home
