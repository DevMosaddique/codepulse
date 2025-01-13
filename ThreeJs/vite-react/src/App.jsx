/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#468585" emissive="#468585" />

      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color="white"/>
    </mesh>
  );
};

const App = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />

        <directionalLight
          position={[1, 1, 1]}
          intensity={1}
          color={0x9cdba6}
        />

        <color attach="background" args={['#f0f0f0']} />

        <RotatingCube />
      </Canvas>
    </div>
  );
};

export default App;
