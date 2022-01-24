import React from 'react'
import { Navbar, CTA, Header } from '../Components'
import { Footer } from '../Containers'
import  header  from '../Assets/Services/AppServices/header.webp'
import { Content } from '../Containers'
const AppServices = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header title='App Services' backgroundImage={header}></Header>
            <Content paragraph={`With the use of mobile devices becoming ever paramount, proper application development has become increasingly crucial and inevitable. That is why at 906 we have carefully mastered the art of creating the best quality, user eccentric applications. With experience gathered from building applications for clients in various economic sectors and industries.
            Our application services are split into three sectors:`}></Content>
            <Content heading={`Application design `}paragraph={`We design and create intuitive applications tailor made to your specifications and needs, providing best quality user experience, our applications are designed to meet every demand and functionality you may have of them.`}></Content>
            <Content heading={`Application development `}paragraph={`We develop apps that suit your business, brand or organization taking into consideration all your needs with account to future expansion potentials. We also provide you with the technical support you may need to build, leveraging the internet and digital space to boost productivity and business growth.`}></Content>
            <Content heading={`Application Deployment`}paragraph={`We deploy your applications seamlessly across all required platforms, with you applications being hosted on our secure and reliable cloud servers, with security protocols that ensure you never have to worry about intrusion or data breaches.`}></Content>
            <CTA></CTA>
            <Footer></Footer>
        </div>
    )
}

export default AppServices