import React from 'react';

import logo  from '../assets/logo.png'

export const AppBar = () => {
  return (
    <div
        className='appBar'>
            <div className='appBar__boxRigth'>
              <img src={logo}
              alt='logo'></img>
            </div>
            <div className='appBar__boxLeft'></div>
    </div>
  )
}
