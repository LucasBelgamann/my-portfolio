import React, { useContext } from "react";
import Context from "../context/Context";
import git from "../images/gitHub.png";
import linkedin from "../images/linkedin.png";
import curriculo from './curriculo.pdf';
import download from './download.png';
import "./Footer.css";

export default function Footer() {
  const { isTranslate } = useContext(Context);
  return (
    <div>
      <div className="pai-contact" id="footer">
        <div className="form-contact">
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input
              type="hidden"
              name="accessKey"
              value="a90e6195-838c-47e5-90c0-80ba0cda36fd"
            />
            <input
              type="hidden"
              name="redirectTo"
              value="https://portfolio-beta-navy.vercel.app/#footer"
            ></input>
            <div className="form">
              <div className="inputs">
                <input type="text" name="name" placeholder={ isTranslate ? ('Coloque seu nome') : ('Enter your name')} />
                <textarea
                  name="message"
                  className="text-area"
                  placeholder={ isTranslate ? ('Coloque sua mensagem') : ('Enter your menssage')}
                />
              </div>
              <div className="btns-form">
                <button type="submit">{ isTranslate ? ('Enviar') : ('Submit')}</button>
                <button type="button" className="down">
                  <a href={ curriculo } download>
                  { isTranslate ? ('Baixar CV') : ('Download CV')}
                  </a>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="contact">
          <a href="https://github.com/LucasBelgamann" target="blank">
            <img src={git} alt="icon-git" />
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-gabriel-belgamann-2b0497174/"
            target="blank"
          >
            <img src={linkedin} alt="icon-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
