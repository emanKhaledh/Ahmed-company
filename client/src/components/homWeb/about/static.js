import React from 'react';
import imageCover from './stage-company.jpg'


const StaticImg= ({}) =>{

  
  return(
    <div className="static-img">

   <img  src={imageCover} alt="dddddddddddddd" style={{width:'100%',maxHeight:'200px'}}/>
  <div className="content">
  <div>
    <h1>500</h1>
    <p> عملائنا</p>
   </div>
  <div> 
    <h1>500</h1>

    <p> المشاريع </p>
    </div>
  <div>
    <h1>500</h1>
    <p> المشاريع المنجز</p>
  </div>
  <div>
    <h1>500</h1>
    <p> ساعات العمل</p>
    </div>

  </div>
  </div>

  )
}



export default StaticImg;