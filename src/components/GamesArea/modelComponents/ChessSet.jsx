/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -T ChessSet.glb
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import ChessSetModel from '../models/ChessSet.glb';

export function ChessSet(props) {
  const { nodes, materials } = useGLTF(ChessSetModel);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.chesspiece_queen_Cylinder013.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.chesspiece_king_Cylinder012.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Bishop003_Cylinder011.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Bishop002_Cylinder011.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Pawn015_Cylinder010.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Pawn014_Cylinder010.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Pawn013_Cylinder010.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Pawn012_Cylinder010.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Pawn011_Cylinder010.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Pawn010_Cylinder010.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Pawn009_Cylinder010.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.White_Pawn008_Cylinder010.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.chesspiece_knight003_Cylinder009.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.chesspiece_knight002_Cylinder009.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.chesspiece_rook003_Cylinder008.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.chesspiece_rook002_Cylinder008.geometry}
        material={materials.Black_Piece}
      />
      <mesh
        geometry={nodes.Chessboard_Surround_Plane.geometry}
        material={materials.Chessboard_Surround}
      />
      <mesh
        geometry={nodes.chesspiece_rook000_Cylinder007.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.chesspiece_rook001_Cylinder007.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.chesspiece_knight000_Cylinder006.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.chesspiece_knight001_Cylinder006.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Pawn007_Cylinder.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Pawn006_Cylinder.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Pawn005_Cylinder.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Pawn004_Cylinder.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Pawn003_Cylinder.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Pawn002_Cylinder.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Pawn001_Cylinder.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Pawn_Cylinder.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Bishop001_Cylinder001.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.White_Bishop_Cylinder001.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.chesspiece_king001_Cylinder002.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes.chesspiece_queen001_Cylinder005.geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes['Chessboard001_Grid002-Mesh'].geometry}
        material={materials.white_tile}
      />
      <mesh
        geometry={nodes['Chessboard001_Grid002-Mesh_1'].geometry}
        material={materials.Black_Piece}
      />
    </group>
  );
}

useGLTF.preload(ChessSetModel);
