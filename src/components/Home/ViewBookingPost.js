import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillCalendar } from 'react-icons/ai';
import { MdAccessTime } from 'react-icons/md';


const ViewBookingPost = ({ booking }) => {
    return (
        <div className="flex flex-col  rounded-2xl border-8 border-[#eb4d5f]  shadow-xl hover:scale-y-105">
            <h1 className="text-3xl text-center font-bold my-2">{booking.description}</h1>
            <div className='flex justify-center sm:gap-8 sm:flex-row items-center flex-col gap-4 my-2'>
                <div className='flex gap-3 '>
                    <FaMapMarkerAlt size={32} />
                    <h1 className="my-1 text-xl">{booking.hallname}</h1>
                </div>
                <div className='flex gap-3 '>
                    <AiFillCalendar size={32} />
                    <h1 className="my-1 text-xl">{booking.date}</h1>
                </div>
                <div className='flex gap-3 '>
                    <MdAccessTime size={32} />
                    <h1 className="my-1 text-xl">{booking.starttime}</h1>
                </div>
            </div>
        </div>
    )
}
export default ViewBookingPost
