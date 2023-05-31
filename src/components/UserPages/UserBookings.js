import React, { useEffect, useState } from 'react';
import backend from '../../api/backend';
import { BarLoader } from 'react-spinners';
import useAuth from '../../hooks/useAuth';

const UserBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const { auth } = useAuth();

    // New state variable for loading

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await backend.get(`/userBookings/${auth.userEmail}`);
                setBookings(response.data);

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
            <div className="text-white flex justify-center w-screen">
                {loading ? (
                    <BarLoader color="#ffffff" loading={true} size={15} />
                ) : bookings.length ? (
                    <div className='w-screen flex flex-col items-center md:justify-center  sm:mx-2'>
                        <h1 className='text-4xl my-4'>Your Bookings</h1>
                        <div className='flex justify-center'>
                            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border p-4'>
                                {bookings.map(booking => (
                                    <div key={booking.id} className="flex flex-col items-center border rounded-2xl hover:scale-105">
                                    <h1 className="px-2 text-3xl font-bold text-center my-2">{booking.description}</h1>
                                    <h1 className="my-1 text-xl">{booking.hallname}</h1>
                                    <h1 className="my-1 text-xl">{booking.date}</h1>
                                    <h1 className="my-1 text-xl">{booking.starttime}</h1>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p style={{ marginTop: '2rem' }}>No bookings yet .</p>
                )}
            </div>
        </>
    );
};

export default UserBookings;
