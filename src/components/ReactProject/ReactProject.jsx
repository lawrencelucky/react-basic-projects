import React, { Component } from 'react';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Footer from './../Footer/Footer';

class ReactProject extends Component {
  state = {
    dark: false,
  };

  handleChangeMode = () => {
    this.setState({ dark: !this.state.dark });
    localStorage.setItem('mode', this.state.dark);
  };

  render() {
    return (
      <React.Fragment>
        <Header mode={this.state.dark} handleChange={this.handleChangeMode} />
        <Projects mode={this.state.dark} />
        <Footer mode={this.state.dark} />
      </React.Fragment>
    );
  }
}

export default ReactProject;
