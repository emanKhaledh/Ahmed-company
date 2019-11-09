import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import NavBar from './RightNav';
import Asx from './main/Asx';
import Static  from './main/static'
import AdminInfo from './main/admin-info'
import projects from './main/projects'
import CompanyDetails  from './main/company-details'


class HomeAdmin extends Component {
  render() {
    return (
      <div>
   
     
       <BrowserRouter>
                  
                    {/* {window.location.pathname.includes ('/admin') &&    <NavBar /> } */}
                    <NavBar /> 
                    <Switch>
                      <Route path="/admin/asx" component={Asx} />
                      <Route  path="/admin/static" component={Static} /> 
                      <Route  path="/admin/AdminInfo" component={AdminInfo} /> 
                      <Route  path="/admin/projects" component={projects} /> 
                      <Route  path="/admin/CompanyDetails" component={CompanyDetails } /> 
                    </Switch>
         
                </BrowserRouter>
      </div>
    );
  }
}

export default HomeAdmin;