import React from 'react';
import { Testimonial } from '../../Components';
import Testimonies from '../../Components/Testimonies/Testimonies'


const Testimonials = () => {
    return <div className="nine__testimonials">
        <div className="container">
            <div className="nine__testimonials-header">
                <h1>Reviews</h1>
                
            </div>
            <div className="nine__testimonials-content">
            {
            Testimonies.map((testimony) => {
               return <Testimonial Review={testimony.Testimony} Quoted={testimony.Quoted}/>
            })
        }
            </div>
        </div>
    </div>
};

export default Testimonials;
