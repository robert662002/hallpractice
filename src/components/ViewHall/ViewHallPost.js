
import { Link } from "react-router-dom"
const ViewHallPost = ({ hall ,handleDelete}) => {
    return (
        <div className="flex flex-col items-center border rounded-2xl hover:scale-105">
                <h1 className="text-3xl font-bold text-center my-2">{hall.name}</h1>
                <h1 className="my-1 text-xl">hall id: {hall.id}</h1>
                <h1 className="my-1 text-xl">hall capacity: {hall.capacity}</h1>
                <button className="my-2 bg-[#42e091] rounded-lg px-4 text-black hover:bg-white" onClick={()=>handleDelete(hall.id)}>delete</button>
                <Link to={`edit/${hall.id}`} ><button className="my-2 mb-4 bg-[#2b94d4] rounded-lg px-4 text-black hover:bg-white" >edit</button></Link>
        </div>
    )
}

export default ViewHallPost