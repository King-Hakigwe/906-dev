import React from 'react'
import { Navbar, CTA, Header } from '../Components'
import { Footer } from '../Containers'
import  header  from '../Assets/Services/Security/header.jpg'
import { Content } from '../Containers'
const Security = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header title='Security' backgroundImage={header} ></Header>
            <Content paragraph={`Ease of work is essential and therefore we provide Microsoft enterprise mobility security to aid efficient and intelligent mobility management and security which helps both secure and protect the employees and the organization, giving you the freedom to work in new and convenient ways.`}></Content>
            <Content paragraph={`With the deployment of our Sophos firewall and endpoint , we embolden your network to identify users, detect network infection sources and autonomously limit infection to outer network resource and peripherals, our Sophos software integrates malicious traffic detection and real time threat intelligence to prevent, detect, sandbox and remediate threats and infections.`}></Content>
            <Content paragraph={` While offering cloud services we ensure native security for your cloud resources by deploying Checkpoint CloudGuard with advanced threat prevention for all our assets and workloads in both public, private, hybrid or multi cloud infrastructure thus making available unified security and automating seamless and tier 1 security everywhere.`}></Content>
            <CTA></CTA>
            <Footer></Footer>
        </div>
    )
}

export default Security

