// src/components/Section.jsx
const Section = ({ image, title, description, linkText, linkPath, reverse }) => {
  return (
    <div className={`section-block ${reverse ? 'reverse' : ''}`}>
      <div className="section-image">
        <img src={image} alt={title} />
      </div>
      <div className="section-text">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={linkPath} className="section-link">{linkText} →</a>
      </div>
    </div>
  )
}

export default Section