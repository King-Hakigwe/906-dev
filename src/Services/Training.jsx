import React from 'react'
import { Navbar, CTA, Header } from '../Components'
import { Footer } from '../Containers'
import  header  from '../Assets/Services/Training/header.jpg'
import { Content } from '../Containers'
const Training = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header title='Training' backgroundImage={header}></Header>
            <Content paragraph={`Change is the only constant, at 906 we believe your team should continuously evolve, adapt and conquer, to do that your team needs to be at the top level.
     With our training and support services you can be rest assured that employee competency and skill sets would be maintained at the highest levels with quality IT training and expert consultation services to keep your team and workforce at their sharpest of wits, enabling you pursue job enhancements, promotion, increased motivation and job satisfaction.`}></Content>
           
            <CTA></CTA>
            <Footer></Footer>
        </div>
    )
}

export default Training
