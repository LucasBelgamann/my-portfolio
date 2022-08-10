import React from 'react';
import comming from '../images/commingSoon.png';
import HeaderDois from '../headerDois/HeaderDois';

export default function BackEnd() {
  return (
    <div>
      <HeaderDois />
      <div className='pai-back'>
        <img className='comming' src={ comming } />
      </div>
    </div>
  )
}
