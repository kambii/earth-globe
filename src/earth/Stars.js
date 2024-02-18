// Stars.js
import React from 'react';
import * as THREE from 'three';

const Stars = () => {
    const vertices = [];

    for (let i = 0; i < 10000; i++) {
        const x = THREE.MathUtils.randFloatSpread(1000); // random value between -500 and 500
        const y = THREE.MathUtils.randFloatSpread(1000) + 500; // random value between 0 and 1000
        const z = THREE.MathUtils.randFloatSpread(1000) - 500; // random value between -1000 and 0
        vertices.push(x, y, z);
    }

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attachObject={['attributes', 'position']}
                    count={vertices.length / 3}
                    array={new Float32Array(vertices)}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial attach="material" size={10} color={'#FFFF00'} /> {/* Changed star color to yellow */}
        </points>
    );
};

export default Stars;