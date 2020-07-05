import React, { Component } from 'react';
import './Projects.scss';
import '../../asset/icons/react-logo.svg';
import externalLinkIcon from '../../asset/icons/external-link.svg';

class Projects extends Component {
  state = {
    projects: [
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
        image: '',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
        image: '',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
        image: '',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
        image: '',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
        image: '',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
        image: '',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
        image: '',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
        image: '',
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
                <p className='card-text'>{project.text}</p>
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
