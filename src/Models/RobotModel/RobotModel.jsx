import { useGLTF, useTexture, useAnimations } from "@react-three/drei"
import { useEffect, useMemo, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import "./RobotModel.css"

const RobotModel = ({ playAnimation, scale }) => {
  const groupRef = useRef()
  const headRef = useRef()
  const mouseMovedRef = useRef(false)

  const [isMobile, setIsMobile] = useState(false)

  const { scene, animations } = useGLTF("./Techna-robot-new-2.glb")

  const clonedScene = useMemo(() => scene.clone(true), [scene])

  const bakedTexture = useTexture("./techna-orange-robot.jpg")

  const clonedTexture = useMemo(() => {
    const texture = bakedTexture.clone()
    texture.colorSpace = THREE.SRGBColorSpace
    texture.flipY = false
    texture.needsUpdate = true
    return texture
  }, [bakedTexture])

  const { actions } = useAnimations(animations, groupRef)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    clonedScene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({
          map: clonedTexture,
        })
      }
    })

    headRef.current = clonedScene.getObjectByName("Head")
  }, [clonedScene, clonedTexture])

  useEffect(() => {
    if (!actions) return

    const shouldPlayAnimation = playAnimation || isMobile
    const firstAction = Object.values(actions)[2]

    if (shouldPlayAnimation && firstAction) {
      firstAction.reset()
      firstAction.play()
    } else if (firstAction) {
      firstAction.stop()
    }
  }, [actions, playAnimation, isMobile])

  useFrame((state) => {
    const shouldPlayAnimation = playAnimation || isMobile

    // If animation is playing, stop head mouse movement
    if (shouldPlayAnimation) return

    if (Math.abs(state.mouse.x) > 0.01 || Math.abs(state.mouse.y) > 0.01) {
      mouseMovedRef.current = true
    }

    if (!mouseMovedRef.current) return

    if (headRef.current) {
      headRef.current.rotation.y +=
        (state.mouse.x * 0.5 - headRef.current.rotation.y) * 0.1

      headRef.current.rotation.x +=
        (-state.mouse.y * 0.3 - headRef.current.rotation.x) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <primitive
        object={clonedScene}
        position={[0, 0.15, 0]}
        scale={scale}
      />
    </group>
  )
}

useGLTF.preload("./Techna-robot-new-2.glb");
useTexture.preload("/techna-orange-robot.jpg")


export default RobotModel