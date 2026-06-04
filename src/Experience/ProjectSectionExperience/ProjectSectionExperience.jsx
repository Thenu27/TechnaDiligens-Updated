import { Environment } from '@react-three/drei'
import './ProjectSectionExperience.css'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import RobotModel from '../../Models/RobotModel/RobotModel'

const ProjectSectionExperience = ({playAnimation})=>{
    return(
         <>
            <Canvas
                camera={{ position: [0, 0, 4.1], fov: 48 }}
                gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 0.9,
                }}
            >
                {/* <color attach="background" args={['#111111']} /> */}

                <ambientLight intensity={0.4} />
                <Environment preset="city" />

                <RobotModel playAnimation={playAnimation} scale={[0.25,0.22,0.2]}/>
                {/* <OrbitControls/> */}
            </Canvas>
        
        </>       
    )
}

export default ProjectSectionExperience