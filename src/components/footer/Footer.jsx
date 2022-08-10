import React from 'react';
import git from '../images/gitHub.png';
import linkedin from '../images/linkedin.png';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <div className='pai-contact'>
        <div className='form-contact'>
            <form>
                <input type='email' placeholder='Digite seu e-mail' />
                <button type='button'>Submit</button>
            </form>
        </div>
        <div className='contact'>
            <a href='https://github.com/LucasBelgamann' target="blank">
                <img src={ git } alt="icon-git" />
            </a>
            <a href='https://www.linkedin.com/in/lucas-gabriel-belgamann-2b0497174/' target="blank">
                <img src={ linkedin } alt="icon-linkedin" />
            </a>
        </div>
      </div>
    </div>
  )
}
