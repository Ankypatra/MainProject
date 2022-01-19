import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import './Contactus.css'

const validateMsglogin=(msgvalue)=>{
    const error={};
    const RegExp1=/^[a-zA-Z]+(([a-zA-Z])?[a-zA-Z]*)*$/
    const RegExp2=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (msgvalue.namee) {
       error.namee="Please enter your Full  name" 
    } else if(!RegExp1.test(msgvalue.namee)){
        error.namee="Please enter your full name" 
    }

    if (msgvalue.email) {
        error.email="Please enter your Email" 
     } else if(!RegExp2.test(msgvalue.email)){
         error.email="Please enter your Valid Email" 
     }
     
     if (msgvalue.subject) {
        error.subject="Please enter your Subject" 
     } else if(!RegExp1.test(msgvalue.subject)){
         error.subject="Please enter your Subject" 
     }
     console.log("return error",error);
      return error

     
}

const Message = () => {
    const formik=useFormik({
        initialValues:{
            namee:'',
            email:'',
            subject:'',
            message:''
        },
        validate:validateMsglogin,
        onSubmit:(values)=>{
        console.log("values",values);
        }
    })
    return (
        <div className='level-1'>
            <Form className=" level" onSubmit={formik.handleSubmit}>

                <Form.Group className="mb-3 level-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='namee' placeholder="Enter Name" value={formik.values.namee} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                     {formik.touched.namee && formik.errors.namee ? (<span>{formik.errors.namee}</span>):null}
                </Form.Group>

                <Form.Group className="mb-3 level-4">
                    <Form.Label>Email id</Form.Label>
                    <Form.Control type="email"  name='email' placeholder="Enter email id" value={formik.values.email} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>):null}
                </Form.Group>

                <Form.Group className="mb-3 level-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text"  name='subject' placeholder="Enter subject" value={formik.values.subject} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.subject && formik.errors.subject ? (<span>{formik.errors.subject}</span>):null}
                </Form.Group>

                <Form.Group className="mb-3 level-3" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter message here" name='message' value={formik.values.message} 
                    onChange={formik.handleChange} onBlur={formik.handleBlur}  />
                </Form.Group>

                <Button variant="warning" type="submit">
                   Send Query
                </Button>
            </Form>
        </div>
    )
}

export default Message
