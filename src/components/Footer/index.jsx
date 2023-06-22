import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightDots, faSitemap } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="footer">
        <Link to ="https://github.com/VikzG?tab=repositories"className="footer-text">Github <FontAwesomeIcon icon={faArrowUpRightDots} /></Link>
        <Link to ="https://www.instagram.com/"className="footer-text">Instagram <FontAwesomeIcon icon={faArrowUpRightDots} /></Link>
        <Link to ="https://www.tiktok.com/fr/"className="footer-text">Tik Tok <FontAwesomeIcon icon={faArrowUpRightDots} /></Link>
        <Link to="/"className="animate__animated animate__fadeInLeft main-nav-top"> 
    <FontAwesomeIcon icon={faSitemap} />
    </Link>
      </footer>
  )
}

export default Footer