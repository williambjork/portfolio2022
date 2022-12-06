
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <Particles 
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      
      fpsLimit: 120,
      interactivity: {
          events: {
              onClick: {
                  enable: true,
                  mode: "push",
              },
              onHover: {
                  enable: true,
                  mode: "repulse",
              },
              resize: true,
          },
          modes: {
              push: {
                  quantity: 4,
              },
              repulse: {
                  distance: 100,
                  duration: 0.3,
              },
          },
      },
      particles: {
          color: {
              value: "#f5d271",
          },
          
          collisions: {
              enable: true,
          },
          move: {
              directions: "none",
              enable: true,
              outModes: {
                  default: "bounce",
              },
              random: false,
              speed: 0.3,
              straight: false,
          },
          number: {
              density: {
                  enable: true,
                  area: 800,
              },
              value: 80,
          },
          opacity: {
              value: 0.5,
              "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
              }
          },
          shape: {
              type: "circle",
          },
          size: {
              value: { min: 1, max: 5 },
          },
      },
      detectRetina: true,
  }} />

    
  )
}

export default ParticlesBackground