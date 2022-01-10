import React from 'react'
import { NavLink } from 'react-router-dom'
// import logo from '../../Assets/906-logo-2.png'
const footer = () => {
    return (
        <div className="nine__footer">
            <div className="container">
                <div className="nine__footer-container">
                  
                    <div className="nine__footer-container_links">
                        <NavLink to="/" className="nine__foter-container_links-link">Home</NavLink>
                        <NavLink to="/About" className="nine__foter-container_links-link">About</NavLink>
                        <NavLink to="/Services" className="nine__foter-container_links-link">Our Services</NavLink>
                        <NavLink to="/Contact" className="nine__foter-container_links-link">Contact Us</NavLink>
                    </div>
                </div>
                <div className="nine__footer copyright">
                    <p>&copy; 906 Global - All Rights Preserved</p>
                </div>
            </div>
        </div>
    )
}

export default footer
