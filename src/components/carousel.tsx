import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  return (
    <CarouselProvider
      naturalSlideWidth={600}
      naturalSlideHeight={800}
      totalSlides={images.length}
    >
      <Slider>
        {images.map((image, index) => (
          <Slide index={index}>
            <img src={image} />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default Carousel;
