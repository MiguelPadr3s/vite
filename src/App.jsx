import './App.css'
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useRef } from 'react';
import { Color} from 'three';


{/* carga el modelo */}
function Model() {
  const result = useLoader(GLTFLoader, '/Alien/scene.gltf');
  result.scene.rotation.y = Math.PI;
  return <primitive 
  object={result.scene} 
  position={[0, 2.8, 1]} 
  scale={[1, 1, 1]}/>;
}
function Model2() {
  const result = useLoader(GLTFLoader, '/gabinete/scene.gltf');
  result.scene.rotation.y = Math.PI;

  return (
    <>
      <primitive
        object={result.scene}
        position={[5, -0.99, -5]}
        scale={[0.02, 0.02, 0.02]}
      />

      {/* Anotacion 1 */}
<Html position={[5.01, -0.8, -5]} center>
  <div className="annotation" onClick={() => window.location.href = '/puerta'}>
    Unifilares
  </div>
</Html>

{/* Anotacion 2 */}
<Html position={[5.02, -0.7, -5.1]} center>
  <div className="annotation" onClick={() => window.location.href = '/panel'}>
    Acometida Sur
  </div>
</Html>

{/* Anotacion 3 */}
<Html position={[5.00, -0.6, -4.9]} center>
  <div className="annotation" onClick={() => window.location.href = '/estado'}>
    Acometida Norte
  </div>
</Html>
    </>
  );
}

function UpdateSceneBackground() {
  const { scene } = useThree();

  const texture = useTexture('/cave.jpg');

  scene.background = texture;

  return null;
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
          <UpdateSceneBackground/>
          <Model/>
          <Model2/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
