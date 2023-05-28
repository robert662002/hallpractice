import React from 'react'
import { useNavigate } from 'react-router-dom'

const Unauthorized = () => {
  const navigate = useNavigate()
  const goBack = () => navigate(-1);
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-white'>UNAUTHORized</h1>
      <button className='my-4 p-4 border border-1 rounded-xl text-xl font-bold hover: bg-[#2b94d4]' onClick={goBack}>Go Back</button>
    </div>
  )
}
export default Unauthorized
