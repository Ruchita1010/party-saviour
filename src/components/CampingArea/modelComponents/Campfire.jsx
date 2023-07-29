/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -T Campfire.glb
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import CampfireModel from '../models/Campfire.glb';

export function Campfire(props) {
  const { nodes, materials } = useGLTF(CampfireModel);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes['Campfire_Cylinder009-Mesh'].geometry}
        material={materials.Stone}
      />
      <mesh
        geometry={nodes['Campfire_Cylinder009-Mesh_1'].geometry}
        material={materials.Wood}
      />
    </group>
  );
}

useGLTF.preload(CampfireModel);