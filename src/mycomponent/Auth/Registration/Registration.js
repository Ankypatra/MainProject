import React from 'react'
import './Registration.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Registration() {
     const navigate=useNavigate()
    const validateEmail=RegExp('^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$')
    // const validatePassword=RegExp('^[a-zA-Z]\w{3,14}$')
    
    const [useRegistration, setuseRegistration] = useState({isError:{
        fname:"",
        lname:"",
        email:"",
        cemail:"",
        dob:"",
        height:"",
        password:"",
        cpassword:""
    }})
    const handleInput=(event)=>{
        event.persist();
    const {name,value}= event.target
    // console.log(name,value);
    // setuseRegistration({...useRegistration,[name]:value})
    let isErr={...useRegistration.isError}
    switch (name) {
        case 'fname':
            isErr.fname=value.length<3 ? "This field is reqiured" : ""
            break;

        case 'lname':
            isErr.lname=value.length<3 ? "This field is reqiured" : ""
            break;

        case 'email':
            isErr.email=validateEmail.test(value) ? "" : "this field is required "
            break;

        case 'cemail':
            isErr.cemail=validateEmail.test(value) ? "" : "this field is required "
            break; 
            
        // case 'password':
        //     isErr.password=validatePassword.test(value) ? "" : "this field is required "
        //     break;
        // case 'cpassword':
        //     isErr.cpassword=validatePassword.test(value) ? "" : "this field is required "  
        //     break;        
        default:
            break;
    }
    setuseRegistration({...useRegistration,[name]:value,isError:isErr})
    console.log(useRegistration);
    }
    const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("after submit",useRegistration);
    let user={
       username:useRegistration.fname,
       email:useRegistration.email,
       password:useRegistration.password
    }
    console.log("user",user);
    axios.post("https://nodeprojectapi.herokuapp.com/register",user)
       .then(res=>{
         console.log("Axios response",res);
         navigate('/Login_Page')
       })
       .catch(err=>{
         console.warn("Axios error",err);
       })
    }
    return (
      <>
      <form action="" onSubmit={handleSubmit}>
          <div className='form-1'>
              <h3 className='text-center'>NEW TO NEXTHIKES?</h3>
              <h3 className='text-center'>REGISTER FOR TREK HERE</h3>
          <div className=' d-flex p-2 bd-highlight '>
              <input type="text" autoComplete='off' className='form-2'
              name="fname" id="fname" placeholder='First Name' onChange={handleInput} />
              {useRegistration.isError.fname.length>0 && (<span>{useRegistration.isError.fname}</span>)}
           </div> 
           <div className='d-flex p-2 bd-highlight'>  
              <input type="text" autoComplete='off' className='form-2'
               name="lname" id="lname" placeholder='Last Name' onChange={handleInput} />
                {useRegistration.isError.lname.length>0 && (<span>{useRegistration.isError.lname}</span>)}
            </div>
            <div className='d-flex p-2 bd-highlight'>  
              <input type="email" autoComplete='off' className='form-2'
               name="email" id="email" placeholder='Email' onChange={handleInput}/>
                {useRegistration.isError.email.length>0 && (<span>{useRegistration.isError.email}</span>)}
              </div>
              <div className='d-flex p-2 bd-highlight'>
              <input type="email" autoComplete='off' className='form-2'
               name="cemail" id="cemail" placeholder='Confirm Email' onChange={handleInput}/>
                {useRegistration.isError.cemail.length>0 && (<span>{useRegistration.isError.cemail}</span>)}
              </div>
              <div className='d-flex p-2 bd-highlight'>
              <input type="text" autoComplete='off'  className='form-2'
              name="dob" id="dob" placeholder='Date of Birth' onChange={handleInput}/>
              </div>
              <div className='d-flex p-2 bd-highlight'>
              <input type="text" autoComplete='off'  className='form-2'
              name="height" id="height" placeholder='Height' onChange={handleInput}/>
              </div>
              <div className='d-flex p-2 bd-highlight'>
              <input type="password" autoComplete='off' className='form-2' 
              name="password" id="password" placeholder='Password' onChange={handleInput}/>
               {useRegistration.isError.password.length>0 && (<span>{useRegistration.isError.password}</span>)}
              </div>
              <div className='d-flex p-2 bd-highlight'>
              <input type="password" autoComplete='off' className='form-2'
              name="cpassword" id="cpassword" placeholder='Confirm Password' onChange={handleInput}/>
               {useRegistration.isError.cpassword.length>0 && (<span>{useRegistration.isError.cpassword}</span>)}
              </div>
              <div className='d-flex p-2 bd-highlight'>
              <button type="submit" className="btn btn-primary  btn-warning form-3" >Sign Up</button>
              </div>
          </div>
      </form>
      </>
    )
}

export default Registration
