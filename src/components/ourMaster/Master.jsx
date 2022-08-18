import React from 'react';

import Header from '../header/Header';
import master from '../img/master.jpg';
import classes from './Master.module.css';

export default function Master() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Header />
        <div className={classes.master}>
          <img src={master} alt='img' />
        </div>
        <h2 className={classes.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos illum accusamus enim fuga,
          eligendi vitae, necessitatibus suscipit debitis officia, sequi dolore. Labore culpa magnam
          praesentium quod nostrum, neque unde ipsam!
        </h2>
      </div>
    </div>
  );
}
