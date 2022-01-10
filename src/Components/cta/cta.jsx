import React from 'react';
import { Button } from '..';

const CTA = () => {
    return (
        
        <div className="nine__cta">
            <div className="container">
                <div data-aos='zoom-out' className="nine__cta-content">
                    <h2 className='mv1'>Let us begin.</h2>
                    <p>Send us an email or call us to book an appointment.</p>
                    <Button link='/Contact'classes='button button-blue mv3' suggest='Contact Us'></Button>
                </div>
            </div>
            
        </div>
        
    )
}

export default CTA
