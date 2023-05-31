import React from 'react'
import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Link, useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';


const ViewHall = () => {

    const [loading, setLoading] = useState(true); // New state variable for loading
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    const goToAddHall = () => {
        navigate('/adminHome/addHall')
    }

    const [halls, setHalls] = useState([])

    const handleDelete = async (id) => {
        try {
            const response = await axiosPrivate.delete('/halls', { data: { id } });
            setHalls((prevHalls) => prevHalls.filter((hall) => hall._id !== id));
        }
        catch (err) {
            console.log(`Error:${err.message}`);
        }
    }
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosPrivate.get('/halls');
                setHalls(response.data);
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
                    <BarLoader color="#ffffff" loading={true} size={15} />
                </div>
            ) : halls.length ? (
                <div className='text-white flex flex-col items-center h-screen sm:mx-2'>
                    <h1 className='text-4xl my-4'>HALL LIST</h1>
                    <div className='flex justify-center'>
                        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border p-4'>
                            {halls.map(hall => (
                                <div key={hall._id} className="flex flex-col items-center border rounded-2xl hover:scale-105">
                                    <h1 className="text-3xl font-bold text-center my-2">{hall.hallname}</h1>
                                    <h1 className="my-1 text-xl mx-3">hall id:{hall._id}</h1>
                                    <h1 className="my-1 text-xl">hall capacity: {hall.capacity}</h1>
                                    <div className='flex justify-center items-center gap-4'>
                                        <label className='text-xl'>ac:</label>
                                        <input className='w-4 h-4 p-8' type="checkbox" checked={hall.ac} readOnly />
                                    </div>
                                    <div className='flex justify-center items-center gap-4'>
                                        <label className='text-xl'>projector:</label>
                                        <input className='w-4 h-4 p-8' type="checkbox" checked={hall.projector} readOnly />
                                    </div>
                                    <button className="my-2 bg-[#42e091] rounded-lg px-4 text-black hover:bg-white" onClick={() => handleDelete(hall._id)}>delete</button>
                                    <Link to={`editHall/${hall._id}`} ><button className="my-2 mb-4 bg-[#2b94d4] rounded-lg px-4 text-black hover:bg-white" >edit</button></Link>
                                </div>
                            ))}
                            <div className="flex justify-center items-center border rounded-2xl hover:scale-105">
                                <button
                                    
                                    onClick={goToAddHall}
                                ><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-24 h-24"
                                >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center text-center'>
                    <p style={{ marginTop: "2rem" }}>
                        No halls to display to display.
                    </p>
                </div>
            )}
        </>
    )
}

export default ViewHall
