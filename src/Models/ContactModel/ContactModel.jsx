import { useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import * as THREE from "three"

const ContactModel = ({ position, rotation,scale,modelPath,texturePath }) => {
  const { scene } = useGLTF(modelPath)
  const bakedTexture = useTexture(texturePath)

  const groupRef = useRef()

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

export default ContactModel