import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ContactExperience from '../../Experience/ContactExperience/ContactExperience'
import './ContactPage.css'

gsap.registerPlugin(ScrollTrigger)

const ContactPage = () => {
  const headingRef = useRef(null)
  const descRef = useRef(null)
  const experienceRef = useRef(null)
  const infoItemsRef = useRef([])

  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      )

      // Description
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: descRef.current, start: 'top 85%' },
        }
      )

      // 3D model — scale + fade
      gsap.fromTo(
        experienceRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: experienceRef.current, start: 'top 80%' },
        }
      )

      // Contact info items — staggered slide from right
      gsap.fromTo(
        infoItemsRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: infoItemsRef.current[0],
            start: 'top 85%',
          },
        }
      )

    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="project-page contact-page">
      <h1 ref={headingRef}>
        Contact <span className="highlight-2">Us</span>
      </h1>

      <p ref={descRef}>
        Get in touch with us to discuss your project, ask questions, or explore
        how we can bring your ideas to life.
      </p>

      <div className='contact-container'>
        <div className='contact-page-experience' ref={experienceRef}>
          <ContactExperience
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={[0.85, 0.85, 0.85]}
            modelPath={'./Contact.glb'}
            texturePath={'./contact-baked-image.jpg'}
          />
        </div>

        <div className='contact-page-info-container'>
          {[
            'technadiligens@gmail.com',
            '(+94) 766411765',
            'Monday - Saturday: 9AM - 8PM',
          ].map((info, i) => (
            <div
              key={i}
              className='contact-page-info'
              ref={el => (infoItemsRef.current[i] = el)}
            >
              {info}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactPage