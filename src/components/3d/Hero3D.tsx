import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const Hero3D = () => {
  const titleRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (titleRef.current) {
      titleRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  // Create particle system
  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <group>
      {/* Floating particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#8B5CF6" transparent opacity={0.6} />
      </points>

      {/* 3D Title - Using simple mesh instead of Text3D */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.8}>
        <group ref={titleRef} position={[0, 1, 0]}>
          <mesh>
            <boxGeometry args={[4, 1, 0.3]} />
            <meshStandardMaterial 
              color="#ffffff" 
              emissive="#8B5CF6" 
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* Subtitle */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group position={[0, -0.5, 0]}>
          <mesh>
            <boxGeometry args={[3, 0.3, 0.1]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
          </mesh>
        </group>
      </Float>
    </group>
  );
};