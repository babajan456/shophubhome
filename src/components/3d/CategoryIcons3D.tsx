import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box, Sphere, Cylinder } from '@react-three/drei';
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
          <Box args={[1.5, 0.1, 1]}>
            <meshStandardMaterial color="#3b82f6" />
          </Box>
          <Box args={[1.3, 0.8, 0.05]} position={[0, 0.45, -0.45]}>
            <meshStandardMaterial color="#1e40af" />
          </Box>
        </group>
      </Float>

      {/* Fashion - Dress form */}
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <group position={[-1, 0, 0]}>
          <Cylinder args={[0.6, 0.8, 2]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#ec4899" />
          </Cylinder>
          <Sphere args={[0.3]} position={[0, 1.2, 0]}>
            <meshStandardMaterial color="#be185d" />
          </Sphere>
        </group>
      </Float>

      {/* Home & Garden - House */}
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={0.8}>
        <group position={[2, 0.5, 0]}>
          <Box args={[1.2, 1, 1.2]}>
            <meshStandardMaterial color="#16a34a" />
          </Box>
          <Box args={[1.4, 0.8, 0.1]} position={[0, 0.9, 0]} rotation={[Math.PI / 4, 0, 0]}>
            <meshStandardMaterial color="#dc2626" />
          </Box>
        </group>
      </Float>

      {/* Sports - Ball */}
      <Float speed={2.2} rotationIntensity={2} floatIntensity={1.5}>
        <Sphere args={[0.6]} position={[5, -0.5, 0]}>
          <meshStandardMaterial color="#f97316" />
        </Sphere>
      </Float>

      {/* Books - Stack */}
      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1}>
        <group position={[0, -1.5, 0]}>
          <Box args={[1, 0.2, 0.7]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#7c3aed" />
          </Box>
          <Box args={[0.8, 0.2, 0.6]} position={[0, 0.2, 0]}>
            <meshStandardMaterial color="#2563eb" />
          </Box>
          <Box args={[0.9, 0.2, 0.65]} position={[0, 0.4, 0]}>
            <meshStandardMaterial color="#059669" />
          </Box>
        </group>
      </Float>
    </group>
  );
};