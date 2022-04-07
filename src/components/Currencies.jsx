import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useState } from 'react'

const Currencies = () => {
  const {data: cryptosList, isFetching} = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  if(isFetching) return "Loading";

  console.log(cryptos);

  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-10 p-4 w-full'>
      {cryptos.map((currency) => (
        <div className=' sm:p-4 border-2 rounded-md shadow-md'>
          <Link to={`/crypto/${currency.name}`}>
            <div className='p-4'> 
            <div className='flex flex-row'>
              <h1 className=' w-full pb-3 font-bold flex'>{currency.rank}. {currency.name} </h1>
                <span className='w-8 sm:w-10 -mt-[4px] '> <img src= {currency.iconUrl} /> </span>
              </div>
              <p className='p-2'>Price: {millify(currency.price)}</p>
              <p className='p-2'>Daily Change: {millify(currency.change)}%</p>
              <p className='p-2'>Market Cap: {millify(currency.marketCap)}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  
  )
}

export default Currencies