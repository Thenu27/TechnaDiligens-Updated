import HeroSection from "../../Sections/HeroSection/HeroSection"
import ServicesSection from "../../Sections/ServicesSection/ServicesSection"
import ProjectSection from "../../Sections/ProjectSection/ProjectSection"
import './LandingPage.css'
import ThreeDSection from "../../Sections/ThreeDSection/ThreeDSection"
import TestimonialSection from "../../Sections/TestimonialSection/TestimonialSection"

const LandingPage = ()=>{
    
    return(
        <div className="landing-page">
            <HeroSection/>   
            <ServicesSection/>    
            <div className="background">
              <ProjectSection/>    
              <ThreeDSection/>  
              <TestimonialSection/>          
            </div>     
        </div>
    )
}

export default LandingPage