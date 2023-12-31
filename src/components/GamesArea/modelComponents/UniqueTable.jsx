/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -T ./UniqueTable.glb
Author: ivarkramer12 (https://sketchfab.com/ivarkramer12)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/table-design-e87e5baf83604e71afd9fd997ebd5bc7
Title: Table design
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import UniqueTableModel from '../models/UniqueTable.glb';

export function UniqueTable(props) {
  const { nodes, materials } = useGLTF(UniqueTableModel);
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={55.45}>
          <mesh
            geometry={nodes.Cylinder002_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            geometry={nodes.Cylinder002_Material002_0.geometry}
            material={materials['Material.002']}
          />
          <mesh
            geometry={nodes.Cylinder002_Material003_0.geometry}
            material={materials['Material.003']}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(UniqueTableModel);
