import './App.css'
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useRef } from 'react';
import { Color} from 'three';


{/* carga el modelo */}
/*function Model() {
  const result = useLoader(GLTFLoader, '/Alien/scene.gltf');
  result.scene.rotation.y = Math.PI;
  return <primitive 
  object={result.scene} 
  position={[0, 2.8, 1]} 
  scale={[1, 1, 1]}/>;
}*/
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
<Html position={[-7.14, 0.5, -0.67]} center>
  <div className="annotation" onClick={() => window.location.href = 'https://192.168.30.252:4443/#%2FEnterprise%20Server%2FBMS%2FProyectos%2FFord%2FSubestaci%C3%B3n%2FEnerg%C3%ADa'}>
    Unifilares
  </div>
</Html>


{/* Anotacion 2 */}
<Html position={[3.2, 0.8, 0.8]} center>
  <div className="annotation" onClick={() => window.location.href = 'https://192.168.30.252:4443/#%2FEnterprise%20Server%2FBMS%2FProyectos%2FFord%2FSubestaci%C3%B3n%2FCuarto%203D%2FAcometida%20Sur'}>
    Acometida Sur
  </div>
</Html>

{/* Anotacion 3 */}
<Html position={[3.2, 0.8, -2.1]} center>
  <div className="annotation" onClick={() => window.location.href = 'https://192.168.30.252:4443/#%2FEnterprise%20Server%2FBMS%2FProyectos%2FFord%2FSubestaci%C3%B3n%2FCuarto%203D%2FAcometida%20norte%202'}>
    Acometida Norte
  </div>
</Html>
    </>
  );
}

function UpdateSceneBackground() {
  const { scene } = useThree();

  const texture = useTexture('/office.jpg');

  scene.background = texture;

  return null;
}

function App() {
  return (
    <div id='canvas-container'>
      {/* Luz y posicion de camara */}
      <Canvas camera={{ position: [30, 14, -15], fov: 15 }}>
        
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 10, 5]}
          intensity={15}/>
        <OrbitControls />

        {/* codigo del suelo */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow={false}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial color="#a5a4a3" />
          <gridHelper args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} />
        </mesh>

        {/* codigo del modelo */}
        <Suspense fallback={null}>
          <UpdateSceneBackground/>
         {/* <Model/> */}
          <Model2/>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
