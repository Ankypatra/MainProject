import React from 'react'
import './Upcomingtrek.css'
import upcome from '../../sampleUpcoming.json'


export const Upcomingtrek = () => {
    
    return (
        <div className=' upcome-card d-flex align-content-start flex-wrap'>
            {upcome.upcoming.map(el => 
                 (<div className="card card-style" style={{ display: "relative" }} key={el.name}>
                    <img src={el.img}
                        alt="Avatar" style={{ width: "15rem", height: "250px" }} className='image' />
                    <div className="text-block text-center">
                        <p>{el.name}</p>
                        <p>{el.amount}</p>
                    </div>
                    <div className='description'>
                        <h3> Mount</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <button className='btn btn-warning'>Book Now</button>
                    </div>
                </div>)
            )}
        </div>
    )
}
