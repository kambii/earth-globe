// Sunset.js
import React from 'react';
import * as THREE from 'three';

const Sunset = () => {
    const gradient = new THREE.MeshBasicMaterial({
        color: 'orange', // Color of the sunset
        side: THREE.BackSide // Render only the back side of the geometry
    });

    return (
        <mesh position={[0, 0, -100]} material={gradient}>
            <sphereGeometry args={[100, 32, 32]} />
        </mesh>
    );
};

export default Sunset;