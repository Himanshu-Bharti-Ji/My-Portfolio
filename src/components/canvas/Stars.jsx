import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";
import { memo } from "react";

const StyledCanvasWrapper = styled.div`
    width: 100%;
    height: auto;
    position: absolute;
    inset: 0;
`;

const Stars = memo((props) => {
    const ref = useRef();
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(2000), { radius: 1.2 })
    );

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
});

const styledStarCanvas = () => {
    return (
        <StyledCanvasWrapper>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={<div style={{ color: 'white' }}>Loading...</div>}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </StyledCanvasWrapper>
    )
}

export default styledStarCanvas
