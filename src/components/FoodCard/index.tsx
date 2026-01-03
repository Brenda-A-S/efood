import { useSelector, useDispatch } from 'react-redux'

import BtnDefault from '../Buttons/Default/index'

import ImgClose from '../../assets/images/close.png'

import { useState } from 'react'
import type { RootReducer } from '../../Redux/store'
import { open, add } from '../../Redux/slice/Cart/slice'
import { formatPrice } from '../../utils'

import * as Styles from './styles'

type Props = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const FoodCard = ({ foto, preco, id, nome, descricao, porcao }: Props) => {
  const maxLengthInfos = (lengthInfos: string) => {
    if (lengthInfos.length > 179) {
      return lengthInfos.slice(0, 176) + '...'
    }
    return lengthInfos
  }

  const [modalIsActive, setModalIsActive] = useState(false)

  const dispatch = useDispatch()

  const addCart = () => {
    const product = { id, nome, descricao, porcao, foto, preco }
    dispatch(add(product))
    dispatch(open())
    setModalIsActive(false)
  }

  const {} = useSelector((state: RootReducer) => state.cart)

  return (
    <>
      <Styles.CardContainer>
        <Styles.FoodImg src={foto} />
        <Styles.FoodName>{nome}</Styles.FoodName>
        <Styles.FoodInfos>{maxLengthInfos(descricao)}</Styles.FoodInfos>
        <BtnDefault type="button" onClick={() => setModalIsActive(true)}>
          Mais detalhes
        </BtnDefault>
      </Styles.CardContainer>
      <Styles.Modal className={modalIsActive ? 'visible' : ''}>
        <Styles.ModalContent className="container">
          <Styles.ImgFood src={foto} alt="Prato do restaurante" />
          <Styles.ModalInfos>
            <h4>{nome}</h4>
            <span>{descricao}</span>
            <span> {porcao}</span>
            <BtnDefault
              type="button"
              onClick={addCart}
            >{`Adicionar ao carrinho - ${formatPrice(preco)}`}</BtnDefault>
          </Styles.ModalInfos>
          <Styles.CloseModal
            src={ImgClose}
            onClick={() => setModalIsActive(false)}
          />
        </Styles.ModalContent>
        <div className="overlay" onClick={() => setModalIsActive(false)}></div>
      </Styles.Modal>
    </>
  )
}

export default FoodCard
