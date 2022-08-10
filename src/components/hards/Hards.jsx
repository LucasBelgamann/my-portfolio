import React from 'react';
import css from './images/css.png'
import gitGub from './images/gitGub.png'
import html from './images/html.png'
import javaScript from './images/javaScript.png'
import mySql from './images/mySql.png'
import react from './images/react.png'
import redux from './images/redux.png'
import nodeJs from './images/node-js.png'
import linux from './images/linux.png'
import reactTesting from './images/reactTesting.png'
import reactRouter from './images/reactRouter.png'
import './Hards.css';

export default function Hards() {
  return (
    <div className='pai-hards'>
      <div className='hards-container'>
        <div>
            <h1 className='title-hards' id='title-hardss'>Hard Skills</h1>
        </div>
        <div>
            <a target="blank" href='https://developer.mozilla.org/pt-BR/docs/Web/CSS'>
                <img src={ css } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://www.techtudo.com.br/listas/2021/05/o-que-e-o-github-veja-para-que-serve-a-rede-social-de-programadores.ghtml'>
                <img src={ gitGub } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://developer.mozilla.org/pt-BR/docs/Web/HTML'>
                <img src={ html } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://developer.mozilla.org/pt-BR/docs/Web/javaScript'>
                <img src={ javaScript } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://www.techtudo.com.br/noticias/2012/04/o-que-e-e-como-usar-o-mysql.ghtml'>
                <img src={ mySql } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://pt-br.reactjs.org/'>
                <img src={ react } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://redux.js.org/'>
                <img src={ redux } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://www.opus-software.com.br/node-js/'>
                <img src={ nodeJs } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://www.vivaolinux.com.br/linux/'>
                <img src={ linux } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://testing-library.com/docs/react-testing-library/intro/'>
                <img src={ reactTesting } />
            </a>
        </div>
        <div>
            <a target="blank" href='https://v5.reactrouter.com/web/guides/quick-start'>
                <img src={ reactRouter } />
            </a>
        </div>
      </div>
    </div>
  )
}
