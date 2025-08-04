import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const CategoryIcons3D = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, index) => {
        child.rotation.y = state.clock.elapsedTime * (0.5 + index * 0.1);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Electronics - Laptop */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <group position={[-4, 1, 0]}>
          <mesh>
            <boxGeometry args={[1.5, 0.1, 1]} />
            <meshStandardMaterial color="#3b82f6" />
          </mesh>
          <mesh position={[0, 0.45, -0.45]}>
            <boxGeometry args={[1.3, 0.8, 0.05]} />
            <meshStandardMaterial color="#1e40af" />
          </mesh>
        </group>
      </Float>

      {/* Fashion - Dress form */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <group position={[-1, 0, 0]}>
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[0.6, 0.8, 2]} />
            <meshStandardMaterial color="#ec4899" />
          </mesh>
          <mesh position={[0, 1.2, 0]}>
            <sphereGeometry args={[0.3, 12, 12]} />
            <meshStandardMaterial color="#be185d" />
          </mesh>
        </group>
      </Float>

      {/* Home & Garden - House */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={0.8}>
        <group position={[2, 0.5, 0]}>
          <mesh>
            <boxGeometry args={[1.2, 1, 1.2]} />
            <meshStandardMaterial color="#16a34a" />
          </mesh>
          <mesh position={[0, 0.9, 0]} rotation={[Math.PI / 4, 0, 0]}>
            <boxGeometry args={[1.4, 0.8, 0.1]} />
            <meshStandardMaterial color="#dc2626" />
          </mesh>
        </group>
      </Float>

      {/* Sports - Ball */}
      <Float speed={2.2} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[5, -0.5, 0]}>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshStandardMaterial color="#f97316" />
        </mesh>
      </Float>

      {/* Books - Stack */}
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1}>
        <group position={[0, -1.5, 0]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 0.2, 0.7]} />
            <meshStandardMaterial color="#7c3aed" />
          </mesh>
          <mesh position={[0, 0.2, 0]}>
            <boxGeometry args={[0.8, 0.2, 0.6]} />
            <meshStandardMaterial color="#2563eb" />
          </mesh>
          <mesh position={[0, 0.4, 0]}>
            <boxGeometry args={[0.9, 0.2, 0.65]} />
            <meshStandardMaterial color="#059669" />
          </mesh>
        </group>
      </Float>
    </group>
  );
};