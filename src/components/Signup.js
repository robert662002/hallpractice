import React from 'react'
import Hall from '../assets/halls.jpg'
import Navbar from './Navbar'
import '../index.css'

const Signup = () => {
  return (
    <>  
              
        <div className='md:mt-[-100px] grid h-[50%] w-full grid-cols-1 md:grid-cols-2'>
            <div className='max-h-full hidden md:block'>
                <img className='w-full h-screen object-contain' src={Hall} alt='/'/>
            </div>
            <div className='bg-[#000300] flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg- p-4 border border-white rounded-sm text-white'>
                    <h2 className='text-3xl font-bold text-center py-6'>LOG IN :)</h2>
                    <div className='flex flex-col py-2'>
                        <label>Email</label>
                        <input type='text' className='text-black border py-2' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Name</label>
                        <input type='text' className='border py-2' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input type='password' className='border py-2' />    
                    </div>
                    <div className='flex flex-col py-2'>
                        <label>Retype Password</label>
                        <input type='password' className='border py-2' />    
                    </div>
                    <button className='text-black border w-full my-5 py-2 bg-[#00df9a] '>Sign In</button>
                    <div className='text-center'> 
                        <p>Already Created ? Login</p>
                    </div>            
                </form>     
            </div>      
        </div>
        </>  
  )
}

export default Signup