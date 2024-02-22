import './style.scss';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion,useInView } from 'framer-motion';

export default function Card({ title, cover, description,techs,workUrl, examples}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div 
    className='card-container'
    ref={ref}
    >
      <Link
         className="gallery_card"
         to={workUrl}
         target="_blank"  
         >
        <motion.img src={cover} alt={title}
        style={{
          transform: isInView ? "none" : "translateY(-100px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s 0s",
            }}
            />
        <motion.h3 className='card-title'
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
      <div className="card-techs">
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
      <motion.p className="card-description"
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
      </motion.div >
  );
}






