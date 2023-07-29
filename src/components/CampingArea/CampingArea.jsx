import { Campfire } from './modelComponents/Campfire';
import { Tent } from './modelComponents/Tent';
import { usePropsContext } from '../../context/PropsContext';

export const CampingArea = () => {
  const { props } = usePropsContext();
  return (
    <>
      <Tent
        scale={2}
        position={[-6, 1.3, -50]}
        rotation={[0, Math.PI / 4.5, 0]}
        visible={!props.tent_1.isSnatched}
      />
      <Tent
        scale={2}
        position={[0, 1.3, -52]}
        visible={!props.tent_2.isSnatched}
      />
      <Tent
        scale={2}
        position={[6, 1.3, -50]}
        rotation={[0, -Math.PI / 4.5, 0]}
        visible={!props.tent_3.isSnatched}
      />
      <Campfire
        scale={2}
        position={[0, 0.5, -44]}
        visible={!props.campfire.isSnatched}
      />
    </>
  );
};
