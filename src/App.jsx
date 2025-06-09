import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function App() {
  return ( 
  <div id='canvas-container'>
    <Canvas /*camera={{ position: [2, 2, 2] }}*/>
      <mesh>
        <OrbitControls />
       {/* <sphereGeometry args={[ 3, 80, 80]}/> */}
       {/* <boxGeometry args={[ 2, 3, 2]}/> */}
       <torusKnotGeometry args={[ 1.7, 0.3, 256, 256]} />
        <meshToonMaterial color={0x00bfff} />
        <directionalLight position={[2, 5, 1]}/>
      </mesh>
    </Canvas>
  </div>

  );
}

export default App
