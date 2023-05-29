import React from 'react'
import ViewBookingPost from './ViewBookingPost'

const ViewBookingsFeed = ({ bookings }) => {
    return (
        <div className='w-screen flex flex-col items-center md:justify-center  sm:mx-2'>
            <h1 className='text-4xl my-4'>Events in Halls</h1>
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border p-4'>
                    {bookings.map(booking => (
                        <ViewBookingPost key={booking.id} booking={booking} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewBookingsFeed
