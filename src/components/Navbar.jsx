import React from 'react'
import logo from '../assets/logo.png'
import {Link}from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] sm:h-[110px] flex justify-between items-center bg-[#000034] gradient-bg-welcome'>
      <div className='pl-20'>  
        <img src={logo}  alt='logo' className='w-[100px] sm:w-[130px]'/>
      </div>
          <div className='hidden lg:flex justify-evenly gap-20 pr-12'>
          <Link to="/" className='text-[#D8A31A] '> Home</Link>
          <Link to="/news" className='text-[#D8A31A] '> News</Link>
          <Link to="/currencies" className='text-[#D8A31A] '>Currencies</Link>
          <Link to="/exchanges" className='text-[#D8A31A] '>Exchanges</Link>
          </div>

          <div onClick={handleClick} className= 'lg:hidden z-10 pr-40'>
            {!nav ? <FaBars color='#FFFFFF' /> : <FaTimes color='#FFFFFF'/>}
          </div>


        </div>

  )
}

export default Navbar