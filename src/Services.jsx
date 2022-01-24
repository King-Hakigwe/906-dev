import React, {useEffect, useState, Suspense} from 'react'

import { Footer} from './Containers'
import { CTA, Header, Navbar } from './Components'
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos';
import header from '../src/Assets/Our Services/header.jpg'
import { serviceContent } from './Containers';
import { BounceLoader } from 'react-spinners';

const Service = React.lazy(()=> import('./Containers/Service/service'))

const Services = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    useEffect(()=>{
        Aos.init({ 
            duration: 1000,
            // disable: () => {
            //     var maxWidth = 800;
            //     return window.innerWidth < maxWidth;
            // }
        });
        
    }, []);

    let headercontent = {
        title: 'Our Services',
        content: "906 offers many products and solutions that businesses  may need. These are split into three categories: cloud services, security and app development",
        backgroundImage: header
    }
   
   

    return (

        
     
        <div>
            <Navbar></Navbar>
            <Header title={headercontent.title} content={headercontent.content} backgroundImage={headercontent.backgroundImage}></Header>
            <Suspense fallback={<div/>}>
            <div className="container">
            { loading ?   <div className='loader'><BounceLoader style={{margin: ' 7rem auto'}} color={'#285C88'} loading={loading} css={''} size={150} /></div> : <div className="content">
                    {serviceContent.map ((article)=> {
                      return <Service data-aos='fade-in' key={article.index} header={article.header} content={article.Content} index={article.index} background= {article.image}/>

                  })}
               </div>}
               
            </div>
            </Suspense>
            {/* <div>{serviceContent.map((images)=> {return (
                <img src={images.image} alt="" srcset="" style={{maxWidth: '50%'}}/>
            )})}</div> */}
            <CTA></CTA>
            <Footer></Footer>

        </div>
    )
}

export default Services
