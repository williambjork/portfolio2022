import { motion as m } from "framer-motion"
import Carousel from "../components/Carousel"
import Project from "../Components/Project" 

function Work() {

  const items = [
    
    {
      title: 'Refined Motorsport',
      description: 'A website fully designed and coded by me from the ground upI built this website from scratch using React, NextJS and Tailwind CSS. I focused on keeping the components small and manageable and spen a lot of time on the look and design. This project really solidified my understanding of both',
      url: 'https://lcemotors.vercel.app/',
      image: '/../public/src/images/refined.PNG'
    },
    {
      title: 'ibtc',
      description: 'Crypto site',
      url: 'https://ibtc.se/',
      image: '/../public/src/images/refined.PNG'
    },
    {
      title: 'Gobil',
      description: 'Web Design & System Development',
      url: 'https://gobil.se/',
      image: '/../public/src/images/gobil.PNG'
    },
    {
      title: 'PharmaUse',
      description: 'Web Design & Project Management',
      url: 'https://testcenter.se/',
      image: '/../public/src/images/PUScreen.PNG'
    }
  ];

  return (
    <m.main className="text-ray-900 absolute top-0 left-0 w-full h-full bg-sky-400 px-16 lg:px-48"
    initial={{
      x: "100%"
    }}
    animate={{
      x: "0%"
    }}
    transition={{
      duration: 0.75, ease: "easeOut"
    }}
    exit={{opacity: 1}}>
        <div className="my-52 p-1 font-dmsans">
           

        <Carousel items={items}/>
           
        </div>

    
        
        
    </m.main>
  )
}

export default Work