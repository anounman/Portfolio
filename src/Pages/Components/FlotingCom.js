import React from 'react';
import "../CompCSs/FloatingComp.css";

function FlotingCom({image, txt1, txt2}) {
  return (
    <div className='FloatingComp'>
        <img src={image} alt=""/>
        <span>
            {txt1}<br/>
            {txt2}
        </span>
    </div>
  )
}

export default FlotingCom