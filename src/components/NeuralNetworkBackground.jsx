import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const NeuralNetworkBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Loads the slim version of tsparticles which contains the network/lines features
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles-network"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Important: false so it stays inside your About section
        background: {
          color: { value: "transparent" },
        },
        particles: {
          number: {
            value: 60, // Adjust density of nodes here
            density: { enable: true, value_area: 800 },
          },
          color: { value: "#3b82f6" }, // Node color (matches Tailwind blue-500)
          links: {
            enable: true,
            color: "#3b82f6", // Connecting line color
            distance: 150, // How close nodes must be to connect
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.5, // Movement speed
            direction: "none",
            random: false,
            straight: false,
            outModes: { default: "bounce" }, // Bounce off the edges
          },
          size: {
            value: 3, // Size of the nodes
          },
          opacity: {
            value: 0.5,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Grabs nodes when you hover over the network
            },
          },
          modes: {
            grab: { distance: 140, links: { opacity: 1 } },
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full -z-10" // Puts the canvas strictly behind your content
    />
  );
};

export default NeuralNetworkBackground;