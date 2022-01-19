import React from 'react'
import aboutcard from '../../sampleAboutus.json'

const Aboutuscard = () => {
    return (
        <div style={{display:"inline-flex"}}>
        {aboutcard.about.map(el => 
             (
                       <div className="card mb-3 mx-5 my-4 container" style={{ width: "350px"}} key={el.slno}>
                        <div className="row g-0">
                            <div className="col-md-3">
                                <img src={el.pic} className="img-fluid rounded-start my-3 mx-2" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{el.title}</h5>
                                    <p className="card-text">{el.aboutus}</p>
                                    <button className='btn btn-warning btn-sm' >Know more</button>
                                </div>
                            </div>
                        </div>
                    </div>
            ))}
            </div>
    )
    
}

export default Aboutuscard
