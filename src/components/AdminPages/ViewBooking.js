import React from 'react'
import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { FaTrash } from 'react-icons/fa';



const ViewBooking = () => {

    const [loading, setLoading] = useState(true); // New state variable for loading
    const axiosPrivate = useAxiosPrivate();
    const [deleteLoading, setDeleteLoading] = useState(false)
    const navigate = useNavigate();



    const [bookings, setBookings] = useState([])

    const handleDelete = async (id) => {
        try {
            setDeleteLoading(true)
            await axiosPrivate.delete('/bookings', { data: { id } });
            setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== id));

        }
        catch (err) {
            console.log(`Error:${err.message}`);
        } finally {
            setDeleteLoading(false);
        }
    }
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosPrivate.get('/bookings');
                setBookings(response.data);
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
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        }
        fetchPosts();
    }, [axiosPrivate])

    return (
        <>
            {loading ? (
                <div className='mt-[-6rem] flex h-screen justify-center items-center'>
                    <BarLoader color="#000000" loading={true} size={15} />
                </div>
            ) : bookings.length ? (
                <div className='text-black flex flex-col items-center sm:mx-2'>
                    <h1 className='text-4xl my-4'>BOOKING LIST</h1>
                    <div className='flex justify-center'>
                        <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 border p-4'>
                            {bookings.map(booking => (
                                <div key={booking._id} className="shadow-xl flex flex-col bg-slate-200 border-4 border-[#eb4d5f] rounded-2xl hover:scale-105 m-2 p-2">
                                    <h1 className="text-3xl font-bold my-2 mx-2">{booking.description}</h1>
                                    <h1 className="my-1 text-xl mx-2">email: {booking.email}</h1>
                                    <h1 className="my-1 text-xl mx-2">id:{booking._id}</h1>
                                    <h1 className="my-1 text-xl mx-2">hall: {booking.hallname}</h1>
                                    <h1 className="my-1 text-xl mx-2">booked by: {booking.username}</h1>
                                    <h1 className="my-1 text-xl mx-2">date: {booking.date}</h1>
                                    <h1 className="my-1 text-xl mx-2">starttime: {booking.starttime}</h1>
                                    <h1 className="my-1 text-xl mx-2">endtime: {booking.endtime}</h1>
                                    <div className='flex items-center gap-1'>
                                        <button className={`bg-[#eb4d5f] my-2 text-white rounded-lg p-3 border-4 ${!deleteLoading ? 'hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' : ''}`} disabled={deleteLoading} onClick={() => handleDelete(booking._id)} >
                                            {
                                                deleteLoading ? (
                                                    <BarLoader color='#fff' height={4} width={100} />
                                                ) : (
                                                    <>delete<FaTrash className="inline " size={24} /></>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div >
            ) : (
                <div className='flex justify-center items-center text-white text-center'>
                    <p style={{ marginTop: "2rem" }}>
                        No bookings to display to display.
                    </p>
                </div>
            )}
        </>
    )
}

export default ViewBooking
