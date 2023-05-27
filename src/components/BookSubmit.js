import React, { useEffect,useState } from 'react'
import useAuth from '../hooks/useAuth'
import { useNavigate, useParams } from 'react-router-dom';
import backendapi from '../api/backend'
import mongoose from 'mongoose';
const BookSubmit = () => {
    const { formInfo, auth } = useAuth();
    const { id } = useParams();
    const [hallDetails, setHallDetails] = useState(null);
    const [eventDescription, setEventDescription] = useState('');
    const navigate= useNavigate()

    useEffect(() => {
        // Fetch hall details using the provided ID
        const fetchHallDetails = async () => {
            try {
                // Make an API call using Axios
                /* const response = await backendapi.get(`/halls/${mongoose.Types.ObjectId(id)}`); */
                const response = await backendapi.get(`/halls/${id}`);

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
    }, [id]);

    const handleSubmit = async(e) =>{

        e.preventDefault()

        const bookInfo = {
            email:auth.userEmail,
            hallid:hallDetails._id,
            description: eventDescription,
            date : formInfo.date,
            starttime : formInfo.startTime,
            endtime : formInfo.endTime
        }
        try{
             await backendapi.post('/bookings',bookInfo)
             navigate('/userHome')
             
        }
        catch(err){
            console.log(`Error: $(err.message)`);
        }
    }
    return (
        <div className='h-screen flex flex-col items-center justify-center text-white '>
            <h1 className='text-3xl my-5'>Booking Details</h1>
            <form className='p-10 flex flex-col border border-1 rounded-2xl' onSubmit={handleSubmit}>
                <div className='flex'>
                <h1 className='text-xl'>Hall name: {hallDetails ? hallDetails.hallname : null}</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-xl'>Booked email: {auth.userEmail}</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-xl'>Date: {formInfo.date}</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-xl'>Start time: {formInfo.startTime}</h1>
                </div>
                <div className='flex'>
                    <h1 className='text-xl'>End time: {formInfo.endTime}</h1>
                </div>
                <div className='flex flex-col'>
                    <label className='text-xl'>Event Description</label>
                    <textarea
                        className='text-black px-2 border border-1 rounded-xl'
                        id='event-description'
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        maxLength={20}
                    />
                    <p>Characters remaining: {20 - eventDescription.length}</p>
                </div>
                <div className='flex justify-center my-5'>
                    <button className='bg-red-600 px-4 rounded-lg hover:bg-white hover:text-black hover:scale-105'>confirm booking</button>
                </div>
            </form>
        </div>
    )
}

export default BookSubmit
