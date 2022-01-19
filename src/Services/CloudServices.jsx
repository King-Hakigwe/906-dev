import React from 'react'
import { Navbar, CTA, Header } from '../Components'
import { Footer } from '../Containers'
import  header  from '../Assets/Services/CloudServices/header.jpg'
import { Content } from '../Containers'
const CloudServices = () => {
    return (
        <div>
           <Navbar></Navbar>
            <Header title='Cloud Services' backgroundImage={header}></Header>
            <Content paragraph={`Cloud services and business mobility are paramount in today’s business landscape and that is why we maintain your services on a private network and the hardware and software dedicated solely to your organization making it easier for your organization to tailor resources to your specific requirements, which would provide you with flexibility, control and stability.
Deploying our azure cloud service to your organization helps you innovate and evolve with purpose towards growth, realizing cost saving, efficient and flexible cloud computing processes.
`}></Content>
          
            <CTA></CTA>
            <Footer></Footer> 
        </div>
    )
}

export default CloudServices
