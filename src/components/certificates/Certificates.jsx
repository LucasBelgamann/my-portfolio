import React, { useState } from "react";
import HeaderDois from '../headerDois/HeaderDois'
import certificate from "./images3/certificate.png";
import certTrybe from "./images3/trybeCert.jpg";
import "./Certificates.css";

export default function Certificates() {
    const [isTrue, setIsTrue] = useState(false);
  return (
    <div>
      <HeaderDois />
      <div className="pai-certificates">
        <div className="card-certificate" onMouseEnter={ () => setIsTrue(true) } onMouseLeave={() => setIsTrue(false)}>
          <div className="img-btn">
            <img src={certificate} alt="icon-certificate" />
            <button type="button" className="btn-certificate"><a href="https://www.credential.net/a74ee6f1-a797-4fbf-8a5e-4f32b0ea2ed1#gs.8qfwzu" target="blank">See more...</a></button>
          </div>
          <div>
            {isTrue && (<p className="desc">Certificado do módulo de fundamentos conquistado dentro da instituição da Trybe</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}
