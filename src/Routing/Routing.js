import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Aboutus from '../mycomponent/Aboutus/Aboutus'
import Login from '../mycomponent/Auth/Login/Login'
import Registration from '../mycomponent/Auth/Registration/Registration';
import Contactus from '../mycomponent/Contactus/Contactus'
import Header from '../mycomponent/Header/Header'
import { Home } from '../mycomponent/Home/Home'
import PNF from '../mycomponent/PNF'
import Profile from '../mycomponent/Profile/Profile';
import Review from '../mycomponent/Review/Review'
import Booking from '../mycomponent/UpcomingTrek/Booking';
import { Upcomingtrek } from '../mycomponent/UpcomingTrek/Upcomingtrek'
import { Wintertrek } from '../mycomponent/wintertrek/Wintertrek'

import ProtetedRoutes from './ProtetedRoutes';
const Aboutus = React.lazy(() => import('../mycomponent/Aboutus/Aboutus'));

export const Routing = () => {

    return (

        <Router>
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='' element={<Home />}></Route>
                    <Route element={<ProtetedRoutes/>}>
                        <Route path='Aboutus_Page' element={<Aboutus />}></Route>
                        <Route path='Profile_Page' element={<Profile />}></Route>
                        
                    </Route>
                    {/* later i will change the upcoming page */}
                    <Route path='Upcomingtrek_Page' element={<Upcomingtrek />}></Route>
                    <Route path='Wintertrek_Page' element={<Upcomingtrek/>}></Route>
                    <Route path='Summertrek_Page' element={<Upcomingtrek />}></Route>
                    <Route path='Weekendtrek_Page' element={<Upcomingtrek/>}></Route>
                    <Route path='Review_Page' element={<Review />}></Route>
                    <Route path='Contactus_Page' element={<Contactus />}></Route>
                    <Route path='Login_Page' element={<Login />}></Route>
                    <Route path='Registration_Page' element={<Registration />}></Route>
                    <Route path='Booking_Page' element={<Booking/>}></Route>
                    <Route path='*' element={<PNF />}></Route>
                </Routes>
            </Suspense>
        </Router>



    )
}
