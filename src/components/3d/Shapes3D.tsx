import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  const morphRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      // Minimal slow rotation only
      groupRef.current.rotation.y = time * 0.05;
    }

    if (morphRef.current) {
      morphRef.current.children.forEach((child, i) => {
        // Only gentle scale breathing effect
        child.scale.setScalar(1 + Math.sin(time * 1 + i) * 0.1);
      });
    }
  });

  return (
    <group>
      <group ref={groupRef}>
        {/* Enhanced floating spheres with trails */}
        <Float speed={2.5} rotationIntensity={2} floatIntensity={3}>
          <mesh position={[-4, 2, 0]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial 
              color="#8B5CF6" 
              emissive="#5B21B6"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
          {/* Glowing trail */}
          <mesh position={[-4, 2, 0]} scale={[1.3, 1.3, 1.3]}>
            <sphereGeometry args={[0.8, 16, 16]} />
            <meshStandardMaterial 
              color="#8B5CF6" 
              transparent
              opacity={0.3}
              emissive="#8B5CF6"
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
        
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <mesh position={[4, -1, -2]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshStandardMaterial 
              color="#06B6D4" 
              emissive="#0891B2"
              emissiveIntensity={0.3}
              roughness={0.1}
              metalness={0.9}
            />
          </mesh>
        </Float>
        
        <Float speed={3} rotationIntensity={3} floatIntensity={1.5}>
          <mesh position={[0, 3, -3]}>
            <torusGeometry args={[0.8, 0.3, 16, 32]} />
            <meshStandardMaterial 
              color="#F59E0B" 
              emissive="#D97706"
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>
        
        <Float speed={2.2} rotationIntensity={2} floatIntensity={3}>
          <mesh position={[-2, -2, -1]}>
            <coneGeometry args={[0.6, 1.5, 8]} />
            <meshStandardMaterial 
              color="#EF4444" 
              emissive="#DC2626"
              emissiveIntensity={0.4}
            />
          </mesh>
        </Float>
        
        {/* Morphing geometric shapes */}
        <group ref={morphRef}>
          <Float speed={3.5} rotationIntensity={1} floatIntensity={1.5}>
            <mesh position={[2, 1, 1]}>
              <icosahedronGeometry args={[0.4]} />
              <meshStandardMaterial 
                color="#10B981" 
                emissive="#059669"
                emissiveIntensity={0.6}
              />
            </mesh>
          </Float>
          
          <Float speed={2.8} rotationIntensity={1.5} floatIntensity={2.2}>
            <mesh position={[-3, 0, 2]}>
              <octahedronGeometry args={[0.5]} />
              <meshStandardMaterial 
                color="#8B5CF6" 
                emissive="#7C3AED"
                emissiveIntensity={0.5}
              />
            </mesh>
          </Float>

          <Float speed={3.2} rotationIntensity={2.5} floatIntensity={1.8}>
            <mesh position={[1, -3, 0]}>
              <dodecahedronGeometry args={[0.6]} />
              <meshStandardMaterial 
                color="#F472B6" 
                emissive="#EC4899"
                emissiveIntensity={0.4}
              />
            </mesh>
          </Float>
        </group>

        {/* Additional dynamic elements */}
        {Array.from({ length: 20 }, (_, i) => (
          <Float key={i} speed={1 + Math.random() * 2} rotationIntensity={3} floatIntensity={2}>
            <mesh 
              position={[
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 8
              ]}
            >
              <sphereGeometry args={[0.05 + Math.random() * 0.15]} />
              <meshStandardMaterial 
                color={`hsl(${i * 18}, 70%, 60%)`}
                emissive={`hsl(${i * 18}, 70%, 40%)`}
                emissiveIntensity={0.7}
              />
            </mesh>
          </Float>
        ))}
      </group>
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
      // Keep product showcase stationary
      groupRef.current.rotation.y = 0;
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