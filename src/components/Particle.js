import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
          color: {
            value: ["#ff6b6b", "#feca57", "#1dd1a1", "#5f27cd"], // Vibrant colors
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0.5,
            },
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "repulse",
            },
            onhover: {
              enable: true,
              mode: "grab",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5,
              },
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}


export default Particle;
