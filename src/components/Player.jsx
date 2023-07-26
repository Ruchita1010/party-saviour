import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { Amy } from './modelComponents/Amy';
import { useInput } from '../hooks/useInput';

export const Player = ({ boundary }) => {
  const { x1, x2, z1, z2 } = boundary;
  const [rotation, setRotation] = useState([0, Math.PI, 0]);
  const [activeAction, setActiveAction] = useState('Idle_Standing');
  const { forward, backward, left, right } = useInput(setActiveAction);

  const checkBoundary = (axis, currentPosition) => {
    let newPosition = 0;
    if (axis === 'X') {
      newPosition = currentPosition + (right ? 0.2 : left ? -0.2 : 0);
      return newPosition > x1 || newPosition < -x2
        ? currentPosition
        : newPosition;
    }
    if (axis === 'Z') {
      newPosition = currentPosition + (forward ? -0.2 : backward ? 0.2 : 0);
      return newPosition > z1 || newPosition < -z2
        ? currentPosition
        : newPosition;
    }
  };

  const targetRef = useRef(null);

  useFrame((state) => {
    const currentX = targetRef.current.position.x;
    const currentZ = targetRef.current.position.z;
    const newX = checkBoundary('X', currentX);
    const newZ = checkBoundary('Z', currentZ);
    // Only update if the player has moved
    if (newX !== currentX || newZ !== currentZ) {
      targetRef.current.position.x = newX;
      targetRef.current.position.z = newZ;
      const angle = Math.atan2(left - right, forward - backward) + Math.PI;
      setRotation([0, angle, 0]);
    }
    state.camera.lookAt(targetRef.current.position);
    state.camera.updateProjectionMatrix();
  });

  return (
    <group ref={targetRef}>
      <Amy
        activeAction={activeAction}
        position={[0, 0, 4]}
        rotation={rotation}
      />
      <PerspectiveCamera makeDefault position={[0, 2, 7]} />
    </group>
  );
};
