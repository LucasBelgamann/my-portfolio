import React, { useState } from 'react'
import about from './aboutME.jpeg';
import './About.css';
import translate from './translate.png'

export default function About() {
  const [isTranslate, setIsTranslate] = useState();

  function handleClick() {
    setIsTranslate(!isTranslate);
  };

  return (
    <div>
      <div className='about' id="about-me">
        <div>
            <img src={ about } alt="about" className='foto-about' />
        </div>
        <div className='text-about'>
          <h1 className='title-about'>About me</h1>
          <div className='line'></div>
            {isTranslate ? (<p>Eu sou Lucas Agostinho, tenho 21 anos e nasci na cidade de Pinhais no Estado do Paraná. Atualmente estou no ramo industrial, estagiando e aprendendo um pouco sobre esse ambiente, entretanto estou em busca de uma nova especialização, na área de tecnologia, mas especificamente no curso de desenvolvimento web na <a className='trybe' href='https://www.betrybe.com/' target="blank">Trybe</a>, uma das melhores escolas de programação do Brasil. Sou uma pessoa que está em constante adaptação, sempre buscando novas caminhos para percorrer.</p>)
             : 
            ( <p>I am Lucas Agostinho, I am 21 years old and I was born in the city of Pinhais in the state of Paraná. Currently I am in the industrial sector, doing an internship and learning a bit about this environment, however I am in search of a new specialization, in the technology area, but specifically in the web development course at <a className='trybe' href='https://www.betrybe.com/' target="blank">Trybe</a>, one of the best programming schools in Brazil. I am a person who is in constant adaptation, always looking for new ways to go.</p>)
             }
            <img src={ translate } alt="translate" className='translate' onClick={ handleClick } />
        </div>
      </div>
    </div>
  )
}
