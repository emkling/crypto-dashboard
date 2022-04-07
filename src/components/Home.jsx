import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import {Currencies, News} from '../components'

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(data)

  if(isFetching) return 'Loading...';

  return (
    <div className='flex pt-[120px] w-full flex-col justify-center items-center '  >
      <h1 className='font-bold text-4xl'>Global Statistics</h1>
      <div> 
        <p> Cryptocurrencies: {globalStats.total} </p>
        <p> Exchanges: {millify(globalStats.totalExchanges)} </p>
        <p> Market Cap:  {millify(globalStats.totalMarketCap)} </p>
        <p> 24hr Volume:  {millify(globalStats.total24hVolume)} </p>
        <p> Market:  {millify(globalStats.totalMarkets)} </p>
      </div>
      <div>
        <h1 className='font-bold text-4xl'>Top Cryptocurrencies</h1>
      </div>
      <Currencies simplified/> 

      <div>
        <h1>Top News Stories</h1>
      </div>
      <News simplified />

    </div>
  )
}

export default Home