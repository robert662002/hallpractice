import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaUser } from 'react-icons/fa';


const AdminHome = () => {

   const { auth } = useAuth();

   return (
      <div className=' w-full  md:my-[6rem] my-[3rem]'>
         <div className='my-2 flex flex-col gap-4'>
            <h1 className=' text-center font-bold text-4xl'>ADMIN PANEL</h1>
            <div className='flex justify-center font-semibold items-center gap-3'>
               <FaUser size={32} />
               <h1>{auth.userEmail} </h1>
               <h1>{auth.username}</h1>
            </div>
         </div>
         <div className=' mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 p-2 gap-6'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-slate-200 border border-1 hover:scale-105 duration-300'>
               <h2 className='text-2xl font-bold text-center py-8'>Manage User</h2>
               <div className='text-center font-medium'>
                  <ul>
                     <Link to="viewUser" ><li className='py-4 bg-[#eb4d5f] text-white border-4 font-semibold my-3 rounded-2xl hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' >View[Delete] User</li></Link>
                  </ul>
               </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-slate-200 border border-1 hover:scale-105 duration-300'>
               <h2 className='text-2xl font-bold text-center py-8'>Manage Bookings</h2>
               <div className='text-center font-medium'>
                  <ul>
                     <Link to="viewBooking" ><li className='py-4 bg-[#eb4d5f] text-white border-4  font-semibold my-3 rounded-2xl hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' >View[Delete] Booking</li></Link>
                  </ul>
               </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-slate-200 border border-1 hover:scale-105 duration-300'>
               <h2 className='text-2xl font-bold text-center py-8'>Manage Halls</h2>
               <div className='text-center font-medium'>
                  <ul>
                     <Link to="addHall"><li className='py-4 bg-[#eb4d5f] text-white border-4 font-semibold my-3 rounded-2xl hover:bg-white  hover:text-[#eb4d5f] hover:border-[#eb4d5f]'>Add Hall</li></Link>
                     <Link to="viewHall" ><li className='py-4 bg-[#eb4d5f] text-white border-4 font-semibold my-3 rounded-2xl hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' >View[Delete] Hall</li></Link>
                  </ul>
               </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg bg-slate-200 border border-1 hover:scale-105 duration-300'>
               <h2 className='text-2xl font-bold text-center py-8'>Feedbacks</h2>
               <div className='text-center font-medium'>
                  <ul>
                     <Link to="viewFeedback" ><li className='py-4 bg-[#eb4d5f] text-white border-4  font-semibold my-3 rounded-2xl hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' >View[Delete] Feedback</li></Link>
                  </ul>
               </div>
            </div>

         </div>
      </div >
   );
};

export default AdminHome;