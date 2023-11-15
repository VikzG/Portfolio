import { useState } from 'react';
import { Triangle } from  'react-loader-spinner'
import { motion } from "framer-motion";
import './style.css';
import Count from '../Count';

const Loader = () => {
  const [count, setCount] = useState(0);
  
  return (
    <motion.div
        className="loader-container"
        initial={{ opacity: 0,
       }}
        animate={{ opacity: 1
        }}
        transition={{
          duration: 2.5
        }}
        >
          <Count key={count}/>
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