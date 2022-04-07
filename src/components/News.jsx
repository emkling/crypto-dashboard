import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useState, useEffect } from 'react';
import moment from 'moment';

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const {data: cryptoNews } = useGetCryptoNewsQuery({newsCategory, count : simplified ? 12 : 50 });
  const {data} = useGetCryptosQuery(50);

  if(!cryptoNews?.value) return "Loading"

  return (
    <>
    {!simplified && (
    <div className='pt-[150px] flex justify-center'>
      <select
      className='w-[200px]'
      placeholder='Select Crypto'
      onChange={(value) => setNewsCategory(value)}
      >
        <option value="Cryptocurrency" > Cryptocurrency</option>
        {data?.data?.coins?.map((currency) => <option value={currency.name}>{currency.name} </option>)}

      </select>
    </div> 
    )}
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-10 p-4 w-full '>
      {cryptoNews?.value.map((news, i) => (
        <div className=' sm:p-4 border-2 rounded-md shadow-md bg-[#FFFFFF]'>
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className='p-4'> 
            <div className='flex flex-row'>
              <h1 className='text-2xl w-full pb-3 font-bold flex'>{news.name} </h1>
                <span className=''> <img src= {news?.image?.thumbnail?.contentUrl} alt="news image" /> </span>
              </div>
              <p className='p-2'>{news.description.length > 300 ? `${news.description.substring(0,300)}....` : news.description}</p>
            </div>
            <div className='flex gap-6 justify-center'>
              <p className=''>{news.provider[0]?.name}</p>
              <img className='w-10 inline-flex items-center' src={news.provider[0]?.image?.thumbnail?.contentUrl} />
            </div>
            <div>
              {moment(news.datePublished).startOf('ss').fromNow()}
            </div>
          </a>
        </div>
      ))}
    </div>
    </>
  )
}

export default News