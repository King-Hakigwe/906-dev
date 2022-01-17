import React from 'react'
import { useState } from 'react/cjs/react.development'

import { Button } from '../../Components'



const Service = (props) => {

    const [count, setClicked] = useState(0);

    function checkClick(){
       setClicked(count + 1);
       console.log(props.index)
    }
    

    return (
          <div className="nine__service">
            <div className="nine__service-content">
             <div className="nine__service-content_header">
                 <h2>{props.header}</h2>
                 </div>
             <div className="nine__service-content_content">
                 <p>{props.content}</p>
               
            </div>
             <Button link={`/Services/${props.index}`} onclick={checkClick} classes="button button-blue"suggest="Read more" onbutton={props.onclick}></Button>
            </div>
            
        </div>
         
    )
}

export default Service
