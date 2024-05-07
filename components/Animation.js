import React, { useRef, useEffect, useState } from 'react'
import { Stats, OrbitControls, Circle } from '@react-three/drei'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

export default function App() {
  const gltf = useLoader(GLTFLoader, './ericsson_military_control_terminal.glb');

  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prevRotation => [
        prevRotation[0],
        prevRotation[1] + .015,
        prevRotation[2]
      ]);  
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ height: "50vh", width: "100%" }}>
    <Canvas camera={{ position: [0, 3, 30] }} shadows>
      <directionalLight
        position={[0, 1.5, 1]}
        castShadow
        intensity={Math.PI * 2}
      />
      <primitive rotation={rotation}
        object={gltf.scene}
        position={[0, 2.85, 27.8]}
        children-0-castShadow
      />
    </Canvas>
    </div>
  )
}