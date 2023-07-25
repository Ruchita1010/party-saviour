import { OrbitControls } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export const Backyard = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <OrbitControls />
      {/* Ground */}
      <RigidBody colliders={false} type="fixed">
        <mesh
          scale={[10, 10, 10]}
          position={[0, -0.2, 0]}
          rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color={0x136d15} />
        </mesh>
      </RigidBody>
    </>
  );
};
