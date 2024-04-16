import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="links_container">
        <Link to="/popup" className="links">
          Popup
        </Link>
        <Link to="/dropdown" className="links">
          Dropdown
        </Link>
        <Link to="/checkbox-radiobutton" className="links">
          Checkbox & Radio Button
        </Link>
        <Link to="/scroll" className="links">
          Scroll
        </Link>
        <Link to="/mouse-hover" className="links">
          Mouse Hover
        </Link>
      </div>
    </div>
  );
};

export default Home;
