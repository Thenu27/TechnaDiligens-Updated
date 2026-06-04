import { Environment, Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import * as THREE from "three"
import RobotModel from "../../Models/RobotModel/RobotModel"
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen"

const LandingExperience = ({ playAnimation,topContentRef,lowContentRef,scale }) => {
  return (
    <div className="experience-wrapper">

      {/* <LoadingScreen topContentRef={topContentRef} lowContentRef={lowContentRef}/> */}
        <Canvas
          camera={{ position: [0, 0, 4.2], fov: 45 }}
          gl={{
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: 0.9,
          }}
        >
        <Suspense fallback={null}>

          <ambientLight intensity={0.4} />

            <Environment preset="city" />
            <RobotModel playAnimation={playAnimation} scale={scale} />
            <Preload all/>
        </Suspense>

        </Canvas>        
    </div>
  )
}

export default LandingExperience