import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/Projects">My Projects</Link>
        <Link to="/About">About</Link>
      </nav>
    </header>
  );
}

export default Header;
