import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function IsAuth({authenticate}) {
    const navigate=useNavigate()
    const func=()=>{
        authenticate()
        navigate('/Login_Page')
    }
    return (
        <div>
            <h1>please authenticate to continue</h1>
            <button onClick={func}>click to authenticate</button>
        </div>
    )
}