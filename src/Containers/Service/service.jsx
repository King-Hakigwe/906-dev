import React from 'react'

import { Button } from '../../Components'



const Service = (props) => {
    
    let serviceStyle = {backgroundImage: `url(${props.background})  center center/cover`,backgroundColor: 'rgba(40, 92, 136, 0.50)', backgroundBlendMode: 'multiply'};
    
    return (
          <div className="nine__service" style={{backgroundImage: `url(${props.background})`}}>
            <div className="nine__service-content">
             <div className="nine__service-content_header">
                 <h2>{props.header}</h2>
                 </div>
             <div className="nine__service-content_content">
                 <p>{props.content}</p>
                 <img src={props.image} alt="" />
               
                </div>
             <Button link={`/Services/${props.index}`} classes="button button-blue"suggest="Read more" ></Button>
            </div>
            
        </div>
         
    )
}

export default Service
