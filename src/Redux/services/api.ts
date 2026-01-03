import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-production-e48d.up.railway.app/'
  }),

  endpoints: (builder) => ({
    getRestaurantOptions: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantData: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
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
