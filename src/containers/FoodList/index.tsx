import FoodCard from '../../components/FoodCard'
import Loader from '../../components/Loader'
import { ContainerFoodList } from './styles'

type Props = {
  foods?: Restaurant
  isLoading: boolean
}

const FoodList = ({ foods, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <ContainerFoodList>
        {foods &&
          foods.cardapio.map((food) => (
            <li key={food.id}>
              <FoodCard
                id={food.id}
                foto={food.foto}
                preco={food.preco}
                nome={food.nome}
                descricao={food.descricao}
                porcao={food.porcao}
              />
            </li>
          ))}
      </ContainerFoodList>
    </div>
  )
}

export default FoodList
