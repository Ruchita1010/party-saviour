import { AboveGroundPool } from './modelComponents/AboveGroundPool';
import { ChessSet } from './modelComponents/ChessSet';
import { Dart } from './modelComponents/Dart';
import { Jenga } from './modelComponents/Jenga';
import { PoolTable } from './modelComponents/PoolTable';
import { Table } from './modelComponents/Table';
import { Trampoline } from './modelComponents/Trampoline';
import { Stool } from './modelComponents/Stool';
import { UniqueTable } from './modelComponents/UniqueTable';
import { usePropsContext } from '../../context/PropsContext';

export const GamesArea = () => {
  const { props } = usePropsContext();
  return (
    <>
      <UniqueTable
        scale={0.8}
        position={[7, 0, -2]}
        visible={!props.uniqueTable_1.isSnatched}
      />
      <UniqueTable
        scale={0.8}
        position={[7, 0, -4]}
        visible={!props.uniqueTable_2.isSnatched}
      />
      <UniqueTable
        scale={0.8}
        position={[7, 0, -6]}
        visible={!props.uniqueTable_3.isSnatched}
      />
      <UniqueTable
        scale={0.8}
        position={[7, 0, -8]}
        visible={!props.uniqueTable_4.isSnatched}
      />
      <UniqueTable
        scale={0.8}
        position={[8.5, 0, -2]}
        visible={!props.uniqueTable_5.isSnatched}
      />
      <UniqueTable
        scale={0.8}
        position={[10, 0, -2]}
        visible={!props.uniqueTable_6.isSnatched}
      />
      <UniqueTable
        scale={0.8}
        position={[11.5, 0, -2]}
        visible={!props.uniqueTable_7.isSnatched}
      />
      <UniqueTable
        scale={0.8}
        position={[13, 0, -2]}
        visible={!props.uniqueTable_8.isSnatched}
      />
      <UniqueTable
        scale={0.8}
        position={[14.5, 0, -2]}
        visible={!props.uniqueTable_9.isSnatched}
      />

      <PoolTable
        scale={1.6}
        position={[11, 0, -4.2]}
        rotation={[0, Math.PI / 2, 0]}
        visible={!props.poolTable_1.isSnatched}
      />
      <PoolTable
        scale={1.6}
        position={[16, 0, -4.2]}
        rotation={[0, Math.PI / 2, 0]}
        visible={!props.poolTable_2.isSnatched}
      />
      <AboveGroundPool
        scale={[3, 2, 3]}
        position={[25, 2, -10]}
        rotation={[0, Math.PI, 0]}
        visible={!props.aboveGroundPool.isSnatched}
      />
      <Trampoline
        scale={[0.6, 0.3, 0.6]}
        position={[12, 0, -14]}
        visible={!props.trampoline.isSnatched}
      />
      <Dart
        position={[28, 1.6, -18]}
        rotation={[0, Math.PI, 0]}
        visible={!props.dart_1.isSnatched}
      />
      <Dart
        position={[28, 1.6, -16]}
        rotation={[0, Math.PI, 0]}
        visible={!props.dart_2.isSnatched}
      />

      {/* Chess setup */}
      <group position={[23, 0, -28]} visible={!props.chessSetup_1.isSnatched}>
        <Table scale={0.12} rotation={[0, Math.PI / 2, 0]} />
        <ChessSet scale={0.014} position={[0.5, 0.95, 0]} />
        <ChessSet scale={0.014} position={[-0.5, 0.95, 0]} />
        <Stool scale={0.08} position={[0.5, 0, -1.2]} />
        <Stool scale={0.08} position={[-0.5, 0, -1.2]} />
        <Stool scale={0.08} position={[0.5, 0, 1.2]} />
        <Stool scale={0.08} position={[-0.5, 0, 1.2]} />
      </group>
      <group position={[23, 0, -23]} visible={!props.chessSetup_2.isSnatched}>
        <Table scale={0.12} rotation={[0, Math.PI / 2, 0]} />
        <ChessSet scale={0.014} position={[0.5, 0.95, 0]} />
        <ChessSet scale={0.014} position={[-0.5, 0.95, 0]} />
        <Stool scale={0.08} position={[0.5, 0, -1.2]} />
        <Stool scale={0.08} position={[-0.5, 0, -1.2]} />
        <Stool scale={0.08} position={[0.5, 0, 1.2]} />
        <Stool scale={0.08} position={[-0.5, 0, 1.2]} />
      </group>

      {/* Jenga setup */}
      <group position={[16, 0, -20]} visible={!props.jengaSetup_1.isSnatched}>
        <Table scale={0.12} />
        <Jenga scale={5} position={[0, 0.9, 0.8]} />
        <Jenga scale={5} position={[0, 0.9, -0.6]} />
        <Stool scale={0.08} position={[0, 0, -1.5]} />
        <Stool scale={0.08} position={[0, 0, 1.5]} />
      </group>
      <group position={[16, 0, -26]} visible={!props.jengaSetup_2.isSnatched}>
        <Table scale={0.12} />
        <Jenga scale={5} position={[0, 0.9, 0.8]} />
        <Jenga scale={5} position={[0, 0.9, -0.6]} />
        <Stool scale={0.08} position={[0, 0, -1.5]} />
        <Stool scale={0.08} position={[0, 0, 1.5]} />
      </group>
    </>
  );
};
