import { Suspense } from 'react';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { calculateSizes } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import { Leva,useControls } from 'leva';
import Target from '../components/Target.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Rings from '../components/Rings.jsx';
import Cube from '../components/Cube.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import Button from '../components/Button.jsx';



const Hero = () => {
  const { scale, posX, posY, posZ, rotX, rotY, rotZ } = useControls('HackerRoom', {
    scale: { value: 0.07, min: 0.05, max: 0.5, step: 0.01 },
    posX: { value: 0, min: -10, max: 10, step: 0.1 },
    posY: { value: 0, min: -10, max: 10, step: 0.1 },
    posZ: { value: 0, min: -10, max: 10, step: 0.1 },
    rotX: { value: 1, min: -Math.PI, max: Math.PI, step: 0.1 },
    rotY: { value: -Math.PI, min: -Math.PI, max: Math.PI, step: 0.1 },
    rotZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.1 },
  });

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  // Adjusted positions for the 3D objects
  const targetPosition = [-15, -10, -15]; // Bottom-left corner
  const reactLogoPosition = [15, 10, -15]; // Top-right corner
  const ringPosition = [15, -10, -15]; // Bottom-right corner
  const cubePosition = [-15, 10, -15]; // Top-left corner

  return (
    <section className="relative min-h-screen w-full flex flex-col" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Hemanth <span className="waving-hand">👋</span>
        </p>
        <p className="text-center xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-generalsans font-black !leading-normal bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
          Building Products and Brands
        </p>
      </div>

      {/* Leva Debug Controls */}
      <Leva collapsed />

      {/* Canvas with Full Width & Height */}
      <div className="relative w-full h-screen">
        <Canvas className="absolute top-0 left-0 w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
            <HackerRoom scale={0.06} position={[posX, posY, posZ]} rotation={[rotX, rotY, rotZ]} />
            </HeroCamera>
            <group>
              <Target position={targetPosition} scale={scale} />
              <ReactLogo position={reactLogoPosition} />
              <Rings position={ringPosition} />
              <Cube position={cubePosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
        
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 sm:px-10 px-5">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
