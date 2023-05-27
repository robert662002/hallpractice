import React from 'react'
import ViewBookingPost from './ViewBookingPost'

const ViewBookingsFeed = ({ bookings }) => {
    return (
        <div className='flex flex-col items-center md:justify-center h-screen sm:mx-2'>
            <h1 className='text-4xl my-4'>BOOkings List</h1>
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 border p-4'>
                    {bookings.map(booking => (
                        <ViewBookingPost key={booking.id} booking={booking} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ViewBookingsFeed
