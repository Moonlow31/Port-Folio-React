import { Outlet } from "react-router-dom";

import Navbar from "/src/Components/Navbar";
import Footer from "/src/Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
