import React from 'react';
import { Canvas } from '@react-three/fiber';
import Earth from './earth/Earth';
import Stars from "./earth/Stars";

const Scene = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Canvas style={{ width: '50vw', height: '50vh' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars />
                <Earth />
            </Canvas>
        </div>
    );
};

export default Scene;


