import React, { useState } from 'react'
import logo from '../../Assets/906-logo-2.png'
import {RiCloseLine, RiMenu3Line} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';


const Menu = () => {
 return (
    <>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/About'>About</NavLink>
    <NavLink to='/Services'>Our Services</NavLink>
    <NavLink to='/Contact'>Contact Us</NavLink>
  </>
 )
}

$(function () {
    $(document).scroll(function () {
      var $nav = $(".nine__navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState(false);
    return (
        <div className="nine__navbar">
           <div className="container">
                <div className="nine__navbar-links">
                <div className="nine__navbar-links_logo">
                    <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
                </div>
                <div className="nine__navbar-links_container">
                    <Menu />
                </div>
                <div className="nine__navbar-menu">
                    {toggleMenu? <RiCloseLine color='#707070' size={27} onClick={() => settoggleMenu(false)} />: <RiMenu3Line color='#707070' size={27} onClick={() => settoggleMenu(true)} />}

                   
                </div>
                {toggleMenu && (
                        <div className="nine__navbar-menu_container scale-up-right">
                            <div className="nine__navbar-menu_container-links">
                                <Menu />
                            </div>
                        </div>
                    )}
                </div>
           </div>
           
         
        </div>
    )
}

export default Navbar
