import { OrbitControls } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Player } from './Player';
import { DanceFloor } from './modelComponents/DanceFloor';
import { PartyTable } from './modelComponents/PartyTable';
import { DiningArea } from './DiningArea/DiningArea';
import { GamesArea } from './GamesArea/GamesArea';
import { CampingArea } from './CampingArea/CampingArea';
import { StreamersFrame } from './StreamersFrame';

export const Backyard = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <OrbitControls />
      {/* Ground */}
      <RigidBody
        type="fixed"
        scale={10}
        position={[5, 0, -35]}
        rotation={[-Math.PI / 2, 0, 0]}>
        <mesh>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color={0x136d15} />
        </mesh>
      </RigidBody>
      <Player boundary={{ x1: 130, x2: 130, z1: 10, z2: 220 }} />

      <StreamersFrame />
      <PartyTable position={[0, 0, -32]} />
      <PartyTable position={[4, 0, -32]} />
      <PartyTable position={[-4, 0, -32]} />
      <DanceFloor position={[0, 1, -15]} />
      <DanceFloor position={[0, 1, -21]} />
      <DanceFloor position={[0, 1, -9]} />
      <DiningArea />
      <GamesArea />
      <CampingArea />
    </>
  );
};
