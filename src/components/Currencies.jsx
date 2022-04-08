import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useState, useEffect } from 'react'

const Currencies = ({simplified}) => {
  const count = simplified ? 10 : 50;
  const {data: cryptosList, isFetching} = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('')




  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    setCryptos(filteredData)

  }, [cryptosList, searchTerm])
  if(isFetching) return "Loading";

  return (
    <div className='w-full flex flex-col'>
    {!simplified && ( <div className='w-[250px] m-auto rounded-lg pt-[80px ] sm:pt-[140px]'>
        <input className='border-2 rounded-lg' placeholder='Search' onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
    )}
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-10 p-4 w-full'>
      {cryptos?.map((currency) => (
        <div className=' sm:p-4 border-2 rounded-lg shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'>
          <Link key={currency.key} to={`/crypto/${currency.uuid}` }>
            <div className='p-4 '> 
            <div className='flex flex-row'>
              <h1 className=' w-full pb-3 font-bold flex'>{currency.rank}. {currency.name} </h1>
                <span className='w-8 sm:w-10 -mt-[4px] sm:-mt-[10px] '> <img src= {currency.iconUrl} /> </span>
              </div>
              <p className='p-2'>Price: {millify(currency.price)}</p>
              <p className='p-2'>Daily Change: {millify(currency.change)}%</p>
              <p className='p-2'>Market Cap: {millify(currency.marketCap)}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Currencies