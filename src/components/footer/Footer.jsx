import React from 'react';
import git from '../images/gitHub.png';
import linkedin from '../images/linkedin.png';
import './Footer.css';

export default function Footer() {
  return (
    <div>
      <div className='pai-contact' id="footer">
        <div className='form-contact'>
            <form action="https://api.staticforms.xyz/submit" method='post'>
                <input type="hidden" name="accessKey" value="a90e6195-838c-47e5-90c0-80ba0cda36fd" />
                <input type="hidden" name="redirectTo" value="https://portfolio-beta-navy.vercel.app/#footer"></input>
                <div className='form'>
                  <input type='text' name="name" placeholder='Enter your name' />
                  <textarea name="message" className='text-area' placeholder='Enter your menssage'/>
                </div>
                  <button type='submit'>Submit</button>
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
