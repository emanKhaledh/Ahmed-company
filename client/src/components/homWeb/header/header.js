
import React, { Component } from 'react';
import imageCover from './cover.jpg'
import './style.css'


  
class Header extends Component {
  constructor(props){
    super(props)
    this.state = { 
 count : 0
    }
  }

  render(){
  
    return(


  <div className="containerWeb1">    
  <img  src={imageCover} alt="dddddddddddddd" style={{width:'100%'}}/>
 <div className="content-header">
 <div className="pargrph-style">
 {/* <h1>شركة أحمد لألمنيوم </h1> */}

 </div>
 </div>
 </div>
    )
  }
  

}
export default Header;