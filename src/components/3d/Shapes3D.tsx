import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, Box, Torus, Cone } from '@react-three/drei';
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
        <Sphere args={[0.8]} position={[-4, 2, 0]}>
          <meshStandardMaterial color="#8B5CF6" />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <Box args={[1.2, 1.2, 1.2]} position={[4, -1, -2]}>
          <meshStandardMaterial color="#06B6D4" />
        </Box>
      </Float>
      
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[0.8, 0.3, 16, 32]} position={[0, 3, -3]}>
          <meshStandardMaterial color="#F59E0B" />
        </Torus>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2.5}>
        <Cone args={[0.6, 1.5]} position={[-2, -2, -1]}>
          <meshStandardMaterial color="#EF4444" />
        </Cone>
      </Float>
      
      {/* Additional smaller shapes */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.3]} position={[2, 1, 1]}>
          <meshStandardMaterial color="#10B981" />
        </Sphere>
      </Float>
      
      <Float speed={2.2} rotationIntensity={1} floatIntensity={1.8}>
        <Box args={[0.5, 0.5, 0.5]} position={[-3, 0, 2]}>
          <meshStandardMaterial color="#8B5CF6" />
        </Box>
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
      <Text
        ref={textRef}
        position={position}
        fontSize={0.8}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        font="/fonts/helvetiker_regular.typeface.json"
      >
        {text}
      </Text>
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
          <Box args={[2, 0.1, 1.4]}>
            <meshStandardMaterial color="#1f2937" />
          </Box>
          <Box args={[1.8, 1.2, 0.05]} position={[0, 0.65, -0.6]}>
            <meshStandardMaterial color="#111827" />
          </Box>
          <Box args={[1.6, 1, 0.02]} position={[0, 0.66, -0.59]}>
            <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.3} />
          </Box>
        </group>
      </Float>

      {/* Phone representation */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
        <group position={[2, 1, 0]}>
          <Box args={[0.8, 1.6, 0.1]}>
            <meshStandardMaterial color="#111827" />
          </Box>
          <Box args={[0.7, 1.4, 0.02]} position={[0, 0, 0.06]}>
            <meshStandardMaterial color="#22c55e" emissive="#16a34a" emissiveIntensity={0.2} />
          </Box>
        </group>
      </Float>

      {/* Headphones representation */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
        <group position={[0, -1.5, 1]}>
          <Torus args={[1, 0.1, 8, 32]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color="#6b7280" />
          </Torus>
          <Sphere args={[0.3]} position={[-0.8, 0, 0]}>
            <meshStandardMaterial color="#1f2937" />
          </Sphere>
          <Sphere args={[0.3]} position={[0.8, 0, 0]}>
            <meshStandardMaterial color="#1f2937" />
          </Sphere>
        </group>
      </Float>
    </group>
  );
};