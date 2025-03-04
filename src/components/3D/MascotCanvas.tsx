import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, useTexture, Trail, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Fallback component while 3D model loads
const LoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[0.5, 16, 16]} />
    <meshStandardMaterial color="#8B5CF6" wireframe />
  </mesh>
);

// Particles effect
const Particles = ({ count = 200 }) => {
  const mesh = useRef<THREE.Points>(null);
  
  const positions = React.useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.075;
  });
  
  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#8B5CF6"
        sizeAttenuation
        transparent
        opacity={0.5}
      />
    </points>
  );
};

// Coin with texture
const Coin = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  
  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <cylinderGeometry args={[0.7, 0.7, 0.1, 32]} />
      <meshStandardMaterial color="#F59E0B" metalness={0.9} roughness={0.1} />
    </mesh>
  );
};

// Animated trail for the mascot
const MascotWithTrail = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
  });
  
  return (
    <group ref={meshRef}>
      <Trail
        width={1}
        length={4}
        color="#8B5CF6"
        attenuation={(t) => t * t}
      >
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="#8B5CF6" metalness={0.5} roughness={0.2} />
          </mesh>
          
          {/* Eyes */}
          <group position={[0, 0.5, 1.2]}>
            <mesh position={[-0.4, 0, 0]}>
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshStandardMaterial color="white" />
            </mesh>
            <mesh position={[0.4, 0, 0]}>
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshStandardMaterial color="white" />
            </mesh>
            
            {/* Pupils */}
            <mesh position={[-0.4, 0, 0.15]}>
              <sphereGeometry args={[0.1, 32, 32]} />
              <meshStandardMaterial color="black" />
            </mesh>
            <mesh position={[0.4, 0, 0.15]}>
              <sphereGeometry args={[0.1, 32, 32]} />
              <meshStandardMaterial color="black" />
            </mesh>
          </group>
          
          {/* Mouth */}
          <mesh position={[0, 0, 1.2]} rotation={[0, 0, 0]}>
            <torusGeometry args={[0.5, 0.1, 16, 32, Math.PI]} />
            <meshStandardMaterial color="#EC4899" />
          </mesh>
          
          {/* Crown */}
          <group position={[0, 1.2, 0]}>
            <mesh position={[0, 0.3, 0]}>
              <cylinderGeometry args={[0.8, 1.2, 0.5, 32]} />
              <meshStandardMaterial color="#F59E0B" metalness={0.8} roughness={0.2} />
            </mesh>
            {[0, 1, 2, 3, 4].map((i) => (
              <mesh 
                key={i} 
                position={[
                  Math.sin(i * Math.PI * 2 / 5) * 0.8,
                  0.7,
                  Math.cos(i * Math.PI * 2 / 5) * 0.8
                ]}
              >
                <coneGeometry args={[0.2, 0.5, 32]} />
                <meshStandardMaterial color="#F59E0B" metalness={0.8} roughness={0.2} />
              </mesh>
            ))}
          </group>
        </Float>
      </Trail>
    </group>
  );
};

// Simple placeholder model since we can't load external GLTF
const MascotModel = () => {
  return (
    <group>
      <MascotWithTrail />
      
      {/* Coins around */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <Coin 
          key={i} 
          position={[
            Math.sin(i * Math.PI * 2 / 6) * 3,
            Math.sin(i * Math.PI / 3) * 1.5,
            Math.cos(i * Math.PI * 2 / 6) * 3
          ]}
          rotation={[Math.random(), Math.random(), Math.random()]}
        />
      ))}
      
      <Particles />
    </group>
  );
};

const MascotCanvas: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]}>
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <MascotModel />
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MascotCanvas;