import React, { Component } from 'react';
import Paragraph from './../paragraph.js';
import CardImage from './card-image'
import './index.css'



  
class Service extends Component {
  constructor(props){
    super(props)
    this.state = {
   

    }
  }
  render(){
    return(<div>
      <Paragraph titel="أعمالنا  " description="لشركات مع ازدهار الحركة التجارية وتوسّع انتشارها بسبب العولمة وعالم ... عن تسديد التزامات واحتياجات الشركة، يتكون اسم هذا النوع من الشركات من اسم"
      />
      <CardImage />
    </div>)
  }
}

export default Service;