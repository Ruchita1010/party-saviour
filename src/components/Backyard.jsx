import { useState, useEffect } from 'react';
import { degToRad } from 'three/src/math/MathUtils';
import { OrbitControls } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Player } from './Player';
import { Snatcher } from './modelComponents/Snatcher';
import { DanceFloor } from './modelComponents/DanceFloor';
import { PartyTable } from './modelComponents/PartyTable';
import { DiningArea } from './DiningArea/DiningArea';
import { GamesArea } from './GamesArea/GamesArea';
import { CampingArea } from './CampingArea/CampingArea';
import { StreamersFrame } from './StreamersFrame';
import { usePropsContext } from '../context/PropsContext';

export const Backyard = () => {
  const { props, setProps } = usePropsContext();
  const [isSnatcherVisible, setSnatcherVisibility] = useState(false);
  const [snatcherPosition, setSnatcherPosition] = useState([0, 1.5, 0]);

  useEffect(() => {
    let snatcherDisappearTimer;
    const snatcherSpawnTimer = setTimeout(() => {
      const availableProps = Object.entries(props).filter(
        ([, prop]) => !prop.isSnatched
      );
      if (availableProps.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableProps.length);
        const [propName, propValue] = availableProps[randomIndex];
        const propPosition = propValue.position;
        setSnatcherVisibility(true);
        setSnatcherPosition([
          propPosition[0],
          1.5 + propPosition[1],
          propPosition[2],
        ]);
        snatcherDisappearTimer = setTimeout(() => {
          setProps((prevProps) => ({
            ...prevProps,
            [propName]: { ...propValue, isSnatched: true },
          }));
          setSnatcherVisibility(false);
        }, 8000);
      } else {
        setSnatcherVisibility(false);
      }
    }, 3000);

    return () => {
      clearTimeout(snatcherDisappearTimer);
      clearTimeout(snatcherSpawnTimer);
    };
  }, [props]);

  return (
    <>
      <hemisphereLight args={[0xfff6cc, 0xee4b2b, 1]} />
      <rectAreaLight args={[0xffffff, 0.5, 100, 100]} position={[0, 0, 15]} />
      <OrbitControls makeDefault maxDistance={8} maxPolarAngle={degToRad(85)} />
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
      <Snatcher
        scale={0.3}
        position={snatcherPosition}
        visible={isSnatcherVisible}
      />

      <StreamersFrame />
      <PartyTable
        position={[-4, 0, -32]}
        visible={!props.partyTable_1.isSnatched}
      />
      <PartyTable
        position={[0, 0, -32]}
        visible={!props.partyTable_2.isSnatched}
      />
      <PartyTable
        position={[4, 0, -32]}
        visible={!props.partyTable_3.isSnatched}
      />
      <DanceFloor
        position={[0, 1, -9]}
        visible={!props.danceFloor_1.isSnatched}
      />
      <DanceFloor
        position={[0, 1, -15]}
        visible={!props.danceFloor_2.isSnatched}
      />
      <DanceFloor
        position={[0, 1, -21]}
        visible={!props.danceFloor_3.isSnatched}
      />
      <DiningArea />
      <GamesArea />
      <CampingArea />
    </>
  );
};
