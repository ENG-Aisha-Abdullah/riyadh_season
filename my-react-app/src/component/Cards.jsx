import React from 'react'

function Cards({ zone }) {
  return (
    <div className="card">
      <div className="zone-image-container">
        <img 
          src={zone.backgroundImage} 
          alt={zone.name}
          className="card-img"
        />
        <div className="card-img-overlay"></div>

        <div className="zone-content">
          <div className="zone-logo-container">
            <img 
              src={zone.logo} 
              alt={`${zone.name} Logo`}
              className="zone-logo"
            />
            {zone.sponsor && (
              <img 
                src={zone.sponsor} 
                alt={`${zone.name} Sponsor`}
                className="zone-sponsor"
              />
            )}
          </div>
        </div>

        {zone.new && <span className="badge-new">NEW</span>}
      </div>
    </div>
  );
}

export default Cards;
