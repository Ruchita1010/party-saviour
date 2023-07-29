import { Cylinder } from '@react-three/drei';
import { StringLights } from './modelComponents/StringLights';

export const StreamersFrame = () => {
  return (
    <>
      {/* Right side */}
      <group>
        <Cylinder args={[0.04, 0.1, 9]} position={[-20.6, 4.5, 5.2]}>
          <meshStandardMaterial color={0x000000} />
        </Cylinder>
        <group scale={10}>
          <StringLights position={[-3.22, -0.8, -6.42]} />
          <StringLights position={[-3.22, -0.8, -5.1]} />
          <StringLights position={[-3.22, -0.8, -3.78]} />
          <StringLights position={[-3.22, -0.8, -2.46]} />
          <StringLights position={[-3.22, -0.8, -1.14]} />
        </group>
        <Cylinder args={[0.04, 0.1, 9]} position={[-20.6, 4.5, -60.7]}>
          <meshStandardMaterial color={0x000000} />
        </Cylinder>
      </group>

      {/* Left side */}
      <group>
        <Cylinder args={[0.04, 0.1, 9]} position={[32.3, 4.5, 5.2]}>
          <meshStandardMaterial color={0x000000} />
        </Cylinder>
        <group scale={10}>
          <StringLights position={[2.06, -0.8, -6.42]} />
          <StringLights position={[2.06, -0.8, -5.1]} />
          <StringLights position={[2.06, -0.8, -3.78]} />
          <StringLights position={[2.06, -0.8, -2.46]} />
          <StringLights position={[2.06, -0.8, -1.14]} />
        </group>
        <Cylinder args={[0.04, 0.1, 9]} position={[32.3, 4.5, -60.6]}>
          <meshStandardMaterial color={0x000000} />
        </Cylinder>
      </group>

      {/* Back side */}
      <group scale={10} rotation={[0, Math.PI / 2, 0]}>
        <StringLights position={[4.9, -0.8, -2.4]} />
        <StringLights position={[4.9, -0.8, -1.08]} />
        <StringLights position={[4.9, -0.8, 0.24]} />
        <StringLights position={[4.9, -0.8, 1.56]} />
      </group>
    </>
  );
};
