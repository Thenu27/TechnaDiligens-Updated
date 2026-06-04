import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ProjectSection.css'
import ProjectSectionExperience from '../../Experience/ProjectSectionExperience/ProjectSectionExperience.jsx'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Brand Immersion — NovaBuild",
    description: "A fully interactive 3D product showcase built for NovaBuild's launch campaign. Featuring real-time lighting, animated transitions, and a seamless scroll-driven experience.",
    videoId: "https://www.youtube.com/embed/uI1k6FJ2YXw?mute=1"
  },
  {
    title: "Digital Experience — LumisAI",
    description: "An award-winning landing page for LumisAI combining WebGL particle systems, smooth parallax scrolling, and bold editorial typography to drive conversions.",
    videoId:"https://www.youtube.com/embed/uAecu_nq9GA?mute=1"
  },
  {
    title: "3D Commerce — StackForge",
    description: "An immersive e-commerce experience where users can rotate, zoom, and customize products in real-time before purchase — reducing return rates by 40%.",
    videoId: "https://www.youtube.com/embed/uI1k6FJ2YXw?mute=1"
  },
  {
    title: "Motion Branding — BrightEdge",
    description: "A motion-first website redesign for BrightEdge featuring GSAP-powered scroll animations, 3D logo reveals, and a cinematic hero section.",
    videoId: "https://www.youtube.com/embed/uI1k6FJ2YXw?mute=1"
  }
];

const ProjectSection = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(null);

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

  const goTo = (direction) => {
    if (sliding) return;
    setSliding(direction);
    setTimeout(() => {
      setCurrent(prev =>
        direction === 'right'
          ? (prev + 1) % projects.length
          : (prev - 1 + projects.length) % projects.length
      );
      setSliding(null);
    }, 350);
  };

  const p = projects[current];

  return (
    <div className='project-section'>
      <h1 ref={h1Ref}>Explore <span className='highlight-2'>Our Recent</span> Projects</h1>

      <div className='project-inner-section'>
        <div className='robot-section'>
          <ProjectSectionExperience playAnimation={true} />
        </div>

        <div className='project-container'>
          <p ref={pRef}>Explore some of our latest digital creations, built with creativity, precision, and modern technology. From immersive 3D experiences to professional business websites</p>

          <div className={`project-section-link ${sliding ? `proj-slide-out-${sliding}` : 'proj-slide-in'}`}>
            <iframe
              width="100%"
              height="100%"
              src={p.videoId}
              title={p.title}
              frameBorder="0"
            />
          </div>

          {/* Title + controls row */}
          <div className='project-controls'>
            <div className='project-arrows'>
              <div className='proj-arrow' onClick={() => goTo('left')}>
                <img src='/arrow-left.png' alt="Previous" />
              </div>
              <div className='proj-arrow' onClick={() => goTo('right')}>
                <img src='/arrow-right.png' alt="Next" />
              </div>
            </div>

            <div className='project-dots'>
              {projects.map((_, i) => (
                <span key={i} className={`proj-dot ${i === current ? 'proj-dot-active' : ''}`} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectSection;