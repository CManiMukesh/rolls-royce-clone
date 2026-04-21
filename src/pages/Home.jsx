// src/pages/Home.jsx
import Hero from '../components/Hero'
import Section from '../components/Section'
import GridCard from '../components/GridCard'
import '../styles/home.css'

const Home = () => {
  const sections = [
    {
      image: 'https://images.unsplash.com/photo-1631295868223-63228b10f8e4?q=80&w=2070&auto=format',
      title: 'BESPOKE CRAFTSMANSHIP',
      description: 'Every Rolls-Royce is a unique masterpiece, crafted to the exacting standards of our clients. From the finest leathers to the rarest veneers, each detail tells a story of uncompromising luxury.',
      linkText: 'Discover Bespoke',
      linkPath: '/bespoke/discover',
      reverse: false
    },
    {
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7fa0ac7?q=80&w=2070&auto=format',
      title: 'THE SPIRIT OF ECSTASY',
      description: 'An icon of automotive excellence, the Spirit of Ecstasy embodies the soul of Rolls-Royce. Each figurine is hand-sculpted and finished, representing the pinnacle of artistic expression.',
      linkText: 'Explore Legacy',
      linkPath: '/inspiring-greatness',
      reverse: true
    },
    {
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format',
      title: 'COACHBUILD LEGACY',
      description: 'Continuing a century-old tradition, Rolls-Royce Coachbuild creates automotive works of art. Each commission is a testament to the enduring partnership between patron and artisan.',
      linkText: 'Coachbuild Collection',
      linkPath: '/bespoke/coachbuild-collection',
      reverse: false
    }
  ]

  const exploreCards = [
    {
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb6b7d6?q=80&w=2070&auto=format',
      title: 'Project Nightingale',
      description: 'A visionary commission redefining automotive luxury through innovative design and unparalleled craftsmanship.',
      link: '/bespoke/project-nightingale'
    },
    {
      image: 'https://images.unsplash.com/photo-1631295868223-63228b10f8e4?q=80&w=2070&auto=format',
      title: 'Coachbuild Collection',
      description: 'Discover the most extraordinary motor cars ever created, each a unique expression of its patron\'s vision.',
      link: '/bespoke/coachbuild-collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1566473965994-3fa105e4bf44?q=80&w=2070&auto=format',
      title: 'Arcadia Droptail',
      description: 'A haven of tranquillity. Named after a realm in Ancient Greek mythology, this masterpiece embodies serene luxury.',
      link: '/bespoke/coachbuild/arcadia-droptail'
    }
  ]

  return (
    <>
      <Hero />
      
      <div className="main-sections">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
      
      <div className="explore-further">
        <h2>EXPLORE FURTHER</h2>
        <div className="grid-container">
          {exploreCards.map((card, index) => (
            <GridCard key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home