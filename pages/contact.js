import { motion as m } from "framer-motion"
import { useEffect, useState } from "react";

function contact() {

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
    background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, #ecfccb, #d9f99d)`,
    backgroundSize: '10px',
  }

  return (
    
      <m.main style={styles} className="text-ray-900 absolute top-0 left-0 w-full  h-full px-16 lg:px-48"
      initial={{
        y: "-100%"
      }}
      animate={{
        y: "0%"
      }}
      transition={{
        duration: 0.75, ease: "easeOut"
      }}
      exit={{opacity: 1}}>
          <div className="font-dmsans text-xl my-96 p-1">
              <h1>let's talk</h1>

              
          </div>
          

          
      </m.main>
    
  )
}

export default contact