import { BenchCushion } from './modelComponents/BenchCushion';
import { BistroSet } from './modelComponents/BistroSet';
import { CandyStall } from './modelComponents/CandyStall';
import { CrossTable } from './modelComponents/CrossTable';
import { usePropsContext } from '../../context/PropsContext';

export const DiningArea = () => {
  const { props } = usePropsContext();
  return (
    <>
      <BistroSet
        scale={0.035}
        position={[-20, 0, 5]}
        visible={!props.bistroSet_1.isSnatched}
      />
      <BistroSet
        scale={0.035}
        position={[-25, 0, 5]}
        visible={!props.bistroSet_2.isSnatched}
      />
      <BistroSet
        scale={0.035}
        position={[-20, 0, -1]}
        visible={!props.bistroSet_3.isSnatched}
      />
      <BistroSet
        scale={0.035}
        position={[-25, 0, -1]}
        visible={!props.bistroSet_4.isSnatched}
      />

      <CandyStall
        scale={0.5}
        position={[-14, 0, -28]}
        visible={!props.candyStall.isSnatched}
      />

      <BenchCushion
        scale={2.6}
        position={[-8, 0, -16.65]}
        visible={!props.benchCushion_back_1.isSnatched}
      />
      <CrossTable
        scale={2}
        position={[-7.6, 0, -16]}
        visible={!props.crossTable_1.isSnatched}
      />
      <BenchCushion
        scale={2.6}
        position={[-8, 0, -15]}
        visible={!props.benchCushion_front_1.isSnatched}
      />

      <BenchCushion
        scale={2.6}
        position={[-12.9, 0, -16.65]}
        visible={!props.benchCushion_back_2.isSnatched}
      />
      <CrossTable
        scale={2}
        position={[-12.6, 0, -16]}
        visible={!props.crossTable_2.isSnatched}
      />
      <BenchCushion
        scale={2.6}
        position={[-12.9, 0, -15]}
        visible={!props.benchCushion_front_2.isSnatched}
      />

      <BenchCushion
        scale={2.6}
        position={[-8, 0, -22.65]}
        visible={!props.benchCushion_back_3.isSnatched}
      />
      <CrossTable
        scale={2}
        position={[-7.6, 0, -22]}
        visible={!props.crossTable_3.isSnatched}
      />
      <BenchCushion
        scale={2.6}
        position={[-8, 0, -21]}
        visible={!props.benchCushion_front_3.isSnatched}
      />

      <BenchCushion
        scale={2.6}
        position={[-12.9, 0, -22.65]}
        visible={!props.benchCushion_back_4.isSnatched}
      />
      <CrossTable
        scale={2}
        position={[-12.6, 0, -22]}
        visible={!props.crossTable_4.isSnatched}
      />
      <BenchCushion
        scale={2.6}
        position={[-12.9, 0, -21]}
        visible={!props.benchCushion_front_4.isSnatched}
      />
    </>
  );
};
