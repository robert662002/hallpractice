import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
const Cancelbook = () => {
  const [bookingId, setBookingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      await axiosPrivate.delete('/bookings', { data: { id: bookingId } });
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
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    setErrMsg('')
  }, [bookingId])

  return (
    <>
      <div className='flex justify-center md:mt-[-6rem] sm:items-center sm:h-screen pt-20 sm:pt-0'>
        <form className=' sm:w-[400px] w-[350px] mx-auto   bg-white shadow-xl border-8 border-[#eb4d5f] rounded-2xl text-black' onSubmit={handleSubmit}>
          <p>{errMsg}</p>
          <h2 className='text-4xl font-bold text-center py-6'>Cancel Booking :(</h2>
          <div className='flex flex-col gap-2 px-2'>
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
            <button className={`bg-[#eb4d5f] text-white hover:font-semibold border-4 p-3 rounded-xl ${!loading ? 'hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' : ''}`} disabled={loading}>
              {loading ? (
                <BarLoader color='#fff' height={4} width={100} />
              ) : (
                "Cancel"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Cancelbook
