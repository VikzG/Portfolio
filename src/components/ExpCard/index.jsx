import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';


export default function ExpCard({ title, description }) {
const isArtTitle = title === "Graphic Design";


  return (
    <div className='exp-card-container'>
      <div className="exp-gallery_card">
       <div className="title-icone-style"><h3 className='exp-card_title'>{title}</h3>
        {isArtTitle ? (
          <div className="art-logo-card"><FontAwesomeIcon icon={faPaintBrush} /></div>
        ) : (
          <div className="web-logo-card"><FontAwesomeIcon icon={faCode} /></div>
        )}
        </div>
        <p className="exp-card_description">{description}</p>
      </div>
  </div>
  );
}