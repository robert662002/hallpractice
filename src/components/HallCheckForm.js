import React from 'react'
import Hall from '../assets/halls.jpg'
import Navbar from './Navbar'

const HallCheckForm = () => {
  return (
    <>                
       <div className='md:mt-[-100px] grid h-[50%] w-full grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='bg-[#000300] flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto  p-4 border border-white rounded-sm text-white'>
                    <h2 className='text-4xl font-bold text-center py-6'>Hall Filter</h2>
                    <div>
                        <label>date</label>
                        <input  className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm ' type='date'/>
                    </div>
                    <div>
                        <label>time</label>
                        <input  className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm ' type='time'/>
                    </div>
                    <div>
                        <label>seats expected</label>
                        <input  className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm ' type='text'/>    
                    </div>
                
  <div className="mt-2">
    <label className="inline-flex items-center">
      <input type="checkbox" className="w-7 h-7 rounded-xl border-0"  />
      <span className="ml-2">air condition</span>
    </label>
  </div>        
                </form>     
            </div>      
            <div className='max-h-full h-screen w-full text-white flex flex-col items-center md:justify-center'>
                <h1>Available Hall</h1>
            </div>
        </div>
        </>  
  )
}

export default HallCheckForm
