import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion as m } from "framer-motion"
import ParticlesBackground from "../components/ParticlesBackground"
import particlesConfig from "../components/config/indexParticles.config.js"
import { useEffect, useState } from 'react'
import SocialLinks from '../components/SocialLinks'


const Home: NextPage = () => {

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  function handleMouseMove(event) {
    setMouseX(event.clientX);
    setMouseY(event.clientY);
  }

  const styles = {
    background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, #ffedd5, #fed7aa 
      )`,
    backgroundSize: '10px',
  }

  return (
    <m.div
    style={styles} 
    className='text-gray-900 absolute left-0 w-full h-full bg-orange-100 top-0 px-16 lg:px-48'
    initial={{
      y: "100%"
    }}
    animate={{
      y: "0%"
    }}
    transition={{
      duration: 0.75, ease: "easeOut"
    }}
    exit={{opacity: 1}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <main>
        <div className='mt-72 p-1'>
          <h1 className='font-yeseva-one flex text-6xl text-center lg:text-right '>
            William Björk
          </h1>
          <h3 className='pl-2 font-sansita pt-3 text-2xl'>React & NextJS Developer</h3>
         
        </div>
        
        <div className="absolute bottom-6 right-6">
                <SocialLinks />
        </div>
          
      </main>

      <ParticlesBackground />
    </m.div>
  )
}

export default Home
