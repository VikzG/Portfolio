import './style.css'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import myPhoto from "../../assets/photo_portfolio.jpg";
import Footer from "../../components/Footer";
import { useRef,useEffect,useState } from 'react';
import { motion , useInView} from "framer-motion";
import Particle from '../../components/Particle/Particle';


function About() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

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
          >"DESIGN IS THE VISIBLE REFLECTION<br/>OF THE INVISIBLE THINKING."
          </motion.span>
        <motion.div 
        className="my-photo-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        >
        <img className = "my-photo" src={myPhoto} alt="my photo" />
        </motion.div>
          <motion.span
          className=' presentation-words'
          initial={{ opacity: 0, transform: "translateX(50px)" }}
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
        "CODE IS POETRY IN MOTION."
          </motion.span >
        </div>
        <motion.p 
        ref={ref}
        className="presentation-text"
        initial={{ 
        opacity: 0,
        transform: "translateY(20px)" 
        }}
        animate={{ 
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(20px)" : "translateY(0px)",
        }}
        transition=
        {{
        duration: 1,
        delay: 1.5,
        }}
        >
        I'm Jeremy, a web and graphic designer. Passionate about the world of technology and drawing since a young age, I began by pursuing a bachelor's degree in the field of visual communication. Later, I made the decision to train in web development to get as close as possible to what I love. I am now actively seeking opportunities to combine my artistic creativity with my technical skills.
        </motion.p>
        <Footer />
        </div>
      )
  }
   
  export default About