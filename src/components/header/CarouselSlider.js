import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img from '../img/slide.jpg';
import img2 from '../img/slider2.jpg';
import img3 from '../img/slide3.jpg';
import React from 'react';

export default function CarouselSlider() {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}>
      <div>
        <img src={img} alt='img' />
      </div>
      <div>
        <img src={img2} alt='img' />
      </div>
      <div>
        <img src={img3} alt='img' />
      </div>
    </Carousel>
  );
}
