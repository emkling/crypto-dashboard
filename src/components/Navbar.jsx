import React from 'react'
import logo from '../assets/logo.png'
import {Link}from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[110px] flex justify-center bg-[#000034]'>
        
        <div className='flex relative justify-center items-center gap-32 w-full'>
            
            <Link to="/" className='text-[#D8A31A]'> Home</Link>
            <Link to="/news" className='text-[#D8A31A]'> News</Link>
            <img src={logo}  alt='logo' style={{width:'120px'}} />
            <Link to="/currencies" className='text-[#D8A31A]'> Currencies</Link>
            <Link to="/exchanges" className='text-[#D8A31A]'> Exchanges</Link>
        </div>

    </div>
  )
}

export default Navbar