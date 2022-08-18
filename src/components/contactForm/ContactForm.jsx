import React from 'react';
import classes from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [tel, setTel] = React.useState('');

  return (
    <div className={classes.contact}>
      <div className={classes.contactBlock}>
        <div className={classes.contactTitle}>Оставьте свои данные и мы вам перезвоним</div>
        <form className={classes.contactForm}>
          <input
            onChange={e => setName(e.target.value)}
            value={name}
            type='text'
            placeholder='Имя'
          />
          <input
            onChange={e => setTel(e.target.value)}
            value={tel}
            type='tel'
            placeholder='Номер телефона'
          />
          <button className={classes.formBtn}>Отправить</button>
        </form>
      </div>
      <div className={classes.contactTel}>
        <div className={classes.phone}>+38 (099) 303-03-03</div>
        <div className={classes.email}>zp.tattoo@gmail.com</div>
        <div className={classes.line}></div>
        <div className={classes.adress}>
          г. Запорожье, пр. Соборный 153 12-й подъезд, 2-й этаж 131
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
