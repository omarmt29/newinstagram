import React, { useState } from 'react'
import Header from '../components/Header'
import { supabase } from '../servidor/Client'
import { AiOutlineGooglePlus, AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const [user, setuser] = useState({ email: '', password: '' })
    const [error, seterror] = useState(true)
    const [email, setemail] = useState('')
    const [signup, setsignup] = useState(true);
    const navegacion = useNavigate();

    const login = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        })

        if (data.session) {
            console.log('Ha iniciado sesion')
            navegacion('/home')
        } else {
            console.log(error)
            seterror(false)
        }
    }

    const Handlersingup = async (e) => {

        e.preventDefault()
        const { data, error } = await supabase.auth.signUp({
            email: user.email,
            password: user.password,
        })
        if (!data.session) {
            seterror(false)
        } else {
        
        }


    }

    const Handlerform = (e) => {
        e.preventDefault()
        setsignup(!signup)
        setemail(false)
        seterror(true)
    }


    return (
        <div>

            <div className=" bg-slate-100 dark:bg-black h-full">

                <div className="fixed top-0 w-full z-10">

                    <Header />

                </div>

                <div className="min-h-screen flex items-center  justify-center ">
                    <form className='w-full px-5 sm:px-10  sm:w-4/5  md:px-16  md:w-4/5 lg:w-2/5 flex flex-col space-y-6 h-full bg-white dark:bg-black dark:border-slate-900 dark:border py-16'>
                        <h2 className='text-3xl dark:text-white text-center text-black mb-5'>{signup ? "Log in" : "Sign Up"}</h2>
                        <div>
                            {error ? null : <h2 className='text-xs text-red-400'> Invalid credentials!</h2>}
                            <div >
                                {email ? <h2 className='text-xs text-blue-400 flex items-center gap-2'>Check your email to confirm <AiOutlineCheckCircle className='text-lg' /> </h2> : null}
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>

                            <input required={true} value={user.email} onChange={e => setuser({ ...user, email: e.target.value }) + seterror(true)} autoComplete='none' className='p-4 bg-slate-100 outline-none focus:bg-slate-800 focus:text-white' type="text" placeholder='Email' />
                            <input required={true} value={user.password} onChange={e => setuser({ ...user, password: e.target.value })} autoComplete='none' className='p-4 bg-slate-100 outline-none focus:bg-slate-800 focus:text-white' type="password" placeholder='Password' />
                        </div>
                        {signup ? <button onClick={e => login(e)} className='bg-blue-400 py-4 font-semibold'>Log in</button> : <button className='bg-blue-400 py-4 font-semibold' onClick={e => Handlersingup(e)}>Sign Up</button>}
                        <div className='flex items-center justify-center gap-3'>
                            <div className='border border-slate-200 dark:border-slate-800  w-1/2'></div>
                            <p className='text-center dark:text-white'>Or</p>
                            <div className='border border-slate-200 dark:border-slate-800  w-1/2'></div>
                        </div>
                        <div className='flex justify-center items-center gap-3 py-10 dark:text-white'>
                            <AiOutlineGooglePlus className='text-3xl' />
                            Log in with Google
                        </div>
                        <button onClick={Handlerform} className='text-center dark:text-white border-t-2 dark:border-slate-800  pt-6' >{signup ? "Don't have an account? Sign Up" : "You have an account? Get in"}</button>
                    </form>
                </div>


            </div>



        </div>
    )
}
