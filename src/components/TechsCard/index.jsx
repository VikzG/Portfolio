import './style.css';
import { useRef } from "react";
import { useInView,motion } from "framer-motion";

export default function TechsCard({ title, cover,techs, workUrl,category }) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div 
      className='techs-card-container'
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}
      >
      <div
        to={workUrl}
        className="techs-gallery_card">
        <img src={cover} alt={title} />
        <motion.h3 className='techs-card_title'
              initial={{ opacity: 0}}
              animate={{ 
                opacity: isInView ? 1 : 0,
               }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
        >{title}
        </motion.h3>
        <motion.span className='techs-category'
              initial={{ opacity: 0, scale: 0. }}
              animate={{ 
                opacity: isInView ? 1 : 0,
                scale: isInView ? 1 : 0, 
               }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
        >{category}
        </motion.span>
      </div>
      <div className="card_techs">
			  {techs && techs.map((techs, index) => (
				<button key={index} className="techs_button">{techs}</button>
			  ))}
			</div>
  </motion.div>
  );
}
