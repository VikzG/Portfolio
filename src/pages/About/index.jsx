import './style.scss'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import myPhoto from "../../assets/photo_portfolio.jpg";
import Footer from "../../components/Footer";
import { useRef,useState,useEffect } from 'react';
import { motion , useInView } from "framer-motion";
import Particle from '../../components/Particle/Particle';


function About() {

  const ref2 = useRef(null);
  const ref = useRef(null);
  const targetRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInViewRect = useInView(ref2, { once: true });

  const [textToShow, setTextToShow] = useState('');
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);

  useEffect(() => {
    setTextToShow(phrases[activePhraseIndex]);
  }, [activePhraseIndex]);

  useEffect(() => {
    setTextToShow(phrases[0]);
  }, []);

  const phrases = [
    "I'm Jeremy, a web and graphic designer.",
    "Passionate about the world of technology and drawing since a young age, I began by pursuing a bachelor's degree in the field of visual communication.",
    "Later, I made the decision to train in web development to get as close as possible to what I love. I am now actively seeking opportunities to combine my artistic creativity with my technical skills.",
  ];

  const handleClick = () => {
    if (activePhraseIndex < phrases.length - 1) {
      setActivePhraseIndex(activePhraseIndex + 1);
    } else {
      setActivePhraseIndex(0);
    }
  };

      return (
        <div className = "about"  ref={targetRef}>
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
        <motion.div className='my-photo-rect-1'
                initial={{ 
                  width: "100%",
                }}
                animate={{ 
                  width: isInViewRect ? "0%": "100%"
                    }}
                transition=
                {{
                duration: 0.5,
                delay: 1.5,
                ease: [0, 0.71, 0.8, 1.01],
                }}
        ></motion.div>
        <motion.div className='my-photo-rect-2'
                initial={{ 
                  width: "100%",
                }}
                animate={{ 
                  width: isInViewRect ? "0%": "100%"
                    }}
                transition=
                {{
                duration: 0.5,
                delay: 1.7,
                ease: [0, 0.71, 0.8, 1.01],
                }}
        ></motion.div>
        <motion.div className='my-photo-rect-3'
                initial={{ 
                  width: "100%",
                }}
                animate={{ 
                  width: isInViewRect ? "0%": "100%"
                    }}
                transition=
                {{
                duration: 0.5,
                delay: 1.9,
                ease: [0, 0.71, 0.8, 1.01],
                }}
        ></motion.div>
        <motion.div className='my-photo-rect-4'
                initial={{ 
                  width: "100%",
                }}
                animate={{ 
                  width: isInViewRect ? "0%": "100%"
                    }}
                transition=
                {{
                duration: 0.5,
                delay: 2.1,
                ease: [0, 0.71, 0.8, 1.01],
                }}
        ></motion.div>
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
        "<span className='anim-word-3'ref={ref2}>CODE </span>IS POETRY IN <span className='anim-word-4'>MOTION</span>."
          </motion.span >
        </div>
        <motion.div 
        className="presentation-text" ref={ref}>
        {phrases.map((phrase, index) => (
          <motion.p
            key={index}
            className={`description-txt ${activePhraseIndex >= index ? 'active' : ''}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activePhraseIndex >= index ? 1 : 0,
              display: activePhraseIndex === index ? 'block' : 'none',
            }}
            transition={{ duration: 1.2 }}
          >
            {phrase}
          </motion.p>
        ))}
        <motion.div className="clickable-point"
                initial={{ 
                  scale: 0
                }}
                animate={{ 
                  scale: isInView ? 1:0, 
                }}
                transition= {{
                  duration: 1,
                  delay: 1.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
        >
        <motion.div className="point"
        onClick={handleClick}
        >...</motion.div>
        </motion.div>
      </motion.div>
      <Footer />
        </div>
      )
  }
   
  export default About
