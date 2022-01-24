import React, { useState, useEffect } from 'react';
import './Booking.css'

const Booking = () => {
    const [userBooking, setUserBooking] = useState({
        username: '',
        email: '',
        phone: '',
        date: '',
        persons: ''
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        e.persist();
        const { name, value } = e.target;

        setUserBooking({ ...userBooking, [name]: value })
        console.log(name, value);
    }

    const handleSubmit = (e) => {
       e.preventDefault();
       setFormErrors(validate(userBooking))
        setIsSubmit(true)
        if (Object.keys(formErrors).length===0 && isSubmit) {
            console.log('Submitted Successfully',userBooking);
          
            if( window.confirm('Successfully SUbmiited')){
                setUserBooking({username: '',
        email: '',
        phone: '',
        date: '',
        persons: ''})  
            }
            
        }
          
    }

    // useEffect(() => {
    //   if (Object.keys(formErrors).length===0 && isSubmit) {
    //       console.log('Submitted Successfully',userBooking);
    //       alert('Successfully SUbmiited')
    //   }
    // }, [userBooking]);
    


    const validate = (values) => {
        const error = {}; 
        const regex = / ^([a-zA-Z0-9_]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        if (!values.email) {
            error.email = 'Valid email is required'
        }else if (regex.test(values.email)) {
            error.email = 'invalid email'
        }
        if (!values.username) {
            error.username = 'Valid name is required'
        }
        return error;
    }



    return (<div className='container form-1'>
        {/* {Object.keys(formErrors).length===0 && isSubmit ? <div className='text-center' style={{color:"red", fontSize:"700"}}>Your Booking is Successfully Done</div> : null} */}
        <div className='text-center my-2 form-1-text'>
            <h3>Booking Details for Your Upcoming Trek</h3>
        </div>

        <form onSubmit={handleSubmit} >
            <div className='mb-3 mx-3 form-1-label '>
                <label htmlFor="username" className="form-label">Your Name</label>
                <input type="text" autoComplete='off'
                    value={userBooking.username} onChange={handleChange}
                    name="username" id="username" className="form-control" />
            </div>
            <p style={{color:'red'}}>{formErrors.username}</p>
            <div className='mb-3 mx-3 form-1-label'>
                <label htmlFor="email" className="form-label">Your Email Address</label>
                <input type="email" autoComplete='off'
                    value={userBooking.email} onChange={handleChange}
                    name="email" id="email" className="form-control" />
            </div>
            <p style={{color:'red'}}>{formErrors.email}</p>
            <div className='mb-3 mx-3 form-1-label'>
                <label htmlFor="phone" className="form-label">Contact/Phone Number</label>
                <input type="number" autoComplete='off'
                    value={userBooking.phone} onChange={handleChange} maxLength={10}
                    name="phone" id="phone" className="form-control" />
            </div>
            <div className='mb-3 mx-3 form-1-label'>
                <label htmlFor="date" className="form-label">Trek Starting Date </label>
                <input type="date" autoComplete='off'
                    value={userBooking.date} onChange={handleChange}
                    name="date" id="date" className="form-control" />
            </div>
            <div className='mb-3 mx-3 form-1-label'>
                <label htmlFor="persons" className="form-label">Number of Persons</label>
                <input type="number" autoComplete='off'
                    value={userBooking.persons} onChange={handleChange}
                    name="persons" id="persons" className="form-control" />
            </div>
            <div className='mb-3 mx-3'>
                <input type="checkbox" name="check" id="check" className="form-check-input" />
                <label htmlFor="check" className="form-check-label">I Accept All the Trems & Condition</label>
            </div>
            <button className='btn btn-warning btn-large  mx-3' >BooK Now</button>
        </form>
    </div>);
};

export default Booking;

