import React from 'react'
import header from '../Assets/Services/Collaboration/header.webp';
import { Navbar, Header, CTA} from '../Components'
import { Content, Footer } from '../Containers'

const CRM = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header title='Customer Relationship Management' backgroundImage={header} ></Header>
            <Content paragraph={`Increasing your profitability and bottom line by streamlining processes that clog the wheel of effective sales, marketing and customer service, while allowing you focus on creating and maintain the best relationship between you and your customers. Our aim is to improve your interaction and business process with your customer thereby improving business growth and productivity.
`}></Content>
            <CTA></CTA>
            <Footer></Footer>
        </div>
    )
}

export default CRM
