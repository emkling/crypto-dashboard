import React from 'react'
import { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/cryptoApi'
import millify from 'millify'
import {Currencies, News} from '../components'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import LineChart from './LineChart'
import background from '../assets/Crypto.png'

const Home = () => {
  const[count, setCount] = useState(10)
  const [coinId, setCoinId] = useState('Qwsogvtv82FCd');
  const {data, isFetching} = useGetCryptosQuery(count);
  const globalStats = data?.data?.stats;

  const [timePeriod, setTimePeriod] = useState('3h');
  const {data: two, isFetching2} = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
  const cryptoDetails = two?.data?.coin;

  

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  if(isFetching || isFetching2) return 'Loading...';

  return (
    <div className='flex pt-[90px] w-full flex-col justify-center items-center bg-[#eef0f3]'>
      <div className='flex justify-between w-full pb-4 pt-10'>
        <h1 className='font-bold text-2xl sm:text-4xl pl-10 text-[#000034]'>Top Currencies</h1>
        <Link className='inline-flex  items-center pr-12 top-1/2' to='/currencies'> Show More</Link>
      </div>
      <Currencies simplified={true}/> 
      <div className='flex justify-between w-full pb-4 pt-10'>
        <h1 className='font-bold text-2xl sm:text-4xl pl-10  text-[#000034]'> News</h1>
        <Link className='inline-flex pr-12 items-center ' to='/news'> Show More</Link>
      </div>
      <News simplified />
      
      <div className='flex w-full pt-10 '>
        <h1 className='font-bold text-2xl sm:text-4xl pl-10 text-[#000034]'>Global Statistics </h1>
      </div>
      <div className='grid pl-12 grid-cols-2 lg:grid-cols-5 py-8 gap-12 pb-10 w-full'> 
      
        <div className='p-2 sm:p-4 border-2 text-center shadow-lg rounded-lg bg-white'> Cryptocurrencies: {globalStats.total} </div> 
        <div className='p-2 sm:p-4 border-2 text-center shadow-lg rounded-lg bg-white'> Exchanges: {millify(globalStats.totalExchanges)}  </div>
        <div className='p-2 sm:p-4 border-2 text-center shadow-lg rounded-lg bg-white'> Market Cap:  {millify(globalStats.totalMarketCap)}  </div>
        <div className='p-2 sm:p-4 border-2 text-center shadow-lg rounded-lg bg-white'> 24hr Volume:  {millify(globalStats.total24hVolume)}  </div> 
        <div className='p-2 sm:p-4 border-2 text-center shadow-lg rounded-lg bg-white'> Market:  {millify(globalStats.totalMarkets)} </div>
       
        </div>
          <div className='w-full flex flex-col bg-white p-12 pr-10'>
            <div className='flex flex-row gap-10'> 
            <select className='border-2 rounded-lg w-[70px]' defaultValue={timePeriod} placeholder="Select period" onChange={(e) => setTimePeriod(e.target.value)}>
            {time.map((date) => <option value={date} key={date}> {date} </option>)}
          </select>

          <select
          className='w-[200px] h-8 border-2 rounded-lg'
          placeholder='Select Crypto'
          onChange={(e) => setCoinId(e.target.value)}>

          <option value="Qwsogvtv82FCd" > Bitcoin</option>
          {data?.data?.coins?.map((currency) => <option value={currency.uuid}>{currency.name} </option>)}
          </select>
          </div>
          <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
        </div>

    </div>
  )
}

export default Home