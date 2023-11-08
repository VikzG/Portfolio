import React from 'react';
import { Triangle } from  'react-loader-spinner'
import { motion } from "framer-motion";
import './style.css';

const Loader = () => {
  return (
    <motion.div
        className="loader-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2.5
        }}
        >
      <Triangle
        className="loader"
        height="250px"
        width="250px"
        color="#FFFFFF"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}/>
    </motion.div>
  );
}

export default Loader;