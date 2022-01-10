import React, {useEffect} from 'react'
import './CSS/main.css';
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Services from './Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components';
import { Scroll, Refresh } from './Utility';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos'


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
                        <Route path='/contact' element={<Contact/>}x></Route>
                        <Route component={Error}/>
                    </Routes>              
            </div>

            </Scroll>
        </BrowserRouter>
    )
}

export default App
