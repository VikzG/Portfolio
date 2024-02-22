import './style.scss'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import myPhoto from "../../assets/photo_portfolio.jpg";
import Footer from "../../components/Footer";
import { useRef,useState,useEffect } from 'react';
import { motion , useInView } from "framer-motion";
import Particle from '../../components/Particle/Particle';
import { VscDebugRestart } from "react-icons/vsc";


function About() {

  const ref2 = useRef(null);
  const ref = useRef(null);
  const targetRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInViewRect = useInView(ref2, { once: true });
  

  const [textToShow, setTextToShow] = useState('');
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [bigScreen, setBigScreen] = useState(window.innerWidth >= 1025);

  const phrases = [
    "I'm Jeremy, a web and graphic designer.",
    "Passionate about the world of technology and drawing since a young age, I began by pursuing a bachelor's degree in the field of visual communication.",
    "Later, I made the decision to train in web development to get as close as possible to what I love. I am now actively seeking opportunities to combine my artistic creativity with my technical skills.",
  ];

  useEffect(() => {
    setTextToShow(phrases[activePhraseIndex]);
  }, [activePhraseIndex]);

  useEffect(() => {
    setTextToShow(phrases[0]);
  }, []);

  useEffect(() => {
    function handleResize() {
      setBigScreen(window.innerWidth >= 1025);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    if (activePhraseIndex < phrases.length - 1) {
      setActivePhraseIndex(activePhraseIndex + 1);
    } else {
      setActivePhraseIndex(0);
    }
  };

      return (
        <section className = "about"  ref={targetRef}>
        <Particle />
        <Navigation />
        <Header />
        <div className='about-items'>
          <motion.span 
          className='about-items-quotation'
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
          >"DESIGN IS THE <span className='quotation-animation'>VISIBLE</span> REFLECTION<br/>OF THE <span className='quotation-animation-2'>INVISIBLE</span> THINKING."
          </motion.span>
        <motion.div 
        className="about-items-photo-container"
        initial={{ 
          opacity: 0,
        }}
        animate={{ 
        opacity: 1,
            }}
        transition=
        {{
        duration: 1,
        delay: 1.5,
        ease: [0, 0.71, 0.2, 1.01],
        }}
   
        >
        <motion.img className = "my-photo" 
        src={myPhoto}
        alt="my photo" 
        initial={{ 
          opacity: 0,
        }}
        animate={{ 
        opacity: 1,
            }}
        transition=
        {{
        duration: 1,
        delay: 1.5,
        ease: [0, 0.71, 0.8, 1.01],
        }}
        />
        <motion.div className='photo-animation-rectangle'
                initial={{ 
                  width: "100%",
                }}
                animate={{ 
                  width: isInViewRect ? "0%": "100%"
                    }}
                transition=
                {{
                duration: 0.5,
                delay: bigScreen ? 0.2 : 1.5,
                ease: [0, 0.71, 0.8, 1.01],
                }}
        ></motion.div>
        <motion.div className='photo-animation-rectangle-2'
                initial={{ 
                  width: "100%",
                }}
                animate={{ 
                  width: isInViewRect ? "0%": "100%"
                    }}
                transition=
                {{
                duration: 0.5,
                delay: bigScreen ? 0.4 : 1.7,
                ease: [0, 0.71, 0.8, 1.01],
                }}
        ></motion.div>
        <motion.div className='photo-animation-rectangle-3'
                initial={{ 
                  width: "100%",
                }}
                animate={{ 
                  width: isInViewRect ? "0%": "100%"
                    }}
                transition=
                {{
                duration: 0.5,
                delay: bigScreen ? 0.6 : 1.9,
                ease: [0, 0.71, 0.8, 1.01],
                }}
        ></motion.div>
        <motion.div className='photo-animation-rectangle-4'
                initial={{ 
                  width: "100%",
                }}
                animate={{ 
                  width: isInViewRect ? "0%": "100%"
                    }}
                transition=
                {{
                duration: 0.5,
                delay: bigScreen ? 0.8 : 2.1,
                ease: [0, 0.71, 0.8, 1.01],
                }}
        ></motion.div>
        </motion.div>
          <motion.span
          className='about-items-quotation'
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
        "<span className='quotation-animation-3'ref={ref2}>CODE </span>IS POETRY IN <span className='quotation-animation-4'>MOTION</span>."
          </motion.span >
        </div>
        <motion.div 
        className="about-items-text" ref={ref}>
        {phrases.map((phrase, index) => (
          <motion.p
            key={index}
            className={`description-txt ${activePhraseIndex >= index ? 'active' : ''}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activePhraseIndex >= index && isInView ? 1 : 0,
              display: activePhraseIndex === index && isInView ? 'block' : 'none',
            }}
            transition={{ duration: 1.2 }}
          >
            {phrase}
          </motion.p>
        ))}
        <motion.div className="point-container"
                initial={{ 
                  scale: 0
                }}
                animate={{ 
                  scale: isInView ? 1:0, 
                }}
                whileTap={{ scale: 0.9 }}
                transition= {{
                  duration: 1,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
        >
        <motion.div className="point"
        onClick={handleClick}
        >{activePhraseIndex === phrases.length - 1 ? <VscDebugRestart /> : '...'}
        </motion.div>
        </motion.div>
      </motion.div>
      <Footer />
        </section>
      )
  }
   
  export default About
