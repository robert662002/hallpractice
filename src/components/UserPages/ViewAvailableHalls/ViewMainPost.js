import React from 'react'
import { Link } from 'react-router-dom'

const ViewMainPost = ({ hall }) => {
    return (
        <div className="min-w-[25rem] bg-slate-200 flex flex-col items-center border-4 border-[#eb4d5f] rounded-2xl ">
            <h1 className="text-3xl mx-4 font-medium text-center my-1">{hall.hallname}</h1>
            <h1 className="my-1 text-xl">hall capacity: {hall.capacity}</h1>
            <Link to={`booking/${hall._id}`}>
                <button className="my-2 bg-[#eb4d5f] rounded-lg px-4 text-white border-4 hover:bg-white hover:border-[#eb4d5f] hover:text-[#eb4d5f]">Book</button>
            </Link>

        </div>
    )
}

export default ViewMainPost
