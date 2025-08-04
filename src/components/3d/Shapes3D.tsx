import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating spheres */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 2, 0]}>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[4, -1, -2]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial color="#06B6D4" />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
        <mesh position={[0, 3, -3]}>
          <torusGeometry args={[0.8, 0.3, 16, 32]} />
          <meshStandardMaterial color="#F59E0B" />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2.5}>
        <mesh position={[-2, -2, -1]}>
          <coneGeometry args={[0.6, 1.5, 8]} />
          <meshStandardMaterial color="#EF4444" />
        </mesh>
      </Float>
      
      {/* Additional smaller shapes */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[2, 1, 1]}>
          <sphereGeometry args={[0.3, 12, 12]} />
          <meshStandardMaterial color="#10B981" />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.8}>
        <mesh position={[-3, 0, 2]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#8B5CF6" />
        </mesh>
      </Float>
    </group>
  );
};

export const AnimatedText = ({ text, position }: { text: string; position: [number, number, number] }) => {
  const textRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={textRef} position={position}>
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </Float>
  );
};

export const ProductShowcase = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Laptop representation */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <group position={[-3, 0, 0]}>
          <mesh>
            <boxGeometry args={[2, 0.1, 1.4]} />
            <meshStandardMaterial color="#1f2937" />
          </mesh>
          <mesh position={[0, 0.65, -0.6]}>
            <boxGeometry args={[1.8, 1.2, 0.05]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
          <mesh position={[0, 0.66, -0.59]}>
            <boxGeometry args={[1.6, 1, 0.02]} />
            <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.3} />
          </mesh>
        </group>
      </Float>

      {/* Phone representation */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <group position={[2, 1, 0]}>
          <mesh>
            <boxGeometry args={[0.8, 1.6, 0.1]} />
            <meshStandardMaterial color="#111827" />
          </mesh>
          <mesh position={[0, 0, 0.06]}>
            <boxGeometry args={[0.7, 1.4, 0.02]} />
            <meshStandardMaterial color="#22c55e" emissive="#16a34a" emissiveIntensity={0.2} />
          </mesh>
        </group>
      </Float>

      {/* Headphones representation */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <group position={[0, -1.5, 1]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1, 0.1, 8, 32]} />
            <meshStandardMaterial color="#6b7280" />
          </mesh>
          <mesh position={[-0.8, 0, 0]}>
            <sphereGeometry args={[0.3, 12, 12]} />
            <meshStandardMaterial color="#1f2937" />
          </mesh>
          <mesh position={[0.8, 0, 0]}>
            <sphereGeometry args={[0.3, 12, 12]} />
            <meshStandardMaterial color="#1f2937" />
          </mesh>
        </group>
      </Float>
    </group>
  );
};