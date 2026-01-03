import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Restaurant[]
  itemsCart: MenuFoods[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  itemsCart: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuFoods>) => {
      const foodItem = state.itemsCart.find(
        (item) => item.id === action.payload.id
      )

      if (!foodItem) {
        state.itemsCart.push(action.payload)
      } else {
        alert(`O Item (${foodItem.nome}) já esta no carrinho.`)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.itemsCart = state.itemsCart.filter(
        (item) => item.id !== action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.itemsCart = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer
