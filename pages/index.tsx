import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { motion as m } from "framer-motion"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
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

      
    </div>
  )
}

export default Home
