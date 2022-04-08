import React from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import millify from 'millify'
import { useGetCryptoDetailsQuery } from '../services/cryptoApi'
import {useEffect} from 'react'
import LineChart from './LineChart'



const Details = () => {

    const {coinId} = useParams();
    const [timePeriod, setTimePeriod] = useState('7d');
    const {data, isFetching} = useGetCryptoDetailsQuery(coinId);
    const cryptoDetails = data?.data?.coin;


    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    if(isFetching) return "Loading";

    
    console.log(data)

    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}` },
        { title: 'Rank', value: cryptoDetails?.rank},
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`  },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`},
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`},
      ];
    
      const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges,},
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed  },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`},
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`},
      ];
    

  return (
    <div className='pt-[150px] w-full h-screen'>
        <section className='flex justify-center items-center'>
          <h1 className='text-4xl'>{cryptoDetails?.name} ({cryptoDetails?.symbol})</h1>
        </section>

        <div className='flex justify-center w-full gap-20'>
        <section className='flex flex-col'>
          <p>Price to USD: {millify(cryptoDetails?.price)}</p> 
          <p>Rank: {cryptoDetails?.rank} </p>
          <p>24h Volume: {cryptoDetails?.volume}</p>
          <p>Market Cap: {millify(cryptoDetails?.marketCap)}</p>
          <p>All Time High: {millify(cryptoDetails?.allTimeHigh?.price)}</p>
          <p>Change: {cryptoDetails?.change}</p>
        </section>
        <section>
          
        </section>

        <section>
          <p>Number of Markets: {cryptoDetails?.numberOfMarkets}</p>
          <p>Number of Exchanges: {cryptoDetails?.numberOfExchanges}</p>
          <p>Total Supply: {cryptoDetails?.supply?.total}</p>
          <p>Circulating Supply {millify(cryptoDetails?.supply?.circulating)}</p>
          <p>Approved Supply: {cryptoDetails?.supply?.confirmed} </p>
          <p></p> 
          
          </section>
        </div>
    </div>
  )
}

export default Details