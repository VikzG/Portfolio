import './style.scss';
import { motion,useInView } from 'framer-motion';
import { useRef } from 'react';


const Error = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

    return (
      <div className='error'>
        <h2 className='error-title'>
          <div className='error-nbr' ref={ref}>
        <motion.div
           initial={{ opacity: 0, translateY:-100  }}
           animate={{ 
             opacity: isInView ? 1 : 0,
             translateY: isInView ? 0 : -100,
            }}
           transition={{
             duration: 0.3,
             delay: 0.2,
           }}>
            4</motion.div>
        <motion.div 
           initial={{ opacity: 0, translateY:-100  }}
           animate={{ 
             opacity: isInView ? 1 : 0,
             translateY: isInView ? 0 : -100,
            }}
           transition={{
             duration: 0.3,
             delay: 0.4,
           }}>
          0</motion.div>
        <motion.div 
           initial={{ opacity: 0, translateY:-100  }}
           animate={{ 
             opacity: isInView ? 1 : 0,
             translateY: isInView ? 0 : -100,
            }}
           transition={{
             duration: 0.3,
             delay: 0.6,
           }}>
          4</motion.div> 
        </div>
          <br/>
           N
           o
           t
           F
           o
           u
           n
           d
          </h2>
        <motion.p className='error-txt'
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: isInView ? 1 : 0,
             }}
            transition={{
              duration: 0.3,
              delay: 0.8,
            }}
        >Sorry, the page you are looking for might not exist.
        </motion.p>
      </div>
    );
  };
  
  export default Error;