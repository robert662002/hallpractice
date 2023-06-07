import React from 'react'
import { GiTheater } from "react-icons/gi";
import EditProfileIcon from '../../icons/EditProfileIcon'
import HallBookingCancellationIcon from '../../icons/HallBookingCancellationIcon'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserHome = () => {

   const { auth } = useAuth();


   return (
      <>
         <div className=' w-full py-[5rem] text-black px-4 '>
            <div className='my-2 flex flex-col gap-4'>
               <h1 className=' text-center font-bold text-4xl'>USER PANEL</h1>
               <div className='flex justify-center font-semibold items-center gap-3'>
                  <FaUser size={32} />
                  <h1>{auth.userEmail} </h1>
                  <h1>{auth.username}</h1>
               </div>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
               <div className='w-full bg-slate-200 shadow-xl flex flex-col p-4 my-4 rounded-lg border border-1 hover:scale-105 duration-300 items-center'>
                  <h2 className='text-2xl font-bold text-center py-6'>Book Hall</h2>
                  <GiTheater size={64} />
                  <div className='text-center font-medium'>
                     <ul>
                        <Link to="filter" ><li className='p-4  bg-[#eb4d5f] text-white  font-semibold my-3 rounded-2xl hover:bg-white hover:text-[#eb4d5f] hover:border-4 hover:border-[#eb4d5f] ' >Book here</li></Link>
                     </ul>
                  </div>
               </div>
               <div className='w-full bg-slate-200 shadow-xl flex flex-col p-4 my-4 rounded-lg border border-1 hover:scale-105 duration-300 items-center'>
                  <h2 className='text-2xl font-bold text-center py-6'>Cancel Booking</h2>
                  <HallBookingCancellationIcon />
                  <div className='text-center font-medium'>
                     <ul>
                        <Link to="cancel" ><li className='p-4  bg-[#eb4d5f] text-white  font-semibold my-3 rounded-2xl hover:bg-white hover:text-[#eb4d5f] hover:border-4 hover:border-[#eb4d5f] ' >Cancel here</li></Link>
                     </ul>
                  </div>
               </div>
               <div className='w-full bg-slate-200 shadow-xl flex flex-col p-4 my-4 rounded-lg border border-1 hover:scale-105 duration-300 items-center'>
                  <h2 className='text-2xl font-bold text-center py-6'>My Bookings</h2>
                  <EditProfileIcon />
                  <div className='text-center font-medium'>
                     <ul>
                        <Link to="userBookings" ><li className='p-4  bg-[#eb4d5f] text-white  font-semibold my-3 rounded-2xl hover:bg-white hover:text-[#eb4d5f] hover:border-4 hover:border-[#eb4d5f] ' >View here</li></Link>
                     </ul>
                  </div>
               </div>
            </div>
         </div >
      </>
   )
}

export default UserHome
