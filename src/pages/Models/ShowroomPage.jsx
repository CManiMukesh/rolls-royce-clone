// src/pages/Models/ShowroomPage.jsx
const ShowroomPage = ({ model }) => {
  return (
    <div className="page-content">
      <div className="page-header">
        <h1>{model}</h1>
        <p>Experience the pinnacle of automotive luxury</p>
      </div>
      <div className="page-body">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <img 
            src="https://images.unsplash.com/photo-1631295868223-63228b10f8e4?q=80&w=2070&auto=format" 
            alt={model}
            style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', borderRadius: '8px' }}
          />
        </div>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          The {model} represents the embodiment of Rolls-Royce's commitment to creating the most luxurious 
          motor cars in the world. Every detail, from the handcrafted interior to the silent powertrain, 
          has been designed to provide an unparalleled driving experience.
        </p>
      </div>
    </div>
  )
}

export default ShowroomPage