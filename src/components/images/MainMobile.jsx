import React from 'react'
import trivia from '../images/trivia2.png';
import spotiTunes from '../images/spotiTunes.png';
import card from '../images/card.png';
import './Main.css'

const MainMobile = () => {
  return (
    <div>
      <div className='o-pai-mobile phone'>
      <div className='squad-mobile phone'>
        <div className='container-squad-mobile phone'>
          <div className='logo-and-btn-mobile phone'>
            <h3>GameTrivia</h3>
            <img src={ trivia } alt="foto-trivia" className='trivia-logo-mobile phone' />
              <p className='description-mobile phone'>O Game Trivia é um jogo de perguntas e respostas, onde o usuário tem trinta segundos para responder uma sequência de cinco perguntas.</p>
            <button className='btn-card-projects-mobile phone'><a href="https://project-trivia-three.vercel.app/" target="blank">See more...</a></button>
          </div>
        </div>
      </div>
      <div className='squad-mobile phone'>
        <div className='container-squad-mobile phone'>
          <div className='logo-and-btn-mobile phone'>
            <h3>SpotiTunes</h3>
            <img src={ spotiTunes } alt="foto-trivia" className='trivia-logo-mobile phone' />
              <p className='description-mobile phone'>O projeto spotiTunes é um site onde o usuário tem a possibilidade de pesquisar pelo nome do album ou de um artista e obter uma prévia de sua musica</p>
            <button className='btn-card-projects-mobile phone'><a href="https://spoti-tunes.vercel.app/" target="blank">See more...</a></button>
          </div>
        </div>
      </div>
      <div className='squad-mobile phone'>
        <div className='container-squad-mobile phone'>
          <div className='logo-and-btn-mobile phone'>
            <h3>CardTriunfo</h3>
            <img src={ card } alt="foto-trivia" className='trivia-logo-mobile phone' />
              <p className='description-mobile phone'>O projeto CardTriunfo é um site onde o usuário tem a possibilidade de criar a sua carta personalizada.</p>
            <button className='btn-card-projects-mobile phone'><a href="https://triunfo-three.vercel.app/" target="blank">See more...</a></button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainMobile
