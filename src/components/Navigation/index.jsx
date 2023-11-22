import React, { useState,useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { motion,AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    document.getElementById('root').classList.add('modal-open');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    document.getElementById('root').classList.remove('modal-open');
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal')) {
      handleModalClose();
    }
  };

  useEffect(() => {
    return () => {
      document.getElementById('root').classList.remove('modal-open');
    };
  }, []);

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
      <AnimatePresence>
      {isModalOpen && (
        <motion.div 
          className="modal"
          onClick={handleOverlayClick}
          initial={{ opacity: 0, }}
          animate={{ 
          opacity: 1,
          }}
          transition=
          {{
          duration: 0.5,
          delay:0,
          ease: [0, 0.71, 0.2, 1.01],
          }}
          exit={{ y: -50, opacity: 0 }}
          >
            
          <motion.ul 
            className="modal-menu">
              <motion.li className="modal-text"
                initial={{ 
                  opacity:0,
                  x:-250,
                }}
                animate={{ 
                  x:0,
                  opacity:1,
                }}
                transition=
                {{
                duration: 0.5,
                delay:0,
                }}>
            <Link to="/" className="modal-text">About</Link>
            </motion.li>
            <motion.li className="modal-text"
                initial={{ 
                  opacity:0,
                  x:250,
                }}
                animate={{ 
                  x:0,
                  opacity:1,
                }}
                transition=
                {{
                duration: 0.5,
                delay:0.3,
                }}>
            <Link to ="/works"className="modal-text">Works</Link>
            </motion.li>
            <motion.li className="modal-text"
                initial={{ 
                  x:-250,
                  opacity:0,
                }}
                animate={{ 
                  x:0,
                  opacity:1,
                }}
                transition=
                {{
                duration: 0.5,
                delay:0.6,
                }}>
            <Link to ="/techs"className="modal-text">Techs</Link>
            </motion.li>
            <motion.li className="modal-text"
                initial={{ 
                  x:250,
                  opacity:0,
                }}
                animate={{ 
                  x:0,
                  opacity:1,
                }}
                transition=
                {{
                duration: 0.5,
                delay:0.9,
                }}>
            <Link to ="/experiences" className="modal-text">Experiences</Link>
            </motion.li>
          </motion.ul>
          <button className="modal-close"
           onClick={handleModalClose}>
            [  Close  ]
          </button>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
}

export default Navigation;