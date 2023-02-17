import { supabase } from '../servidor/Client'
import { AiOutlineSearch, AiFillHome, AiOutlineSend, AiOutlinePlusCircle, AiOutlineUserAdd, AiOutlineImport } from "react-icons/ai";
import { Fragment, useRef, useState,} from 'react'
// import { Dialog, Transition } from '@headlessui/react'
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const [darkmode, setdarkmode] = useState(true);
    const navigate = useNavigate()

    const handlerDark = () => {
        setdarkmode(!darkmode)
        if (darkmode) {
            document.documentElement.classList.add('dark')
        } else {

            document.documentElement.classList.remove('dark')
        }
    }

  
    const handlerLogout = () => {
        supabase.auth.signOut();
        window.location.reload()
    }
  
   


    return (
        <div className=' bg-white dark:bg-black transition-all dark:border-none  border-2 border-gray-200'>
            <div className='max-w-7xl mx-auto sm:py-2 flex items-center justify-between px-5 '>

                {/* Logo*/}

                {darkmode ? <Link to="/" className='hidden sm:block'>  <img className='w-28 hidden sm:block' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" alt="profile pic" /> </Link> : <Link to="/" className='hidden sm:block'>   <img className='w-28 hidden sm:block' src="https://www.shawspaving.co.uk/wp-content/uploads/2019/01/instagram-font-logo-white-png.png" alt="profile pic" />  </Link>}

                {darkmode ? <Link to="/" className='sm:hidden'>   <img className='w-7 sm:hidden' src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="profile pic" /> </Link> : <Link to="/" className=' sm:hidden'>   <img className='w-7 sm:hidden' src="https://icon-library.com/images/instagram-icon-png-white/instagram-icon-png-white-11.jpg" alt="profile pic" /> </Link>}


                {/* search bar*/}
                <div className="relative  items-center hidden sm:flex">
                    <div className='absolute pl-3'><AiOutlineSearch className='text-gray-400 text-lg' /></div>
                    <input className='border-md  dark:bg-black dark:text-white   dark:border-slate-800 border h-11 pl-9 rounded-md sm:w-80 w-13 bg-slate-50' type="text" placeholder='Search' />
                </div>

                {/* Menu*/}
                <div className='flex items-center space-x-5'>
                    <div className='h-14 flex sm:flex space-x-5 items-center'>
                        <Link to="/"> <AiFillHome className='dark:text-white hidden text-2xl hover:scale-125 hover:cursor-pointer transition-all sm:block ' /></Link>
                        <AiOutlineSend className=' dark:text-white hidden text-2xl hover:scale-125 hover:cursor-pointer transition-all -rotate-45  sm:block' />
                        <AiOutlinePlusCircle className='dark:text-white text-2xl hover:scale-125 hover:cursor-pointer transition-all' />

                        <Link to="/login"><AiOutlineUserAdd className='dark:text-white text-2xl hover:scale-125 hover:cursor-pointer transition-all  sm:block' /> </Link>
                        <AiOutlineImport onClick={handlerLogout} className='dark:text-white text-2xl hover:scale-125 hover:cursor-pointer transition-all  sm:block' /> 
                        
                        {darkmode ? <FaRegMoon onClick={handlerDark} className=' text-2xl hover:scale-125 hover:cursor-pointer transition-all  sm:block' /> : <FaMoon onClick={handlerDark} className=' text-2xl text-white hover:scale-125 hover:cursor-pointer transition-all  sm:block' />}
                        <img className='hidden w-10 h-10 object-cover rounded-full hover:scale-125 hover:cursor-pointer transition-all' src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />


                    </div>

                </div>

            </div>


            

        </div>
    )
}
