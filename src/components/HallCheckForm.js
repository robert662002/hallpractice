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
                        <input type='date'/>
                    </div>
                    <div>
                        <label>time</label>
                        <input type='time'/>
                    </div>
                    <div>
                        <label>seats expected</label>
                        <input type='text'/>    
                    </div>
                    <div>
                        <label>air condition</label>
                        <input type='checkbox'/>    
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
