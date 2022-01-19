import React from 'react'
import ReactPlayer from "react-player";
import { useFormik } from 'formik';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './Login.css'

const validPage=()=>{
const error ={};
const RegExp1=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
const RegExp2=/^[a-zA-Z]\w{3,14}$/
if(!validPage.email){
    error.email="Please enter your Email Id"
}
else if(!RegExp1.test(validPage.email)){
error.email="Enter your valid Email"
}

if (!validPage.password) {
    error.password="Enter Your Password"
}
 else if(!RegExp2.test(validPage.password)) {
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
            axios.post("https://project-node-1.herokuapp.com/postLoginData",values)
            .then(res=>{
              console.log("Axios response",res);
              window.localStorage.setItem("token",res.data.token)
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
                    <p>Login with your email id if you have already trekked with Nexthikes</p>
                </div>
                <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3 mx-3 my-2">
                        <Form.Label>Email id</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email id" autoComplete='off' value={formik.values.email}
                            onChange={formik.handleChange} onBlur={ formik.handleBlur} />
                    </Form.Group>

                    <Form.Group className="mb-3 mx-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" name='password' placeholder="Enter Name" autoComplete='off' value={formik.values.password }
                            onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    </Form.Group>
                    <Button variant="warning" type="submit" className='mx-3'>
                        Login
                    </Button>
                </Form>
            </div>

        </div>
    )
}

export default Login
