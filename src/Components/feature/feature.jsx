import React from 'react'
import { Button } from '..'


const Feature = (props) => {
    console.log(props.classes);
    return (
        <div data-aos='fade-up' className={`nine__feature ${props.background}`}>
             <div className={`nine__feature-container ${props.flip}`}>
                    <div className={`nine__feature-container_content`}>
                        <h2>{props.header}</h2>
                        <p> {props.content}</p>
                        <Button link={props.link} classes={`button button-blue ${props.buttonTheme}`} suggest="Learn More"></Button>
                    </div>
                    <div className="nine__feature-container_box" style={{ backgroundImage: `url(${props.url})`}}>
                        
                    </div>

                </div>
        </div>
    )
}

export default Feature
