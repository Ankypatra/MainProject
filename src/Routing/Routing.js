import React ,{Suspense,useEffect,useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Aboutus from '../mycomponent/Aboutus/Aboutus'
import Login from '../mycomponent/Auth/Login/Login'
import Registration from '../mycomponent/Auth/Registration/Registration';
import Contactus from '../mycomponent/Contactus/Contactus'
import Header from '../mycomponent/Header/Header'
import { Home } from '../mycomponent/Home/Home'
import PNF from '../mycomponent/PNF'
import Profile from '../mycomponent/Profile/Profile';
import Review from '../mycomponent/Review/Review'
import { Upcomingtrek } from '../mycomponent/UpcomingTrek/Upcomingtrek'
import { Wintertrek } from '../mycomponent/wintertrek/Wintertrek'
import IsAuth from './IsAuth';
const Aboutus = React.lazy(() => import('../mycomponent/Aboutus/Aboutus'));

export const Routing = () => {
    const [user,setUser]=useState(null)
    useEffect(()=>{
        const userToken=localStorage.getItem("token")
        userToken && JSON.parse(userToken)? setUser(true): setUser(false)
    },[])
    return (
        
            <Router>
            <Header/>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {!user && (
                <Route path='IsAuth_page' element={<IsAuth authenticate={()=>(setUser(true))}/>}/>
                )}
             {user && (
                 <>
            <Route path='' element={<Home/>}></Route>
            <Route path='Aboutus_Page' element={<Aboutus/>}></Route>
            <Route path='Profile_Page' element={<Profile logout={()=>setUser(false)}/>}></Route>
            </>)}

            <Route path='Upcomingtrek_Page' element={<Upcomingtrek/>}></Route>
            <Route path='Wintertrek_Page' element={<Wintertrek/>}></Route>
            <Route path='Review_Page' element={<Review/>}></Route>
           
            <Route path='Contactus_Page' element={<Contactus/>}></Route>
            <Route path='Login_Page' element={<Login/>}></Route>
            <Route path='Registration_Page' element={<Registration/>}></Route>
            <Route path='*' element={<PNF/>}></Route>
            </Routes>
            </Suspense>
            </Router>
          

        
    )
}
