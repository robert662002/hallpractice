import React from 'react'
import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import {  useNavigate } from 'react-router-dom';
import { BarLoader } from 'react-spinners';


const ViewUser = () => {

    const [loading, setLoading] = useState(true); // New state variable for loading
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();

    const goToAddUser = () => {
        navigate('/adminHome/addUser')
    }

    const [users, setUsers] = useState([])

    const handleDelete = async (id) => {
        try {
             await axiosPrivate.delete('/users', { data: { id } });
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
        }
        catch (err) {
            console.log(`Error:${err.message}`);
        }
    }
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axiosPrivate.get('/users');
                setUsers(response.data);
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
            ) : users.length ? (
                <div className='text-white flex flex-col items-center h-screen sm:mx-2'>
                    <h1 className='text-4xl my-4'>USER LIST</h1>
                    <div className='flex justify-center'>
                        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 border p-4'>
                            {users.map(user => (
                                <div key={user._id} className="flex flex-col items-center border rounded-2xl hover:scale-105">
                                    <h1 className="text-3xl font-bold text-center my-2">{user.username}</h1>
                                    <h1 className="my-1 text-xl mx-3">user id:{user._id}</h1>
                                    <h1 className="my-1 text-xl mx-2">user email: {user.email}</h1>
                                    <button className="my-2 bg-[#42e091] rounded-lg px-4 text-black hover:bg-white" onClick={() => handleDelete(user._id)}>delete</button>
                                </div>
                            ))}
                            <div className="flex justify-center items-center border rounded-2xl hover:scale-105">
                                <button
                                    
                                    onClick={goToAddUser}
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
                <div className='flex justify-center items-center text-white text-center'>
                    <p style={{ marginTop: "2rem" }}>
                        No users to display to display.
                    </p>
                </div>
            )}
        </>
    )
}

export default ViewUser
