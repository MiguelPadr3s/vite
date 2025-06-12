import './App.css'
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Html } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useMemo, useEffect } from 'react';
import { useControls, Leva } from 'leva';
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

{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

{/* Anotacion 4 */}
<Html position={[2.66, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 1
  </div>
</Html>

<Html position={[2.1, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 2
  </div>
</Html>

<Html position={[1.6, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 3
  </div>
</Html>

<Html position={[1.06, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 4
  </div>
</Html>

<Html position={[0.54, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 5
  </div>
</Html>

<Html position={[0.00, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 6
  </div>
</Html>


<Html position={[-0.54, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 7
  </div>
</Html>


<Html position={[-1.06, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 8
  </div>
</Html>


<Html position={[-1.62, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 9
  </div>
</Html>


<Html position={[-2.10, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 10
  </div>
</Html>


<Html position={[-2.65, 0.4, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 11
  </div>
</Html>


<Html position={[-3.15, 0.4, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 12
  </div>
</Html>


<Html position={[-4.20, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 13
  </div>
</Html>


<Html position={[-4.73, 0.8, 0.8]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 14
  </div>
</Html>

{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
<Html position={[2.66, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 21
  </div>
</Html>

<Html position={[2.1, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 22
  </div>
</Html>

<Html position={[1.6, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 23
  </div>
</Html>

<Html position={[1.06, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 24
  </div>
</Html>

<Html position={[0.54, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 25
  </div>
</Html>

<Html position={[0.00, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 26
  </div>
</Html>


<Html position={[-0.54, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 27
  </div>
</Html>


<Html position={[-1.06, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 28
  </div>
</Html>


<Html position={[-1.62, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 29
  </div>
</Html>


<Html position={[-2.10, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 30
  </div>
</Html>


<Html position={[-2.60, 0.4, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 31
  </div>
</Html>


<Html position={[-3, 0.4, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 32
  </div>
</Html>


<Html position={[-3.5, 0.4, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 33
  </div>
</Html>


<Html position={[-4.60, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 34
  </div>
</Html>

<Html position={[-5.10, 0.8, -2.15]} center>
  <div className="annotation-K" onClick={() => window.location.href = '/'}>
    K - 35
  </div>
</Html>

    </>
  );
}

{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

{/* esta parte es para el background */}
function UpdateSceneBackground() {
  const { scene } = useThree();

  const { background, customColor } = useControls('Cambio de texturas', {
    background: {
      options: ['Office', 'Nexis', 'Color'],
      value: 'Color',
      label: 'Opciones',
    },
    customColor: {
      value: '#a8bfc7',
      label: 'Seleccion de color',
      render: (get) => get('Cambio de texturas.background') === 'Color',
    },
  });

  const textures = useTexture({
    Office: '/office.jpg',
    Nexis: '/Nexis.png',
  });

  useEffect(() => {
    if (background === 'Color') {
      scene.background = new Color(customColor);
    } else {
      scene.background = textures[background];
    }
  }, [background, customColor, scene, textures]);

  return null;
}


function App() {
  return (
    <div id='canvas-container'>
      {/* Luz y posicion de camara */}
      <Leva collapsed={false} /> {/* ✅ Add this line to show the panel */}
      <Canvas camera={{ position: [30, 14, -15], fov: 15 }}>
         
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 10, 5]} intensity={0}/>
        <OrbitControls />

        {/* codigo del suelo */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow={false}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial color="#a5a4a3" />
          <gridHelper args={[20, 20]} rotation={[-Math.PI / 2, 0, 0]} />
        </mesh>
        <UpdateSceneBackground />
        {/* codigo del modelo */}
        <Suspense fallback={null}>
         
         {/* <Model/> */}
          <Model2/>
        </Suspense>

      </Canvas>
    </div>
  );
}

export default App;
