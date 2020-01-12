import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import style from './profileCarousel.module.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

 
export default class ProfileSlider extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        className={style.carouselBox}>
        
        <Slider>
          <Slide index={0}><Image src="http://snpro-expo.com/i/Jeff-Seid-natural-ayU8.jpg" /></Slide>
          <Slide index={1}><Image src="http://snpro-expo.com/i/Jeff-Seid-natural-ayU8.jpg" /></Slide>
          <Slide index={2}><Image src="http://snpro-expo.com/i/Jeff-Seid-natural-ayU8.jpg" /></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}