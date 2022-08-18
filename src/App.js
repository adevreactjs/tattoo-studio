import React from 'react';

import classes from './App.module.css';
import Header from './components/header/Header';
import CarouselSlider from './components/header/CarouselSlider';
import History from './components/ history/History';
import Masters from './components/masters/Masters';
import ContactForm from './components/contactForm/ContactForm';
import Map from './components/map/Map';
import CarouselSlide from './components/Portfolio/CarouselSlide';

function App() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className='App'>
          <Header />
          <CarouselSlider />
          <History />
          <div className={classes.portfolio}>
            <CarouselSlide />
          </div>
          <Masters />
          <div className={classes.contactBlock}>
            <ContactForm />
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
