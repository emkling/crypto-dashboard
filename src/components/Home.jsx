import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from 'millify'
import {Currencies, News} from '../components'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  console.log(data)
  


  if(isFetching) return 'Loading...';



  return (
    <div className='flex pt-[120px] w-full flex-col justify-center items-center'>
      <div className='flex justify-between w-full pt-10'>
        <h1 className='font-bold text-2xl sm:text-4xl pl-10 text-[#000034]'>Global Statistics </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-10 p-4 pb-10 w-full'> 
        <p className='bg-[#FFFFFF] hover:bg-[#d6d8da] py-4 sm:p-4 border-2 rounded-md shadow-md text-center'> Cryptocurrencies: {globalStats.total} </p>
        <p className='bg-[#FFFFFF] hover:bg-[#d6d8da] py-4 sm:p-4 border-2 rounded-md shadow-md text-center'> Exchanges: {millify(globalStats.totalExchanges)} </p>
        <p className='bg-[#FFFFFF] hover:bg-[#d6d8da] py-4 sm:p-4 border-2 rounded-md shadow-md text-center'> Market Cap:  {millify(globalStats.totalMarketCap)} </p>
        <p className='bg-[#FFFFFF] hover:bg-[#d6d8da] py-4 sm:p-4 border-2 rounded-md shadow-md text-center'> 24hr Volume:  {millify(globalStats.total24hVolume)} </p>
        <p className='bg-[#FFFFFF] hover:bg-[#d6d8da] py-4 sm:p-4 border-2 rounded-md shadow-md text-center'> Market:  {millify(globalStats.totalMarkets)} </p>
      </div>

      <div className='flex justify-between w-full pb-4 pt-10'>
        <h1 className='font-bold text-2xl sm:text-4xl pl-12  text-[#000034]'> News</h1>
        <Link className='inline-flex pr-12 items-center ' to='/news'> Show More</Link>
      </div>
      <News simplified />
      <div className='flex justify-between w-full pb-4 pt-10'>
        <h1 className='font-bold text-2xl sm:text-4xl pl-12 text-[#000034]'>Top Currencies</h1>
        <Link className='inline-flex  items-center pr-12 top-1/2' to='/currencies'> Show More</Link>
      </div>
      <Currencies simplified={true}/> 

      
    </div>
  )
}

export default Home