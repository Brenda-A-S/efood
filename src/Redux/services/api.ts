import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),

  endpoints: (builder) => ({
    getRestaurantOptions: builder.query<Restaurant[], void>({
      query: () => ''
    }),
    getRestaurantData: builder.query<Restaurant, string>({
      query: (id) => `${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantOptionsQuery,
  useGetRestaurantDataQuery,
  usePurchaseMutation
} = api
export default api
