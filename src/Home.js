import React, {useEffect} from 'react';
import {CTA, Navbar} from './Components';
import { Clients, Features, Footer, Hero } from './Containers';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos'

const Home = () => {
    useEffect(()=>{
        Aos.init({ 
            duration: 1000,
            // disable: 'mobile'
        });
        
    }, []);

    return (
        <div>
        <Navbar></Navbar>
        <Hero></Hero>
        <Features></Features>
        <Clients></Clients>
        <CTA></CTA>
        <Footer></Footer>
        </div>
        
    )
}

export default Home
