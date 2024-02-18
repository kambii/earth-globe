// Earth.js
// Earth.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Earth = () => {
    const earthRef = useRef();

    useFrame(() => {
        earthRef.current.rotation.y += 0.005;
    });

    return (
        <mesh ref={earthRef}>
            <sphereGeometry args={[2.5, 500, 500]} />
            <meshStandardMaterial
                map={new THREE.TextureLoader().load('/eer.jpg')} // Image path in public directory
                side={THREE.DoubleSide} // Render only the front side of the geometry
            />
        </mesh>
    );
};

export default Earth;

