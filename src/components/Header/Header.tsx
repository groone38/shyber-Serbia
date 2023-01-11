import React, { useContext, useState } from 'react';
import logo from '../../images/logo.svg';
import burger from '../../images/ic_menu.png';
import close from '../../images/ic_close.png';
import logoOpen from '../../images/logoOpen.svg';
import EXPERTISE from '../../images/EXPERTISE.png';
import { OpenFormContext } from '../../context';
import Exp from './Exp';
import Team from './Team';
import Contacts from './Contacts';

const Header = () => {
  const open = useContext(OpenFormContext);
  const [openPopUp, setOpenPopUp] = useState(false);
  let stylePopUp = 'popup';
  if (openPopUp) {
    stylePopUp += ' popup__active';
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  const btn = () => {
    open.toggleForm();
    setOpenPopUp((prev) => !prev);
  };

  return (
    <div className="fixed">
      <header className={`header conteiner`}>
        {openPopUp ? <img src={logoOpen} alt="logo" /> : <img src={logo} alt="logo" />}
        <nav className={'header__nav'}>
          <ul>
            <li>
              <a href="#EXPERTISE">EXPERTISE</a>
            </li>
            <li>
              <a href="#team">our team</a>
            </li>
            <li>
              <a href="#contacts">contacts</a>
            </li>
          </ul>
          <a href="#form">
            <button className="btn" onClick={open.toggleForm}>
              start a project
            </button>
          </a>
        </nav>
        {openPopUp ? (
          <img
            src={close}
            alt="close"
            className="header__burger"
            onClick={() => setOpenPopUp((prev) => !prev)}
          />
        ) : (
          <img
            src={burger}
            alt="burger"
            className="header__burger"
            onClick={() => setOpenPopUp((prev) => !prev)}
          />
        )}
      </header>
      <div className={stylePopUp}>
        <div className="popup__nav">
          <div className='popup__link'>
            <a href="#EXPERTISE" onClick={() => setOpenPopUp((prev) => !prev)}>
              <Exp />
            </a>
            <a href="#team" onClick={() => setOpenPopUp((prev) => !prev)}>
              <Team />
            </a>
            <a href="#contacts" onClick={() => setOpenPopUp((prev) => !prev)}>
              <Contacts />
            </a>
          </div>
          <a href="#form">
            <button className="btn btn-mobile" onClick={btn}>
              start a project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
