import { useDispatch, useSelector } from 'react-redux'
import type { RootReducer } from '../../../Redux/store'
import { FaShoppingCart } from 'react-icons/fa'

import { open } from '../../../Redux/slice/Cart/slice'

import { CartBtn } from './styles'

const BtnCart = () => {
  const { itemsCart } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <CartBtn type="button" onClick={() => dispatch(open())}>
        <span className="disabled">
          {itemsCart.length} produto(s) no carrinho{' '}
        </span>{' '}
        <FaShoppingCart className="is-active" />
      </CartBtn>
    </>
  )
}

export default BtnCart
