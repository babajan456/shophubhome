import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const Hero3D = () => {
  const titleRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const waveRef = useRef<THREE.Group>(null);
  const geometryRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (titleRef.current) {
      titleRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
      titleRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
      titleRef.current.position.y = 1 + Math.sin(time * 0.8) * 0.3;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.1;
      particlesRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }

    if (waveRef.current) {
      waveRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(time * 2 + i * 0.5) * 0.5;
        child.rotation.z = time * 0.5 + i;
      });
    }

    if (geometryRef.current) {
      geometryRef.current.rotation.y = time * 0.1;
      geometryRef.current.children.forEach((child, i) => {
        const offset = i * Math.PI * 0.5;
        child.position.x = Math.cos(time * 0.5 + offset) * 3;
        child.position.z = Math.sin(time * 0.5 + offset) * 3;
        child.rotation.y = time * (1 + i * 0.1);
      });
    }
  });

  // Enhanced particle system
  const particleCount = 150;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const color = new THREE.Color();
      color.setHSL(Math.random(), 0.8, 0.6);
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, []);

  return (
    <group>
      {/* Enhanced particle system with colors */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.08} 
          vertexColors
          transparent 
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Animated wave elements */}
      <group ref={waveRef}>
        {Array.from({ length: 8 }, (_, i) => (
          <Float key={i} speed={2 + i * 0.5} rotationIntensity={1} floatIntensity={2}>
            <mesh position={[Math.cos(i * Math.PI / 4) * 6, 0, Math.sin(i * Math.PI / 4) * 6]}>
              <sphereGeometry args={[0.2, 8, 8]} />
              <meshStandardMaterial 
                color={`hsl(${i * 45}, 70%, 60%)`}
                emissive={`hsl(${i * 45}, 70%, 30%)`}
                emissiveIntensity={0.5}
              />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Rotating geometric shapes */}
      <group ref={geometryRef}>
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[2, 0.3, 16, 32]} />
          <meshStandardMaterial 
            color="#ff6b6b" 
            emissive="#ff3030" 
            emissiveIntensity={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>
        <mesh position={[3, 0, 0]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial 
            color="#4ecdc4" 
            emissive="#2ba39a" 
            emissiveIntensity={0.4}
          />
        </mesh>
        <mesh position={[-3, 0, 0]}>
          <dodecahedronGeometry args={[0.6]} />
          <meshStandardMaterial 
            color="#ffe66d" 
            emissive="#ffcc00" 
            emissiveIntensity={0.3}
          />
        </mesh>
        <mesh position={[0, 0, 3]}>
          <icosahedronGeometry args={[0.7]} />
          <meshStandardMaterial 
            color="#a8e6cf" 
            emissive="#70d49e" 
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Enhanced 3D Title */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.2}>
        <group ref={titleRef} position={[0, 1, 0]}>
          <mesh>
            <boxGeometry args={[4.5, 1.2, 0.4]} />
            <meshStandardMaterial 
              color="#ffffff" 
              emissive="#8B5CF6" 
              emissiveIntensity={0.4}
              roughness={0.1}
              metalness={0.8}
            />
          </mesh>
          {/* Glowing outline */}
          <mesh scale={[1.1, 1.1, 1.1]}>
            <boxGeometry args={[4.5, 1.2, 0.4]} />
            <meshStandardMaterial 
              color="#8B5CF6" 
              transparent
              opacity={0.3}
              emissive="#8B5CF6"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>
      </Float>

      {/* Enhanced subtitle with animation */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <group position={[0, -0.5, 0]}>
          <mesh>
            <boxGeometry args={[3.2, 0.4, 0.15]} />
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.9}
              emissive="#06B6D4"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      </Float>

      {/* Additional floating elements */}
      {Array.from({ length: 12 }, (_, i) => (
        <Float key={`extra-${i}`} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={1.5}>
          <mesh 
            position={[
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 10
            ]}
          >
            <sphereGeometry args={[0.1 + Math.random() * 0.2]} />
            <meshStandardMaterial 
              color={`hsl(${Math.random() * 360}, 80%, 60%)`}
              emissive={`hsl(${Math.random() * 360}, 80%, 30%)`}
              emissiveIntensity={0.6}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};