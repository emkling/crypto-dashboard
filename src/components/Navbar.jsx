import React from 'react'
import Crypto from '../assets/Crypto.png';
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';
import {BsCurrencyExchange} from 'react-icons/bs'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaNewspaper} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[60px] sm:h-[90px] flex justify-between items-center bg-[#3c4564]'>
      <div className='pl-20'>  
        <img src={Crypto}  alt='logo' className='w-[130px] sm:w-[155px]'/>
      </div>
          <div className='hidden lg:flex justify-evenly gap-20 pr-12'>
          <Link to="/" className='text-[#FFFF]'><AiTwotoneHome className='inline-flex' /> Home</Link>
          <Link to="/news" className='text-[#FFFF] '> <FaNewspaper className='inline-flex' /> News</Link>
          <Link to="/currencies" className='text-[#FFFF] '> <BsCurrencyExchange className='inline-flex' /> Currencies</Link>
          </div>

          <div onClick={handleClick} className= 'lg:hidden z-10 pr-40'>
            {!nav ? <FaBars color='#FFFFFF' /> : <FaTimes color='#FFFFFF'/>}
            </div>

            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#3c4564] text-2xl gap-24 flex flex-col items-center justify-center'}>
          <Link onClick={handleClick} to="/" className='text-[#FFFF] '> <AiTwotoneHome className='inline-flex' /> Home</Link>
          <Link onClick={handleClick} to="/news" className='text-[#FFFF] '> <FaNewspaper className='inline-flex' /> News</Link>
          <Link onClick={handleClick} to="/currencies" className='text-[#FFFF] '> <BsCurrencyExchange className='inline-flex' /> Currencies</Link>
          </div>


        </div>

  )
}

export default Navbar