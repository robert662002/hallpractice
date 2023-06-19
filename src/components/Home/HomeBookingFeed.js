import React from 'react'
import HomeBookingPost from './HomeBookingPost'
import { useState } from 'react'
import Modal from './Modal'
import { FaComment } from 'react-icons/fa';

const HomeBookingFeed = ({ bookings }) => {

    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }
    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <div className='w-screen flex flex-col  bg-slate-200'>
            <div className='flex mx-3 justify-between items-center'>
                <h1 className="px-4 text-5xl my-3 font-bold">Coming Events</h1>
                <button onClick={openModal} className="bg-[#eb4d5f] text-white p-5 sm:p-3 text-xl rounded-3xl"><span className='hidden sm:inline mr-3'>Give Feedback</span><FaComment className='inline' size={24} /></button>
            </div>
            <Modal isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
            <div className='grid grid-cols-1 w-full gap-4 bg-slate-200  rounded-2xl p-4'>
                {bookings.map(booking => (
                    <HomeBookingPost key={booking.id} booking={booking} />
                ))}
            </div>
        </div>
    )
}

export default HomeBookingFeed
