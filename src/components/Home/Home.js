import React, { useEffect, useState } from 'react';
import bookingsapi from '../../api/axios';
import HomeBookingFeed from './HomeBookingFeed';
import { BarLoader } from 'react-spinners';

const Home = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await bookingsapi.get('/home');
                const currentDate = new Date().toISOString().split('T')[0];
                const filteredBookings = response.data.filter(booking => booking.date >= currentDate);
                setBookings(filteredBookings);
            } catch (error) {
                if (!error?.response) {
                    setErrMsg('no response from server');
                }
                else if(error.response?.status === 500){
                    setErrMsg("an error occured");
                } else {
                    console.log(`Error: ${error.message}`);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="text-black flex mt-[2rem] justify-center ">
            {loading ? (
                <div className='h-screen mt-[-6rem] flex justify-center items-center'>
                    <BarLoader color="#000000" loading={true} size={15} />
                </div>
            ) : errMsg ? (
                <p className='font-semibold mt-[2rem] text-xl'>{errMsg}</p>
            ) : bookings.length ? (
                <HomeBookingFeed bookings={bookings} />
            ) : (
                <p className='font-semibold mt-[2rem] text-xl'>No events .</p>
            )}
        </div>
    );
};

export default Home;
