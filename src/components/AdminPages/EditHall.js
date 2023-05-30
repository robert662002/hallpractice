import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import hallapi from '../../api/halls';
import { useNavigate } from 'react-router-dom';

const EditHall = ({halls,setHalls}) => {

    const [editHallName,setEditHallName]=useState('')
    const [editHallCapacity,setEditHallCapacity]=useState('')
    const{id} = useParams();
    const navigate = useNavigate();
    const hall= halls.find(hall => (hall.id).toString()===id);

    const handleEdit= async(id)=>{
        const updatedHall ={id,name:editHallName,capacity: parseInt(editHallCapacity)};
        try{
            const response = await hallapi.put(`/hall/${id}`,updatedHall);
            setHalls(halls.map(hall => hall.id === id ? {...response.data} : hall));
            setEditHallName('');
            setEditHallCapacity('');
            navigate('/');
        }
        catch(err){
            console.log(`Error: $(err.message)`);
        }
    }

    useEffect(()=>{
        if(hall){
            setEditHallName(hall.name);
            setEditHallCapacity(hall.capacity);
        }
    },[hall,setEditHallName,setEditHallCapacity])

    return (
        <div className='mt-[-98px] text-white flex flex-col justify-center items-center h-screen' onSubmit={(e)=>e.preventDefault()}>
            <h1 className='text-3xl text-[#00df9a] font-bold my-10'>Edit hall</h1>
            <form className='w-[80%] md:w-[60%] lg:w-[40%] border border-1 rounded p-5 hover:scale-105 ease-in-out'  >
                <h1 className='font-semibold text-2xl pb-3 mr-5'>details of hall</h1>
                <div className='flex flex-col my-2'>
                    <label className='my-2'>Name of hall</label>
                    <input className='text-black rounded-md' type='text' value={editHallName} onChange={(e)=>setEditHallName(e.target.value)} />
                </div>
                <div className='flex flex-col my-2'>
                    <label className='my-2'>No.of Seats</label>
                    <input className='text-black rounded-md' type='text' value={editHallCapacity} onChange={(e)=>setEditHallCapacity(e.target.value)}/>
                </div>
                <div className='flex justify-between my-2'>
                    <label>Projector</label>
                    <input type='checkbox' />
                </div>
                <div className='flex justify-between my-2'>
                    <label>Air Condition</label>
                    <input type='checkbox' />
                </div>
                <div className='flex justify-center my-4'>
                    <button className='bg-[#00df9a] text-black px-4 font-semibold py-2 rounded-xl hover:bg-white hover:text-black' onClick={()=>handleEdit(hall.id)}>Confirm Edit</button>
                </div>
            </form>
        </div>
    )
}

export default EditHall
