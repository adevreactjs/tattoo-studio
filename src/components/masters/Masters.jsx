import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Masters.module.css';
import master from '../img/master.jpg';
const Masters = () => {
  return (
    <div>
      <div className={classes.mastersTitle}>
        <div className={classes.line}></div>
        <div className={classes.title}>Тату Бог</div>
        <div className={classes.line}></div>
      </div>
      <div className={classes.masterCart}>
        <div className={classes.cart}>
          <img className={classes.masterImg} src={master} alt='img' />
          <button className={classes.masterBtn}>
            <Link to='/master'>ПОДРОБНЕЕ</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Masters;
