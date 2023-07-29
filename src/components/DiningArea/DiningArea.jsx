import { BenchCushion } from './modelComponents/BenchCushion';
import { BistroSet } from './modelComponents/BistroSet';
import { CandyStall } from './modelComponents/CandyStall';
import { CrossTable } from './modelComponents/CrossTable';

export const DiningArea = () => {
  return (
    <>
      <BistroSet scale={0.035} position={[-20, 0, 5]} />
      <BistroSet scale={0.035} position={[-25, 0, 5]} />
      <BistroSet scale={0.035} position={[-20, 0, -1]} />
      <BistroSet scale={0.035} position={[-25, 0, -1]} />

      <CandyStall scale={0.5} position={[-14, 0, -28]} />

      <BenchCushion scale={2.6} position={[-8, 0, -16.65]} />
      <CrossTable scale={2} position={[-7.6, 0, -16]} />
      <BenchCushion scale={2.6} position={[-8, 0, -15]} />

      <BenchCushion scale={2.6} position={[-12.9, 0, -16.65]} />
      <CrossTable scale={2} position={[-12.6, 0, -16]} />
      <BenchCushion scale={2.6} position={[-12.9, 0, -15]} />

      <BenchCushion scale={2.6} position={[-8, 0, -22.65]} />
      <CrossTable scale={2} position={[-7.6, 0, -22]} />
      <BenchCushion scale={2.6} position={[-8, 0, -21]} />

      <BenchCushion scale={2.6} position={[-12.9, 0, -22.65]} />
      <CrossTable scale={2} position={[-12.6, 0, -22]} />
      <BenchCushion scale={2.6} position={[-12.9, 0, -21]} />
    </>
  );
};
