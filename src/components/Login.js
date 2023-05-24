import React, { useState } from 'react';
import Hall from '../assets/halls.jpg'
import Navbar from './Navbar'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);


    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className='md:mt-[-100px] grid h-[50%] w-full grid-cols-1 md:grid-cols-2'>
                <div className='max-h-full hidden md:block'>
                    <img className='w-full h-screen object-contain' src={Hall} alt='/' />
                </div>
                <div className='bg-[#000300] flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto  p-4 border border-white rounded-sm text-white'>
                        <h2 className='text-4xl font-bold text-center py-6'>LOG IN :)</h2>
                        <div className='flex flex-col py-2'>
                            <label>Email</label>
                            <input type='text' className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="w-full py-2 px-4 mt-2 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    onClick={toggleShowPassword}
                                >
                                    {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button className='text-black border w-[75%] my-5 py-2 bg-[#00df9a] '>Sign In</button></div>
                        <div className='text-center'>
                            <p>Create an account</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
