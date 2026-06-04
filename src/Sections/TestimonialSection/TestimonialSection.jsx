import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TestimonialSection.css'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    name: "Prime Teeth",
    src: "/iconLogo.png",
    text: "From start to finish, the experience was smooth and enjoyable. The website was beautifully designed and highly functional, but the custom 3D elements made it stand out. The 3D components added a unique and memorable touch that impressed both our team and our customers."
  },
  {
    name: "Travel Jaya",
    src: "/TravelJLogoRounded-min.png",
    text: "Working with TechnaDiligens was a fantastic experience. Their customer service was excellent, communication was clear throughout the project, and they were always willing to help. The final website exceeded our expectations and perfectly represented our brand"
  },
  {
    name: "Monali Traders",
    src: "/MonaliTraders.png",
    text: "The team was friendly, professional, and incredibly easy to work with. They listened to our requirements carefully and delivered a high-quality website that looks modern and performs flawlessly. We couldn't be happier with the result."
  }
  // {
  //   name: "James Carter",
  //   src: "JC",
  //   text: "Top-tier execution from start to finish. The interactive elements they built gave us a serious competitive edge and our conversion rate has never been higher."
  // }
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(null);

  const h1Ref = useRef(null)
  const pRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
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
        opacity: 1, x: 0, duration: 1, ease: 'power3.out',
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
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
      setSliding(null);
    }, 350);
  };

  const t = testimonials[current];

  return (
    <div className='testimonial-section'>
      <h1 ref={h1Ref}>Testimonials <span className='highlight-2'>Section</span></h1>
      <p ref={pRef}>We build lasting relationships through trust, quality, and exceptional service, delivering digital solutions that exceed expectations and help our clients achieve their goals with confidence.</p>

      <div className='testimonial-container'>

        <div className={`testimonial ${sliding ? `slide-out-${sliding}` : 'slide-in'}`}>
          <div className='testimonial-heading'>
            <div className='testimonial-heading-profile'>
              {/* <span className='profile-initials'>{t.initials}</span> */}
              <img src={t.src}/>
            </div>
            <div className='testimonial-heading-title'>
              <span className='profile-name'>{t.name}</span>
              <span className='profile-role'>{t.role}</span>
            </div>
          </div>
          <p>{t.text}</p>
        </div>

        <div className="testimonial-controls-row">
          <div className='arrow-left' onClick={() => goTo('left')}>
            <img src='/arrow-left.png' alt="Previous" />
          </div>
          <div className='arrow-right' onClick={() => goTo('right')}>
            <img src='/arrow-right.png' alt="Next" />
          </div>
        </div>

        <div className='testimonial-dots'>
          {testimonials.map((_, i) => (
            <span key={i} className={`dot ${i === current ? 'dot-active' : ''}`} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default TestimonialSection;