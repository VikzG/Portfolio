import './style.scss';
import { motion } from 'framer-motion';
import { useEffect,useState } from 'react';

function Cursor() {

const [mousePosition, setMousePosition] = useState ({
    x:0,
    y:0,
});

    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }
        window.addEventListener("mousemove", mouseMove)
    return () => {
        window.removeEventListener("mousemove", mouseMove)
    }
    },[]);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y,
        },
    }




    return(
<motion.div 
    className='cursor'
    variants={variants}
    animate= "default"
    >

</motion.div>
    )
} 

export default Cursor;