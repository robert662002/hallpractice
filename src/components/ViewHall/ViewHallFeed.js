import ViewHallPost from './ViewHallPost';

const ViewHallFeed = ({ halls ,handleDelete }) => {
    return (
        <div className='flex flex-col items-center md:justify-center h-screen sm:mx-2'>
            <h1 className='text-4xl my-4'>HALL LIST</h1>
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 border p-4'>
                    {halls.map(hall => (
                        <ViewHallPost key={hall.id} hall={hall} handleDelete={handleDelete}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ViewHallFeed