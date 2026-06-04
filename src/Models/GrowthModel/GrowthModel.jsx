import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const GrowthModel = ({ position, rotation, scale, modelPath, texturePath }) => {
  const groupRef = useRef()

  const { scene, animations } = useGLTF(modelPath)
  const { actions } = useAnimations(animations, groupRef)

  const bakedTexture = useTexture(texturePath)

  bakedTexture.colorSpace = THREE.SRGBColorSpace
  bakedTexture.flipY = false

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          map: bakedTexture,
        })
      }
    })
  }, [scene, bakedTexture])

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      action.reset()
      action.setLoop(THREE.LoopRepeat)
      action.play()
    })
  }, [actions])

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

export default GrowthModel