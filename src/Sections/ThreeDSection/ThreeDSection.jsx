import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ThreeDSection.css'

gsap.registerPlugin(ScrollTrigger)

const ThreeDSection = () => {
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

    return (
        <div className="ThreeDSection">
            <div className="three-heading-container">
                <h1 ref={h1Ref}>Explore <span className="highlight-2">Our </span>3D <span className="highlight-2">Models</span></h1>
                <p ref={pRef}>Discover interactive, web-ready 3D models crafted to bring depth and personality to modern digital experiences. Each model is designed to create engaging and memorable user interactions.</p>
            </div>
            <div className='three-model-container'>

                <div className='model-page-container'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/D8-WkeaUvUY?si=o55htBPRuCZ0jG9a&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0" title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
                </div>
                <div className='model-page-container'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/t730FQgXF2w?si=kxPXRJ6b2KU8324t&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0" title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
                </div>
                <div className='model-page-container'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZCiucLSqU9Y?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0" title="YouTube video player" frameBorder="0" allow="autoplay; encrypted-media"></iframe>
                </div>

            </div>
        </div>
    )
}

export default ThreeDSection