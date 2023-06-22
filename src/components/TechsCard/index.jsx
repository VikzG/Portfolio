import './style.css';

export default function TechsCard({ title, cover,techs, workUrl,category }) {


  return (
    <div className='techs-card-container'>
      <div
        to={workUrl}
        className="techs-gallery_card">
        <img src={cover} alt={title} />
        <h3 className='techs-card_title'>{title}</h3>
        <span className='techs-category'>{category}</span>
      </div>
      <div className="card_techs">
			  {techs && techs.map((techs, index) => (
				<button key={index} className="techs_button">{techs}</button>
			  ))}
			</div>
  </div>
  );
}
