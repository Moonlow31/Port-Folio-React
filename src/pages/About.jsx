/* eslint-disable react/no-unescaped-entities */
import HTML from "../assets/Images/html-5.svg";
import CSS from "../assets/Images/css-3.svg";
import JS from "../assets/Images/js.svg";
import NODE from "../assets/Images/node-js.svg";
import REACT from "../assets/Images/react.svg";
import THREE from "../assets/Images/threejs.svg";
import SCSS from "../assets/Images/scss.svg";

import "./About.css";

function About() {
  return (
    <div className="About">
      <div className="presentation">
        <p>
          Après plusieurs années dans le milieu de l'industrie aéronautique, je
          me suis lancé dans une reconversion professionnel afin de devenir{" "}
          <strong>Développeur Web</strong>.
        </p>
        <p>
          Je suis actuellement en formation à la Wild Code School, et{" "}
          <strong>je cherche une alternance de 15 mois</strong> à partir de{" "}
          <strong>septembre</strong> pour consolider mes acquis et gagner de
          nouvelles compétences.
        </p>
      </div>
      <div className="softSkills">
        <h4>Soft Skills :</h4>
        <ul>
          <li>Esprit d’équipe</li>
          <li>Flexibilité</li>
          <li>Rigueur</li>
          <li>Curieux</li>
        </ul>
      </div>
      <div className="hardSkills">
        <h4>Hard Skills :</h4>
        <div className="techLogos">
          <div className="logoHTML">
            <img src={HTML} alt="logo html" />
            <p>HTML 5</p>
          </div>
          <div className="logoCSS">
            <img src={CSS} alt="logo css" />
            <p>CSS 3</p>
          </div>
          <div className="logoJS">
            <img src={JS} alt="logo js" />
            <p>Java Script</p>
          </div>
          <div className="logoReact">
            <img src={REACT} alt="logo react" />
            <p>React</p>
          </div>
          <div className="logoNode">
            <img src={NODE} alt="logo node" />
            <p>Node JS</p>
          </div>
          <div className="logoThree">
            <img src={THREE} alt="logo three" />
            <p>Three JS</p>
          </div>
          <div className="logoSCSS">
            <img src={SCSS} alt="logo scss" />
            <p>SCSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
