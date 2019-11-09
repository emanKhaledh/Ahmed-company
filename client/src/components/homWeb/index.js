import React, { Component } from 'react';

import AboutInfo from './about/index'

import Service from './service/index';
import Nav from './header/nav';

import Header from './header/header';
import Footer from './footer/index';


class Home extends Component {
  render() {
    return (
      <div>
       <Nav /> 
       <Header />
       <AboutInfo />
       <Service />
       <Footer />
      </div>
    );
  }
}

export default Home;
