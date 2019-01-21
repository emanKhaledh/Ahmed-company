import React, { Component } from 'react';
import Header from './components/header/header-slide'
import { AboutTitel , AboutInfo} from './components/about/'
import './App.css';
import Learn from './components/learn'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <AboutTitel titel='ssssssssssss' info='wwwwwwwwwwwwwwww'/>
       <AboutInfo />
       <Learn />
      </div>
    );
  }
}

export default App;
