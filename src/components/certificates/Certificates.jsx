import React, { useContext, useState } from "react";
import HeaderDois from '../headerDois/HeaderDois'
import certificate from "./images3/certificate.png";
import certTrybe from "./images3/trybeCert.jpg";
import "./Certificates.css";
import Context from "../context/Context";

export default function Certificates() {
    const [isTrue, setIsTrue] = useState(false);
    const { isTranslate } = useContext(Context);
  return (
    <div>
      <HeaderDois />
      <div className="pai-certificates">
        <div className="card-certificate" onMouseEnter={ () => setIsTrue(true) } onMouseLeave={() => setIsTrue(false)}>
          <div className="img-btn">
            <img src={certificate} alt="icon-certificate" />
            <button type="button" className="btn-certificate"><a href="https://www.credential.net/a74ee6f1-a797-4fbf-8a5e-4f32b0ea2ed1#gs.8qfwzu" target="blank">{isTranslate ? "Saiba mais..." : "See more..."}</a></button>
          </div>
            {isTrue && (
              <div>
              <h4 className="text">{isTranslate ? "Descrição" : "Description"}</h4>
              {isTranslate ? (
                (<p className="desc">
                  O projeto CardTriunfo é um site onde o usuário tem a
                  possibilidade de criar a sua carta personalizada.
                </p>)
              ) : (
                <p className="desc">
                  The CardTriumph project is a site where the user has the
                  possibility to create his own personalized card.
                </p>)}
            </div>
            )}
        </div>
      </div>
    </div>
  );
}
