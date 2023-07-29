import { Stool } from './modelComponents/Stool';
import { UniqueTable } from './modelComponents/UniqueTable';
import { PoolTable } from './modelComponents/PoolTable';
import { AboveGroundPool } from './modelComponents/AboveGroundPool';
import { Dart } from './modelComponents/Dart';
import { Trampoline } from './modelComponents/Trampoline';
import { Table } from './modelComponents/Table';
import { ChessSet } from './modelComponents/ChessSet';
import { Jenga } from './modelComponents/Jenga';

export const GamesArea = () => {
  return (
    <>
      <UniqueTable scale={0.8} position={[7, 0, -2]} />
      <UniqueTable scale={0.8} position={[7, 0, -4]} />
      <UniqueTable scale={0.8} position={[7, 0, -6]} />
      <UniqueTable scale={0.8} position={[7, 0, -8]} />
      <UniqueTable scale={0.8} position={[8.5, 0, -2]} />
      <UniqueTable scale={0.8} position={[10, 0, -2]} />
      <UniqueTable scale={0.8} position={[11.5, 0, -2]} />
      <UniqueTable scale={0.8} position={[13, 0, -2]} />
      <UniqueTable scale={0.8} position={[14.5, 0, -2]} />

      <PoolTable
        scale={1.6}
        position={[11, 0, -4.2]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <PoolTable
        scale={1.6}
        position={[16, 0, -4.2]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <AboveGroundPool
        scale={[3, 2, 3]}
        position={[25, 2, -10]}
        rotation={[0, Math.PI, 0]}
      />
      <Trampoline scale={[0.6, 0.3, 0.6]} position={[12, 0, -14]} />
      <group position={[23, 0, -28]}>
        <Table scale={0.12} rotation={[0, Math.PI / 2, 0]} />
        <ChessSet scale={0.014} position={[0.5, 0.95, 0]} />
        <ChessSet scale={0.014} position={[-0.5, 0.95, 0]} />
        <Stool scale={0.08} position={[0.5, 0, -1.2]} />
        <Stool scale={0.08} position={[-0.5, 0, -1.2]} />
        <Stool scale={0.08} position={[0.5, 0, 1.2]} />
        <Stool scale={0.08} position={[-0.5, 0, 1.2]} />
      </group>
      <group position={[23, 0, -23]}>
        <Table scale={0.12} rotation={[0, Math.PI / 2, 0]} />
        <ChessSet scale={0.014} position={[0.5, 0.95, 0]} />
        <ChessSet scale={0.014} position={[-0.5, 0.95, 0]} />
        <Stool scale={0.08} position={[0.5, 0, -1.2]} />
        <Stool scale={0.08} position={[-0.5, 0, -1.2]} />
        <Stool scale={0.08} position={[0.5, 0, 1.2]} />
        <Stool scale={0.08} position={[-0.5, 0, 1.2]} />
      </group>
      <Dart position={[28, 1.6, -18]} rotation={[0, Math.PI, 0]} />
      <Dart position={[28, 1.6, -16]} rotation={[0, Math.PI, 0]} />
      <group position={[16, 0, -20]}>
        <Table scale={0.12} />
        <Jenga scale={5} position={[0, 0.9, 0.8]} />
        <Jenga scale={5} position={[0, 0.9, -0.6]} />
        <Stool scale={0.08} position={[0, 0, -1.5]} />
        <Stool scale={0.08} position={[0, 0, 1.5]} />
      </group>
      <group position={[16, 0, -26]}>
        <Table scale={0.12} />
        <Jenga scale={5} position={[0, 0.9, 0.8]} />
        <Jenga scale={5} position={[0, 0.9, -0.6]} />
        <Stool scale={0.08} position={[0, 0, -1.5]} />
        <Stool scale={0.08} position={[0, 0, 1.5]} />
      </group>
    </>
  );
};
