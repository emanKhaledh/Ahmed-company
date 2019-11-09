import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-admin">
       
        <div className="navbar-list">
          <NavLink className="navbar-item" to="/" >الصفحة الرئيسية</NavLink>
          <NavLink className="navbar-item" to="/admin/projects" activeClassName="chosen">أعمالنا</NavLink>
          <NavLink className="navbar-item" to="/admin/static" activeClassName="chosen">الاحصائيات</NavLink>
          <NavLink className="navbar-item" to="/admin/CompanyDetails" activeClassName="chosen">معلومات الشركة</NavLink>
          <NavLink className="navbar-item" to="/admin/asx" activeClassName="chosen">الأسئلة</NavLink>
         
        
          <NavLink className="navbar-item" to="/admin/AdminInfo" activeClassName="chosen">الصورة الشخصية</NavLink>

        </div>
      </div>
    )
  }
}

export default NavBar;