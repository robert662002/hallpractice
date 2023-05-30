import React from 'react'
import { useState, useEffect } from 'react'
import ViewHallFeed from './ViewHallFeed';
import hall from '../../api/halls'

const ViewHall = ({ halls, setHalls }) => {

    const handleDelete = async (id) => {
        try {
            await hall.delete(`/hall/${id}`);
            const hallList = halls.filter(hall => hall.id !== id);
            setHalls(hallList);
        }
        catch (err) {
            console.log(`Error:${err.message}`);
        }
    }
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await hall.get('/hall');
                setHalls(response.data);
            }
            catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
                else {
                    console.log(`Error: ${error.message}`);
                }
            }
        }
        fetchPosts();
    }, [])

    return (
        <div className='text-white'>
            {halls.length ? (
                <ViewHallFeed halls={halls} handleDelete={handleDelete} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </div>
    )
}

export default ViewHall
