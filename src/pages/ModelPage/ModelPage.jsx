import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ModelPage.css';

gsap.registerPlugin(ScrollTrigger);

const models = {
  "Gym Equipment": [
    {
      title: "Dumbbell",
      videoId: "https://www.youtube.com/embed/G83Qpcyc61Y?si=tuMbP0a4UQe0rvSo&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=G83Qpcyc61Y",
      desc: "A detailed low-poly dumbbell model optimized for web projects, fitness apps, interactive experiences, and modern 3D visualizations."
    },
    {
      title: "Tredmill",
      videoId: "https://www.youtube.com/embed/8WO2RDELUjY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
      desc: "A realistic treadmill model designed for fitness platforms, virtual gyms, product showcases, and immersive web experiences."
    },
  ],
  "Electronics": [
    {
      title: "Smart Watch",
      videoId: "https://www.youtube.com/embed/t730FQgXF2w?si=kxPXRJ6b2KU8324t&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
      desc: "A sleek smartwatch model featuring clean geometry, ideal for product presentations, technology websites, and interactive demos."
    },
    {
      title: "Computer",
      videoId: "https://www.youtube.com/embed/ZCiucLSqU9Y?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
      desc: "A compact computer model created for modern workspaces, technology scenes, educational content, and web-based applications."
    },
    {
      title: "Laptop",
      videoId: "https://www.youtube.com/embed/D8-WkeaUvUY?si=o55htBPRuCZ0jG9a&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
      desc: "A detailed laptop model optimized for digital experiences, office environments, technology showcases, and interactive projects."
    },
    {
      title: "Television",
      videoId: "https://www.youtube.com/embed/7FkiSXtFnv4?si=GCD0y0BCm-2SGKD-",
      desc: "A vintage television model with retro styling, perfect for nostalgic scenes, creative projects, and immersive environments."
    },
  ],
};

const categories = ["All", ...Object.keys(models)];

const ModelPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const headingRef = useRef(null);
  const descRef = useRef(null);
  const filtersRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const filteredModels =
    activeCategory === "All"
      ? Object.values(models).flat()
      : models[activeCategory];

  // Heading, description, filters — fire once on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: descRef.current, start: 'top 85%' },
        }
      );

      gsap.fromTo(
        filtersRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.25,
          scrollTrigger: { trigger: filtersRef.current, start: 'top 90%' },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  // Cards — re-run whenever the filtered list changes
  useEffect(() => {
    if (!cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.querySelectorAll('.model-card');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
        }
      );
    });

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <div className='project-page model-page'>
      <h1 ref={headingRef}>
        Explore <span className='highlight-2'>Our</span> 3D{' '}
        <span className='highlight-2'>Models</span>
      </h1>

      <p ref={descRef}>
        We create impactful digital projects that combine immersive 3D visuals,
        modern design, and interactive web experiences to showcase innovation,
        creativity, and powerful brand storytelling.
      </p>

      <div className='model-filters' ref={filtersRef}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'filter-btn-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <h3 className='filter-title'>{activeCategory}</h3>
      <div className='underline'></div>

      <div className='model-container' ref={cardsContainerRef}>
        {filteredModels.map((model, i) => (
          <div className='model-card' key={i}>
            <iframe
              width="100%"
              height="50%"
              src={model.videoId}
              title={model.title}
              frameBorder="0"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            <h4>{model.title}</h4>
            <p>{model.desc}</p>
            <button>See More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelPage;