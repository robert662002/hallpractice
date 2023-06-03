import React from 'react'
import { useState } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom'

const AddHall = ({ halls, setHalls }) => {

    const [newHallName, setNewHallName] = useState('');
    const [newHallCapacity, setNewHallCapacity] = useState('');
    const [ac, setAc] = useState(false);
    const [projector, setProjector] = useState(false);
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate();
    const axiosPrivate = useAxiosPrivate();

    const goBack = () => {
        navigate(-1)
    }

    const handleSubmit = async (e) => {
        let isMounted = true;
        const controller = new AbortController();
        e.preventDefault();

        try {
            const response = await axiosPrivate.post('halls', {
                hallname: newHallName,
                capacity: parseInt(newHallCapacity),
                ac: ac.toString(),
                projector: projector.toString()
            }, { signal: controller.signal });

            // Handle the response from the backend if needed
            console.log(response.data);

            // Reset the form inputs
            setNewHallName('');
            setNewHallCapacity('');
            setAc(false);
            setProjector(false);
            setSuccess(true);
        } catch (error) {
            // Handle error if needed
            console.error(error);
        }
        return () => {
            isMounted = false;
            controller.abort();
        }
    };


    return (
        <div className='mt-[-98px] text-black flex flex-col justify-center items-center h-screen' >
            {
                success ?
                    (
                        <div>
                            <h1 className='text-2xl text-[#eb4d5f] mb-8'>Hall added successfully!</h1>
                            <div className='flex justify-center my-4'>
                                <button className='bg-[#eb4d5f] text-black px-4 font-semibold py-2 rounded-xl hover:bg-white hover:text-black' onClick={goBack}>go Back</button>
                            </div>
                        </div>
                    ) :
                    (
                        <form className='w-[80%] md:w-[60%] lg:w-[40%]  border-8 shadow-xl rounded-2xl p-5 bg-slate-200 border-[#eb4d5f]' onSubmit={handleSubmit}>
                            <h1 className='text-3xl text-[#eb4d5f] text-center font-bold my-5'>Add hall</h1>
                            <h1 className='font-semibold text-xl '>details of new hall</h1>
                            <div className='flex flex-col my-2'>
                                <label className='my-2'>Name of hall</label>
                                <input
                                    className='text-black rounded-md p-2 border border-gray-300'
                                    type='text' value={newHallName}
                                    onChange={(e) => setNewHallName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='flex flex-col my-1'>
                                <label className='my-2'>No.of Seats</label>
                                <input
                                    className='text-black rounded-md p-2 border border-gray-300'
                                    type='number' value={newHallCapacity}
                                    
                                    onChange={(e) => setNewHallCapacity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='flex justify-between my-2'>
                                <label>Air Condition</label>
                                <input
                                    type='checkbox'
                                    className="w-7 h-7 rounded-xl border-0"
                                    checked={ac}
                                    onChange={(e) => setAc(e.target.checked)}
                                />
                            </div>
                            <div className='flex justify-between my-2'>
                                <label>Projector</label>
                                <input
                                    type='checkbox'
                                    className="w-7 h-7 rounded-xl border-0"
                                    checked={projector}
                                    onChange={(e) => setProjector(e.target.checked)}
                                />
                            </div>
                            <div className='flex justify-center my-4'>
                                <button className='bg-[#eb4d5f] text-white border-4 px-4 font-semibold py-2 rounded-xl hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]'>Add Hall</button>
                            </div>
                        </form>
                    )
            }
        </div>
    )
}

export default AddHall
