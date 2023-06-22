import './style.css';
import { Link } from 'react-router-dom';

export default function Card({ title, cover, description,techs, workUrl }) {


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
  </div>
  );
}






