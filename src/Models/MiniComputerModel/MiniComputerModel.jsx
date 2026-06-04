import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState} from "react"
import * as THREE from "three"

const MiniComputerModel = ({ position, rotation, modelPath,texturePath,scale }) => {
  const { scene } = useGLTF(modelPath)
  const bakedTexture = useTexture(texturePath)
  const [robotScale, setRobotScale] = useState([0.2, 0.2, 0.2]);

  const groupRef = useRef()

  bakedTexture.colorSpace = THREE.SRGBColorSpace
  bakedTexture.flipY = false

  // useEffect(()=>{
  //   if
  // })

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          map: bakedTexture,
        })
      }
    })
  }, [scene, bakedTexture])

  useFrame((state, delta) => {
    groupRef.current.rotation.y += delta * 0.5
  })

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <primitive object={scene} />
    </group>
  )
}

export default MiniComputerModel