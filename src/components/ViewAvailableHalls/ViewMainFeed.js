import React from 'react'
import ViewMainPost from './ViewMainPost'
const ViewMainFeed = ({availableHalls}) => {
  return (
    <div className='flex flex-col items-center md:justify-center h-screen sm:mx-2'>
            {<h1 className='text-4xl my-4'>Available Halls</h1>}
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 border p-4'>
                    {availableHalls.map(hall => (
                        <ViewMainPost key={hall._id} hall={hall} />
                    ))}
                </div>
            </div>
        </div>
  )
}

export default ViewMainFeed
