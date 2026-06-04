import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MiniCompExperience from '../../Experience/MiniCompExperience/MiniCompExperience'
import './ServicesSection.css'
import MiniComputerModel from '../../Models/MiniComputerModel/MiniComputerModel'

gsap.registerPlugin(ScrollTrigger)

const ServicesSection = ()=>{
    const h1Ref = useRef(null)
    const pRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(
            h1Ref.current,
            { opacity: 0, x: -80 },
            {
                opacity: 1, x: 0, duration: 2, ease: 'power3.out',
                scrollTrigger: {
                    trigger: h1Ref.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        )
        gsap.fromTo(
            pRef.current,
            { opacity: 0, x: 80 },
            {
                opacity: 1, x: 0, duration: 2, ease: 'power3.out',
                scrollTrigger: {
                    trigger: pRef.current,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        )
    }, [])

    return(
        <div className="services-section">
          <h1 ref={h1Ref}>Web <span className="highlight-2">Experiences We</span> Craft</h1>
          <p ref={pRef}>We craft immersive digital experiences that blend stunning visuals, interactive 3D elements, and modern web technology to help brands stand out and leave a lasting impression.</p>
          
          <div className='services-container'>
            <div className='services-card'>
                <div className='service-experience'>
                    <MiniCompExperience position={[0,0.5,-1]} rotation={[0,-0.8, -0.1]} modelPath={'./mini-laptop.glb'} texturePath={'./mini-comp-baked-image-02.jpg'}/>
                </div>
                <div className ="shadow"></div>
                <button>Web Development</button>
            </div>

            <div className='services-card'>
                <div className='service-experience'>
                    <MiniCompExperience position={[0,0,-1]} rotation={[0,0,0.2]} modelPath={'./mini-square.glb'} texturePath={'./mini-square.jpg'}/>
                </div>                
                <div class ="shadow"></div>
                <button>3D Models</button>
            </div>

            <div className='services-card'>
                <div className='service-experience'>
                    <MiniCompExperience position={[0,0,-1]} rotation={[0,0,0]} modelPath={'./Contact.glb'} texturePath={'./contact-baked-image.jpg'}/>
                </div>                   
                <div className ="shadow"></div>
                <button>E Commerce</button>

            </div>

            <div className='services-card'>
                <div className='service-experience'>
                    <MiniCompExperience position={[0,0,-1]} rotation={[0,0,0]} modelPath={'./Robot-head.glb'} texturePath={'./robot-head-baked.jpg'} scale={[1.1,1.1,1.1]}/>
                </div>                      
               <div className ="shadow"></div>
                <button>Portfolios</button>              
            </div>

            <div className='services-card'>
                 <div className='service-experience'>
                    <MiniCompExperience position={[0,0,-1]} rotation={[0,0,0]} modelPath={'./mini-headset.glb'} texturePath={'./mini-headset-baked.jpg'} scale={[1.7,1.7,1.7]}/>
                </div>                 
                <div className="shadow"></div>
                <button>UI/UX</button>
            </div>

            <div className='services-card'>
                 <div className='service-experience'>
                    <MiniCompExperience position={[0,0,-1]} rotation={[0,0,0]} modelPath={'./GearSingle.glb'} texturePath={'./gear-single-baked.jpg'} />
                </div>                  
                <div className="shadow"></div>
                <button>3D Website Development</button>

            </div>                        


          </div>  
        
        </div>
    )
}

export default ServicesSection