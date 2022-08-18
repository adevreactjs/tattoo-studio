import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import classes from './CarouselSlide.module.css';
import img from '../img/7.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';

import React from 'react';

export default function CarouselSlide() {
  return (
    <div className={classes.sliderBlock}>
      <Carousel
        dynamicHeight={false}
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
    </div>
  );
}
