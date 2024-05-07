/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <main>
      <img src="#" alt="picture of franck" />
      <section>
        <div className="title">
          <p id="greetings">Hello everyone !</p>
          <h2>
            I'm <strong>Franck Herpoux</strong>
          </h2>
          <p id="status">A junior Web Developer</p>
        </div>
        <div className="buttons">
          <Link to="/ProjectsPage">
            <button>MY WORKS</button>
          </Link>
          <Link to="/ContactPage">
            <button>CONTACT ME</button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
