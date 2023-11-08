import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
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
      <motion.button 
      className="main-nav-top"
      initial={{ opacity: 0, transform: "translateY(-50px)" }}
      animate={{ 
      opacity: 1,
      transform: "translateY(0px)",
          }}
      transition=
      {{
      duration: 1,
      delay:0,
      ease: [0, 0.71, 0.2, 1.01],
      }}
      >
      <FontAwesomeIcon icon={faSitemap} />
      <Link to="/">
         Home
      </Link>
      </motion.button>
      <motion.button
      className="main-nav-menu" 
      onClick={handleModalOpen}
      initial={{ opacity: 0, transform: "translateY(-50px)" }}
      animate={{ 
      opacity: 1,
      transform: "translateY(0px)",
          }}
      transition=
      {{
      duration: 1,
      delay:0,
      ease: [0, 0.71, 0.2, 1.01],
      }}
      >
        Menu
      </motion.button>
      {isModalOpen && (
        <motion.div 
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ 
          opacity: 1,
          }}
          transition=
          {{
          duration: 0.5,
          delay:0,
          ease: [0, 0.71, 0.2, 1.01],
          }}
          >
          <motion.ul 
            className="modal-menu "
            initial={{ 
              opacity: 0,
            }}
            animate={{ 
              opacity: 1,
            }}
            transition=
            {{
            duration: 0.3,
            delay:0.5,
            ease: [0.5, 0.71, 0.7, 1.01],
            }}
            >
            <Link to="/" className="modal-text">About</Link>
            <Link to ="/works"className="modal-text">Works</Link>
            <Link to ="/techs"className="modal-text">Techs</Link>
            <Link to ="/experiences" className="modal-text">Experiences</Link>
          </motion.ul>
          <button className="modal-close"
           onClick={handleModalClose}>
            [  Close  ]
          </button>
        </motion.div>
      )}
    </nav>
  );
}

export default Navigation;