import { motion as m } from "framer-motion"
import Carousel from "../components/Carousel"
import Project from "../Components/Project" 

function Work() {

  const items = [
    
    {
      title: 'Gobil',
      description: 'Auction website'
    },
    {
      title: 'ibtc',
      description: 'Crypto site'
    },
    {
      title: 'World Ranker',
      description: 'API implementation'
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
           <div className="text-2xl">
             <h1>Projects</h1>
           </div>

        <Carousel items={items}/>
           
        </div>

    
        
        
    </m.main>
  )
}

export default Work