import './App.css'
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';

{/* carga el modelo */}
function Model() {
  const result = useLoader(GLTFLoader, '/Alien/scene.gltf');
  result.scene.position.set(0, 2.8, 1);
  result.scene.scale.set(1, 1, 1);
  result.scene.rotation.y = Math.PI;
  return <primitive object={result.scene} />;
}

function App() {
  return (
    <div id='canvas-container'>
      {/* Luz y posicion de camara */}
      <Canvas camera={{ position: [20, 14, 0], fov: 30 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]}
          intensity={15}/>
        <OrbitControls />

        {/* codigo del suelo */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow={false}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial color="#e49292" />
          <gridHelper args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} />
        </mesh>

        {/* codigo del modelo */}
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
