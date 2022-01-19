import React from 'react'
import './Footer.css'
import {SiFacebook,SiYoutube,SiInstagram,SiLinkedin,SiTwitter} from 'react-icons/si'

const Footer = () => {
    return (
        <>
        <section className='icon-box '>
            <div className='container  icon-box-1'>
                
            <SiFacebook size="30px" style={{margin:"20px"}} />
            <SiYoutube size="30px" style={{margin:"20px"}}/>
            <SiInstagram size="30px" style={{margin:"20px"}} />
            <SiLinkedin size="30px" style={{margin:"20px"}} />
            <SiTwitter size="30px" style={{margin:"20px"}} />
            </div>
            <div className="container text-center reserved">
                <span className='caption '>
                    @2022 NEXTHIKE All rights reserve.
                </span>
                <p>The content and images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</p>
            </div>
        </section>   
        </>
    )
}

export default Footer
