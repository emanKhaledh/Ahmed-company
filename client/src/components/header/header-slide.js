import React, { Component } from 'react';
import './index.css'
import Nav from './nav.js';
import Button from './button.js'


class Header extends  Component {
  constructor(props){
    super(props);
    this.state ={

    }
  }
  render(){
    return(
      <div>
          <div className='imageHeader'>
         
        
           </div>  
           <div className="header--style"> 
          
          <h2>شركة الالمونيوم</h2> 
          <p> الشركات مع ازدهار الحركة التجارية وتوسّع انتشارها بسبب العولمة وعالم ... عن تسديد التزامات واحتياجات الشركة، يتكون اسم هذا النوع من الشركات من اسم ...</p>
          <a href ='#' class="button--style">تواصل معنا</a>
          <a href ='#'  class="button--style">أعمالنا</a>
          </div>
           <Nav /> 
         

      </div>
    )
  }

}

export default Header;