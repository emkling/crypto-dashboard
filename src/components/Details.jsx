import React from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import millify from 'millify'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetCryptosQuery } from '../services/cryptoApi'
import {useEffect} from 'react'
import LineChart from './LineChart'
import HTMLReactParser from 'html-react-parser';

const Details = () => {

    const {coinId} = useParams();
    const [coinUUID, setCoinUUID] = useState(coinId)
    const [timePeriod, setTimePeriod] = useState('24h');
    const {data: two, isFetching} = useGetCryptoDetailsQuery(coinUUID);
    const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timePeriod });
    const {data: coinList, isFetching2} = useGetCryptosQuery(50);
    const cryptoDetails = two?.data?.coin;

    console.log(cryptoDetails)

    


    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    if(isFetching) return "Loading";
    if(isFetching2) return "Loading";

    
    console.log(cryptoDetails)
    console.log("testingtwo")

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    

  return (
    <div className='pt-[150px] w-full h-screen flex flex-col '>
       <div className='flex flex-col'>
        <section className='flex justify-center items-center'>
          <h1 className='text-4xl text-[#3c4564]'>{cryptoDetails?.name} ({cryptoDetails?.symbol})</h1>
        </section> 
        
        <section className='p-12 pr-10'>
        <div className='flex flex-row gap-10'> 
          <select className='w-[70px] border-2 rounded-lg' defaultValue={timePeriod} placeholder="Select period" onChange={(e) => setTimePeriod(e.target.value)}>
            {time.map((date) => <option value={date} key={date}> {date} </option>)}
          </select>

          <select
          className=' w-[100px] lg:w-[175px] h-8 border-2 rounded-lg'
          placeholder='Select Crypto'
          onChange={(e) => setCoinUUID(e.target.value)}>

          <option value={cryptoDetails?.name} > {cryptoDetails?.name} </option>
          {coinList?.data?.coins?.map((currency) => <option value={currency?.uuid}>{currency?.name} </option>)}
          </select>
         </div>
        <LineChart coinHistory={coinHistory} currentPrice={millify(cryptoDetails?.price)} coinName={cryptoDetails?.name} />
          
        </section>
        
         <section className='border-2 rounded-lg p-24'>
            <h1 className=' font-bold text-[#3c4564] text-2xl pb-4'>What is {cryptoDetails?.name}?</h1>
            <div>
              {HTMLReactParser(cryptoDetails?.description)}
            </div>
          </section>

        <div className='grid grid-cols-1 lg:grid-cols-3 w-full gap-20 p-20 border-2 rounded-lg'>
        <section className=''>
          <div className='border-2 shadow-lg  rounded-lg p-4 sm:p-10 flex flex-col'>
            <h1 className='font-bold text-2xl text-[#3c4564] pb-6 '> Value Statistics </h1>
            <p className='pb-6'>Price to USD: ${millify(cryptoDetails?.price)}</p> 
            <p className='pb-6'>Rank: #{cryptoDetails?.rank} </p>
            <p className='pb-6'>24h Volume: {cryptoDetails?.volume}</p>
            <p className='pb-6'>Market Cap: ${millify(cryptoDetails?.marketCap)}</p>
            <p className='pb-6'>All Time High: ${millify(cryptoDetails?.allTimeHigh?.price)}</p>
            <p className='pb-6'>Change: {cryptoDetails?.change}%</p>
          </div>
        </section>
        

        <section className=''>
          <div className='border-2 shadow-lg  rounded-lg p-4 sm:p-10 flex flex-col'>
          <h1 className='font-bold text-2xl text-[#3c4564] pb-6 '> Other Statistics </h1>
          <p className='pb-6'>Number of Markets: {cryptoDetails?.numberOfMarkets}</p>
          <p className='pb-6'>Number of Exchanges: {cryptoDetails?.numberOfExchanges}</p>
          <p className='pb-6'>Total Supply: {cryptoDetails?.supply?.total}</p>
          <p className='pb-6'>Circulating Supply ${millify(cryptoDetails?.supply?.circulating)}</p>
          <p className='pb-6'>Approved Supply: {cryptoDetails?.supply?.confirmed} </p>
          </div>
    
        </section>
        <section className='border-2 shadow-lg rounded-lg p-4 sm:p-10'>
          <div className='flex flex-col'>
          <h1 className=' font-bold text-[#3c4564] text-2xl pb-2'> Links </h1>
            {cryptoDetails?.links?.map((link) => ( 
              <div key={link.name} className="py-4 flex flex-row">
                <h1 className='font-bold'> {link.type}: </h1>
                <div>
                <a className='' href={link.url} target="_blank" rel="noreferrer"> {link.name} </a>
                </div>
              </div>
            ))}  </div>
          </section>
        </div>
          <div className="bg-[#eef0f3] flex flex-row">
         

        
          
          </div>
        </div>
    </div>
  )
}

export default Details