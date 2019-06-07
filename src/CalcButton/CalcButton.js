import React from 'react';

import './CalcButton.css';

const CalcButton = ({keyId, displayed}) => {
  return (
    <button className='calc-button' id={keyId}>{displayed}</button>
  )
}

export default CalcButton;