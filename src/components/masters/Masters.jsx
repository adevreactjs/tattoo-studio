import React from 'react'
import classes from './Masters.module.css'
import master1 from '../img/master1.jpg'
import master from '../img/master.jpg'
import master3 from '../img/master3.jpg'
const Masters = () => {
  return (
      <div>
    <div className={classes.mastersTitle}>
        <div className={classes.line}></div>
        <div className={classes.title}>Тату Бог</div>
        <div className={classes.line}></div>
    </div>
    <div className={classes.masterCart}>
        {/* <div className={classes.cart}>
            <img className={classes.masterImg} src={master1} alt="img" />
            <button className={classes.masterBtn}>ПОДРОБНЕЕ</button>
        </div> */}
        <div className={classes.cart}>
            <img className={classes.masterImg} src={master} alt="img" />
            <button className={classes.masterBtn}>ПОДРОБНЕЕ</button>
        </div>
        {/* <div className={classes.cart}>
            <img className={classes.masterImg} src={master3} alt="img" />
            <button className={classes.masterBtn}>ПОДРОБНЕЕ</button>
        </div> */}
    </div>
    </div>
  )
}

export default Masters