import "./style.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"



function NewSlider({ examples, id }) {
    return (
      <Carousel autoPlay 
      interval={5000} 
      infiniteLoop
      showStatus={false}
      >
        {examples.map((example, index) => (
          <div key={`Example ${id}`}>
            <img src={example} alt={`Example ${index}`} />
          </div>
        ))}
      </Carousel>
    );
  }

export default NewSlider