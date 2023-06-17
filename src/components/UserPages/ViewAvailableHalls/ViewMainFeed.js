import React from 'react'
import ViewMainPost from './ViewMainPost'
const ViewMainFeed = ({availableHalls}) => {
  return (
    <div className='flex flex-col items-center pt-0 sm:mx-2'>
            <h1 className='text-3xl mb-4 font-bold'>Available Halls</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 gap-2 p-2'>
                    {availableHalls.map(hall => (
                        <ViewMainPost key={hall._id} hall={hall} />
                    ))}
                </div>
            </div>
        </div>
  )
}

export default ViewMainFeed
