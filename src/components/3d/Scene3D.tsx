import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
}

export const Scene3D = ({ 
  children, 
  className = "", 
  cameraPosition = [0, 0, 8],
  enableControls = false 
}: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />
          
          {/* Environment */}
          <Environment preset="city" />
          
          {/* Controls */}
          {enableControls && (
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          )}
          
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};