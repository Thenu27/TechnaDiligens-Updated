import { useProgress } from "@react-three/drei"
import LoadingScreen from "../LoadingScreen/LoadingScreen"
import { useState, useEffect } from "react"

const publicFiles = [
  "/arrow-baked.jpg",
  "/arrow-left.png",
  "/arrow-right.png",
  "/Arrow.glb",
  "/Circles.glb",
  "/contact-baked-image.jpg",
  "/Contact.glb",
  "/gear-single-baked.jpg",
  "/gears-baked.jpg",
  "/GearSingle.glb",
  "/Logo.jpg",
  "/mini-comp-baked-image-02.jpg",
  "/mini-headset-baked.jpg",
  "/mini-headset.glb",
  "/mini-laptop.glb",
  "/mini-square.glb",
  "/mini-square.jpg",
  "/robot-head-baked.jpg",
  "/Robot-head.glb",
  "/Techna-bg.png",
  "/techna-orange-robot.jpg",
  "/Techna-robot-new-2.glb",
  "/Techna-robot-new.glb"
]

const LoadingManager = ({ children }) => {
  const [publicProgress, setPublicProgress] = useState(0)
  const [publicLoaded, setPublicLoaded] = useState(false)

  const { progress: threeProgress } = useProgress()

  useEffect(() => {
    let loadedCount = 0

    const loadFile = (src) => {
      return new Promise((resolve) => {
        const file = src.toLowerCase()

        if (
          file.endsWith(".jpg") ||
          file.endsWith(".jpeg") ||
          file.endsWith(".png") ||
          file.endsWith(".webp")
        ) {
          const img = new Image()
          img.src = src
          img.onload = resolve
          img.onerror = resolve
        } else {
          fetch(src)
            .then(() => resolve())
            .catch(() => resolve())
        }
      }).then(() => {
        loadedCount += 1
        const percent = Math.round((loadedCount / publicFiles.length) * 100)
        setPublicProgress(percent)
      })
    }

    Promise.all(publicFiles.map(loadFile)).then(() => {
      setPublicLoaded(true)
    })
  }, [])

  const threeLoaded = threeProgress === 100
  const ready = publicLoaded && threeLoaded

  const totalProgress = Math.round((publicProgress + threeProgress) / 2)

  return (
    <>
      {!ready && <LoadingScreen progress={totalProgress} />}

      <div className={ready ? "site show" : "site hide"}>
        {children}
      </div>
    </>
  )
}

export default LoadingManager