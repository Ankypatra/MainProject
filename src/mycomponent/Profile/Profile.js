import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile({logout}) {
    const navigate= useNavigate()
    const loggingOut=()=>{
        window.localStorage.clear()
        logout()
        navigate("/Login_Page")
    }
    return (
        <div>
            <h1>welcome to this page</h1>
            <button onClick={loggingOut} className='logout'>logout this page</button>
        </div>
    )
}