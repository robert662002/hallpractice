import React from 'react'
import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useNavigate, useParams } from 'react-router-dom'

const EditHall = () => {

    const { id } = useParams();

    const [editHallName, setEditHallName] = useState('');
    const [editHallCapacity, setEditHallCapacity] = useState('');
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
            const response = await axiosPrivate.put('halls', {
                id,
                hallname: editHallName,
                capacity: parseInt(editHallCapacity),
                ac: ac.toString(),
                projector: projector.toString()
            }, { signal: controller.signal });

            // Handle the response from the backend if needed
            console.log(response.data);

            // Reset the form inputs
            setEditHallName('');
            setEditHallCapacity('');
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

    useEffect(() => {
        const fetchHallDetails = async () => {
            try {
                const response = await axiosPrivate.get(`/halls/${id}`);
                setEditHallName(response.data.hallname)
                setEditHallCapacity(response.data.capacity)
                setAc(response.data.ac)
                setProjector(response.data.projector)
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching hall details:', error);
            }
        };
        fetchHallDetails();
    }, [id, axiosPrivate]);

    return (
        <div className='mt-[-98px] text-white flex flex-col justify-center items-center h-screen' >
            <h1 className='text-3xl text-[#00df9a] font-bold my-10'>Edit hall</h1>
            {
                success ?
                    (
                        <div>
                            <h1 className='text-2xl text-[#00df9a] mb-8'>Hall Edited  successfully!</h1>
                            <div className='flex justify-center my-4'>
                                <button className='bg-[#00df9a] text-black px-4 font-semibold py-2 rounded-xl hover:bg-white hover:text-black' onClick={goBack}>go Back</button>
                            </div>
                        </div>
                    ) :
                    (
                        <form className='w-[80%] md:w-[60%] lg:w-[40%] border border-1 rounded p-5 hover:scale-105 ease-in-out' onSubmit={handleSubmit}>
                            <h1 className='font-semibold text-2xl pb-3 mr-5'>details of edit hall</h1>
                            <div className='flex flex-col my-2'>
                                <label className='my-2'>Name of hall</label>
                                <input
                                    className='text-black rounded-md px-2'
                                    type='text'
                                    value={editHallName}
                                    onChange={(e) => setEditHallName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='flex flex-col my-2'>
                                <label className='my-2'>No.of Seats</label>
                                <input
                                    className='text-black rounded-md px-2'
                                    type='text' value={editHallCapacity}
                                    onChange={(e) => setEditHallCapacity(e.target.value)}
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
                                <button className='bg-[#00df9a] text-black px-4 font-semibold py-2 rounded-xl hover:bg-white hover:text-black'>Confirm Edit</button>
                            </div>
                        </form>
                    )
            }
        </div>
    )
}

export default EditHall
