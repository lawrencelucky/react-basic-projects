import React, { Component } from 'react';
import './Projects.scss';
import '../../asset/icons/react-logo.svg';
import externalLinkIcon from '../../asset/icons/external-link.svg';

class Projects extends Component {
  state = {
    projects: [
      {
        title: 'Inc-Dec App',
        description: `Decreases the number if the subtraction sign is clicked and increases the number if the addition sign is clicked.`,
        link: 'https://inc-dec-counter.netlify.app/',
        image:
          'https://res.cloudinary.com/ddu7ud0f0/image/upload/v1594051410/incdec_ppiral.jpg',
      },
      {
        title: 'Moment App',
        description: `The moment is an app which tells the time and also gives you today's date.`,
        link: 'https://the-moment.netlify.app/',
        image:
          'https://res.cloudinary.com/ddu7ud0f0/image/upload/v1594207209/moment_wluskv.jpg',
      },
      {
        title: 'Simple Timer',
        description: `The simple timer is an app that takes in numbers as input and converts it to the respective time.`,
        link: 'https://the-basic-timer.netlify.app/',
        image:
          'https://res.cloudinary.com/ddu7ud0f0/image/upload/v1594654750/timer_hw0kup.jpg',
      },
    ],
  };

  render() {
    const mode = localStorage.getItem('mode');
    let classes = '';
    if (mode === 'false') {
      classes += ' dark';
    }

    return (
      <div className={classes}>
        <div className='project-container'>
          {this.state.projects.map((project, index) => (
            <div key={index} className='card' style={{ width: '22rem' }}>
              <div className='img-container'>
                <img src={project.image} className='logo-img card-img-top' />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>{project.title}</h5>
                <p className='card-text'>{project.description}</p>
                <div className='external-link-container'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src={externalLinkIcon}
                      className='external-link-logo'
                      alt='external-link-icon'
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Projects;
