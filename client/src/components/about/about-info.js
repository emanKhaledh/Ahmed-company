import React from 'react';
import './index.css';
import person from './persone.jpg'
import Asx from './asx.js'

const AboutInfo= () =>(
  <div className="aboutInfo--style">
 <div className="infoImage">

 </div>
<div className="infoAsx ">
<Asx ask={[{q:'how are you',a:'fine '} ,{q:'what is your name',a:'emaaaan'},{q:'where are you from',a:'gaza'}]}/>
</div>

  </div>
)

export default AboutInfo;