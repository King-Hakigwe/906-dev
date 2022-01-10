import React, {useEffect} from 'react'
import { Footer } from './Containers'
import { CTA, Whitespace, Header, Navbar } from './Components'
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos';
import header from '../src/Assets/Our Services/header.jpg'

const Services = () => {
    useEffect(()=>{
        Aos.init({ 
            duration: 1000,
            // disable: () => {
            //     var maxWidth = 800;
            //     return window.innerWidth < maxWidth;
            // }
        });
        
    }, []);

    let headercontent = {
        title: 'Our Services',
        content: "906 offers many products and solutions that businesses  may need. These are split into three categories: cloud services, security and app development",
        backgroundImage: header
    }

    return (
        <div>
            <Navbar></Navbar>
            <Header title={headercontent.title} content={headercontent.content} backgroundImage={headercontent.backgroundImage}></Header>
           <Whitespace></Whitespace>
            <CTA></CTA>
            <Footer></Footer>

        </div>
    )
}

export default Services
