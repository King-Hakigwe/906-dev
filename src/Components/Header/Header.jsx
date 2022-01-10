import React from 'react'

const Header = ({title,content, backgroundImage}) => {
    return (
       <div data-aos='fade-in'className="nine__header" style={{backgroundImage: `url(${backgroundImage})`}}>
           <div className="container">
               <div className="nine__header-content">
                   <h1>{title}</h1>
                   <p>{content}</p>
               </div>
           </div>
       </div>
    )
}

export default Header
