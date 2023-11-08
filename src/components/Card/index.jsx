import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalBox from '../ModalBox';


export default function Card({ title, cover, description,techs, workUrl }) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className='card-container'>
      <Link
        to={workUrl}
        className="gallery_card">
        <img src={cover} alt={title} />
        <h3 className='card_title'>{title}</h3>
      </Link>
      <div className="card_techs">
			  {techs && techs.map((techs, index) => (
				<button key={index} className="techs_button">{techs}</button>
			  ))}
			</div>
      <p className="card_description">{description}</p>
      <button onClick={openModal}>Ouvrir la boîte modale</button>
      <ModalBox isOpen={isModalOpen} onClose={closeModal} />
  </div>
  );
}






