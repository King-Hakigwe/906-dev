import React from 'react'

import { Button } from '../../Components'



const Service = (props) => {
    

    return (
          <div className="nine__service">
            <div className="nine__service-content">
             <div className="nine__service-content_header">
                 <h2>{props.header}</h2>
                 </div>
             <div className="nine__service-content_content">
                 <p>{props.content}</p>
               
            </div>
             <Button link={`/Services/${props.index}`} classes="button button-blue"suggest="Read more" ></Button>
            </div>
            
        </div>
         
    )
}

export default Service
