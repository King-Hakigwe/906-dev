import React from 'react'
import { Navbar, CTA, Header } from '../Components'
import { Footer } from '../Containers'
import  header  from '../Assets/Services/AppServices/header.jpg'
import { Content } from '../Containers'
const AppServices = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header title='App Services' backgroundImage={header}></Header>
            <Content paragraph={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus non voluptates alias dignissimos atque libero! Magnam aliquam repellendus cupiditate! Officia praesentium enim in doloremque fugit? Quidem quos dolore delectus in id cum consectetur eveniet cupiditate rem ea labore iure soluta, eaque fuga quam, nemo sapiente eius cumque! Ratione doloremque placeat vitae odio labore quasi, at in, quam adipisci qui rem itaque, ut beatae nobis cumque ipsum inventore eum doloribus commodi harum asperiores magni nesciunt ex optio! Animi, tempore praesentium. Ipsam nemo qui aliquid dignissimos voluptatem, veniam delectus molestiae accusamus perferendis facilis non dolorem officia fugit porro suscipit cum natus facere?`}></Content>
            <Content paragraph={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus non voluptates alias dignissimos atque libero! Magnam aliquam repellendus cupiditate! Officia praesentium enim in doloremque fugit? Quidem quos dolore delectus in id cum consectetur eveniet cupiditate rem ea labore iure soluta, eaque fuga quam, nemo sapiente eius cumque! Ratione doloremque placeat vitae odio labore quasi, at in, quam adipisci qui rem itaque, ut beatae nobis cumque ipsum inventore eum doloribus commodi harum asperiores magni nesciunt ex optio! Animi, tempore praesentium. Ipsam nemo qui aliquid dignissimos voluptatem, veniam delectus molestiae accusamus perferendis facilis non dolorem officia fugit porro suscipit cum natus facere?`}></Content>
            <CTA></CTA>
            <Footer></Footer>
        </div>
    )
}

export default AppServices