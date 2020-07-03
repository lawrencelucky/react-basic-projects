import React, { Component } from 'react';
import logoImage from '../../asset/icons/react-logo.svg';
import externalLinkIcon from '../../asset/icons/external-link.svg';
import './Projects.scss';

class Projects extends Component {
  state = {
    projects: [
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
      },
      {
        title: 'Card title',
        text: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
        link: 'https://www.google.com/',
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          {this.state.projects.map((project) => (
            <div className='card' style={{ width: '22rem' }}>
              <img
                src={logoImage}
                className='logo-img card-img-top'
                alt='logo-img'
              />
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
      </React.Fragment>
    );
  }
}

export default Projects;
