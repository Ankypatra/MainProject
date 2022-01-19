import React from 'react'
import './Contactus.css'
import {GiPhone,GiSandsOfTime} from 'react-icons/gi'
import {AiOutlineMail} from "react-icons/ai"
import{TiLocation} from 'react-icons/ti'
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import Footer from '../Footer/Footer'
import Message from './message'

const Contactus = () => {

    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 22.572645, lng: 88.363892 } }
          defaultZoom = { 13 }
        >
        </GoogleMap>   
     ));

    return (
        <>
            <div className=' container text-center contact-header my-4'>
                <h2>Contact us</h2>
               <div> <Message/></div>
            </div>
            <div className='container d-flex justify-content-center m'>
                <div>
                    <div className='h1 mx-5 px-3'><h6>Send Your Message </h6></div>
                </div>
                <div>
                    <div className='h2 mx-5 px-3'> <h6>Contact Details</h6></div>
                    <div className='col-md-12 col-sm-4 h2-detail' >
                        <ul >
                            <li><GiPhone/>+91-135 244 2627</li>
                            <li><GiPhone/>+91-991 772 4737</li>
                            <li><GiPhone/>+91-735 152 3841</li>
                            <li><GiPhone/>+91-969 024 0820</li>
                            <li><AiOutlineMail/>info@trekthehimalayas.com</li>
                        </ul>
                    </div>
                    <div className='col-md-12 col-sm-4 h3-detail'>
                    
                        <ul>
                        <p><strong><GiSandsOfTime/>Working Hours</strong></p>
                            <li>10:00 hrs to 17:00 hrs</li>
                            <li>Monday - Saturday</li>
                        </ul>
                    </div>
                    <div className='col-md-12 col-sm-4 h3-detail px-3'>
                        <p><strong><TiLocation/>Rishikesh Head Office :</strong></p>
                        <p>
                            Kentura Plaza Badrinath Road
                            <br />
                            Tapovan Rishikesh, Uttarakhand (India)
                            <br />
                            Postal Code - 249201
                        </p>
                    </div>
                    <div className='col-md-12 col-sm-4 h3-detail px-3'>
                        <p><strong><TiLocation/>Haldwani Branch Office :</strong></p>
                        <p>
                            Chaudhari Bhawan
                            <br />
                            Near Chandan Diagnostic Centre
                            <br />
                            Opposite Vishal Mega Mart
                            <br />
                            Nainital Road Haldwani Uttarakhand (India)
                            <br />
                            Postal Code - 263139
                        </p>
                    </div>
                </div>
                <div>
                    <div className='h3 mx-5 px-3'> <h6>Google Map</h6></div>
                  
                    <GoogleMapExample

containerElement={ <div style={{ height: `550px`, width: '320px' }} className='mx-5'  /> }

mapElement={ <div style={{ height: `100%` }} /> }

/>

                </div>
            </div>
            <div>
                <Footer/>
            </div>

        </>
    )
}


export default Contactus
