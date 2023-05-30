import React, { useState } from 'react';
import ViewMain from './ViewAvailableHalls/ViewMain';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useLocation, useNavigate } from 'react-router-dom';

const HallCheckForm = () => {

  const currentDate = new Date().toISOString().split('T')[0];

  // Initialize state for form inputs
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [date, setDate] = useState('');
  const [minCapacity, setMinCapacity] = useState('');
  const [ac, setAc] = useState(false);
  const [projector, setProjector] = useState(false);
  const [availableHalls, setAvailableHalls] = useState([])

  const { formInfo, setFormInfo } = useAuth();

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    let isMounted = true;
    const controller = new AbortController();
    e.preventDefault();

    // Create an object with form data
    const formData = {
      startTime,
      endTime,
      date,
      minCapacity: parseInt(minCapacity),
      ac: ac.toString(),
      projector: projector.toString()
    };

    setFormInfo(formData)
    console.log(formInfo)

    try {
      // Send the form data to an API using axios
      const response = await axiosPrivate.post('filter', formData, { signal: controller.signal });
      isMounted && setAvailableHalls(response.data)
    } catch (error) {
      // Handle errors if the API request fails
      console.error(error);
      navigate('/login', { state: { from: location }, replace: true });
    }
    return () => {
      isMounted = false;
      controller.abort();
    }
  };

  return (
    <>
      <div className=' grid w-full grid-cols-1 md:grid-cols-2 gap-5'>
        <div className='bg-[#000300] flex flex-col justify-center'>
          <form className='mt-[4rem] md:mt-[-6rem] max-w-[400px] w-full mx-auto  p-4  border-white rounded-xl border-4 text-white' onSubmit={handleSubmit}>
            <h2 className='text-4xl font-bold text-center py-6'>Hall Filter</h2>
            <div>
              <label>date</label>
              <input
                className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm'
                type='date' value={date}
                onChange={(e) => setDate(e.target.value)}
                min={currentDate}
                required
              />
            </div>
            <div>
              <label>starttime</label>
              <input
                className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm'
                type='time'
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
            <div>
              <label>endtime</label>
              <input
                className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm'
                type='time'
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
            <div>
              <label>seats expected</label>
              <input
                className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm'
                type='text'
                value={minCapacity}
                onChange={(e) => setMinCapacity(e.target.value)}
                required
              />
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-7 h-7 rounded-xl border-0"
                  checked={ac}
                  onChange={(e) => setAc(e.target.checked)}
                />
                <span className="ml-2">air condition</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-7 h-7 rounded-xl border-0"
                  checked={projector}
                  onChange={(e) => setProjector(e.target.checked)}
                />
                <span className="ml-2">projector</span>
              </label>
            </div>
            <div className='flex justify-center my-2'>
              <button className="bg-[#007BFF] px-6 py-2 rounded-xl border border-1 hover:bg-white hover:text-black" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className='max-h-full h-screen w-full text-white flex flex-col items-center md:justify-center'>
          <ViewMain availableHalls={availableHalls} />
        </div>
      </div>
    </>
  );
};

export default HallCheckForm;