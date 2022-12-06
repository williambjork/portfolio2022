import { motion as m } from "framer-motion"
import Project from "../components/Project"

function Work() {
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
        <div className="my-96 p-1 font-dmsans">
            <h1>Projects</h1>
        </div>

    <Project />
        
        
    </m.main>
  )
}

export default Work