import React from 'react'

const ViewBookingPost = ({booking}) => {
    return (
        <div className="flex flex-col items-center border rounded-2xl hover:scale-105">
            <h1 className="text-3xl font-bold text-center my-2">{booking.description}</h1>
            <h1 className="my-1 text-xl">venue: {booking.venue}</h1>
            <h1 className="my-1 text-xl">date: {booking.date}</h1>
        </div>
    )
}
export default ViewBookingPost
