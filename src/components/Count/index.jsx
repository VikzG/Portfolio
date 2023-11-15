import "./style.scss";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function Count() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
  
    useEffect(() => {
      const animation = animate(count, 100, { duration: 2.2 });
  
      return animation.stop;
    }, []);
  
    return <motion.span
    className="count"
    >{rounded}
    </motion.span>;}