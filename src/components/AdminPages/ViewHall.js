import React from 'react'
import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { Link, useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';



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
                    <BarLoader color="#000000" loading={true} size={15} />
                </div>
            ) : halls.length ? (
                <div className='text-black flex flex-col items-center h-screen sm:mx-2'>
                    <h1 className='text-4xl my-4'>HALL LIST</h1>
                    <div className='flex justify-center'>
                        <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3  gap-6 border p-4'>
                            {halls.map(hall => (
                                <div key={hall._id} className="p-4 shadow-xl flex flex-col border-4 border-[#eb4d5f] rounded-2xl hover:scale-105">
                                    <h1 className="text-3xl font-bold  my-2">{hall.hallname}</h1>
                                    <h1 className="my-1 text-xl ">hall id:{hall._id}</h1>
                                    <h1 className="my-1 text-xl">hall capacity: {hall.capacity}</h1>
                                    <div className='flex  items-center gap-4'>
                                        <label className='text-xl'>ac:</label>
                                        <input className='w-4 h-4 p-8' type="checkbox" checked={hall.ac} readOnly />
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <label className='text-xl'>projector:</label>
                                        <input className='w-4 h-4 p-8' type="checkbox" checked={hall.projector} readOnly />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <button className="bg-[#eb4d5f] my-2  text-white rounded-lg p-3 border-4 hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]" onClick={() => handleDelete(hall._id)}>delete <FaTrash className="inline " size={24} /></button>
                                        <Link to={`editHall/${hall._id}`} ><button className="bg-[#eb4d5f] my-2  text-white rounded-lg p-3 border-4 hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]" >edit <FaEdit className='inline' size={24}/></button></Link>
                                    </div>
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
