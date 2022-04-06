import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(data)

  if(isFetching) return 'Loading...';

  return (
    <div className='flex w-full flex-col justify-center items-center h-screen'  >
      <div> 
      <p> Cryptocurrencies: {globalStats.total} </p>
      <p> Exchanges: {millify(globalStats.totalExchanges)} </p>
      <p> Market Cap:  {millify(globalStats.totalMarketCap)} </p>
      <p> 24hr Volume:  {millify(globalStats.total24hVolume)} </p>
      <p> Market:  {millify(globalStats.totalMarkets)} </p>
      </div>
      
    </div>
  )
}

export default Home