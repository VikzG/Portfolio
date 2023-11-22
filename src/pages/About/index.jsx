import './style.scss'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import myPhoto from "../../assets/photo_portfolio.jpg";
import Footer from "../../components/Footer";
import { useRef } from 'react';
import { motion , useInView } from "framer-motion";
import Particle from '../../components/Particle/Particle';


function About() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


      return (
        <div className = "about" >
        <Particle />
        <Navigation />
        <Header />
        <div className='photo-presentation'>
          <motion.span 
          className='presentation-words'
          initial={{ opacity: 0, transform: "translateX(-50px)" }}
          animate={{ 
          opacity: 1,
          transform: "translateX(0px)",
              }}
          transition=
          {{
          duration: 1,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
          }}
          >"DESIGN IS THE <span className='anim-word'>VISIBLE</span> REFLECTION<br/>OF THE <span className='anim-word-2'>INVISIBLE</span> THINKING."
          </motion.span>
        <motion.div 
        className="my-photo-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1,
           scale: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        <motion.img className = "my-photo" 
        src={myPhoto}
        alt="my photo" 
        />
        </motion.div>
          <motion.span
          className='presentation-words'
          initial={{ opacity: 0,
             transform: "translateX(50px)" }}
          animate={{ 
          opacity: 1,
          transform: "translateX(0px)",
              }}
          transition=
          {{
          duration: 1,
          delay: 1.5,
          ease: [0, 0.71, 0.2, 1.01],
          }}
          >
        "<span className='anim-word-3'>CODE </span>IS POETRY IN <span className='anim-word-4'>MOTION</span>."
          </motion.span >
        </div>
        <motion.p className="presentation-text">
        <motion.span className='about-me-word' 
            initial={{
              opacity: 0,
              y: -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
            }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
        >I'm Jeremy,</motion.span>
        <motion.span className='about-me-word' 
                    initial={{
                      opacity: 0,
                      y: -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                    }}
                    transition={{
                      duration: 1,
                      delay: 1,
                    }}
        > a web and graphic designer. </motion.span>
        <motion.span className='about-me-word' 
                    initial={{
                      opacity: 0,
                      y: -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                    }}
                    animate={{
                      opacity: isInView ? 1 : 0,
                      y: isInView ? 0 : -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                    }}
                    transition={{
                      duration: 1,
                      delay: 1.5,
                    }}
        >Passionate about the world of technology and drawing since a young age</motion.span>
        <motion.span className='about-me-word' ref={ref}
                            initial={{
                              opacity: 0,
                              y: -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            animate={{
                              opacity: isInView ? 1 : 0,
                              y: isInView ? 0 : -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            transition={{
                              duration: 1,
                              delay: 2,
                            }}
        >, I began by pursuing a bachelor's degree in the field of visual communication. </motion.span>
        <motion.span className='about-me-word' 
                            initial={{
                              opacity: 0,
                              y: -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            animate={{
                              opacity: isInView ? 1 : 0,
                              y: isInView ? 0 : -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            transition={{
                              duration: 1,
                              delay: 2.5,
                            }}
        >Later, I made the decision to train in web development </motion.span> 
        <motion.span className='about-me-word'
                            initial={{
                              opacity: 0,
                              y: -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            animate={{
                              opacity: isInView ? 1 : 0,
                              y: isInView ? 0 : -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            transition={{
                              duration: 1,
                              delay: 3,
                            }}
        >to get as close as possible to what I love. </motion.span> 
        <motion.span className='about-me-word'
                            initial={{
                              opacity: 0,
                              y: -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            animate={{
                              opacity: isInView ? 1 : 0,
                              y: isInView ? 0 : -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            transition={{
                              duration: 1,
                              delay: 3.5,
                            }}
        >I am now actively seeking opportunities</motion.span>
        <motion.span className='about-me-word'
                            initial={{
                              opacity: 0,
                              y: -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            animate={{
                              opacity: isInView ? 1 : 0,
                              y: isInView ? 0 : -40,  // Utiliser la propriété 'y' au lieu de 'translateY'
                            }}
                            transition={{
                              duration: 1,
                              delay: 4,
                            }}
        > to combine my artistic creativity with my technical skills.</motion.span>
        </motion.p>
        <Footer />
        </div>
      )
  }
   
  export default About