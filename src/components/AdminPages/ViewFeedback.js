import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const ViewFeedback = () => {
    const [loading, setLoading] = useState(true); // New state variable for loading
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    
    const [feedbacks, setFeedbacks] = useState([])

    const handleDelete = async (id) => {
        try {
            await axiosPrivate.delete('/feedback', { data: { id } });
            setFeedbacks((prevFeedbacks) => prevFeedbacks.filter((feedback) => feedback._id !== id));
        }
        catch (err) {
            console.log(`Error:${err.message}`);
        }
    }
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosPrivate.get('/feedback');
                setFeedbacks(response.data);
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
            ) : feedbacks.length ? (
                <div className='text-black flex flex-col items-center h-screen sm:mx-2'>
                    <h1 className='text-4xl my-4'>FeedBacks</h1>
                    <div className='flex justify-center'>
                        <div className='grid md:grid-cols-2 xl:grid-cols-3  gap-4 border p-4'>
                            {feedbacks.map(feedback => (
                                <div key={feedback._id} className="shadow-xl flex flex-col bg-slate-200 border-4 border-[#eb4d5f] rounded-2xl hover:scale-105 m-2 p-2">
                                    <h1 className="text-3xl font-bold my-2">{feedback.date}</h1>
                                    <p className="my-1 text-xl ">{feedback.content}</p>
                                    <div className='flex items-center gap-1'>
                                        <button className="bg-[#eb4d5f] my-2  text-white rounded-lg p-3 border-4 hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]" onClick={() => handleDelete(feedback._id)}>delete <FaTrash className="inline " size={24} /></button>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center text-black text-center'>
                    <p style={{ marginTop: "2rem" }}>
                        No feedbacks to display.
                    </p>
                </div>
            )}
        </>
    )
}

export default ViewFeedback
