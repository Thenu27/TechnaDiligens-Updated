import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProjectPage.css'

gsap.registerPlugin(ScrollTrigger)

const ProjectPage = () => {
  const headingRef = useRef(null)
  const descRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      descRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.15,
        scrollTrigger: {
          trigger: descRef.current,
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 85%',
        },
      }
    )
  }, [])

  return (
    <div className="project-page">
      <h1 ref={headingRef}>
        Explore <span className='highlight-2'>Our</span> Projects
      </h1>

      <p ref={descRef}>
        We create impactful digital projects that combine immersive 3D visuals,
        modern design, and interactive web experiences to showcase innovation,
        creativity, and powerful brand storytelling.
      </p>

      <div className='project-page-container'>
        <div
          className='model-card project'
          ref={el => (cardsRef.current[0] = el)}
        >
          <iframe
            width="100%"
            height="50%"
            src="https://www.youtube.com/embed/uI1k6FJ2YXw?mute=1"
            title="YouTube video player"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <h4>Travel Jaya</h4>

          <p>
            A travel agency offering Sri Lanka's finest destinations, curated
            tour packages, and memorable experiences.
          </p>

          <button
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=uI1k6FJ2YXw',
                '_blank'
              )
            }
          >
            See More
          </button>
        </div>

        <div
          className='model-card project'
          ref={el => (cardsRef.current[1] = el)}
        >
          <iframe
            width="100%"
            height="50%"
            src="https://www.youtube.com/embed/uAecu_nq9GA?mute=1"
            title="YouTube video player"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <h4>Monali Traders</h4>

          <p>
            An established electrical supplier offering imported products,
            accessories, and reliable industry solutions.
          </p>

          <button
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=uAecu_nq9GA',
                '_blank'
              )
            }
          >
            See More
          </button>
        </div>

        <div
          className='model-card project'
          ref={el => (cardsRef.current[2] = el)}
        >
          <iframe
            width="100%"
            height="50%"
            src="https://www.youtube.com/embed/9JxHTJo89Sw?mute=1"
            title="YouTube video player"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />

          <h4>Prime Teeth</h4>

          <p>
            A trusted dental clinic offering advanced treatments, expert care,
            and patient-focused services.
          </p>

          <button
            onClick={() =>
              window.open(
                'https://www.youtube.com/watch?v=9JxHTJo89Sw',
                '_blank'
              )
            }
          >
            See More
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage