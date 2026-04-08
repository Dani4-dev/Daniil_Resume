import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-(--bg) overflow-hidden">
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0"
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: false },
              },
            },
            particles: {
              color: { value: "#60a5fa" },
              links: {
                color: "#60a5fa",
                distance: 150,
                enable: true,
                opacity: 0.1,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "out" },
                random: false,
                speed: 0.8,
                straight: false,
              },
              number: {
                density: { enable: true },
                value: 80,
              },
              opacity: { value: 0.2 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Сетка поверх частиц */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      
      {/* Статичные блики */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-(--accent) opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-500 opacity-8 blur-[100px] rounded-full" />
    </div>
  );
};