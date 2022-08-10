import React, { useState } from 'react'
import './Home.css'
import About from '../about/About'
import Projects from '../projects/Projects'
import HardsNew from '../hardsNew/HardsNew'
import HeaderDois from '../headerDois/HeaderDois'
import sun from './sun.png';
import mon from './mon.png';
import Footer from '../footer/Footer'


export default function Home() {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
  }

  return (
    <div>
      <HeaderDois />
      <div className='pai-home'>
        <div className='name-title'>
        <img className='dark-mode' onClick={ handleClick } src={ isClick ? sun : mon } alt="icon-sun" /> 
          <h3>Hello, my name is</h3>
          <h1>Lucas Agostinho</h1>
          <h5>front end developer</h5>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        {/* <Hards /> */}
        <HardsNew />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
