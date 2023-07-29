/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -T Tent.glb
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import TentModel from '../models/Tent.glb';

export function Tent(props) {
  const { nodes, materials } = useGLTF(TentModel);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes['Tent_Cube001-Mesh'].geometry}
        material={materials.Tent_M}
      />
      <mesh
        geometry={nodes['Tent_Cube001-Mesh_1'].geometry}
        material={materials.Tent_S}
      />
    </group>
  );
}

useGLTF.preload(TentModel);
