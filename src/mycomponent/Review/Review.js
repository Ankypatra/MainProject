import React from 'react'
import './Review.css'
import reviews from '../../sampleReview.json'

const Review = () => {

    return (
        <>
        <div className='Review-1'>
           <div className='text-center Review-2 '>
              <h1>Reviews</h1> 
              <p>There are countless reasons why Nexthikes attracts over 20,000 trekkers each year. See what they had to say.</p>
            </div> 
        </div> 
       {reviews.Review.map(el=> (
        <div className='Review-flex' key={el.Name}>
            <div className='Review-flex-1' >
                <h4>{el.Name}</h4>
                <p>{el.Trek}</p>
                <p>{el.Date}</p>
            </div>
            <div className='Review-flex-2  '>
                <p>{el.content}</p>
            </div>
        </div> ))}
        </>
    )
}

export default Review
