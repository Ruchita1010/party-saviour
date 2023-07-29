import { Campfire } from './modelComponents/Campfire';
import { Tent } from './modelComponents/Tent';

export const CampingArea = () => {
  return (
    <>
      <Tent scale={2} position={[0, 1.3, -52]} />
      <Tent
        scale={2}
        position={[6, 1.3, -50]}
        rotation={[0, -Math.PI / 4.5, 0]}
      />
      <Tent
        scale={2}
        position={[-6, 1.3, -50]}
        rotation={[0, Math.PI / 4.5, 0]}
      />
      <Campfire scale={2} position={[0, 0.5, -44]} />
    </>
  );
};
