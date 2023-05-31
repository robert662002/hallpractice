import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const AdminHome = () => {

   const {auth}  = useAuth();

   return (
      <div className='mt-[-98px]  w-full py-[10rem] text-white px-4 bg-[#000300] '>
         <h1 className='md:mb-[2%] mb-[20px] text-center font-bold text-4xl'>ADMIN PANEL.</h1>
         <h1 className='text-center my-2'>currently logged admin: {auth.userEmail} {auth.username} </h1>
         <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg border border-1 hover:scale-105 duration-300'>
               <h2 className='text-2xl font-bold text-center py-8'>Manage User</h2>
               <div className='text-center font-medium'>
                  <ul>
                     <li className='py-4 bg-[#00df9a] text-black  font-semibold my-3 rounded-2xl hover:bg-white' ><Link to="viewUser" >View[Delete] User</Link></li>
                  </ul>
               </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg border border-1 hover:scale-105 duration-300'>
               <h2 className='text-2xl font-bold text-center py-8'>Manage Halls</h2>
               <div className='text-center font-medium'>
                  <ul>
                     <li className='py-4 bg-[#00df9a] text-black font-semibold my-3 rounded-2xl hover:bg-white'><Link to="addHall">Add Hall</Link></li>
                     <li className='py-4 bg-[#00df9a] text-black font-semibold my-3 rounded-2xl hover:bg-white' ><Link to="viewHall" >View[Delete] Hall</Link></li>
                  </ul>
               </div>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg border border-1 hover:scale-105 duration-300'>
               <h2 className='text-2xl font-bold text-center py-8'>Feedbacks</h2>
               <div className='text-center font-medium'>
                  <ul>
                     <li className='py-4 bg-[#00df9a] text-black font-semibold my-3 rounded-2xl hover:bg-white' >View FeedBacks</li>
                  </ul>
               </div>
            </div>

         </div>
      </div>
   );
};

export default AdminHome;