import React, { useState } from 'react'
import { supabase } from '../servidor/Client'

export const Login = () => {

    const [user, setuser] = useState({ email: '', password: '' })
    const [error, seterror] = useState('')


    const login = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: user.email,
            password: user.password,
        })

        if (data.session) {
            console.log('Ha iniciado sesion')
            window.location.reload()
        } else {
            
            console.log('ha fallado')
            console.log(error)
            seterror('Invalid login credentials')
        }
    }







    return (
        <div>
            <h2>{error}</h2>
            <input type="email" value={user.email} onChange={e => setuser({ ...user, email: e.target.value })} />
            <input type="password" value={user.password} onChange={e => setuser({ ...user, password: e.target.value })} />
            <button onClick={login}>Login</button>
        </div>
    )
}
