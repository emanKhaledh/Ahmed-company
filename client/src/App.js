import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import './App.css';

import Home from './components/homWeb/index'
import HomeAdmin from './components/adminPanel/index'

class App extends Component {
  render() {
    return (
      <div className="App">

                <BrowserRouter>
                  
                    {/* {window.location.pathname.includes ('/admin') &&    <NavBar /> } */}
                  
                    <Switch>
                      <Route path="/admin" component={ HomeAdmin } />
                      <Route excat path="/" component={Home} /> 
                    </Switch>
         
                </BrowserRouter>
      </div>
    );
  }
}

export default App;
