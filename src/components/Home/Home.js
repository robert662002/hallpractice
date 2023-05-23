import React, { useEffect, useState } from 'react'
import bookingsapi from '../../api/bookings'
import ViewBookings from './ViewBookings'
import Navbar from '../Navbar'

const Home = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await bookingsapi.get('/bookings');
                const currentDate = new Date().toISOString().split('T')[0];
                const filteredBookings = response.data.filter(booking => booking.date >= currentDate);
                setBookings(filteredBookings);
            }
            catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                else {
                    console.log(`Error: ${error.message}`);
                }
            }
        }
        fetchPosts();
    }, [])
    return (
        <>
            <Navbar />
            <div className='text-white'>
                {bookings.length ? (
                    <ViewBookings bookings={bookings} />
                ) : (
                    <p style={{ marginTop: "2rem" }}>
                        No posts to display.
                    </p>
                )}
            </div>
        </>
    )
}

export default Home
