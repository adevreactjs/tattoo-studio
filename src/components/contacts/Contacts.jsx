import React from 'react';
import Header from '../header/Header';
import classes from './Contacts.module.css';
import Map from '../map/Map'

export default function Contacts() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Header />
        <div className={classes.contactTel}>
          <div className={classes.phone}>+38 (099) 303-03-03</div>
          <div className={classes.email}>zp.tattoo@gmail.com</div>
          <div className={classes.line}></div>
          <div className={classes.adress}>
            г. Запорожье, пр. Соборный 153 12-й подъезд, 2-й этаж 131
          </div>
        </div>
        <Map/>

      </div>
    </div>
  );
}
