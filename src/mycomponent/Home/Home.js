import React from 'react'

import './Home.css'
import HomeDetail from './HomeDetail'
import img1 from '../../samplepicture.json'
import Footer from '../Footer/Footer'

export const Home = () => {
   
    return (
        <>
            <section className='home-1 '>
                <div className='overly'>
                    <h1>India’s Largest & Safest Trekking Organisation</h1>
                    <h2>Pioneering trek experiences & safety standards
                        <br /> for over 20,000 trekkers every year</h2>
                </div>
                <button className='btn btn-lg btn-success buttn '>VIEW UPCOMING TREKS </button>
            </section>
            <div className=' slider-1'> 
            <h2 className='text-center'>Best Snow Treks in Jan and Feb</h2>                                
                    <HomeDetail  />                 
            </div>
            <div className='container img-box' >
                <h2 className='text-center'>Our Partners</h2>
                <p className='text-center' >We team up with the best to give you an unmatchable experience</p>
                {img1.image.map(el=>{
                   return ( <img src={el.pic1} alt=".." key={el.slno} />)
                })}  
            </div>
            <div>
                <Footer/>
                
            </div>

        </>
    )
}
