import { motion, AnimatePresence } from 'framer-motion';
import "./style.scss";



const ModalBox = ({ isOpen, onClose,examples }) => {

    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='modal-box'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
            className='modal-box-content'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            >
              <button
                className='modal-box-button'
                onClick={onClose}
              >
                [  Close  ]
              </button>
              {examples &&
              examples.map((example, index) => (
              <img key={index} src={example} alt={`Example ${index}`} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export default ModalBox;
