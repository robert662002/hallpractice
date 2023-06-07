import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { useNavigate, useParams } from 'react-router-dom';
import backendapi from '../../api/axios'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { BarLoader } from 'react-spinners'

const BookSubmit = () => {

    
    const { formInfo, auth } = useAuth();
    const { id } = useParams();
    const [hallDetails, setHallDetails] = useState(null);
    const [eventDescription, setEventDescription] = useState('');
    const navigate = useNavigate()
    const axiosPrivate = useAxiosPrivate();
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('')

    useEffect(() => {
        // Fetch hall details using the provided ID
        const fetchHallDetails = async () => {
            try {
                // Make an API call using Axios
                /* const response = await backendapi.get(`/halls/${mongoose.Types.ObjectId(id)}`); */
                const response = await axiosPrivate.get(`/halls/${id}`);

                const data = response.data;
                console.log(response.data)

                // Update the hallDetails state with the fetched data
                setHallDetails(data);
                console.log(hallDetails)
            } catch (error) {
                console.error('Error fetching hall details:', error);
            }
        };

        fetchHallDetails();
    }, [id, axiosPrivate]);

    const handleSubmit = async (e) => {

        e.preventDefault()


        const bookInfo = {
            email: auth.userEmail,
            hallid: hallDetails._id,
            description: eventDescription,
            date: formInfo.date,
            starttime: formInfo.startTime,
            endtime: formInfo.endTime
        }
        try {
            setLoading(true)
            await backendapi.post('/bookings', bookInfo)
            navigate('/userHome')

        }
        catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response go back');
            } else if (err.response?.status === 400) {
                setErrMsg('insuffiscient data go back')
            }
            else {
                setErrMsg("an error occured")
            }
        }
        finally {
            setLoading(false); // Stop loading
        }
    }
    return (
        <div className='mt-[-100px] h-screen flex flex-col items-center justify-center text-black '>
            <p className='bg-red-600 font-semibold text-red-200'>{errMsg}</p>
            <form className='bg-white p-4 shadow-xl flex flex-col border border-1 rounded-2xl' onSubmit={handleSubmit}>
                <h1 className='text-3xl text-center my-4'>Booking Details</h1>
                <div className='flex my-1'>
                    <h1 className='text-xl'>Hall name: {hallDetails ? hallDetails.hallname : null}</h1>
                </div>
                <div className='flex my-1'>
                    <h1 className='text-xl'>Booked email: {auth.userEmail}</h1>
                </div>
                <div className='flex my-1'>
                    <h1 className='text-xl'>Date: {formInfo.date}</h1>
                </div>
                <div className='flex my-1'>
                    <h1 className='text-xl'>Start time: {formInfo.startTime}</h1>
                </div>
                <div className='flex my-1'>
                    <h1 className='text-xl'>End time: {formInfo.endTime}</h1>
                </div>
                <div className='flex my-1 flex-col gap-1'>
                    <label className='text-xl'>Event Description</label>
                    <textarea
                        className='text-black p-2 border border-1 rounded-xl'
                        id='event-description'
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        maxLength={20}
                        required
                    />
                    <p className='text-red-600'>Characters remaining: {20 - eventDescription.length}</p>
                </div>
                <div className='flex justify-center my-3'>
                    <button className={`bg-[#eb4d5f] text-white hover:font-semibold border-4 border-white p-3 rounded-xl ${!loading ? 'hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' : ''}`} disabled={loading}>
                        {loading ? (
                            <BarLoader color='#fff' height={4} width={100} />
                        ) : (
                            "Confirm Booking"
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BookSubmit
