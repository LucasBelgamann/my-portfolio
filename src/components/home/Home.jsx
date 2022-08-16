import React, { useContext, useState } from 'react'
import './Home.css'
import About from '../about/About'
import Projects from '../projects/Projects'
import HardsNew from '../hardsNew/HardsNew'
import HeaderDois from '../headerDois/HeaderDois'
import sun from './sun.png';
import mon from './mon.png';
import Footer from '../footer/Footer'
import Context from '../context/Context'


export default function Home() {
  const [isClick, setIsClick] = useState(false);
  const { isTranslate } = useContext(Context);

  const handleClick = () => {
    setIsClick(!isClick);
  }

  return (
    <div>
      <HeaderDois />
      <div className='pai-home'>
        <div className='name-title'>
        <img className='dark-mode' onClick={ handleClick } src={ isClick ? sun : mon } alt="icon-sun" /> 
          <h3>{ isTranslate ? ('Olá, eu me chamo') : ('Hello, my name is')}</h3>
          <h1>Lucas Agostinho</h1>
          <h5>{ isTranslate ? ('Desenvolvedor Front end') : ('front end developer')}</h5>
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
