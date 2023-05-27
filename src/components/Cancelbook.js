import React, { useEffect, useState } from 'react'
import backendapi from '../api/backend';
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
const Cancelbook = () => {
  const [bookingId, setBookingId] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await backendapi.delete('/bookings', { data: { id: bookingId } });
      navigate('/userHome')
    }
    catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Booking Id required');
      } else if (err.response?.status === 404) {
        setErrMsg('Booking Id not found');
      } else {
        setErrMsg('CancelFailed');
      }
    }
  }
  useEffect(() => {
    setErrMsg('')
  }, [bookingId])

  return (
    <>
      <Navbar />
      <div className='bg-[#000300] flex flex-col justify-center items-center'>
        <form className='max-w-[400px] w-full mx-auto  p-4 border border-white rounded-sm text-white' onSubmit={handleSubmit}>
          <p>{errMsg}</p>
          <h2 className='text-4xl font-bold text-center py-6'>Cancel Booking :(</h2>
          <div className='flex flex-col py-2'>
            <label>Bookingid</label>
            <input
              type='text'
              className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm'
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              required
              minLength={24}
              maxLength={24}
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button className='text-black border w-[75%] my-5 py-2 bg-[#00df9a] '>Cancel</button></div>
          <div className='text-center'>
            <p>Book another hall</p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cancelbook
