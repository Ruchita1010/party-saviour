import { OrbitControls } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export const Backyard = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <OrbitControls />
      {/* Ground */}
      <RigidBody
        type="fixed"
        scale={[30, 30, 30]}
        position={[0, 0, -120]}
        rotation={[-Math.PI / 2, 0, 0]}>
        <mesh>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color={0x136d15} />
        </mesh>
      </RigidBody>
    </>
  );
};
