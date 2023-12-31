/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 -T src/Table.glb
Author: Voyage (https://sketchfab.com/vrsns_voyage)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-party-tables-f5fa3e560d0540cc8e4f013d51da067a
Title: Low poly Party Tables
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import PartyTableModel from '../../assets/models/PartyTable.glb';

export function PartyTable(props) {
  const { nodes, materials } = useGLTF(PartyTableModel);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.WoodTable} />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.TableCloth}
        scale={[1.68, 1, 0.99]}
      />
    </group>
  );
}

useGLTF.preload(PartyTableModel);
