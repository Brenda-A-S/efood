import { IoMdArrowRoundBack } from 'react-icons/io'
import { RestaurantsLinkBtn } from './styles'

const RestaurantsLink = () => {
  return (
    <>
      <RestaurantsLinkBtn
        className="is-active"
        type="link"
        title="Clique aqui voltar para a página inicial"
        to="/"
      >
        <span className="disabled">Restaurantes</span>
        <IoMdArrowRoundBack className="is-active" />
      </RestaurantsLinkBtn>
    </>
  )
}

export default RestaurantsLink
