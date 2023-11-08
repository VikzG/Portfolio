import { motion, AnimatePresence } from 'framer-motion';
import "./style.scss";



const ModalBox = ({ isOpen, onClose }) => {
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
                className='M'
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 5,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={onClose}
              >
                X
              </button>
              <h2>Contenu de la boîte modale</h2>
              <p>Ici, vous pouvez placer tout contenu que vous souhaitez afficher dans la boîte modale.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  export default ModalBox;