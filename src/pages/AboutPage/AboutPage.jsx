import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AboutExperience from '../../Experience/AboutExperience/AboutExperience'
import ContactExperience from '../../Experience/ContactExperience/ContactExperience'
import GrowthExperience from '../../Experience/GrowthExperience/GrowthExperience'
import './AboutPage.css'

gsap.registerPlugin(ScrollTrigger)

const AboutPage = () => {
  const headingRef = useRef(null)
  const mainExperienceRef = useRef(null)
  const aboutTextsRef = useRef([])
  const growthContainerRef = useRef(null)
  const relationContainerRef = useRef(null)

  useEffect(() => {
  window.scrollTo(0, 0)
}, [])  

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Page heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      )

      // 3D model experience
      gsap.fromTo(
        mainExperienceRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: mainExperienceRef.current, start: 'top 80%' },
        }
      )

      // About text blocks — staggered
      gsap.fromTo(
        aboutTextsRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: aboutTextsRef.current[0],
            start: 'top 85%',
          },
        }
      )

      // Growth section
      gsap.fromTo(
        growthContainerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: growthContainerRef.current, start: 'top 80%' },
        }
      )

      // Relations section
      gsap.fromTo(
        relationContainerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: relationContainerRef.current, start: 'top 80%' },
        }
      )

    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="project-page about-page">
      <h1 ref={headingRef}>
        The Journey <span className='highlight-2'>Behind</span>{' '}
        <span className='highlight-2'>Techna</span>Diligens
      </h1>

      <div className='about-main-container'>
        <div className='main-experience' ref={mainExperienceRef}>
          <AboutExperience
            position={[0, 1, 0]}
            rotation={[0, 0, 0]}
            modelPath={'./Circles.glb'}
            texturePath={'./gears-baked.jpg'}
            scale={[0.6, 0.6, 0.6]}
          />
        </div>

{[
  {
    className: 'about-text-1',
    text: 'We have always been passionate about web development and fascinated by the endless possibilities of 3D technology.'
  },
  {
    className: 'about-text-1 about-text-2',
    text: 'In 2024, we started our web agency with a vision to create modern, engaging, and impactful digital experiences.'
  },
  {
    className: 'about-text-1 about-text-3',
    text: 'Travel Jaya became our first project, and we successfully delivered a professional platform for the travel industry.'
  },
  {
    className: 'about-text-1 about-text-4',
    text: 'As our skills grew, we explored 3D modeling and discovered new ways to bring websites to life.'
  },
  {
    className: 'about-text-1 about-text-5',
    text: 'We began integrating custom 3D models into websites, creating unique and interactive user experiences.'
  },
  {
    className: 'about-text-1 about-text-6',
    text: 'Today, we continue to innovate by combining web development, 3D design, and modern technology for our clients.'
  }
].map((item, i) => (
  <div
    key={i}
    className={item.className}
    ref={el => (aboutTextsRef.current[i] = el)}
  >
    <p>{item.text}</p>
  </div>
))}
        
      </div>

      <div className='growth-container' ref={growthContainerRef}>
        <div className='growth-content'>
          <h1>Growth <span className='highlight-2'>and Progress</span></h1>
          <p>
            We are excited about the future and committed to continuous growth. As we expand our skills in web development, 3D design, and interactive experiences, we look forward to new opportunities and are eager to see where this journey takes us.
          </p>
        </div>
        <div className='growth-experience'>
          <GrowthExperience
            position={[0.5, 0.4, 0]}
            rotation={[0, -0.25, 0]}
            modelPath={'./Arrow.glb'}
            texturePath={'./arrow-baked.jpg'}
            scale={[1.6, 1.6, 1.6]}
          />
        </div>
      </div>

      <div className='growth-container relation-container' ref={relationContainerRef}>
        <div className='growth-content relation-content'>
          <h1>Building <span className='highlight-2'>Lasting Relation</span>ships</h1>
          <p>
  We believe strong relationships are the foundation of every successful project. Our goal is to make every client feel comfortable, supported, and confident throughout the entire process while delivering solutions they can trust.

          </p>
        </div>
        <div className='growth-experience about-page-contact-experience'>
          <ContactExperience
            position={[0, 0, 0]}
            rotation={[0, -0.25, 0]}
            modelPath={'./Contact.glb'}
            texturePath={'./contact-baked-image.jpg'}
            scale={[0.9, 0.9, 0.9]}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage