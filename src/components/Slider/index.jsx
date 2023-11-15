import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';

const MySlider = ({ examples }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="slider-container">
        <Slider {...settings}>
          {examples &&
              examples.map((example, index) => (
                <div key={`slider-${index}`}>
                  <img src={example} alt={`Example ${index}`} />
                  </div>
              ))}
          
        </Slider>
      </div>
    );
  };
  
  export default MySlider;