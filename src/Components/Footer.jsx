import location from "../assets/Images/logo_location.svg";
import phone from "../assets/Images/logo_tel.svg";
import email from "../assets/Images/logo_email.svg";
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
    </footer>
  );
}

export default Footer;
