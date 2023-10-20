import './style.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import React, { Fragment, useState, useEffect } from 'react';

function Header() {
  const [isTitleUp, setIsTitleUp] = useState(0);
  const location = useLocation();
  let pageTitle;

  if (location.pathname === "/experiences") {
    pageTitle = "EXPERIENCES";
  } else if (location.pathname === "/works") {
    pageTitle = "WORKS";
  } else if (location.pathname === "/techs") {
    pageTitle = "TECHS";
  } else {
    pageTitle = "DIGITAL\nDESIGNER";
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsTitleUp(-scrollY / -4);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  
  })


  return (
    <div className='main-header'>
      <div className="name-icon">
        <FontAwesomeIcon icon={faCircleDot}/> 
        <h2 className="name-infos">Jérémy B.</h2>
      </div>
      <h1 style ={{ transform: `translateY(${isTitleUp}px)` }}>
        {pageTitle.split("\n").map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}
      </h1>
    </div>
  );
}

export default Header;