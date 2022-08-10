import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
import background from '../images/backEnd.jpg'
import backgroundFront from '../images/FrontEnd.jpeg'

export default function Projects() {
  return (
    <div>
      <div className="cards-projects" id="projects">
        <div className="card">
          <div className="front-end">
            <h2>
              Front-<span>end</span>
            </h2>
            <img src={backgroundFront} />
            <Link to="/front-end">
              <button type="button">See more...</button>
            </Link>
          </div>
        </div>
        <div className="card">
          <div className="back-end">
            <h2>
              Back-<span>end</span>
            </h2>
            <img src={background} />
            <Link to="/back-end">
              <button type="button">See more...</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
