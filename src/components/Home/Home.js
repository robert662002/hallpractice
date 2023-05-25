import React, { useEffect, useState } from 'react';
import bookingsapi from '../../api/bookings';
import ViewBookings from './ViewBookings';
import Navbar from '../Navbar';
import { BarLoader } from 'react-spinners';

const Home = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true); // New state variable for loading

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await bookingsapi.get('/home');
                const currentDate = new Date().toISOString().split('T')[0];
                const filteredBookings = response.data.filter(booking => booking.date >= currentDate);
                setBookings(filteredBookings);
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log(`Error: ${error.message}`);
                }
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        };

        fetchBookings();
    }, []);

    return (
        <>
            <Navbar />
            <div className="flex items-center text-white justify-center h-screen">
                {loading ? (
                    <BarLoader color="#ffffff" loading={true} size={15} />
                ) : bookings.length ? (
                    <ViewBookings bookings={bookings} />
                ) : (
                    <p style={{ marginTop: '2rem' }}>No posts to display.</p>
                )}
            </div>
        </>
    );
};

export default Home;
