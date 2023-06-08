import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './CarouselComponent.scss'
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../../../assets/carousel1.jpg";
import carousel2 from "../../../assets/carousel2.jpg";

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
      <Carousel infiniteLoop interval={1000}>
        <div>
          <img className="carousel-imgs" src={carousel1} alt="Slide 1" />
          <p className="legend">Buy your favorite items</p>
        </div>
        <div>
          <img src={carousel2} alt="Slide 2" />
          <p className="legend">Check our prices</p>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
