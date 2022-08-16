import React, { useContext } from "react";
import css from "../hards/images/css.png";
import gitGub from "../hards/images/gitGub.png";
import html from "../hards/images/html.png";
import javaScript from "../hards/images/javaScript.png";
import mySql from "../hards/images/mySql.png";
import react from "../hards/images/react.png";
import redux from "../hards/images/redux.png";
import nodeJs from "../hards/images/node-js.png";
import linux from "../hards/images/linux.png";
import reactTesting from "../hards/images/reactTesting.png";
import reactRouter from "../hards/images/reactRouter.png";
import arrowlefth from "./images2/arrow-lefth.png";
import arrowRight from "./images2/arrow-right.png";
import "./HardsNew.css";
import Context from "../context/Context";

export default function HardsNew() {
  const { isTranslate } = useContext(Context);
  let currentItem = 0;
  const maxItems = 10;
  console.log(maxItems);
  const handleArrow = (target) => {
    const controls = document.querySelectorAll(".control");
    const items = document.querySelectorAll(".item");
    if (target.classList.contains("arrow-left")) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }
    if (currentItem >= items.length) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }
    items[currentItem].scrollIntoView({
      inline: "center",
    });
  };

  return (
    <div className="container">
      <h2 id="title-hardss">{isTranslate ? "Habilidades" : "Hards skills"}</h2>
      <button
        type="button"
        onClick={({ target }) => handleArrow(target)}
        value="Back"
      >
        <img src={arrowlefth} className="arrow-left control" alt="img-button" />
      </button>
      <button
        type="button"
        aria-label="Previous image"
        onClick={({ target }) => handleArrow(target)}
      >
        <img
          src={arrowRight}
          className="arrow-right control"
          alt="img-button"
        />
      </button>
      <div className="gallery-wrapper">
        <div className="gallery">
        <a
            target="blank"
            href="https://www.techtudo.com.br/noticias/2012/04/o-que-e-e-como-usar-o-mysql.ghtml"
          >
            <div className="card-hard">
              <h1>My sql</h1>
              <img
                src={mySql}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a target="blank" href="https://pt-br.reactjs.org/">
            <div className="card-hard">
              <h1>React</h1>
              <img
                src={react}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a target="blank" href="https://redux.js.org/">
            <div className="card-hard">
              <h1>Redux</h1>
              <img
                src={redux}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a
            target="blank"
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          >
            <div className="card-hard">
              <h1>CSS</h1>
              <img
                src={css}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a
            target="blank"
            href="https://www.techtudo.com.br/listas/2021/05/o-que-e-o-github-veja-para-que-serve-a-rede-social-de-programadores.ghtml"
          >
            <div className="card-hard">
              <h1>Git hub</h1>
              <img
                src={gitGub}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a
            target="blank"
            href="https://developer.mozilla.org/pt-BR/docs/Web/javaScript"
          >
            <div className="card-hard">
              <h1>Java Script</h1>
              <img
                src={javaScript}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a
            target="blank"
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
          >
            <div className="card-hard">
              <h1>HTML</h1>
              <img
                src={html}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a target="blank" href="https://www.opus-software.com.br/node-js/">
            <div className="card-hard">
              <h1>Node js</h1>
              <img
                src={nodeJs}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a target="blank" href="https://www.vivaolinux.com.br/linux/">
            <div className="card-hard">
              <h1>Linux</h1>
              <img
                src={linux}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a
            target="blank"
            href="https://testing-library.com/docs/react-testing-library/intro/"
          >
            <div className="card-hard">
              <h1>React testing</h1>
              <img
                src={reactTesting}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
          <a
            target="blank"
            href="https://v5.reactrouter.com/web/guides/quick-start"
          >
            <div className="card-hard">
              <h1>React router</h1>
              <img
                src={reactRouter}
                alt="css-foto"
                aria-label="Next image"
                className="item current-item"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
