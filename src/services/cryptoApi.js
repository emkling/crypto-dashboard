import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '3cdd381c50mshc68575f32c8af47p14b682jsn38b89cb054fe'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createResquest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi ({

    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createResquest('/coins')
        })
    })

});

export const {
    useGetCryptosQuery,
} = cryptoApi 