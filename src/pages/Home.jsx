// src/pages/Home.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import GridCard from '../components/GridCard'
import '../styles/home.css'

// ─── Cinematic Section ─────────────────────────────────────────────
const CinematicSection = ({ sectionIndex, activeIndex, data }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [animStarted, setAnimStarted] = useState(false)

  const isActive = activeIndex === sectionIndex

  useEffect(() => {
    if (isActive) {
      setAnimStarted(true)

      if (data.video) {
        const timer = setTimeout(() => {
          setShowVideo(true)
        }, data.videoDelay || 2200)

        return () => clearTimeout(timer)
      }
    } else {
      setShowVideo(false)
      setAnimStarted(false)
    }
  }, [isActive, data.video, data.videoDelay])

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 50 },
    animate: animStarted
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 50 },
    transition: { delay, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
  })

  return (
    <section className="cin-section">
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

// ─── Explore Section ─────────────────────────────────────────────
const ExploreSection = () => {
  const exploreCards = [
    {
      image:
        'https://images.unsplash.com/photo-1618843479313-40f8afb6b7d6?q=80&w=2070&auto=format',
      title: 'THE HISTORY OF COACHBUILD',
      description:
        'A visionary commission redefining automotive luxury through innovative design and unparalleled craftsmanship.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1631295868223-63228b10f8e4?q=80&w=2070&auto=format',
      title: 'ROLLS-ROYCE ARCADIA DROPTAIL',
      description:
        'Named after a realm in Ancient Greek mythology, the third Droptail commission - a haven of tranquillity.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1566473965994-3fa105e4bf44?q=80&w=2070&auto=format',
      title: 'INSPIRING GREATNESS',
      description:
        'A confluence of exceptional and extraordinary narratives, as revealed by Rolls-Royce.',
    },
  ]

  return (
    <section className="explore-section">
      <div className="explore-inner">
        <div className="explore-header">
          <h2 className="explore-title">EXPLORE FURTHER</h2>
          <p className="explore-eyebrow">CONTINUE YOUR JOURNEY</p>
        </div>

        <div className="grid-container">
          {exploreCards.map((card, i) => (
            <GridCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Home ─────────────────────────────────────────────────────
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const isScrolling = useRef(false)

  const cinematicSections = [
    {
      eyebrow: 'PROJECT',
      title: 'NIGHTINGALE',
      tagline: 'A COACHBUILD COLLECTION',
      cta: 'DISCOVER MORE',
      image:
        'https://images.unsplash.com/photo-1631295868223-63228b10f8e4?q=80&w=2070&auto=format',
      video: 'https://www.w3schools.com/html/mov_bbb.mp4',
      videoDelay: 2200,
    },
    {
      title: 'COACHBUILD COLLECTION',
      cta: 'DISCOVER NOW',
      image:
        'https://images.unsplash.com/photo-1568605117036-5fe5e7fa0ac7?q=80&w=2070&auto=format',
      video: 'https://www.w3schools.com/html/movie.mp4',
      videoDelay: 1800,
    },
    {
      subtitle: 'AN INTRODUCTION TO POSSIBILITY',
      title: 'THE WORLD OF BESPOKE',
      cta: 'DISCOVER NOW',
      image:
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format',
    },
  ]

  const LAST = cinematicSections.length - 1

  const goToSection = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, LAST))
    setActiveIndex(clamped)

    window.scrollTo({
      top: window.innerHeight * clamped,
      behavior: 'smooth',
    })
  }, [LAST])

  // ─── Wheel Scroll Logic ─────────────────────────────────────
  useEffect(() => {
    const handleWheel = (e) => {
      const dir = e.deltaY > 0 ? 1 : -1

      // Allow normal scroll in explore
      if (activeIndex > LAST) return

      // Move to explore
      if (activeIndex === LAST && dir === 1) {
        setActiveIndex(LAST + 1)
        return
      }

      // Move back to cinematic
      if (activeIndex === LAST + 1 && dir === -1) {
        e.preventDefault()
        goToSection(LAST)
        return
      }

      // Cinematic snap
      e.preventDefault()
      if (isScrolling.current) return

      isScrolling.current = true

      setActiveIndex((prev) => {
        const next = Math.max(0, Math.min(prev + dir, LAST))

        window.scrollTo({
          top: window.innerHeight * next,
          behavior: 'smooth',
        })

        return next
      })

      setTimeout(() => {
        isScrolling.current = false
      }, 900)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [activeIndex, LAST, goToSection])

  // ─── Scroll Sync Fix ───────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const sectionHeight = window.innerHeight

      const index = Math.round(scrollY / sectionHeight)

      if (index >= 0 && index <= LAST) {
        setActiveIndex((prev) => (prev !== index ? index : prev))
      }

      if (scrollY >= sectionHeight * (LAST + 0.5)) {
        setActiveIndex(LAST + 1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [LAST])

  return (
    <div className="cin-wrapper">
      {/* Cinematic */}
      {cinematicSections.map((data, i) => (
        <div className="cin-section-wrap" key={i}>
          <CinematicSection
            sectionIndex={i}
            activeIndex={activeIndex}
            data={data}
          />
        </div>
      ))}

      {/* Explore */}
      <div className="cin-section-wrap explore-wrap">
        <ExploreSection />
      </div>

      {/* Dots */}
      {activeIndex <= LAST && (
        <nav className="cin-dots">
          {cinematicSections.map((_, i) => (
            <button
              key={i}
              className={`cin-dot${activeIndex === i ? ' active' : ''}`}
              onClick={() => goToSection(i)}
            />
          ))}
        </nav>
      )}
    </div>
  )
}

export default Home