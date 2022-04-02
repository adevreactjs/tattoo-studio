import React from 'react';
import classes from './Map.module.css'
import insta from '../img/instagram.png'
import telega from '../img/telegram.png'


const Map = () => {
  const styleMap = {
    width: '100%',
    height: '596',
    style: 'border:0;',
    allowfullscreen: '',
    loading: 'lazy',
    referrerpolicy: 'no-referrer-when-downgrade',
  };

  return (
      <div className={classes.mapBlock}>
    <div className={classes.map}>
      <iframe title='1' 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.6545334784064!2d35.12205531560956!3d47.84628567938294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc672e74e7cf87%3A0x58f63f4126dd4650!2z0L_RgNC-0YHQvy4g0KHQvtCx0L7RgNC90YvQuSwgMTUzLCDQl9Cw0L_QvtGA0L7QttGM0LUsINCX0LDQv9C-0YDQvtC20YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY5MDAw!5e0!3m2!1sru!2sua!4v1648638202968!5m2!1sru!2sua"       width={styleMap.width} 
      height={styleMap.height} 
      style={{ border: 0 }} 
      allowfullscreen={styleMap.allowfullscreen} 
      loading={styleMap.loading} 
      referrerpolicy={styleMap.referrerpolicy}>
      </iframe>
    </div>
    <div>
    

      <div className={classes.social}>
      <div className={classes.adressBlock}>г. Запорожье, пр. Соборный 153 12-й подъезд, 2-й этаж 131</div>
        <div className={classes.icon}>
          <img className={classes.iconImg} src={insta} alt="img" />
          <img src={telega} alt="img" />
          </div>
      </div>
    </div>
    </div>
  );
};

export default Map;

