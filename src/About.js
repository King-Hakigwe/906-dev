import React, {useEffect} from 'react'
import { Footer, Content } from './Containers'
import { CTA, Header, Navbar } from './Components'
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos'
import header from '../src/Assets/About/header.jpg'

const About = () => {
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
        <div>
            <Navbar></Navbar>
            <Header title={'About Us'} content={"Here's a little insight into 906, our mission and vision, so you can get a feel of the company, and what we do."} backgroundImage={header}></Header>
            <Content head={'Who We Are'} paragraph={' 906 global is one of the fastest growing team of IT consultants, whose key focus is assisting and aiding businesses and organisations drive innovational change, development and growth, through proper and effective deployment and integration of technology. We are committed to providing and deploying best-in-class technology, innovation and quality service by delivering to our clients innovative solutions around collaboration, infrastructure, cloud-based systems and services, security solutions and customer relationship management  tools.'}></Content>
            <Content head={'Our Vision'} paragraph={'Our vision at 906 is to innovatively transform organizations by advising, implementing and adopting best in class business-Tech (suites) products and solutions. In doing this, we aim to become an internationally renowned corporation by adopting, implementing and deploying technology-based business solutions across Nigeria and Africa at large.'}></Content>
            <Content head={'Our Mission'} paragraph={'At 906, we aim to deliver our services as a formidable team passionate about creating, deploying and maintaining innovative solutions, that puts our clients at the for front of the business-tech evolution. In this, 906 has amassed a workforce of ardent innovators researching, creating, deploying and maintaining best-in-class business products, packages, solutions and services which give our clients best in class IT solutions and greater ease of doing business.'}></Content>
            
            <CTA></CTA>
            <Footer></Footer>

        </div>
    )
}

export default About
