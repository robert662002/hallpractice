import React from 'react'
import ViewMainFeed from './ViewMainFeed'

const ViewMain = ({ availableHalls }) => {
    return (
        <div className='text-white'>
            {availableHalls.length ? (
                <ViewMainFeed availableHalls={availableHalls}/>
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No available halls. Please change Form data
                </p>
            )}
        </div>
    )
}

export default ViewMain
