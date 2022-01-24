import React from 'react'
import ReactPlayer from "react-player";
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './Login.css'

const validPage=(loginvalue)=>{
const error ={};
const RegExp1=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const RegExp2=/^[a-zA-Z]\w{3,14}$/
if(!loginvalue.email){
    error.email="Please enter your Email Id"
}
else if(!RegExp1.test(loginvalue.email)){
error.email="Enter your valid Email"
}

if (!loginvalue.password) {
    error.password="Enter Your Password"
}
 else if(!RegExp2.test(loginvalue.password)) {
    error.password="Need a Strong Password"
}
console.log("return error",error);
return error
}

const Login = () => {
    const navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate:validPage,
        onSubmit: (values) => {
            console.log(values);
            axios.post("https://nodeprojectapi.herokuapp.com/login",values)
            .then(res=>{
              console.log("Axios response",res);
              window.localStorage.setItem("token",res.data.data.token)
              navigate('/Upcomingtrek_Page')
            })
            .catch(err=>{
              console.warn("Axios error",err);
            })
        }

    })
    return (

        <div className="flex-box">
            <div className='video'>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=r4KdO-L6FkI&ab_channel=ThePunjabiWanderer"
                />
            </div>
            <div className=" level-2 "  >
                <div className='text-center'>
                    <h3>NEXTHIKES TREKKER</h3>
                    <p style={{fontweight:700}}>Login with your email id if you have already trekked with Nexthikes</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3 mx-3 my-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email id</label>
                        <input className="form-control"  type="email" name='email' placeholder="Enter email id" autoComplete='off' value={formik.values.email}
                            onChange={formik.handleChange} onBlur={ formik.handleBlur} />
                             {formik.touched.email && formik.errors.email ?(<span style={{color:'red'}}>{formik.errors.email}</span>):null }
                    </div>

                    <div className="mb-3 mx-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                        <input className="form-control"  type="password" name='password' placeholder="Enter Name" autoComplete='off' value={formik.values.password }
                            onChange={formik.handleChange} onBlur={formik.handleBlur} />
                             {formik.touched.password && formik.errors.password ?(<span style={{color:'red'}}>{formik.errors.password}</span>):null }
                    </div>
                    <button  type="submit" className='mx-3 btn-warning btn'>
                        Login
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Login
