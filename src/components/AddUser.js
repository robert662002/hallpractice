import React from 'react'

const AddUser = () => {
    return (
        <div className='mt-[-98px]  text-white flex flex-col justify-center items-center h-screen' >
            <h1 className='text-3xl text-[#00df9a] font-bold my-10'>Add User</h1>
            <form className='border w-[80%] md:w-[60%] lg:w-[40%] border-1 rounded p-5 hover:scale-105 ease-in-out'>
                <h1 className='font-semibold text-2xl pb-3 mr-5'>details of new user</h1>
                <div className='flex flex-col my-2'>
                    <label className='my-2'>Email</label>
                    <input className='text-black rounded-md' type='text' />
                </div>
                <div className='flex flex-col my-2'>
                    <label className='my-2'>Name</label>
                    <input className='text-black rounded-md' type='text' />
                </div>
                <div className='flex flex-col my-2'>
                    <label className='my-2'>Password</label>
                    <input className='text-black rounded-md' type='password' />
                </div>
                <div className='flex flex-col my-2'>
                    <label className='my-2'>Retype Password</label>
                    <input className='text-black rounded-md' type='password' />
                </div>
                
                <div className='flex justify-center my-4'>
                    <button className='bg-[#00df9a] text-black px-4 font-semibold py-2 rounded-xl hover:bg-white hover:text-black'>Add User</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser
