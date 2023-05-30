import React from 'react'
import { GiTheater } from "react-icons/gi";
import EditProfileIcon from '../../icons/EditProfileIcon'
import HallBookingCancellationIcon from '../../icons/HallBookingCancellationIcon'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const UserHome = () => {

   const navigate = useNavigate()

   const { auth } = useAuth();


   return (
      <>
         <div className=' w-full py-[5rem] text-white px-4 bg-[#000300] '>
            <div className='my-2'>
               <h1 className=' text-center font-bold text-4xl'>USER PANEL</h1>
               <h1 className='text-center my-2'>currently logged in: {auth.userEmail} {auth.username} </h1>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
               <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg border border-1 hover:scale-105 duration-300 items-center'>
                  <h2 className='text-2xl font-bold text-center py-6'>Book Hall</h2>
                  <GiTheater size={64} />
                  <div className='text-center font-medium'>
                     <ul>
                        <li className='p-4  bg-[#00df9a] text-black  font-semibold my-3 rounded-2xl hover:bg-white' ><Link to="filter" >Book here</Link></li>
                     </ul>
                  </div>
               </div>
               <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg border border-1 hover:scale-105 duration-300 items-center'>
                  <h2 className='text-2xl font-bold text-center py-6'>Cancel Booking</h2>
                  <HallBookingCancellationIcon />
                  <div className='text-center font-medium'>
                     <ul>
                        <li className='p-4  bg-[#00df9a] text-black  font-semibold my-3 rounded-2xl hover:bg-white' ><Link to="cancel" >Cancel here</Link></li>
                     </ul>
                  </div>
               </div>
               <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg border border-1 hover:scale-105 duration-300 items-center'>
                  <h2 className='text-2xl font-bold text-center py-6'>Your Bookings</h2>
                  <EditProfileIcon />
                  <div className='text-center font-medium'>
                     <ul>
                        <li className='p-4  bg-[#00df9a] text-black  font-semibold my-3 rounded-2xl hover:bg-white' ><Link to="userBookings" >View here</Link></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default UserHome