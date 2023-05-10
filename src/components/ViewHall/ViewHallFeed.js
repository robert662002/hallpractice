import ViewHallPost from './ViewHallPost';
import { Link } from 'react-router-dom';

const ViewHallFeed = ({ halls ,handleDelete }) => {
    return (
        <div className='flex flex-col items-center md:justify-center h-screen sm:mx-2'>
            <h1 className='text-4xl my-4'>HALL LIST</h1>
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border p-4'>
                    {halls.map(hall => (
                        <ViewHallPost key={hall.id} hall={hall} handleDelete={handleDelete}/>
                    ))}
                    <div className='flex justify-center items-center border rounded-2xl hover:scale-105'>
                        <Link to="addhall">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewHallFeed