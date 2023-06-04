import React from 'react'
//import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import useAuth from '../hooks/useAuth'
const Navbar = () => {
  const navigate = useNavigate()
  const logout = useLogout();
  const { auth } = useAuth();//to access usestate auth in the authcontext
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
    <>
      <div className='z-10 w-full top-0 flex justify-between items-center h-24  mx-auto sm:px-8 bg-[#eb4d5f]'>
        <h1 className='sm:px-4 px-2 w-full md:text-3xl text-2xl font-bold text-white'>MITS HALLS.</h1>
        <ul className='flex text-white text-lg'>
          <li className='py-4 px-3  ' onClick={goToHome}><button className=' hover:scale-110  px-2 '>Home</button></li>
          {auth.accessToken ? (
            <>
              <li className='py-4 px-3   ' onClick={gotoUserHome}><button className=' hover:scale-110  px-2 '>User</button></li>
              <li className='py-4 px-3   ' onClick={gotoAdminHome}><button className=' hover:scale-110  px-2 '>Admin</button></li>
              <li className='py-4 px-3   ' onClick={signOut}><button className=' hover:scale-110  px-2 '>Logout</button></li>
            </>
          ) : (
            <>
              <li className='py-4 px-3   ' onClick={goToSignUp}><button className='  hover:scale-110  px-2 '>SignUp</button></li>
              <li className='py-4 px-3   ' onClick={gotoLogin}><button className='  hover:scale-110  px-2 '>SignIn</button></li>
            </>
          )}
        </ul>
      </div>
    </>
  )
}

export default Navbar