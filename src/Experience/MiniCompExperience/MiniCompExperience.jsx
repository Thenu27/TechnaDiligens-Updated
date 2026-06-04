import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import * as THREE from 'three'
import MiniComputerModel from "../../Models/MiniComputerModel/MiniComputerModel"
import { mod } from "three/tsl"

const MiniCompExperience = ({position,rotation,modelPath,texturePath,scale})=>{
    return(
        <>
        <Canvas
            camera={{ position: [0, 0, 4], fov: 45 }}
            gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.9,
            }}
        >
            {/* <color attach="background" args={['#111111']} /> */}

            <ambientLight intensity={0.4} />
            <Environment preset="city" />

            <MiniComputerModel position={position} rotation={rotation} modelPath={modelPath} texturePath={texturePath} scale={scale} />
            {/* <OrbitControls/> */}
        </Canvas>
        
        </>
    )
}

export default MiniCompExperience