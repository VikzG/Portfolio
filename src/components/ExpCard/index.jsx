import './style.css';
import { useRef } from "react";
import { useInView,motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';


export default function ExpCard({ title, description }) {
const isArtTitle = title === "Graphic Design";

const ref = useRef(null);
const isInView = useInView(ref, { once: true });


  return (
    <div className='exp-card-container' ref={ref}>
      <div className="exp-gallery_card">
       <div className="title-icone-style">
        <motion.h3 className='exp-card_title'
          initial={{ 
            opacity: 0,
            transform: "translateX(-150px)",
          }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateX(0px)": "translateX(-150px)"
           }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
        >{title}
        </motion.h3>
        {isArtTitle ? (
          <motion.div className="art-logo-card"
          initial={{ 
            opacity: 0,
            scale: 0.2,
          }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.2,
           }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
          ><FontAwesomeIcon icon={faPaintBrush} /></motion.div>
        ) : (
          <motion.div className="web-logo-card"
          initial={{ 
            opacity: 0,
            scale: 0.2,
          }}
          animate={{ 
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.2
           }}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
          ><FontAwesomeIcon icon={faCode} /></motion.div>
        )}
        </div>
        <motion.p className="exp-card_description"
          initial={{ 
            opacity: 0,
          }}
          animate={{ 
            opacity: isInView ? 1 : 0,
           }}
          transition={{
            duration: 0.8,
            delay: 1.3,
          }}
        >{description}
        </motion.p>
      </div>
  </div>
  );
}