import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import React, { Fragment } from "react";
import "./style.scss";

function Header() {
  const location = useLocation();
  let pageTitle;
  let pageSubtitle;
  let name;

  if (location.pathname === "/experiences") {
    pageTitle = "EXPERIENCES";
    name = "my formations";
  } else if (location.pathname === "/works") {
    pageTitle = "WORKS";
    name = "The works i've done";
  } else if (location.pathname === "/techs") {
    pageTitle = "TECHS";
    name = "The tools i use";
  } else {
    pageTitle = "FRONT- END";
    pageSubtitle = "DEVELOPER";
    name = "Jérémy B.";
  }

  return (
    <section className="header">
      <div className="header-icon">
        <FontAwesomeIcon icon={faCircleDot} />
        <h2 className="header-infos">{name}</h2>
      </div>
      <motion.h1
        initial={{ opacity: 0, transform: "translateY(-40px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {pageTitle.split("\n").map((line, index) => (
          <Fragment key={index}>
            {line}
            <br />
          </Fragment>
        ))}
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, transform: "translateY(-40px)" }}
        animate={{ opacity: 1, transform: "translateY(0px)" }}
        transition={{
          duration: 0.8,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {pageSubtitle}
      </motion.h1>
    </section>
  );
}

export default Header;
