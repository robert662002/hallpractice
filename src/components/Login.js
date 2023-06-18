import React, { useState, useRef, useEffect } from 'react';
import axios from '../api/axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { BarLoader } from 'react-spinners'
const LOGIN_URL = '/auth';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();
  /* const location = useLocation();
  const from = location.state?.from?.pathname || "/"; */

  const userRef = useRef();
  const errRef = useRef();

  const [userEmail, setUserEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [userEmail, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true); // Start loading

      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userEmail, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      // Handle successful login
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      const username = response?.data?.username;

      setAuth({ userEmail, roles, accessToken, username });
      setUserEmail('');
      setPwd('');

      navigate('/userHome');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Invalid credentials');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className='flex flex-col h-screen mt-[-6rem] items-center justify-center shadow-6xl shadow-black'>
        <form className='shadow-xl  sm:w-[400px] w-[350px] items-center justify-center mx-auto bg-slate-200 p-4 border-8 border-[#eb4d5f] rounded-2xl' onSubmit={handleSubmit}>
          <p ref={errRef} className={errMsg ? "p-2 text-center text-red-300 bg-red-800" : "hide"} aria-live="assertive">{errMsg}</p>
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
                className="w-full py-2 px-3 mt-2 rounded-md text-black border border-gray-300 "
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
            <button className={`bg-[#eb4d5f] my-2 text-white rounded-lg p-3 px-8 border-4 ${!loading ? 'hover:bg-white hover:text-[#eb4d5f] hover:border-[#eb4d5f]' : ''}`} disabled={loading}>
              {loading ? (
                <BarLoader color='#fff' height={4} width={100} />
              ) : (
                "Log In"
              )}
            </button>
          </div>
          <div className='flex items-center justify-center gap-2'>
            <p>New User ?</p>
            <button className='hover:bg-[#eb4d5f] my-2  hover:text-white py-1 px-2 border-2 bg-white text-[#eb4d5f] border-[#eb4d5f]' type='button' onClick={goToSignUp}>SignUp</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
