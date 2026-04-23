// src/pages/Home.jsx
import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import GridCard from '../components/GridCard'
import '../styles/home.css'

// ─── Cinematic Section ─────────────────────────────────────────────
const CinematicSection = ({ sectionIndex, activeIndex, data }) => {
  const [showVideo, setShowVideo] = useState(false)
  const [animStarted, setAnimStarted] = useState(false)
  const videoRef = useRef(null)

  const isActive = activeIndex === sectionIndex

  useEffect(() => {
    if (isActive) {
      setAnimStarted(true)

      if (data.video) {
        const timer = setTimeout(() => {
          setShowVideo(true)
          // Force play on mobile
          if (videoRef.current) {
            videoRef.current.play().catch(() => {})
          }
        }, data.videoDelay || 1100)

        return () => clearTimeout(timer)
      }
    } else {
      setShowVideo(false)
      setAnimStarted(false)
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
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
            ref={videoRef}
            className={`cin-video${showVideo ? ' show' : ''}`}
            src={data.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            webkit-playsinline="true"
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
      image: '/public/images/cq5dam.web.1920 (2).webp',
      title: 'THE HISTORY OF COACHBUILD',
      description:
        'A visionary commission redefining automotive luxury through innovative design and unparalleled craftsmanship.',
    },
    {
      image: '/public/images/cq5dam.web.1920 (1).webp',
      title: 'ROLLS-ROYCE ARCADIA DROPTAIL',
      description:
        'Named after a realm in Ancient Greek mythology, the third Droptail commission - a haven of tranquillity.',
    },
    {
      image: '/public/images/cq5dam.web.1920 (3).webp',
      title: 'INSPIRING GREATNESS',
      description:
        'A confluence of exceptional and extraordinary narratives, as revealed by Rolls-Royce.',
    },
  ]

  return (
    <section className="explore-section">
      <div className="explore-inner">
        <div className="explore-header">
          <p className="explore-eyebrow">CONTINUE YOUR JOURNEY</p>
          <h2 className="explore-title">EXPLORE FURTHER</h2>
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
  const touchStartY = useRef(null)

  const cinematicSections = [
    {
      eyebrow: 'PROJECT',
      title: 'NIGHTINGALE',
      tagline: 'A COACHBUILD COLLECTION',
      cta: 'DISCOVER MORE',
      image: 'public/images/image (1).jpg',
      video: 'public/videos/main.mp4',
      videoDelay: 1100,
    },
    {
      title: 'COACHBUILD COLLECTION',
      cta: 'DISCOVER NOW',
      image: 'public/images/image2.jpg',
      video: 'public/videos/Rolls-Royce Motor Cars Inspiring Greatness (1).mp4',
      videoDelay: 1100,
    },
    {
      subtitle: 'AN INTRODUCTION TO POSSIBILITY',
      title: 'THE WORLD OF BESPOKE',
      cta: 'DISCOVER NOW',
      image: 'public/images/cq5dam.web.1920.webp',
    },
  ]

  const LAST = cinematicSections.length - 1

  const goToSection = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(index, LAST))
      setActiveIndex(clamped)
      window.scrollTo({
        top: window.innerHeight * clamped,
        behavior: 'smooth',
      })
    },
    [LAST]
  )

  // ─── Wheel Scroll Logic ─────────────────────────────────────
  useEffect(() => {
    const handleWheel = (e) => {
      const dir = e.deltaY > 0 ? 1 : -1

      if (activeIndex > LAST) return

      if (activeIndex === LAST && dir === 1) {
        setActiveIndex(LAST + 1)
        return
      }

      if (activeIndex === LAST + 1 && dir === -1) {
        e.preventDefault()
        goToSection(LAST)
        return
      }

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

  // ─── Touch Scroll Logic (mobile) ───────────────────────────
  useEffect(() => {
    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
    }

    const handleTouchEnd = (e) => {
      if (touchStartY.current === null) return

      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      const threshold = 40

      if (Math.abs(deltaY) < threshold) return

      const dir = deltaY > 0 ? 1 : -1

      if (activeIndex > LAST) return

      if (activeIndex === LAST && dir === 1) {
        setActiveIndex(LAST + 1)
        touchStartY.current = null
        return
      }

      if (activeIndex === LAST + 1 && dir === -1) {
        goToSection(LAST)
        touchStartY.current = null
        return
      }

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

      touchStartY.current = null
    }

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
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
      {/* Cinematic Sections */}
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