import React from 'react';
import story from '../img/icon-history.jpg'
import classes from './History.module.css'

const History = () => {
  return (
    <div className={classes.history}>
      <div className={classes.text}>Тату студия ТатУкраина работает с 2012 года,поэтому наше качество проверено временем. Мастера предлагают разные стили и только индивидуальные эскизы.</div>
        <div className={classes.story}>
        <img src={story} alt="img" />
        </div>
        
    </div>
  )
}

export default History