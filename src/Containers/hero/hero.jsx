import React from 'react'
import target from '../../Assets/home/hero-target_result.webp'
import { Button } from '../../Components'

const hero = () => {
    return (
            <div className="nine__hero">
               <div className="nine__hero-container container">
                    <div className="nine__hero-container_content fade-in-4">
                        <h1>Automating work processes has never been this easy.</h1>
                        <p>With our wealth of IT solutions, 906 is the 
                            one stop for all your business needs.</p>
                            <Button link='/services'suggest="Get Started" classes="button button-blue"></Button>
                    </div>

                    <div className="nine__hero-container_target fade-in-2">
                        <img src={target} alt="target" srcset="" />
                    </div>
                </div>
                <div className="mouse"></div>
            </div>
    )
}

export default hero
