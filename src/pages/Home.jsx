// src/pages/Home.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GridCard from '../components/GridCard'
import '../styles/home.css'

//  Cinematic Section Component 
const CinematicSection = ({ sectionIndex, activeIndex, data }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [animStarted, setAnimStarted] = useState(false)
  const isActive = activeIndex === sectionIndex

  useEffect(() => {
    if (isActive) {
      setAnimStarted(true)
      if (data.video) {
        const timer = setTimeout(() => setShowVideo(true), data.videoDelay || 2200)
        return () => clearTimeout(timer)
      }
    } else {
      // Reset when leaving section
      setShowVideo(false)
      setAnimStarted(false)
    }
  }, [isActive, data.video, data.videoDelay])

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 50 },
    animate: animStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
    transition: { delay, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  })

  return (
    <section className="cin-section">
      {/* Background Image */}
      <div className="cin-media">
        <img
          src={data.image}
          alt=""
          className={`cin-bg${showVideo ? ' hide' : ''}`}
        />
        {data.video && (
          <video
            className={`cin-video${showVideo ? ' show' : ''}`}
            src={data.video}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        <div className="cin-overlay" />
      </div>

      {/* Content */}
      <div className="cin-content">
        {data.eyebrow && (
          <motion.p className="cin-eyebrow" {...fadeUp(0.2)}>
            {data.eyebrow}
          </motion.p>
        )}
        {data.subtitle && (
          <motion.h2 className="cin-subtitle" {...fadeUp(0.3)}>
            {data.subtitle}
          </motion.h2>
        )}
        <motion.h1 className="cin-title" {...fadeUp(0.5)}>
          {data.title}
        </motion.h1>
        {data.tagline && (
          <motion.p className="cin-tagline" {...fadeUp(0.7)}>
            {data.tagline}
          </motion.p>
        )}
        <motion.div {...fadeUp(0.9)}>
          <button className="cin-btn">{data.cta}</button>
        </motion.div>
      </div>
    </section>
  )
}

//  Explore Further Section 
const ExploreSection = ({ sectionIndex, activeIndex, scrollRef }) => {
  const isActive = activeIndex === sectionIndex

  const exploreCards = [
    {
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb6b7d6?q=80&w=2070&auto=format',
      title: 'THE HISTORY OF COACHBUILD',
      description: 'A visionary commission redefining automotive luxury through innovative design and unparalleled craftsmanship.',
      link: '/bespoke/project-nightingale'
    },
    {
      image: 'https://images.unsplash.com/photo-1631295868223-63228b10f8e4?q=80&w=2070&auto=format',
      title: 'ROLLS-ROYCE ARCADIA DROPTAIL',
      description: 'Named after a realm in Ancient Greek mythology, the third Droptail commission - a haven of tranquillity.',
      link: '/bespoke/coachbuild-collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1566473965994-3fa105e4bf44?q=80&w=2070&auto=format',
      title: 'INSPIRING GREATNESS',
      description: 'A confluence of exceptional and extraordinary narratives, as revealed by Rolls-Royce.',
      link: '/inspiring-greatness'
    }
  ]

  return (
    <section className="cin-section explore-section" ref={scrollRef}>
      <div className="explore-inner">
        <motion.div
          className="explore-header"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="explore-eyebrow">CONTINUE YOUR JOURNEY</p>
          <h2 className="explore-title">EXPLORE FURTHER</h2>
          <div className="explore-divider" />
        </motion.div>

        <div className="grid-container">
          {exploreCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
            >
              <GridCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

//  Home Page 
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const isScrolling = useRef(false)
  const containerRef = useRef(null)
  const exploreRef = useRef(null)

  const cinematicSections = [
    {
      eyebrow: 'PROJECT',
      title: 'NIGHTINGALE',
      tagline: 'A COACHBUILD COLLECTION',
      cta: 'DISCOVER MORE',
      image: 'https://images.unsplash.com/photo-1631295868223-63228b10f8e4?q=80&w=2070&auto=format',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4', // replace with real video
      videoDelay: 2200,
    },
    {
      title: 'COACHBUILD COLLECTION',
      subtitle: 'THE ART OF THE UNIQUE',
      cta: 'DISCOVER NOW',
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7fa0ac7?q=80&w=2070&auto=format',
      video: 'https://www.w3schools.com/html/movie.mp4', // replace with real video
      videoDelay: 1800,
    },
    {
      subtitle: 'AN INTRODUCTION TO POSSIBILITY',
      title: 'THE WORLD OF BESPOKE',
      cta: 'DISCOVER NOW',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format',
      // no video - static section
    },
  ]

  // Total sections: 3 cinematic(0,1,2) + Explore(3)
  const TOTAL_SECTIONS = cinematicSections.length + 1

  const goToSection = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, TOTAL_SECTIONS - 1))
    setActiveIndex(clamped)
    window.scrollTo({ top: window.innerHeight * clamped, behavior: 'smooth' })
  }, [TOTAL_SECTIONS])

  useEffect(() => {
    const EXPLORE_INDEX = cinematicSections.length

    const handleWheel = (e) => {
      const dir = e.deltaY > 0 ? 1 : -1

      // If we're on the explore section, let it scroll internally first
      if (activeIndex === EXPLORE_INDEX && exploreRef.current) {
        const el = exploreRef.current
        const atTop = el.scrollTop === 0
        const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight

        // Only snap away when hitting the boundary
        if ((dir === -1 && atTop) || (dir === 1 && atBottom)) {
          e.preventDefault()
          if (isScrolling.current) return
          isScrolling.current = true
          const next = Math.max(0, Math.min(activeIndex + dir, TOTAL_SECTIONS - 1))
          setActiveIndex(next)
          window.scrollTo({ top: window.innerHeight * next, behavior: 'smooth' })
          setTimeout(() => { isScrolling.current = false }, 900)
        }
        // Otherwise let the native scroll happen inside the explore section
        return
      }

      // All other sections: snap behavior
      e.preventDefault()
      if (isScrolling.current) return
      isScrolling.current = true
      setActiveIndex((prev) => {
        const next = Math.max(0, Math.min(prev + dir, TOTAL_SECTIONS - 1))
        window.scrollTo({ top: window.innerHeight * next, behavior: 'smooth' })
        return next
      })
      setTimeout(() => { isScrolling.current = false }, 900)
    }

    const handleKey = (e) => {
      if (e.key === 'ArrowDown') goToSection(activeIndex + 1)
      if (e.key === 'ArrowUp') goToSection(activeIndex - 1)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKey)
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKey)
    }
  }, [activeIndex, goToSection, TOTAL_SECTIONS, cinematicSections.length])

  // Dots only for the 3 cinematic sections (indices 0, 1, 2)
  const CINEMATIC_START = 0
  const dots = Array.from({ length: cinematicSections.length })

  return (
    <div className="cin-wrapper" ref={containerRef}>
      {/* Sections 0-2: Cinematic */}
      {cinematicSections.map((data, i) => (
        <div className="cin-section-wrap" key={i}>
          <CinematicSection
            sectionIndex={i}
            activeIndex={activeIndex}
            data={data}
          />
        </div>
      ))}

      {/* Section 3: Explore Further */}
      <div className="cin-section-wrap">
        <ExploreSection
          sectionIndex={cinematicSections.length}
          activeIndex={activeIndex}
          scrollRef={exploreRef}
        />
      </div>

      {/* Navigation Dots — cinematic sections only */}
      <nav className="cin-dots" aria-label="Section navigation">
        {dots.map((_, i) => (
          <button
            key={i}
            className={`cin-dot${activeIndex === CINEMATIC_START + i ? ' active' : ''}`}
            onClick={() => goToSection(CINEMATIC_START + i)}
            aria-label={`Go to section ${i + 1}`}
          />
        ))}
      </nav>
    </div>
  )
}

export default Home