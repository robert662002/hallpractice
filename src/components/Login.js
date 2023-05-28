import React, { useState, useRef, useEffect } from 'react';
import Hall from '../assets/halls.jpg'
import Navbar from './Navbar'
import axios from '../api/backend'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const LOGIN_URL = '/auth';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { auth, setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [userEmail, setUserEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [userEmail, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ userEmail, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ userEmail, pwd, roles, accessToken });
      console.log(auth)
      setUserEmail('');
      setPwd('');
      navigate('/userHome');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }
  const goToSignUp = () =>{
    navigate('/signup')
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Navbar />
      <div className='md:mt-[100px] grid h-[50%] w-full grid-cols-1 mt-[50px]'>
        {/* <div className='max-h-full hidden md:block'>
                    <img className="h-screen" src={Hall} alt='/' />
                </div> */}
        <div className='bg-[#000300] flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto  p-4 border border-white rounded-sm text-white' onSubmit={handleSubmit}>
            <p ref={errRef} className={errMsg ? "text-[#962a2a]" : "hide"} aria-live="assertive">{errMsg}</p>
            <h2 className='text-4xl font-bold text-center py-6'>LOG IN :)</h2>
            <div className='flex flex-col py-2'>
              <label>Email</label>
              <input
                type='text'
                className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
                required
              />
            </div>
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="w-full py-2 px-4 mt-2 rounded-md text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
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
            <div className='flex items-center justify-center gap-2'>
              <p>New User ?</p>
              <button className='bg-[#2b94d4] px-3 rounded-md' type='button' onClick={goToSignUp}>SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login

/* import React, { useState } from 'react';
import Hall from '../assets/halls.jpg';
import Navbar from './Navbar';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar style={{ position: 'relative', zIndex: 10 }} />
      <div className='relative grid h-[50%] w-full grid-cols-1 md:grid-cols-2'>
        <div className='max-h-full hidden md:block'>
          <img className='w-full h-screen object-contain' src={Hall} alt='/' />
        </div>
        <div className='absolute inset-0 flex items-center justify-center'>
          <form className='max-w-[400px] w-full p-4 border border-white rounded-sm text-white'>
            <h2 className='text-4xl font-bold text-center py-6'>LOG IN :)</h2>
            <div className='flex flex-col py-2'>
              <label>Email</label>
              <input type='text' className='text-black w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm' />
            </div>
            <div className='flex flex-col py-2'>
              <label>Password</label>
              <div className='relative'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  className='w-full py-2 px-4 mt-2 rounded-md text-black border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <div
                  className='absolute inset-y-0 right-3 flex items-center cursor-pointer'
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FaEyeSlash className='text-gray-400' /> : <FaEye className='text-gray-400' />}
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <button className='text-black border w-[75%] my-5 py-2 bg-[#00df9a]'>Sign In</button>
            </div>
            <div className='text-center'>
              <p>Create an account</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
 */