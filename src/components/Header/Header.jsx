import React from 'react';
import './header.scss';
import sunIcon from '../../asset/icons/sun-icon.svg';
import moonIcon from '../../asset/icons/full-moon-icon.svg';

const Header = ({ handleChange }) => {
  const mode = localStorage.getItem('mode');
  let classes = 'header fixed-top';
  let img = <img src={moonIcon} alt='moon-icon' className='icon' />;

  if (mode === 'false') {
    img = <img src={sunIcon} alt='sun-icon' className='icon' />;
    classes += ' dark';
  }

  return (
    <header className={classes}>
      <h2>Beginner React Projects</h2>
      <div onClick={handleChange}>{img}</div>
    </header>
  );
};

export default Header;
