import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import Login from './Login'
const Navbar = ({children}) => {
  const [nav,setNav] = useState(true)
  const handleNav =()=>{
    setNav(!nav)
  }
  return (
    <div className='relative top-0 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>MITS HALLS.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Company</li>
            <li className='p-4'>Resources</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>
        <div className={!nav?'fixed left-0 top-0 w-[50%] h-[20%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden':'fixed top-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mt-7' >MITS HALLS.</h1>
          <ul className='p-4 uppercase bg-[#000300]'>
              <li className='p-4 border-b border-gray-600'>Home</li>
              <li className='p-4 border-b border-gray-600'>Company</li>
              <li className='p-4 border-b border-gray-600'>Resources</li>
              <li className='p-4 border-b border-gray-600'>About</li>
              <li className='p-4'>Contact</li>
          </ul>
        </div>
        {children}
    </div>
  )
}

export default Navbar