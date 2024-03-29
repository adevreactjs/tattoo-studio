import React, { useState } from 'react';
import classes from './Header.module.css';
import logo from '../img/logo.png';
import menu from '../img/menu.svg';
import { Link } from 'react-router-dom';
import closeIcon from '../img/close.svg';

const Header = () => {
  const [menuItem, setMenu] = useState(false);

  function onClickMenu() {
    setMenu(!menuItem);
  }
  function onClose() {
    setMenu(false);
  }
  return (
    <div>
      <div className={classes.background}>
        <div className={classes.menuItems}>
          <div>
            <Link to='/tattoo-studio'>
              <img className={classes.logo} src={logo} alt='logo'></img>
            </Link>
          </div>
          <div className={classes.navBar}>
            <div>
              <Link className={classes.menuTitle} to='/tattoo-studio/about'>
                О нас
              </Link>
            </div>
            <div>
              <Link className={classes.menuTitle} to='/tattoo-studio/gallery'>
                Галерея
              </Link>
            </div>
            <div className={classes.menuTitle}>
              <Link className={classes.menuTitle} to='/tattoo-studio/master'>
                Наш мастер
              </Link>
            </div>

            <div>
              <Link className={classes.menuTitle} to='/tattoo-studio/contacts'>
                Контакты
              </Link>
            </div>
          </div>
          <div onClick={onClickMenu} className={classes.block}>
            <div className={classes.burgerMenu}>
              <img src={menu} alt='img' />
              <img src={menu} alt='img' />
              <img id='last' src={menu} alt='img' />
            </div>
          </div>
        </div>
      </div>
      {menuItem && (
        <div class={classes.mobileMenu}>
          <div onClick={onClose} class={classes.closeBtn}>
            <img src={closeIcon} alt='img' />
          </div>
          <div class={classes.mobileMenuItems}>
            <Link className={classes.mobileMenuItem} to='/tattoo-studio/about'>
              О нас
            </Link>
            <Link className={classes.mobileMenuItem} to='/tattoo-studio/gallery'>
              Галерея
            </Link>
            <Link className={classes.mobileMenuItem} to='/tattoo-studio/master'>
              Наш мастер
            </Link>
            <Link className={classes.mobileMenuItem} to='/tattoo-studio/contacts'>
              Контакты
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
