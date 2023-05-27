import React from 'react'
import { Link } from 'react-router-dom'

const ViewMainPost = ({ hall }) => {
    return (
        <div className="flex flex-col items-center border rounded-2xl hover:scale-105">
            <h1 className="text-3xl mx-4 font-bold text-center my-2">{hall.hallname}</h1>
            <h1 className="my-1 text-xl">hall capacity: {hall.capacity}</h1>
            <Link to={`booking/${hall._id}`}>
                <button className="my-2 mb-4 bg-[#2b94d4] rounded-lg px-4 text-black hover:bg-white">Book</button>
            </Link>

        </div>
    )
}

export default ViewMainPost
