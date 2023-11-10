import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ModalBox from '../ModalBox';

export default function Card({ title, cover, description,techs, workUrl,examples}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <motion.div 
    className='card-container'

    >
      <Link
        to={workUrl}
        className="gallery_card">
        <img src={cover} alt={title} />
        <h3 className='card_title'>{title}</h3>
      </Link>
      <div className="card_techs">
			  {techs && techs.map((techs, index) => (
				<button key={index} className="techs_button">{techs}</button>
			  ))}
			</div>
      <p className="card_description">{description}</p>

      <motion.button 
      className='open-modal-button'
      onClick={openModal}
      initial={{ scale: 1 }}
      whileHover={{ 
        width: 1000,
      }}
      transition={{ duration: 0.2 }}
      >
        Check it
        </motion.button>  
        {isModalOpen && (
        <ModalBox
          examples={examples}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}               
      </motion.div >
  );
}






