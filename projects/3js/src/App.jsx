import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./styles.css"
import { useGLTF } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';

const App = () =>{
  let model = useGLTF("./mac.glb");
  return <Canvas>
    <OrbitControls />
    <ambientLight />
    <mesh>
      <boxGeometry args={[0.5,0.5,0.5]} />
    </mesh>
  </Canvas>;
}

export default App