import './style.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import React, { Fragment } from 'react';

function Header() {
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


  return (
    <div className='main-header'>
      <div className="name-icon">
        <FontAwesomeIcon icon={faCircleDot} className="animate__animated animate__flip" /> 
        <h2 className="name-infos">Bouzemame Jérémy</h2>
      </div>
      <h1 className="animate__animated animate__fadeInDown">
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