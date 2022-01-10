import React from 'react'
import { Feature } from '../../Components'
import BackgroundOne from '../../Assets/home/feature-1.jpg';
import BackgroundTwo from '../../Assets/home/feature-2.jpg';
import BackgroundThree from '../../Assets/home/feature-3.jpg';
import darkCircle from '../../Assets/home/target-half.png'
import lightCircle from '../../Assets/home/target-half-2.png'



const features = () => {
    return (
        <div className="nine__features">
            <div className="nine__features_container">
                <Feature background="feature-light" header='Take your business to the cloud.'  content='Here at 906, we believe that the future of business is mobility and omnipresence; and with a myriad of cloud-based services, we ensure our clients stay front and center of the technological evolution that is the cloud.' url={BackgroundOne}></Feature> 
                <Feature background="feature-dark" header='Protect your information.' content='Data is the future, but proper protection and safeguarding of data keeps it alive. At 906, we arm our clients with the best-in-class security suites and products to ensure that their information and resources remain adequately secure and protected from all forms of intrusions and manipulation.' url={BackgroundTwo} buttonTheme="button-light-blue" flip='reverse'></Feature>
                <Feature background="feature-light" header='Create applications.' content="Attentions to detail and vision are key ingredients for any applications success. Therefore, in making applications that change the game, 906 creates bespoke solutions that improve productivity, insight, efficiency and profit to her clients." url={BackgroundThree}></Feature>            
            </div>
            <img className={`semicircle-1`}src={darkCircle} alt="" />
            <img className={`semicircle-2`} src={lightCircle} alt="" />
        </div>
    )
}

export default features
