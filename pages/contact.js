import { motion as m } from "framer-motion"

function contact() {
  return (
    <m.main className="text-ray-900 absolute top-0 left-0 w-full h-full bg-red-400 px-16 lg:px-48"
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
        <div className="my-96 p-1">
            <h1>let's talk</h1>
        </div>

        <div className="flex gap-40">
            <div className="lg:text-2xl">
                <h3>Find me:</h3>
            </div>

            <div className="lg:text-6xl text-2xl underline">
              <ul>
                <li className="pb-2">Twitter</li>
                <li className="pb-2">Instagram</li>
                <li className="pb-2">LinkedIn</li>
                
                
              </ul>
            </div>
        </div>
    </m.main>
  )
}

export default contact