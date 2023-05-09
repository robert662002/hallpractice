import React from 'react'

const Cancelbook = () => {
  return (
    <div className='bg-[#000300] flex flex-col justify-center'>
    <form className='max-w-[400px] w-full mx-auto  p-4 border border-white rounded-sm text-white'>
            <h2 className='text-4xl font-bold text-center py-6'>Cancel Booking :(</h2>
            <div className='flex flex-col py-2'>
                <label>Email</label>
                <input type='text' className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' />
            </div>
            <div className='flex flex-col py-2'>
                <label>Bookingid</label>
                <input type='password' className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' />    
            </div>
            <div className='flex flex-col items-center justify-center'>
            <button className='text-black border w-[75%] my-5 py-2 bg-[#00df9a] '>Cancel</button></div>
            <div className='text-center'> 
                <p>Book another hall</p>
            </div>            
        </form>     
    </div>
  )
}

export default Cancelbook
