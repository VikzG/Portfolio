import './style.css';
import { Link } from 'react-router-dom';
import { useState,useRef } from 'react';
import { motion,useInView } from 'framer-motion';
import ModalBox from '../ModalBox';

export default function Card({ title, cover, description,techs, workUrl,examples}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <motion.div 
    className='card-container'
    ref={ref}
    >
      <Link
        to={workUrl}
        className="gallery_card">
        <motion.img src={cover} alt={title}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s 0s",
            }}
            />
        <motion.h3 className='card_title'
          initial={{ opacity: 0, translateY:-100  }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            translateY: isInView ? 0 : -100,
           }}
          transition={{
            duration: 0.3,
            delay: 0.5,
          }}
        >{title}</motion.h3>
      </Link>
      <div className="card_techs">
			  {techs && techs.map((techs, index) => (
				<motion.button 
        key={index} 
        className="techs_button"
        style={{
          transform: isInView ? "none" : "translateX(100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s 0.5s",
        }}
        >{techs}</motion.button >
			  ))}
			</div>
      <motion.p className="card_description"
        initial={{ opacity: 0, translateX:100  }}
        animate={{ 
          opacity: isInView ? 1 : 0,
          translateX: isInView ? 0 : 100,
         }}
        transition={{
          duration: 0.5,
          delay: 1,
        }}
      >{description}</motion.p>

      <motion.button 
      className='open-modal-button'
      onClick={openModal}
      initial={{ opacity: 0, scale:0.5  }}
      animate={{ 
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0,
        transition: {
          duration: 0.5,
          delay: 1.2,
        }
       }}
       whileHover={{ 
        width: 1000,
        transition: { 
          duration: 0.3,
          delay: 0,
        }
      }}
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






