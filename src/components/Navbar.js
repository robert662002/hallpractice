import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import useAuth from '../hooks/useAuth'
const Navbar = () => {
  const navigate = useNavigate()
  const logout = useLogout();
  const { auth } = useAuth();

  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }
  const gotoLogin = () => {
    navigate('/login')
  }
  const goToSignUp = () => {
    navigate('/signup')
  }
  const goToHome = () => {
    navigate('/')
  }
  const gotoUserHome = () => {
    navigate('/userHome')
  }
  const gotoAdminHome = () => {
    navigate('/adminHome')
  }
  const signOut = async () => {
    await logout();
    navigate('/');
  }
  return (

    <div className=' top-0 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full md:text-3xl text-2xl font-bold text-[#00df9a]'>MITS HALLS.</h1>
      <ul className='flex'>
        <li className='p-4' onClick={goToHome}><button>Home</button></li>
        {auth.accessToken ? (
          <>
          <li className='p-4' onClick={signOut}><button>Logout</button></li>
          <li className='p-4' onClick={gotoUserHome}><button>UserHome</button></li>
          <li className='p-4' onClick={gotoAdminHome}><button>AdminHome</button></li>
        </>
        ) : (
          <>
            <li className='p-4' onClick={goToSignUp}><button>SignUp</button></li>
            <li className='p-4' onClick={gotoLogin}><button>SignIn</button></li>
          </>
        )}
      </ul>
      {/* <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/> }
        </div>
        <div className={!nav?' fixed left-0 top-0 w-[50%] h-[20%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden':'fixed top-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mt-7' >MITS HALLS.</h1>
          <ul className='p-4 uppercase bg-[#000300] w-screen fixed'>
              <li className='p-4 border-b border-gray-600'>Home</li>
              <li className='p-4 border-b border-gray-600'>SignUp</li>
              <li className='p-4 border-b border-gray-600'><Link to="login"> SignIn</Link></li>
              <li className='p-4 border-b border-gray-600'>About</li>
              <li className='p-4'>Contact</li>
          </ul>
        </div> */}
    </div>
  )
}

export default Navbar