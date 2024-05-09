import location from "../assets/Images/logo_location.svg";
import phone from "../assets/Images/logo_tel.svg";
import email from "../assets/Images/logo_email.svg";
import github from "../assets/Images/logo_github.svg";
import linkedin from "../assets/Images/logo_linkedin.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="location">
        <img src={location} alt="location logo" />
        <div className="BlockLoc">
          <h3>Adress</h3>
          <p>16 Avenue de la Plaine, 31700 Mondonville</p>
        </div>
      </section>
      <hr />
      <section className="phone">
        <img src={phone} alt="phone logo" />
        <div className="BlockPhone">
          <h3>Phone</h3>
          <p>06.29.69.02.85</p>
        </div>
      </section>
      <hr />
      <section className="email">
        <img src={email} alt="email logo" />
        <div className="BlockMail">
          <h3>Mail</h3>
          <p>herpouxfranck@hotmail.fr</p>
        </div>
      </section>
      <hr />
      <section className="github">
        <img src={github} alt="github logo" />
        <div className="BlockGithub">
          <h3>Github</h3>
          <a href="https://github.com/Moonlow31">Click to check my Github</a>
        </div>
      </section>
      <hr />
      <section className="linkedin">
        <img src={linkedin} alt="linkedin logo" />
        <div className="BlockLinkedin">
          <h3>Linkedin</h3>
          <a href="https://www.linkedin.com/in/franck-herpoux/">
            Click to check my Linkedin
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
