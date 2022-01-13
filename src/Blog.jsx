import React from 'react'
import { Navbar, CTA, Header } from './Components'
import { Footer } from './Containers'
import serviceContent from './Containers/ServiceContent/ServiceContent'

const Blog = () => {
    let content = serviceContent[0];
    return (
        <div>
            <Navbar/>
            <Header title={content.header} content={content.Content.slice(0,200)}/>
            <div className="nine__blog">
                <div className="container">
                    <div className="nine__blog-content">
                        <p>{content.Content.split('\n')}</p>
                    </div>
                </div>
            </div>
            
            <CTA/>
            <Footer/>
        </div>
    )
}

export default Blog
