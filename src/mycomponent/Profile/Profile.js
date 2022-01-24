import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate= useNavigate()
    const loggingOut=()=>{
        window.sessionStorage.clear();
        navigate("/Login_Page")
    }
    return (
        <div>
            <h1>welcome to profile page</h1>
            <button onClick={loggingOut} className='logout'>logout </button>
        </div>
    )
}