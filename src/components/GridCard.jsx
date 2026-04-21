// src/components/GridCard.jsx
import { useNavigate } from 'react-router-dom'

const GridCard = ({ image, title, description, link }) => {
  const navigate = useNavigate()
  
  return (
    <div className="grid-card" onClick={() => navigate(link)}>
      <div className="grid-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="grid-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default GridCard