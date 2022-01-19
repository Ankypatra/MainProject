import React from 'react'
import './Home.css'
import customData from '../../Sampleoutput1.json';
import {GiCaravan} from 'react-icons/gi'
import {GiHills, GiBackwardTime} from 'react-icons/gi'
import { Col,Row,Container} from 'react-bootstrap';



const HomeDetail = () => {
    // let{title,height,duration,Pickuppoint,urltoimg}=props
    
    console.log("coustom data",customData);

    return (
        <Container>
        <div style={{ display: "inline-flex" }}  >
           <Row xs={1} md={3} className="g-4">
            {customData.Product.map(el => (
               <Col >
                    <div key={el.height}>
                        <div className="badge bg-warning bg-secondary card-badge" >{el.type}</div>
                        <div className="card " style={{ width: "18rem" }}  >
                            <img src={el.urltoimg} className="card-img-top" alt="..." style={{ height: "10rem" }}  />
                            <div className="card-body">
                                <h5 className="card-title">{el.title}</h5>
                                <p className="card-text"><GiHills size='20px' color='#fd7e14'/>{el.height}<GiBackwardTime size='30px' color='#fd7e14' style={{paddingLeft:"10px"}}/>{el.duration}</p>
                                <p className="card-text"><GiCaravan size='45px' color='#fd7e14'/>{el.Pickuppoint}</p>
                                <a href="/" className="btn btn-sm btn-dark">View Dates</a>
                            </div>
                            
                        </div>
                    </div>
                    </Col>     
                    
            ))}
            </Row>
        </div>
        </Container>
    )

}

export default HomeDetail
