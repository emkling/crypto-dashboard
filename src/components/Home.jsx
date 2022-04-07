import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import {Currencies, News} from '../components'
import { Link } from 'react-router-dom'

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
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
      <div className='flex justify-evenly w-full'>
        <h1 className='font-bold text-4xl'>Top Currencies</h1>
        <Link className='inline-flex items-center top-1/2' to='/currencies'> Show More</Link>
      </div>
      <Currencies simplified={true}/> 
      <div>
        <h1>Top News Stories</h1>
      </div>
      <News simplified />

    </div>
  )
}

export default Home