import { useState, useEffect } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import ModelPage from './pages/ModelPage/ModelPage'
import Footer from './components/Footer/Footer'
import ContactPage from './pages/ContactPage/ContactPage'
import AboutPage from './pages/AboutPage/AboutPage'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'

function App() {

//   const publicFiles = [
//     "/arrow-baked.jpg",
//     "/arrow-left.png",
//     "/arrow-right.png",
//     "/Arrow.glb",
//     "/Circles.glb",
//     "/contact-baked-image.jpg",
//     "/Contact.glb",
//     "/gear-single-baked.jpg",
//     "/gears-baked.jpg",
//     "/GearSingle.glb",
//     "/Logo.jpg",
//     "/mini-comp-baked-image-02.jpg",
//     "/mini-headset-baked.jpg",
//     "/mini-headset.glb",
//     "/mini-laptop.glb",
//     "/mini-square.glb",
//     "/mini-square.jpg",
//     "/robot-head-baked.jpg",
//     "/Robot-head.glb",
//     "/Techna-bg.png",
//     "/techna-orange-robot.jpg",
//     "/Techna-robot-new-2.glb",
//     "/Techna-robot-new.glb"
//   ]

//   const [progress, setProgress] = useState(0)
//   const [loaded, setLoaded] = useState(false)

//   useEffect(() => {
//     let loadedCount = 0

//     const loadFile = (src) => {
//       return new Promise((resolve) => {
//         const file = src.toLowerCase()

//         if (
//           file.endsWith(".jpg") ||
//           file.endsWith(".jpeg") ||
//           file.endsWith(".png") ||
//           file.endsWith(".webp")
//         ) {
//           const img = new Image()
//           img.src = src
//           img.onload = resolve
//           img.onerror = resolve
//         } else {
//           fetch(src)
//             .then(() => resolve())
//             .catch(() => resolve())
//         }
//       }).then(() => {
//         loadedCount += 1
//         const percent = Math.round(
//           (loadedCount / publicFiles.length) * 100
//         )
//         setProgress(percent)
//       })
//     }

//     Promise.all(publicFiles.map(loadFile)).then(() => {
//       setLoaded(true)
//     })
//   }, [])

//   if (!loaded) {
//   return (
//     <div className="loading-screen">
//       <h1><LoadingScreen progress={progress}/></h1>
//     </div>
//   )
// }
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/projects' element={<ProjectPage/>}/>
        <Route path='/models' element={<ModelPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </div>   
  )
}

export default App
