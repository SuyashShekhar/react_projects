import React, { useState } from 'react';

const Sidebar = () => {
  const [filmsOpen, setFilmsOpen] = useState(false);
  const [peopleOpen, setPeopleOpen] = useState(false);
  const [planetsOpen, setPlanetsOpen] = useState(false);
  const [speciesOpen, setSpeciesOpen] = useState(false);
  const [starshipsOpen, setStarshipsOpen] = useState(false);
  const [vehiclesOpen, setVehiclesOpen] = useState(false);

  const handleSectionClick = (section) => {
    switch (section) {
      case 'films':
        setFilmsOpen(!filmsOpen);
        break;
      case 'people':
        setPeopleOpen(!peopleOpen);
        break;
      case 'planets':
        setPlanetsOpen(!planetsOpen);
        break;
      case 'species':
        setSpeciesOpen(!speciesOpen);
        break;
      case 'starships':
        setStarshipsOpen(!starshipsOpen);
        break;
      case 'vehicles':
        setVehiclesOpen(!vehiclesOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div className="sidebar">
      <div className="section" onClick={() => handleSectionClick('films')}>
        Films
        {filmsOpen && <div className="section-content">Put your Films content here</div>}
      </div>
      <div className="section" onClick={() => handleSectionClick('people')}>
        People
        {peopleOpen && <div className="section-content">Put your People content here</div>}
      </div>
      <div className="section" onClick={() => handleSectionClick('planets')}>
        Planets
        {planetsOpen && <div className="section-content">Put your Planets content here</div>}
      </div>
      <div className="section" onClick={() => handleSectionClick('species')}>
        Species
        {speciesOpen && <div className="section-content">Put your Species content here</div>}
      </div>
      <div className="section" onClick={() => handleSectionClick('starships')}>
        Starships
        {starshipsOpen && <div className="section-content">Put your Starships content here</div>}
      </div>
      <div className="section" onClick={() => handleSectionClick('vehicles')}>
        Vehicles
        {vehiclesOpen && <div className="section-content">Put your Vehicles content here</div>}
      </div>
    </div>
  );
};

export default Sidebar;
