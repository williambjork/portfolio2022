import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion as m } from "framer-motion"

const Home: NextPage = () => {
  return (
    <m.div 
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
        <div className='my-96 p-1'>
          <h1 className='text-6xl text-center lg:text-right lg:text-9xl'>
            William Björk
          </h1>
        </div>
        
          <div className='flex justify-between'>
            <div>
              <h2>Front</h2>
              <h2>End</h2>
              <h2>Dev</h2>
            </div>
            <div>
              <h2>Stuff</h2>
              <h2>goes</h2>
              <h2>here</h2>
            </div>
        </div>
      </main>

      
    </m.div>
  )
}

export default Home
