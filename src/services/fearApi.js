import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const fearApiHeaders = {
    'X-RapidAPI-Host': 'fear-and-greed-index.p.rapidapi.com',
    'X-RapidAPI-Key': '3cdd381c50mshc68575f32c8af47p14b682jsn38b89cb054fe'
  }

const baseUrl = 'https://fear-and-greed-index.p.rapidapi.com/v1/fgi/';

const createRequest = (url) => ({url, headers: fearApiHeaders})

export const fearApi = createApi ({

    reducerPath: 'fearApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getFearApi: builder.query({
            query: () => createRequest()
        })
    })

});

export const {
    useGetFearApiQuery,
} = fearApi