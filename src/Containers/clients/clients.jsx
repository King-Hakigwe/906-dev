import React from 'react'
import { Brand } from '../../Components'
import prime from '../../Assets/brands/prime.webp'
import precise from '../../Assets/brands/precisehire.webp'
import africare from '../../Assets/brands/AfricaRe.webp'
import wemabod from '../../Assets/brands/wemabod.webp'


const clients = () => {
    return (
        <div data-aos='fade-up'className="nine__client">
            <div className="container">
                <div className="nine__client-container">
                    <div className="header">
                    <h2>Our Clients</h2>
                    </div>
                    <div className="nine__client-container_client">
                        <Brand logo={prime}></Brand>
                        <Brand logo={precise}></Brand>
                        <Brand logo={africare}></Brand>
                        <Brand logo={wemabod}></Brand>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default clients
