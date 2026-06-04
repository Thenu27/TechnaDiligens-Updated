import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import RobotModel from '../../Models/RobotModel/RobotModel'
import ContactModel from '../../Models/ContactModel/ContactModel'
import GeartModel from '../../Models/GearModel/GearModel'

const AboutExperience = ({position,rotation,modelPath,texturePath,scale})=>{
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

                <GeartModel position={position} rotation={rotation} scale={scale} modelPath={modelPath} texturePath={texturePath}/>
                {/* <OrbitControls/> */}
            </Canvas>
        
        </>       
    )
}

export default AboutExperience