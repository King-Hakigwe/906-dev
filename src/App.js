import React, {useEffect} from 'react'
import './CSS/main.css';
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Services from './Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  } from './Components';
import { Scroll } from './Utility';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos';
import CloudServices from './Services/CloudServices';
import AppServices from './Services/AppServices';
import Collaboration from './Services/Collaboration';
import Security from './Services/Security';
import Training from './Services/Training';
import CRM from './Services/CRM';




const App = () => {
    useEffect(()=>{
        Aos.init({ 
            duration: 1000,
            // disable: () => {
            //     var maxWidth = 800;
            //     return window.innerWidth < maxWidth;
            // }
        });
        
    }, []);

    

   
    return (
        <BrowserRouter>
            <Scroll>
            <div>
                    <Routes>
                        <Route path='/' element={<Home/>}></Route>
                        <Route path='/about' element={<About/>}></Route>
                        <Route path='/services' element={<Services/>}></Route>
                        <Route path='/contact' element={<Contact/>}></Route>
                        <Route path='/services/1' element={<CloudServices/>}></Route>
                        <Route path='/services/2' element={<Security/>}></Route>
                        <Route path='/services/3' element={<AppServices/>}></Route>
                        <Route path='/services/4' element={<Collaboration/>}></Route>
                        <Route path='/services/5' element={<Training/>}></Route>
                        <Route path='/services/6' element={<CRM/>}></Route>
                        <Route component={Error}/>
                    </Routes>              
            </div>

            </Scroll>
        </BrowserRouter>
    )
}

export default App
