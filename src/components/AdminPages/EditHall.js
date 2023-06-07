import React from 'react'
import { useState, useEffect } from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { useNavigate, useParams } from 'react-router-dom'
import { BarLoader } from 'react-spinners'


const EditHall = () => {

    const { id } = useParams();

    const [editHallName, setEditHallName] = useState('');
    const [editHallCapacity, setEditHallCapacity] = useState('');
    const [ac, setAc] = useState(false);
    const [projector, setProjector] = useState(false);
    const [success, setSuccess] = useState(false)

    const [loading, setLoading] = useState(false)
    const [errMsg, setErrMsg] = useState('')

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
            setLoading(true)
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
            if (!error?.response) {
                setErrMsg('no response from backend')
            }
            else if (error.response?.status === 500) {
                setErrMsg('an error occured')
            }

        } finally {
            setLoading(false)
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
                // Handle error if needed
                console.error(error);
                if (!error?.response) {
                    setErrMsg('no response from backend')
                }
                else if (error.response?.status === 500) {
                    setErrMsg('an error occured')
                }
                else{
                    setErrMsg('an unexpected error ocuured')
                }
            }
        }
        fetchHallDetails();
    }, [id, axiosPrivate]);

    return (
        <div className='mt-[-98px] text-black flex flex-col justify-center items-center h-screen' >
            {
                success ?
                    (
                        <div>
                            <h1 className='text-2xl text-[#eb4d5f] mb-8'>Hall Edited  successfully!</h1>
                            <div className='flex justify-center my-4'>
                                <button className='bg-[#eb4d5f] text-black px-4 font-semibold py-2 rounded-xl hover:bg-white hover:text-black' onClick={goBack}>go Back</button>
                            </div>
                        </div>
                    ) :
                    (
                        <form className='w-[80%] md:w-[60%] lg:w-[40%]  border-8 shadow-xl rounded-2xl p-5 bg-slate-200 border-[#eb4d5f]' onSubmit={handleSubmit}>
                            <p className={errMsg ? 'p-3 bg-red-600 text-red-200 ' : 'hide'}>{errMsg}</p>
                            <h1 className='text-3xl text-[#eb4d5f] text-center font-bold my-5'>Edit hall</h1>
                            <h1 className='font-semibold text-2xl'>details of edit hall</h1>
                            <div className='flex flex-col my-2'>
                                <label className='my-2'>Name of hall</label>
                                <input
                                    className='text-black rounded-md p-2 border border-gray-300'
                                    type='text'
                                    value={editHallName}
                                    onChange={(e) => setEditHallName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='flex flex-col my-2'>
                                <label className='my-2'>No.of Seats</label>
                                <input
                                    className='text-black rounded-md p-2 border border-gray-300'
                                    type='number' value={editHallCapacity}
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
                                <button className={`bg-[#eb4d5f] my-2 text-white rounded-lg p-3 px-8 border-4 ${!loading ? 'hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' : ''}`} disabled={loading}>
                                    {loading ? (
                                        <BarLoader color='#fff' height={4} width={100} />
                                    ) : (
                                        "Confirm Edit"
                                    )}
                                </button>
                            </div>
                        </form>
                    )
            }
        </div>
    )
}

export default EditHall
