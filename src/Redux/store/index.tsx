import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../slice/Cart/slice'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
