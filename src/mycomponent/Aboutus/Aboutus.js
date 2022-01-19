
import React from 'react'
import Footer from '../Footer/Footer'
import './Aboutus.css'
import Aboutuscard from './Aboutuscard'


function Aboutus() {
   
    return (
        <>
            <div className=" story text-center">
                <div className='story-1'><h1 >OUR STORY</h1></div>
            </div>
            <div className="container about-story text-center">
                <h2>The Thought Behind Nexthikes</h2>
                <p>Over 12 years ago, our founders, Arjun Majumdar and Sandhya UC, started Nexthikes with one simple belief  — <b>Everyone Must Trek.</b>  They wanted to do this by bringing out information about treks, and by setting the right spirit of trekking in India.
                    What began as one humble blogpost about the Roopkund trek has now blossomed into India’s largest database of trek related information.
                    Today, we are India’s Largest Trekking Community, with over 20,000 trekkers joining the Indiahikes Experience every year. Here’s the story of how it all began. </p>
                <button className='btn btn-warning'>Know More</button>
            </div>

            <div className=" about-trek">
            <Aboutuscard />
            </div>
            <div>
                <Footer/>
            </div>


        </>
    )
}

export default Aboutus
