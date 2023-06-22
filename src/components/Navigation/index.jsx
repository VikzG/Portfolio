import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className='main-nav'>
      <Link to="/" className="animate__animated animate__fadeInLeft main-nav-top">
        <FontAwesomeIcon icon={faSitemap} /> Home
      </Link>
      <button className="animate__animated animate__fadeInTopRight main-nav-menu" onClick={handleModalOpen}>
        Menu
      </button>
      {isModalOpen && (
        <div className="modal animate__animated animate__fadeInDown">
          <ul className="modal-menu ">
            <Link to="/" className="modal-text">About</Link>
            <Link to ="/works"className="modal-text">Works</Link>
            <Link to ="/techs"className="modal-text">Techs</Link>
            <Link to ="/experiences" className="modal-text">Experiences</Link>
          </ul>
          <button className="modal-close" onClick={handleModalClose}>
            [  Close  ]
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;