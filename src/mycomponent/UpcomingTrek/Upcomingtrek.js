import React from 'react'
import { useNavigate } from 'react-router'
import './Upcomingtrek.css'
import upcome from '../../sampleUpcoming.json'

export const Upcomingtrek = () => {
    const Navigate=useNavigate()
    let array = []
    let trekData = upcome.upcoming
    let path = window.location.pathname
    if (path === '/Summertrek_Page') {
        array = upcome.upcoming.filter(ele =>
            ele['Caterory'] === 'Summer Treks'
        )
        trekData = array
    }
    else if (path === '/Wintertrek_Page') {        
        array = upcome.upcoming.filter(ele =>
            ele['Caterory'] === 'Winter Treks '
        )
        trekData = array
    }
    else if (path === '/Weekendtrek_Page') {
        array = upcome.upcoming.filter(ele =>
            ele['Caterory'] === 'Weekend Treks'
        )
        trekData = array
    }


const bookIng=()=>{
Navigate('/Booking_Page')
}

    return (
        <div className=' upcome-card d-flex align-content-start flex-wrap'>
            {trekData.map(el =>

            (<div className="card card-style" style={{ display: "relative" }} key={el.name}>
                <img src={el.img}
                    alt="Avatar" style={{ width: "15rem", height: "250px" }} className='image' />
                <div className="text-block text-center">
                    <p>{el.name}</p>
                    <p>{el.amount}</p>
                </div>
                <div className='description'>
                    <button className='btn btn-warning' onClick={bookIng}>Book Now</button>
                </div>
            </div>)
            )}
        </div>
    )
}
