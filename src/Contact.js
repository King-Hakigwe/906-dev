import React, {useEffect} from 'react'
import { Footer } from './Containers'
import {  Header, Navbar } from './Components'
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos';
import header from './Assets/Contact/header.webp'




const Contact = () => {
    

    useEffect(()=>{
        Aos.init({ 
            duration: 1000,
            // disable: 'mobile'
        });
        
    }, []);

    
    let headercontent = {
        title: 'Contact Us',
        content: "Book an appointment with us by sending an email, or call any of the available numbers, and we'll get right back to you.",
        backgroundImage: header
    }

  
    return (
        
        <div>
            <Navbar></Navbar>
            <Header title={headercontent.title} content={headercontent.content} backgroundImage={headercontent.backgroundImage}></Header>
            <div className="nine__contact">
                <div className="container">
                    <div className="nine__contact-content">
                        <div className="nine__contact-content_info">
                            <div className="nine__contact-content_info-block">
                                <h2>Address</h2>
                                <p>2 Olukolu street, Lekki Phase 2 Lagos</p>
                            </div>
                            <div className="nine__contact-content_info-block">
                                <h2>Phone Number</h2>
                                <p>+2348148920128</p>
                            </div>
                            <div className="nine__contact-content_info-block">
                                <h2>Email</h2>
                                <p>info@906global.com</p>
                            </div>
                        </div>
                        <div className="nine__contact-content_form">
                            <form name='contact' action="/cgi-sys/formmail.pl" method="post" hidden>
                            <input type="hidden" name="recipient" value="davidigwe31@gmail.com"/>
                            <input type="hidden" name="subject" value="Form Submission"></input>
                                <input type="text" placeholder='
                                Name' name='name'/>
                                <input type="text" placeholder='
                                email' name='email'/>
                                <textarea name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                                <button className='button button-blue' type='submit'>Send Email</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    )
}

export default Contact
