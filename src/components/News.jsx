import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useState, useEffect } from 'react';
import moment from 'moment';

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const {data: cryptoNews } = useGetCryptoNewsQuery({newsCategory, count : simplified ? 12 : 50 });
  const {data} = useGetCryptosQuery(50);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if(!cryptoNews?.value) return "Loading"

  

  return (
    <>
    {!simplified && (
    <div className='pt-[80px] sm:pt-[150px] flex justify-center pb-4'>
      <select
      className='w-[200px] h-8 bg-[#FFFFFF] rounded-lg border-2 '
      placeholder='Select Crypto'
      onChange={(e) => setNewsCategory(e.target.value)
      
      }
      >
        <option value="Cryptocurrency" > Cryptocurrency</option>
        {data?.data?.coins?.map((currency) => <option value={currency.name}>{currency.name} </option>)}

      </select>
    </div> 
    )}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 p-4 w-full '>
      {cryptoNews?.value.map((news, i) => (
        <div className=' sm:p-4 '>
          <a href={news.url} target='_blank' rel='noreferrer'>
            <div className='p-4 border-2 rounded-md shadow-md bg-[#FFFFFF] hover:bg-[#d6d8da]'> 
            <div className='flex flex-row'>
              <h1 className='sm:text-2xl w-full pb-3 font-bold flex'>{news.name} </h1>
                <span className=''> <img src= {news?.image?.thumbnail?.contentUrl} alt="news image" /> </span>
              </div>
              <p className='p-2'>{news.description.length > 300 ? `${news.description.substring(0,300)}....` : news.description}</p>
           
            <div className='pl-4 pr-4 py-4 flex justify-between'>
               <span className=''>{news.provider[0]?.name}</span> <span>{moment(news.datePublished).startOf('ss').fromNow()} </span>
            </div> 
            </div>
          </a>
        </div>
      ))}
    </div>
    </>
  )
}

export default News