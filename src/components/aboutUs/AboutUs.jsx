import React from 'react';
import Header from '../header/Header';
import classes from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Header />
        <div className={classes.textBlock}>
          <h1 className={classes.title}>О нас</h1>
          <p className={classes.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure fugit fugiat dicta.
          Sapiente, delectus dolor explicabo ullam asperiores eveniet! Eos ad perspiciatis
          necessitatibus beatae, repudiandae doloribus itaque recusandae neque.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure fugit fugiat dicta.
          Sapiente, delectus dolor explicabo ullam asperiores eveniet! Eos ad perspiciatis
          necessitatibus beatae, repudiandae doloribus itaque recusandae neque.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure fugit fugiat dicta.
          Sapiente, delectus dolor explicabo ullam asperiores eveniet! Eos ad perspiciatis
          necessitatibus beatae, repudiandae doloribus itaque recusandae neque.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iure fugit fugiat dicta.
          Sapiente, delectus dolor explicabo ullam asperiores eveniet! Eos ad perspiciatis
          necessitatibus beatae, repudiandae doloribus itaque recusandae neque.
          </p>
        </div>
      </div>
    </div>
  );
}
