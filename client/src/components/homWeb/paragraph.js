import React from 'react';


const Paragraph = ({titel, description}) =>{

  
  return(
    <div className="aboutTitel--style">


    <h2>{titel}</h2>
    <p> {description} </p>
    
  </div>
    
  )
}



export default Paragraph;