import './style.css'
import Navigation from "../../components/Navigation";
import Header from "../../components/Header";
import myPhoto from "../../assets/photo_portfolio.jpg";
import Footer from "../../components/Footer";
import SimpleParallax from 'simple-parallax-js';

function About() {
  let aboutPhoto = document.getElementsByClassName('my-photo')
  new SimpleParallax(aboutPhoto,
    {
      scale: 1.2,
      overflow: true,
    }
    );

      return (
        <div className = "about">
        <Navigation />
        <Header />
        <div className='photo-presentation'>
          <span className='presentation-words animate__animated animate__fadeIn'>"DESIGN IS THE VISIBLE REFLECTION<br/>OF THE INVISIBLE THINKING."</span>
        <div className="my-photo-container animate__animated presentation-words animate__fadeIn">
        <img className = "my-photo" src={myPhoto} alt="my photo" />
        </div>
        <span className='animate__animated presentation-words animate__fadeIn'>"CODE IS POETRY IN MOTION."</span>
        </div>
        <p className="presentation-text animate__animated animate__fadeInRight">
        I'm Jeremy, a front-end developer and graphic designer. Passionate about the world of technology and drawing since a young age, I began by pursuing a bachelor's degree in the field of visual communication. Later, I made the decision to train in web development to get as close as possible to what I love. I am now actively seeking opportunities to combine my artistic creativity with my technical skills.
        </p>
        <Footer />
        </div>
      )
  }
   
  export default About