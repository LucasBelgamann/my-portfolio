import React, { useContext, useState } from "react";
import trivia from "../images/trivia2.png";
import spotiTunes from "../images/spotiTunes.png";
import card from "../images/card.png";
import "./Main.css";
import HeaderDois from "../headerDois/HeaderDois";
import Context from "../context/Context";

const Main = () => {
  const [isClick, setClick] = useState(false);
  const [isClick2, setClick2] = useState(false);
  const [isClick3, setClick3] = useState(false);
  const { isTranslate } = useContext(Context);
  return (
    <>
      <HeaderDois />
      <div className="o-pai media">
        <div
          className="squad media"
          onMouseEnter={() => setClick(!isClick)}
          onMouseLeave={() => setClick(false)}
        >
          <div className="container-squad media">
            <div className="logo-and-btn media">
              <h3>GameTrivia</h3>
              <img src={trivia} alt="foto-trivia" className="trivia-logo" />
              <button className="btn-card-projects media">
                <a
                  href="https://project-trivia-three.vercel.app/"
                  target="blank"
                >
                  {isTranslate ? "Saiba mais..." : "See more..."}
                </a>
              </button>
            </div>

            {isClick && (
              <div>
                <h4 className="text">{isTranslate ? "Descrição" : "Description"}</h4>
                {isTranslate ? (
                  <p className="description media">
                    O Game Trivia é um jogo de perguntas e respostas, onde o
                    usuário tem trinta segundos para responder uma sequência de
                    cinco perguntas.
                  </p>
                ) : (
                  <p className="description media">
                    Game Trivia is a quiz game, where the user has thirty
                    seconds to answer a sequence of five questions.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        <div
          className="squad media"
          onMouseEnter={() => setClick2(true)}
          onMouseLeave={() => setClick2(false)}
        >
          <div className="container-squad media">
            <div className="logo-and-btn media">
              <h3>SpotiTunes</h3>
              <img
                src={spotiTunes}
                alt="foto-trivia"
                className="trivia-logo media"
              />
              <button className="btn-card-projects media">
                <a href="https://spoti-tunes.vercel.app/" target="blank">
                  {isTranslate ? "Saiba mais..." : "See more..."}
                </a>
              </button>
            </div>
            {isClick2 && (
              <div>
                <h4 className="text">{isTranslate ? "Descrição" : "Description"}</h4>
                {isTranslate ? (
                  <p className="description media">
                    O projeto spotiTunes é um site onde o usuário tem
                    possibilidade de pesquisar pelo nome do album ou de um
                    artista e obter uma prévia de sua musica.
                  </p>
                ) : (
                  <p className="description media">
                    The spotiTunes project is a site where the user has the
                    possibility to search by album or artist name and get a
                    preview of the song.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        <div
          className="squad media"
          onMouseEnter={() => setClick3(true)}
          onMouseLeave={() => setClick3(false)}
        >
          <div className="container-squad media">
            <div className="logo-and-btn media">
              <h3>CardTriunfo</h3>
              <img src={card} alt="foto-trivia" className="trivia-logo media" />
              <button className="btn-card-projects media">
                <a href="https://triunfo-three.vercel.app/" target="blank">
                  {isTranslate ? "Saiba mais..." : "See more..."}
                </a>
              </button>
            </div>
            {isClick3 && (
              <div className="decription-project">
                <h4 className="text">{isTranslate ? "Descrição" : "Description"}</h4>
                {isTranslate ? (
                  <p className="description media">
                    O projeto CardTriunfo é um site onde o usuário tem a
                    possibilidade de criar a sua carta personalizada.
                  </p>
                ) : (
                  <p className="description media">
                    The CardTriumph project is a site where the user has the
                    possibility to create his own personalized card.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
