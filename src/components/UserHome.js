import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { GiTheater } from "react-icons/gi";
import EditProfileIcon from '../icons/EditProfileIcon'
import HallBookingCancellationIcon from '../icons/HallBookingCancellationIcon'
import HallBookingIcon from '../icons/HallBookingIcon'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const UserHome = () => {

   const navigate = useNavigate()

   const {auth} = useAuth(); 

   const gotoAdminhome = () => {
      navigate('/adminHome')
   }
   return (
      <div className='  w-full py-[10rem] text-white px-4 bg-[#000300] '>
         <button onClick={gotoAdminhome}>admin control</button>
         <h1 className='md:mb-[2%] mb-[20px] text-center font-bold text-4xl'>USER PANEL.{auth.userEmail}<button className='mx-4'>Logout</button></h1>
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
               <h2 className='text-2xl font-bold text-center py-6'>Edit Profile</h2>
               <EditProfileIcon />
               <div className='text-center font-medium'>
                  <ul>
                     <li className='p-4  bg-[#00df9a] text-black  font-semibold my-3 rounded-2xl hover:bg-white' >Edit here</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default UserHome
