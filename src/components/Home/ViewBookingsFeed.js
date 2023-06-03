import React from 'react'
import ViewBookingPost from './ViewBookingPost'

const ViewBookingsFeed = ({ bookings }) => {
    return (
        <div className='w-screen flex flex-col  bg-slate-200'>
            <h1 className='px-4 text-5xl my-3 font-bold'>Coming Events</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 w-full gap-4 bg-slate-200  rounded-2xl p-4'>
                    {bookings.map(booking => (
                        <ViewBookingPost key={booking.id} booking={booking} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewBookingsFeed
