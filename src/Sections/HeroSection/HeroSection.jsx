import { Suspense,useRef, useState,useEffect } from 'react'
import LandingExperience from '../../Experience/LandingExperience/LandingExperience'
import './HeroSection.css'
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen'

const HeroSection = () => {

    const topContentRef = useRef()
    const lowContentRef = useRef()

    const [robotScale, setRobotScale] = useState([0.2, 0.2, 0.2]);

    useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth <600){
        setRobotScale([0.22, 0.21, 0.21]);
        }
        else if (window.innerWidth < 768) {
        setRobotScale([0.16, 0.16, 0.16]);
        } else if (window.innerWidth < 1200) {
        setRobotScale([0.19, 0.19, 0.19]);
        } else {
        setRobotScale([0.21, 0.2, 0.21]);
        }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div className="hero-section">

            <div className='landing-experience'>
                <LandingExperience
                    playAnimation={false}
                    scale={robotScale}
                />
            </div>

            <div className='top-content' >
                <h1>WHERE <span className='highlight'>CODE MEETS</span> REALITY</h1>
                <p>At TechnaDiligens, we combine creativity, code, and 3D artistry to craft futuristic web experiences</p>
            </div>

            <div className='low-content' >
                <p>Crafting visually striking and interactive web experiences powered by creativity, innovation, and 3D technology.</p>
                <h1>Immersive <span className='highlight'>Experiences</span></h1>
            </div>

        </div>
    )
}

export default HeroSection