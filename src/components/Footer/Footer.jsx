import React from 'react';
import './footer.scss';
import '../DarkMode/dark.scss';
import twitterIcon from '../../asset/icons/twitter-icon.svg';
import linkedInIcon from '../../asset/icons/linkedin-icon.svg';
import githubIcon from '../../asset/icons/github-icon.svg';

const Footer = () => {
  let classes = 'fixed-bottom';
  const mode = localStorage.getItem('mode');

  if (mode === 'false') {
    classes += ' dark';
  }

  return (
    <React.Fragment>
      <footer className={classes}>
        <div className='footer'>
          <div className='twitter-icon-container'>
            <a
              href='https://twitter.com/_lawrencelucky'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='icon twitter-icon'
                src={twitterIcon}
                alt='twitter-icon'
              />
            </a>
          </div>
          <div className='github-icon-container'>
            <a
              href='https://github.com/lawrencelucky'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='icon github-icon'
                src={githubIcon}
                alt='github-icon'
              />
            </a>
          </div>
          <div className='linkedIn-icon-container'>
            <a
              href='https://www.linkedin.com/in/lawrence-lucky/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='icon linkedIn-icon'
                src={linkedInIcon}
                alt='linkedIn-icon'
              />
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
