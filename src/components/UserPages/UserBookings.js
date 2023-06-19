import React, { useEffect, useState } from 'react';
import { BarLoader } from 'react-spinners';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const UserBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errMsg, setErrMsg] = useState('');

    const axiosPrivate = useAxiosPrivate();

    const { auth } = useAuth();

    // New state variable for loading

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axiosPrivate.get(`/userBookings/${auth.userEmail}`);
                setBookings(response.data);

            } catch (error) {
                if (!error?.response) {
                    setErrMsg('no response from server');
                }
                else if (error.response?.status === 500) {
                    setErrMsg("an error occured");
                } else {
                    setErrMsg("an error occured")
                }
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        };

        fetchBookings();
    }, []);

    return (
        <>
            <div className="text-black flex justify-center w-screen">
                {loading ? (
                    <div className='flex justify-center items-center h-screen'>
                        <BarLoader color="#000000" loading={true} size={15} />
                    </div>
                ) : errMsg ? (
                    <p className='font-semibold mt-[2rem] text-xl'>{errMsg}</p>
                ) : bookings.length ? (
                    <div className='w-screen flex flex-col items-center md:justify-center  sm:mx-2'>
                        <h1 className='text-4xl my-4'>Your Bookings</h1>
                        <div className='flex justify-center'>
                            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border p-4'>
                                {bookings.map(booking => (
                                    <div key={booking.id} className="flex flex-col items-center bg-gray-200 border-4 px-4 border-[#eb4d5f] shadow-xl rounded-2xl hover:scale-105">
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
                    <p className='font-semibold mt-[2rem] text-xl' >No bookings yet .</p>
                )}
            </div>
        </>
    );
};

export default UserBookings;
