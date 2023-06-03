import React, { useEffect, useState } from 'react'
import backendapi from '../../api/backend';
import { useNavigate } from 'react-router-dom';
const Cancelbook = () => {
  const [bookingId, setBookingId] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await backendapi.delete('/bookings', { data: { id: bookingId } });
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
      <div className='flex justify-center items-center h-screen'>
        <form className='max-w-[400px] w-full mx-auto mt-[-6rem] p-4  bg-white shadow-xl border-8 border-[#eb4d5f] rounded-2xl text-black' onSubmit={handleSubmit}>
          <p>{errMsg}</p>
          <h2 className='text-4xl font-bold text-center py-6'>Cancel Booking :(</h2>
          <div className='flex flex-col gap-2'>
            <label>Booking id</label>
            <input
              type='text'
              className='text-black w-full border border-gray-400 px-3 py-2 rounded-lg shadow-sm'
              value={bookingId}
              onChange={(e) => setBookingId(e.target.value)}
              required
              minLength={24}
              maxLength={24}
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <button className='text-white border-4 border-white  my-5 p-3 px-6 rounded-xl bg-[#eb4d5f] hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]'>Cancel</button></div>
          <div className='text-center'>
            <p>Book another hall</p>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cancelbook
