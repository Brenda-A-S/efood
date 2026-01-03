import Loader from '../../components/Loader'
import RestaurantsCard from '../../components/RestaurantsCard'

import { ContainerList } from './styles'

type Props = {
  restaurantList?: Restaurant[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurantList, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <ContainerList>
        {restaurantList &&
          restaurantList.map((list) => (
            <RestaurantsCard
              key={list.id}
              title={list.titulo}
              stars={list.avaliacao}
              description={list.descricao}
              image={list.capa}
              highlighted={list.destacado}
              typeFood={list.tipo}
              idGoTo={list.id}
            />
          ))}
      </ContainerList>
    </div>
  )
}

export default RestaurantsList
