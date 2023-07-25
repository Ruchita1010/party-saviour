import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Backyard } from './components/Backyard';
import './App.css';

function App() {
  return (
    <Canvas>
      <color attach="background" args={['#141414']} />
      <Suspense fallback={null}>
        <Physics>
          <Backyard />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default App;
