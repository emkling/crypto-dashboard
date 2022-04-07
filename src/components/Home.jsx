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
    <div className='flex pt-[120px] w-full flex-col justify-center items-center'>
      <h1 className='font-bold text-4xl text-[#000034]' >Global Statistics</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-10 p-4 w-full'> 
        <p className='bg-[#FFFFFF] sm:p-4 border-2 rounded-md shadow-md text-center'> Cryptocurrencies: {globalStats.total} </p>
        <p className='bg-[#FFFFFF] sm:p-4 border-2 rounded-md shadow-md text-center'> Exchanges: {millify(globalStats.totalExchanges)} </p>
        <p className='bg-[#FFFFFF] sm:p-4 border-2 rounded-md shadow-md text-center'> Market Cap:  {millify(globalStats.totalMarketCap)} </p>
        <p className='bg-[#FFFFFF] sm:p-4 border-2 rounded-md shadow-md text-center'> 24hr Volume:  {millify(globalStats.total24hVolume)} </p>
        <p className='bg-[#FFFFFF] sm:p-4 border-2 rounded-md shadow-md text-center'> Market:  {millify(globalStats.totalMarkets)} </p>
      </div>
      <div className='flex justify-evenly w-full'>
        <h1 className='font-bold text-4xl text-[#000034]'> News</h1>
        <Link className='inline-flex items-center ' to='/news'> Show More</Link>
      </div>
      <News simplified />
      <div className='flex justify-evenly w-full'>
        <h1 className='font-bold text-4xl text-[#000034]'>Top Currencies</h1>
        <Link className='inline-flex items-center top-1/2' to='/currencies'> Show More</Link>
      </div>
      <Currencies simplified={true}/> 
    </div>
  )
}

export default Home