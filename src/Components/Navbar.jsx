import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1>Franck</h1>
      <nav className="navBar">
        <Link to="/">Home</Link>
        <Link to="/ProjectsPage">My Projects</Link>
        <Link to="/ContactPage">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;
