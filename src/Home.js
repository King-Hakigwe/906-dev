import React, {useEffect} from 'react';
import {CTA, Navbar} from './Components';
import { Clients, Features, Footer, Hero, Testimonials } from './Containers';
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
        <Testimonials></Testimonials>
        <Footer></Footer>
        </div>
        
    )
}

export default Home
