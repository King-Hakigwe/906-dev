import React from 'react'
import { Navbar, CTA, Header } from '../Components'
import { Footer } from '../Containers'
import  header  from '../Assets/Services/Collaboration/header.webp'
import { Content } from '../Containers'
const Collaboration = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header title='Collaboration' backgroundImage={header}></Header>
            <Content paragraph={`Using SharePoint, we allow your teams seamlessly and dynamically share and manage content for projects with bespoke team websites where knowledge content and applications can be shared for easier and streamlined collaboration across the organization, while with our Microsoft Exchange Servers we help your organization improve productivity and reduce “RE” mails by introducing enterprise class tools for productivity.`}></Content>
            <Content paragraph={` With Office 365, you would not need another application to collaborate, empowering your employees with a cloud-based suite and integrating all Microsoft online applications into a simple and easy to use cloud service, collaboration and productivity improves inevitably, after which we then automate processes to ensure you focus on what is important. With BPA we help you automate mundane processes and function to free up time and manpower for more productive and growth driven activities and enabling employees to build new capabilities via our applications.`}></Content>
            <CTA></CTA>
            <Footer></Footer>
        </div>
    )
}

export default Collaboration
